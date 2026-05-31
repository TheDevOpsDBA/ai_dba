let editor;
let pyodide;

let currentModule = 0;
let currentSection = 0;

// Gemini API Configuration
// Key is injected at deploy time via GitHub Actions
const GEMINI_API_KEY_INJECTED = "__GEMINI_API_KEY__";
let GEMINI_API_KEY = GEMINI_API_KEY_INJECTED.startsWith("__") ? localStorage.getItem("gemini_api_key") || "" : GEMINI_API_KEY_INJECTED;

async function initializeApp() {

    const editorEl = document.getElementById("editor");
    if (!editorEl) return;

    editor = CodeMirror.fromTextArea(
        editorEl,
        {
            mode: "python",
            theme: "material-darker",
            lineNumbers: true
        }
    );

    pyodide = await loadPyodide();

    loadModules();
}

function loadModules() {

    const moduleSelect = document.getElementById("moduleSelect");
    moduleSelect.innerHTML = "";

    courseData.modules.forEach((module, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = module.title;
        moduleSelect.appendChild(option);
    });

    moduleSelect.value = currentModule;

    moduleSelect.onchange = function () {
        currentModule = parseInt(this.value);
        currentSection = 0;
        loadSections();
    };

    loadSections();
}

function loadSections() {

    const sectionSelect = document.getElementById("sectionSelect");
    sectionSelect.innerHTML = "";

    const sections = courseData.modules[currentModule].sections;

    sections.forEach((section, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = section.title;
        sectionSelect.appendChild(option);
    });

    sectionSelect.value = currentSection;

    sectionSelect.onchange = function () {
        currentSection = parseInt(this.value);
        renderSection();
    };

    renderSection();
}

function renderSection() {

    const section = courseData.modules[currentModule].sections[currentSection];

    document.getElementById("moduleSelect").value = currentModule;
    document.getElementById("sectionSelect").value = currentSection;

    let content = section.brief || section.description;
    content = content.replace(/<h4>.*?<\/h4>/, "");
    document.getElementById("description").innerHTML = content;

    document.getElementById("sectionHeading").textContent = section.title;

    initReveal();

    document.getElementById("syntax").textContent = section.syntax;

    updateDiagram(section);

    renderTabs(section, 0);

    if (section.examples.length > 0) {
        editor.setValue(section.examples[0].code);
    } else {
        editor.setValue("# No examples available");
    }
}

function renderTabs(section, activeIndex) {

    const tabs = document.getElementById("exampleTabs");
    tabs.innerHTML = "";

    function setActiveTab(btn) {
        tabs.querySelectorAll(".example-btn").forEach(b =>
            b.classList.remove("active-tab")
        );
        btn.classList.add("active-tab");
    }

    const scratchButton = document.createElement("button");
    scratchButton.innerText = "\u270F Scratch Pad";
    scratchButton.className = "example-btn";

    scratchButton.onclick = () => {
        setActiveTab(scratchButton);
        editor.setValue(
            localStorage.getItem(section.id) || "# Scratch Pad"
        );
    };

    tabs.appendChild(scratchButton);

    section.examples.forEach((example, index) => {
        const button = document.createElement("button");
        button.className = "example-btn";
        button.innerText = example.name;

        button.onclick = () => {
            setActiveTab(button);
            editor.setValue(example.code);
        };

        tabs.appendChild(button);

        if (index === activeIndex) {
            button.classList.add("active-tab");
        }
    });
}

function updateDiagram(section) {

    const container = document.querySelector(".diagram-box");

    if (section.diagram) {
        container.innerHTML = section.diagram;
        return;
    }

    const title = section.title;
    const id = section.id || "";

    const diagramType = sectionDiagramTypes[id] || "generic";

    const newBox = container.cloneNode(false);
    newBox.innerHTML = getDiagramSVG(diagramType, title);
    container.parentNode.replaceChild(newBox, container);
}

async function runCode() {

    const output = document.getElementById("output");
    output.textContent = "";

    try {
        pyodide.setStdout({
            batched: (message) => {
                output.textContent += message + "\n";
            }
        });

        // Auto-load packages based on imports in the code
        const code = editor.getValue();
        const imports = code.match(/^(?:import|from)\s+(\w+)/gm) || [];
        const pkgMap = {"pandas":"pandas","numpy":"numpy","matplotlib":"matplotlib","sklearn":"scikit-learn","scipy":"scipy"};
        const needed = [];
        for (const imp of imports) {
            const mod = imp.replace(/^(?:import|from)\s+/, "").split(".")[0];
            if (pkgMap[mod] && !pyodide.loadedPackages[pkgMap[mod]]) needed.push(pkgMap[mod]);
        }
        if (needed.length > 0) {
            output.textContent = "Loading packages: " + needed.join(", ") + "...\n";
            await pyodide.loadPackage(needed);
        }

        await pyodide.runPythonAsync(code);

    } catch (error) {
        output.textContent = error;
    }
}

async function runSelected() {

    const output = document.getElementById("output");
    const selected = editor.getSelection();

    if (!selected.trim()) {
        output.textContent = "\u26A0 No code selected. Highlight lines to run them.";
        return;
    }

    output.textContent = "";

    try {
        pyodide.setStdout({
            batched: (message) => {
                output.textContent += message + "\n";
            }
        });

        // Auto-load packages for selected code
        const selImports = selected.match(/^(?:import|from)\s+(\w+)/gm) || [];
        const selPkgMap = {"pandas":"pandas","numpy":"numpy","matplotlib":"matplotlib","sklearn":"scikit-learn","scipy":"scipy"};
        const selNeeded = [];
        for (const imp of selImports) {
            const mod = imp.replace(/^(?:import|from)\s+/, "").split(".")[0];
            if (selPkgMap[mod] && !pyodide.loadedPackages[selPkgMap[mod]]) selNeeded.push(selPkgMap[mod]);
        }
        if (selNeeded.length > 0) {
            output.textContent = "Loading packages: " + selNeeded.join(", ") + "...\n";
            await pyodide.loadPackage(selNeeded);
        }

        await pyodide.runPythonAsync(selected);

    } catch (error) {
        output.textContent = error;
    }
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}

let revealItems = [];
let revealIndex = 0;

function initReveal() {
    const desc = document.getElementById("description");
    revealItems = desc.querySelectorAll("li");
    revealIndex = 0;
    updateRevealCounter();
}

function revealNext() {
    if (revealIndex < revealItems.length) {
        revealItems[revealIndex].classList.add("revealed");
        revealIndex++;
        updateRevealCounter();
    }
}

function revealAll() {
    revealItems.forEach(item => item.classList.add("revealed"));
    revealIndex = revealItems.length;
    updateRevealCounter();
}

function updateRevealCounter() {
    const counter = document.getElementById("revealCount");
    if (counter) {
        if (revealItems.length === 0) {
            counter.textContent = "";
        } else {
            counter.textContent = revealIndex + " / " + revealItems.length;
        }
    }
}

function previousSection() {

    if (currentSection > 0) {
        currentSection--;
    } else if (currentModule > 0) {
        currentModule--;
        currentSection = courseData.modules[currentModule].sections.length - 1;
        loadSections();
        return;
    }

    renderSection();
}

function nextSection() {

    if (revealIndex < revealItems.length) {
        revealNext();
        return;
    }

    const totalSections = courseData.modules[currentModule].sections.length;

    if (currentSection < totalSections - 1) {
        currentSection++;
    } else if (currentModule < courseData.modules.length - 1) {
        currentModule++;
        currentSection = 0;
        loadSections();
        return;
    }

    renderSection();
}

function toggleDescription() {
    document.querySelector(".left-panel").classList.toggle("fullscreen");
}

window.onload = initializeApp;

// ===== AI Chat Functions =====

function toggleChat() {
    const body = document.getElementById("chatBody");
    body.classList.toggle("open");
    const btn = document.querySelector(".chat-toggle");
    btn.textContent = body.classList.contains("open") ? "\u25B2" : "\u25BC";
}

function addChatMessage(text, role) {
    const messages = document.getElementById("chatMessages");
    const msg = document.createElement("div");
    msg.className = "chat-msg " + role;
    msg.innerHTML = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
    return msg;
}

async function sendChat() {
    const input = document.getElementById("chatInput");
    const question = input.value.trim();
    if (!question) return;

    input.value = "";
    addChatMessage(question, "user");

    if (!GEMINI_API_KEY) {
        const key = prompt("Enter the AI API key (provided by your instructor):");
        if (key && key.trim()) {
            GEMINI_API_KEY = key.trim();
            localStorage.setItem("gemini_api_key", GEMINI_API_KEY);
        } else {
            addChatMessage("No API key provided. Ask your instructor for the key.", "bot");
            return;
        }
    }

    const loadingMsg = addChatMessage("Thinking...", "bot loading");

    const code = editor ? editor.getValue() : "";
    const section = courseData.modules[currentModule].sections[currentSection];
    const output = document.getElementById("output").textContent || "(no output yet)";
    const description = document.getElementById("description").innerText || "";

    const chatPrompt = "You are a helpful AI and Python tutor for SQL Server DBAs learning to apply AI/ML, LangChain, RAG, and LLMs to database administration tasks. You ONLY answer questions related to Python programming, SQL Server, AI/ML, the code shown below, or the course topic. If the question is unrelated, politely decline.\n\nSection: \"" + section.title + "\"\n\nDescription:\n" + description + "\n\nCode in editor:\n```python\n" + code + "\n```\n\nExecution output:\n```\n" + output + "\n```\n\nStudent asks: \"" + question + "\"\n\nGive a clear, helpful answer considering the code, its output, and the section context. Refer to specific lines if relevant. Keep the answer concise but complete (4-6 sentences).";

    try {
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + GEMINI_API_KEY;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: chatPrompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0]) {
            let answer = data.candidates[0].content.parts[0].text;
            loadingMsg.remove();
            answer = answer
                .replace(/\n\n/g, "<br><br>")
                .replace(/\n/g, "<br>")
                .replace(/`([^`]+)`/g, "<code>$1</code>")
                .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                .replace(/\*([^*]+)\*/g, "<em>$1</em>");
            addChatMessage(answer, "bot");
        } else {
            loadingMsg.remove();
            const errMsg = data.error ? data.error.message : "No response generated";
            addChatMessage("Error: " + errMsg, "bot");
        }
    } catch (error) {
        loadingMsg.remove();
        addChatMessage("Connection error: " + error.message, "bot");
    }
}

// Keyboard navigation
document.addEventListener("keydown", function(e) {
    if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;
    if (e.target.classList.contains("CodeMirror")) return;
    if (document.querySelector(".CodeMirror-focused")) return;

    if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSection();
    } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        previousSection();
    }
});





