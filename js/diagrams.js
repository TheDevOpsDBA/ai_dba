function getDiagramSVG(type, label) {
    const svgs = {
        "python-dba": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="30" width="120" height="50" rx="10" fill="#533483"/>
    <text x="80" y="60" fill="white" font-size="13" text-anchor="middle">Python</text>
    <rect x="160" y="30" width="120" height="50" rx="10" fill="#e94560"/>
    <text x="220" y="60" fill="white" font-size="13" text-anchor="middle">Libraries</text>
    <rect x="300" y="30" width="140" height="50" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="370" y="60" fill="white" font-size="13" text-anchor="middle">SQL Server</text>
    <rect x="460" y="30" width="120" height="50" rx="10" fill="#7fdbca"/>
    <text x="520" y="60" fill="#1a1a2e" font-size="13" text-anchor="middle">DBA Tasks</text>
    <line x1="140" y1="55" x2="160" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="280" y1="55" x2="300" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="440" y1="55" x2="460" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <text x="300" y="120" fill="white" font-size="14" text-anchor="middle">Automate, Monitor, Predict, Optimise</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "python-setup": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="160" height="55" rx="10" fill="#533483"/>
    <text x="110" y="48" fill="#7fdbca" font-size="11" text-anchor="middle">Install Python</text>
    <text x="110" y="67" fill="white" font-size="12" text-anchor="middle">python.org</text>
    <rect x="220" y="25" width="160" height="55" rx="10" fill="#e94560"/>
    <text x="300" y="48" fill="white" font-size="11" text-anchor="middle">Virtual Env</text>
    <text x="300" y="67" fill="white" font-size="12" text-anchor="middle">python -m venv</text>
    <rect x="410" y="25" width="160" height="55" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="490" y="48" fill="#7fdbca" font-size="11" text-anchor="middle">pip install</text>
    <text x="490" y="67" fill="white" font-size="12" text-anchor="middle">packages</text>
    <line x1="190" y1="52" x2="220" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="52" x2="410" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="105" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="130" fill="white" font-size="12" text-anchor="middle">pip install pyodbc sqlalchemy pandas scikit-learn</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "python-basics": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="25" width="110" height="50" rx="10" fill="#533483"/>
    <text x="75" y="55" fill="white" font-size="12" text-anchor="middle">Variables</text>
    <rect x="145" y="25" width="110" height="50" rx="10" fill="#e94560"/>
    <text x="200" y="55" fill="white" font-size="12" text-anchor="middle">Loops</text>
    <rect x="270" y="25" width="110" height="50" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="325" y="55" fill="white" font-size="12" text-anchor="middle">Functions</text>
    <rect x="395" y="25" width="110" height="50" rx="10" fill="#7fdbca"/>
    <text x="450" y="55" fill="#1a1a2e" font-size="12" text-anchor="middle">Classes</text>
    <rect x="100" y="100" width="400" height="45" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">DBA Context</text>
    <text x="300" y="136" fill="white" font-size="12" text-anchor="middle">server_name = "PROD-SQL-01"  |  for db in databases:</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "pyodbc-connect": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="30" width="130" height="50" rx="10" fill="#533483"/>
    <text x="85" y="60" fill="white" font-size="13" text-anchor="middle">Python App</text>
    <rect x="170" y="30" width="100" height="50" rx="10" fill="#e94560"/>
    <text x="220" y="60" fill="white" font-size="13" text-anchor="middle">pyodbc</text>
    <rect x="290" y="30" width="130" height="50" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="355" y="60" fill="white" font-size="13" text-anchor="middle">ODBC Driver</text>
    <rect x="440" y="30" width="140" height="50" rx="10" fill="#7fdbca"/>
    <text x="510" y="60" fill="#1a1a2e" font-size="13" text-anchor="middle">SQL Server</text>
    <line x1="150" y1="55" x2="170" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="270" y1="55" x2="290" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="420" y1="55" x2="440" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="110" width="440" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="132" fill="#7fdbca" font-size="11" text-anchor="middle">DRIVER={ODBC Driver 17} | SERVER=host | DATABASE=db | Auth</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "sqlalchemy-orm": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="20" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="40" fill="#7fdbca" font-size="11" text-anchor="middle">Application Code</text>
    <text x="110" y="57" fill="white" font-size="12" text-anchor="middle">Python Objects</text>
    <rect x="220" y="20" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="40" fill="white" font-size="11" text-anchor="middle">SQLAlchemy ORM</text>
    <text x="300" y="57" fill="white" font-size="12" text-anchor="middle">Engine + Session</text>
    <rect x="410" y="20" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="40" fill="#1a1a2e" font-size="11" text-anchor="middle">SQL Server</text>
    <text x="490" y="57" fill="#1a1a2e" font-size="12" text-anchor="middle">Tables + Views</text>
    <line x1="190" y1="45" x2="220" y2="45" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="45" x2="410" y2="45" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="90" width="440" height="55" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="110" fill="#7fdbca" font-size="11" text-anchor="middle">Benefits</text>
    <text x="300" y="128" fill="white" font-size="11" text-anchor="middle">Pythonic queries | Connection pooling | Multiple DB support</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "query-execute": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="130" height="45" rx="8" fill="#533483"/>
    <text x="95" y="57" fill="white" font-size="12" text-anchor="middle">cursor.execute()</text>
    <rect x="180" y="30" width="130" height="45" rx="8" fill="#e94560"/>
    <text x="245" y="57" fill="white" font-size="12" text-anchor="middle">fetchall()</text>
    <rect x="330" y="30" width="130" height="45" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="395" y="57" fill="white" font-size="12" text-anchor="middle">fetchone()</text>
    <rect x="480" y="30" width="100" height="45" rx="8" fill="#7fdbca"/>
    <text x="530" y="57" fill="#1a1a2e" font-size="12" text-anchor="middle">commit()</text>
    <rect x="80" y="100" width="440" height="45" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Pattern: Connect > Execute > Fetch > Process > Close</text>
    <text x="300" y="136" fill="white" font-size="11" text-anchor="middle">Always use parameterised queries to prevent SQL injection</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "dataframes": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="20" width="540" height="30" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="80" y="40" fill="#7fdbca" font-size="11">database</text>
    <text x="200" y="40" fill="#7fdbca" font-size="11">size_mb</text>
    <text x="320" y="40" fill="#7fdbca" font-size="11">status</text>
    <text x="450" y="40" fill="#7fdbca" font-size="11">last_backup</text>
    <rect x="30" y="55" width="540" height="25" rx="4" fill="#533483"/>
    <text x="80" y="72" fill="white" font-size="11">AdventureWorks</text>
    <text x="200" y="72" fill="white" font-size="11">4096</text>
    <text x="320" y="72" fill="white" font-size="11">ONLINE</text>
    <text x="450" y="72" fill="white" font-size="11">2024-01-15</text>
    <rect x="30" y="85" width="540" height="25" rx="4" fill="#16213e"/>
    <text x="80" y="102" fill="white" font-size="11">TempDB</text>
    <text x="200" y="102" fill="white" font-size="11">8192</text>
    <text x="320" y="102" fill="white" font-size="11">ONLINE</text>
    <text x="450" y="102" fill="white" font-size="11">N/A</text>
    <rect x="30" y="115" width="540" height="25" rx="4" fill="#533483"/>
    <text x="80" y="132" fill="white" font-size="11">ReportDB</text>
    <text x="200" y="132" fill="white" font-size="11">2048</text>
    <text x="320" y="132" fill="#e94560" font-size="11">SUSPECT</text>
    <text x="450" y="132" fill="white" font-size="11">2024-01-10</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "query-perf": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">DMV Data</text>
    <text x="110" y="62" fill="white" font-size="11" text-anchor="middle">query_stats</text>
    <rect x="220" y="25" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="45" fill="white" font-size="11" text-anchor="middle">Pandas Analysis</text>
    <text x="300" y="62" fill="white" font-size="11" text-anchor="middle">groupby, agg</text>
    <rect x="410" y="25" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Insights</text>
    <text x="490" y="62" fill="#1a1a2e" font-size="11" text-anchor="middle">Top N queries</text>
    <line x1="190" y1="50" x2="220" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="50" x2="410" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="100" width="440" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="125" fill="white" font-size="12" text-anchor="middle">df.sort_values('avg_elapsed_time', ascending=False).head(10)</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "matplotlib-viz": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="80" height="100" rx="4" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <rect x="40" y="100" width="15" height="25" fill="#533483"/>
    <rect x="60" y="70" width="15" height="55" fill="#e94560"/>
    <rect x="80" y="85" width="15" height="40" fill="#7fdbca"/>
    <rect x="140" y="30" width="80" height="100" rx="4" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <line x1="150" y1="110" x2="165" y2="80" stroke="#e94560" stroke-width="2"/>
    <line x1="165" y1="80" x2="180" y2="90" stroke="#e94560" stroke-width="2"/>
    <line x1="180" y1="90" x2="195" y2="50" stroke="#e94560" stroke-width="2"/>
    <line x1="195" y1="50" x2="210" y2="60" stroke="#e94560" stroke-width="2"/>
    <rect x="250" y="30" width="320" height="100" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="410" y="55" fill="#7fdbca" font-size="12" text-anchor="middle">Matplotlib + Pandas Plotting</text>
    <text x="410" y="75" fill="white" font-size="11" text-anchor="middle">Bar charts: Wait stats comparison</text>
    <text x="410" y="92" fill="white" font-size="11" text-anchor="middle">Line plots: CPU over time</text>
    <text x="410" y="109" fill="white" font-size="11" text-anchor="middle">Heatmaps: Query patterns by hour</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "ai-ml-concepts": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="150" y="10" width="300" height="40" rx="10" fill="#533483"/>
    <text x="300" y="35" fill="white" font-size="14" text-anchor="middle">Artificial Intelligence</text>
    <rect x="180" y="60" width="240" height="35" rx="8" fill="#e94560"/>
    <text x="300" y="82" fill="white" font-size="13" text-anchor="middle">Machine Learning</text>
    <rect x="210" y="105" width="180" height="35" rx="8" fill="#7fdbca"/>
    <text x="300" y="127" fill="#1a1a2e" font-size="13" text-anchor="middle">Deep Learning</text>
    <text x="80" y="35" fill="#7fdbca" font-size="11" text-anchor="middle">Rules-based</text>
    <text x="520" y="82" fill="#e94560" font-size="11" text-anchor="middle">Data-driven</text>
    <text x="80" y="127" fill="#7fdbca" font-size="11" text-anchor="middle">Neural Nets</text>
    <text x="300" y="165" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "supervised-unsupervised": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="20" width="250" height="70" rx="10" fill="#533483"/>
    <text x="155" y="42" fill="#7fdbca" font-size="12" text-anchor="middle">Supervised Learning</text>
    <text x="155" y="60" fill="white" font-size="11" text-anchor="middle">Labelled data: Input -> Output</text>
    <text x="155" y="78" fill="white" font-size="10" text-anchor="middle">Classification | Regression</text>
    <rect x="320" y="20" width="250" height="70" rx="10" fill="#e94560"/>
    <text x="445" y="42" fill="white" font-size="12" text-anchor="middle">Unsupervised Learning</text>
    <text x="445" y="60" fill="white" font-size="11" text-anchor="middle">No labels: Find patterns</text>
    <text x="445" y="78" fill="white" font-size="10" text-anchor="middle">Clustering | Anomaly Detection</text>
    <rect x="80" y="110" width="200" height="35" rx="6" fill="#16213e" stroke="#7fdbca" stroke-width="1"/>
    <text x="180" y="132" fill="white" font-size="11" text-anchor="middle">Predict: Will query timeout?</text>
    <rect x="320" y="110" width="200" height="35" rx="6" fill="#16213e" stroke="#e94560" stroke-width="1"/>
    <text x="420" y="132" fill="white" font-size="11" text-anchor="middle">Detect: Unusual wait patterns</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "first-ml-model": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="30" width="100" height="45" rx="8" fill="#533483"/>
    <text x="70" y="57" fill="white" font-size="11" text-anchor="middle">Load Data</text>
    <rect x="135" y="30" width="100" height="45" rx="8" fill="#e94560"/>
    <text x="185" y="57" fill="white" font-size="11" text-anchor="middle">Split</text>
    <rect x="250" y="30" width="100" height="45" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="300" y="57" fill="white" font-size="11" text-anchor="middle">Train</text>
    <rect x="365" y="30" width="100" height="45" rx="8" fill="#7fdbca"/>
    <text x="415" y="57" fill="#1a1a2e" font-size="11" text-anchor="middle">Predict</text>
    <rect x="480" y="30" width="100" height="45" rx="8" fill="#533483"/>
    <text x="530" y="57" fill="white" font-size="11" text-anchor="middle">Evaluate</text>
    <line x1="120" y1="52" x2="135" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="235" y1="52" x2="250" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="350" y1="52" x2="365" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="465" y1="52" x2="480" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="100" width="440" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">scikit-learn Pipeline</text>
    <text x="300" y="135" fill="white" font-size="11" text-anchor="middle">from sklearn.ensemble import RandomForestClassifier</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "predict-growth": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">Historical Data</text>
    <text x="110" y="67" fill="white" font-size="11" text-anchor="middle">DB size over time</text>
    <rect x="220" y="30" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="50" fill="white" font-size="11" text-anchor="middle">Linear Regression</text>
    <text x="300" y="67" fill="white" font-size="11" text-anchor="middle">Trend analysis</text>
    <rect x="410" y="30" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="50" fill="#1a1a2e" font-size="11" text-anchor="middle">Prediction</text>
    <text x="490" y="67" fill="#1a1a2e" font-size="11" text-anchor="middle">Disk full in 45 days</text>
    <line x1="190" y1="55" x2="220" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="55" x2="410" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="105" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="127" fill="white" font-size="11" text-anchor="middle">Proactive capacity planning before issues occur</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "anomaly-detection": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="540" height="90" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <line x1="50" y1="90" x2="100" y2="85" stroke="#7fdbca" stroke-width="2"/>
    <line x1="100" y1="85" x2="150" y2="88" stroke="#7fdbca" stroke-width="2"/>
    <line x1="150" y1="88" x2="200" y2="82" stroke="#7fdbca" stroke-width="2"/>
    <line x1="200" y1="82" x2="250" y2="87" stroke="#7fdbca" stroke-width="2"/>
    <line x1="250" y1="87" x2="300" y2="45" stroke="#e94560" stroke-width="3"/>
    <line x1="300" y1="45" x2="350" y2="85" stroke="#7fdbca" stroke-width="2"/>
    <line x1="350" y1="85" x2="400" y2="88" stroke="#7fdbca" stroke-width="2"/>
    <line x1="400" y1="88" x2="450" y2="83" stroke="#7fdbca" stroke-width="2"/>
    <line x1="450" y1="83" x2="500" y2="86" stroke="#7fdbca" stroke-width="2"/>
    <line x1="500" y1="86" x2="550" y2="84" stroke="#7fdbca" stroke-width="2"/>
    <circle cx="300" cy="45" r="8" fill="#e94560" stroke="white" stroke-width="2"/>
    <text x="320" y="42" fill="#e94560" font-size="11">ANOMALY</text>
    <text x="300" y="140" fill="white" font-size="12" text-anchor="middle">Isolation Forest | Z-Score | DBSCAN for DBA metrics</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "forecast-resources": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Time Series Data</text>
    <text x="110" y="62" fill="white" font-size="11" text-anchor="middle">CPU, Memory, IO</text>
    <rect x="220" y="25" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="45" fill="white" font-size="11" text-anchor="middle">Prophet / ARIMA</text>
    <text x="300" y="62" fill="white" font-size="11" text-anchor="middle">Forecasting model</text>
    <rect x="410" y="25" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">7-day Forecast</text>
    <text x="490" y="62" fill="#1a1a2e" font-size="11" text-anchor="middle">Peak predictions</text>
    <line x1="190" y1="50" x2="220" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="50" x2="410" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Seasonal patterns + trend decomposition</text>
    <text x="300" y="135" fill="white" font-size="11" text-anchor="middle">Schedule maintenance during predicted low-usage windows</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "query-classification": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Query Features</text>
    <text x="95" y="62" fill="white" font-size="10" text-anchor="middle">reads, writes, duration</text>
    <rect x="190" y="25" width="130" height="50" rx="10" fill="#e94560"/>
    <text x="255" y="55" fill="white" font-size="11" text-anchor="middle">ML Classifier</text>
    <rect x="350" y="10" width="110" height="30" rx="6" fill="#7fdbca"/>
    <text x="405" y="30" fill="#1a1a2e" font-size="11" text-anchor="middle">Fast</text>
    <rect x="350" y="50" width="110" height="30" rx="6" fill="#e94560"/>
    <text x="405" y="70" fill="white" font-size="11" text-anchor="middle">Slow</text>
    <rect x="350" y="90" width="110" height="30" rx="6" fill="#533483"/>
    <text x="405" y="110" fill="white" font-size="11" text-anchor="middle">Critical</text>
    <line x1="160" y1="50" x2="190" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="320" y1="40" x2="350" y2="25" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="320" y1="50" x2="350" y2="65" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="320" y1="60" x2="350" y2="105" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="100" y="130" width="400" height="25" rx="5" fill="#16213e"/>
    <text x="300" y="147" fill="white" font-size="11" text-anchor="middle">Auto-classify queries for priority-based tuning</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "index-recommendation": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Query Patterns</text>
    <text x="95" y="62" fill="white" font-size="10" text-anchor="middle">WHERE, JOIN, ORDER</text>
    <rect x="190" y="25" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="270" y="45" fill="white" font-size="11" text-anchor="middle">ML Analysis</text>
    <text x="270" y="62" fill="white" font-size="10" text-anchor="middle">Feature importance</text>
    <rect x="380" y="25" width="190" height="50" rx="10" fill="#7fdbca"/>
    <text x="475" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Index Suggestions</text>
    <text x="475" y="62" fill="#1a1a2e" font-size="10" text-anchor="middle">CREATE INDEX recommendations</text>
    <line x1="160" y1="50" x2="190" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="350" y1="50" x2="380" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="125" fill="white" font-size="11" text-anchor="middle">Analyse missing index DMVs + workload patterns with ML</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "workload-patterns": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="540" height="100" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="55" y="45" fill="#7fdbca" font-size="10">Mon</text>
    <text x="105" y="45" fill="#7fdbca" font-size="10">Tue</text>
    <text x="155" y="45" fill="#7fdbca" font-size="10">Wed</text>
    <text x="205" y="45" fill="#7fdbca" font-size="10">Thu</text>
    <text x="255" y="45" fill="#7fdbca" font-size="10">Fri</text>
    <text x="305" y="45" fill="#7fdbca" font-size="10">Sat</text>
    <text x="355" y="45" fill="#7fdbca" font-size="10">Sun</text>
    <rect x="45" y="55" width="40" height="60" rx="3" fill="#e94560" opacity="0.8"/>
    <rect x="95" y="65" width="40" height="50" rx="3" fill="#e94560" opacity="0.6"/>
    <rect x="145" y="55" width="40" height="60" rx="3" fill="#e94560" opacity="0.9"/>
    <rect x="195" y="70" width="40" height="45" rx="3" fill="#533483" opacity="0.7"/>
    <rect x="245" y="60" width="40" height="55" rx="3" fill="#e94560" opacity="0.7"/>
    <rect x="295" y="90" width="40" height="25" rx="3" fill="#7fdbca" opacity="0.5"/>
    <rect x="345" y="95" width="40" height="20" rx="3" fill="#7fdbca" opacity="0.4"/>
    <rect x="420" y="50" width="140" height="65" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="490" y="70" fill="#7fdbca" font-size="10" text-anchor="middle">K-Means Clustering</text>
    <text x="490" y="87" fill="white" font-size="10" text-anchor="middle">Peak: Mon,Wed,Fri</text>
    <text x="490" y="104" fill="white" font-size="10" text-anchor="middle">Low: Sat,Sun</text>
    <text x="300" y="148" fill="white" font-size="11" text-anchor="middle">Cluster workloads to optimise maintenance windows</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "intelligent-alerts": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Metrics Stream</text>
    <text x="95" y="62" fill="white" font-size="10" text-anchor="middle">CPU, Waits, IO</text>
    <rect x="190" y="25" width="150" height="50" rx="10" fill="#e94560"/>
    <text x="265" y="45" fill="white" font-size="11" text-anchor="middle">ML Threshold</text>
    <text x="265" y="62" fill="white" font-size="10" text-anchor="middle">Dynamic baselines</text>
    <rect x="370" y="15" width="100" height="30" rx="6" fill="#7fdbca"/>
    <text x="420" y="35" fill="#1a1a2e" font-size="10" text-anchor="middle">True Alert</text>
    <rect x="370" y="55" width="100" height="30" rx="6" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="420" y="75" fill="white" font-size="10" text-anchor="middle">Suppressed</text>
    <line x1="160" y1="50" x2="190" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="340" y1="40" x2="370" y2="30" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="340" y1="60" x2="370" y2="70" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="80" y="110" width="440" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="132" fill="white" font-size="11" text-anchor="middle">Reduce alert fatigue with ML-based dynamic thresholds</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "log-analysis": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">SQL Error Logs</text>
    <text x="95" y="62" fill="white" font-size="10" text-anchor="middle">Text data</text>
    <rect x="190" y="25" width="150" height="50" rx="10" fill="#e94560"/>
    <text x="265" y="45" fill="white" font-size="11" text-anchor="middle">NLP Processing</text>
    <text x="265" y="62" fill="white" font-size="10" text-anchor="middle">TF-IDF, embeddings</text>
    <rect x="370" y="25" width="200" height="50" rx="10" fill="#7fdbca"/>
    <text x="470" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Categorised Issues</text>
    <text x="470" y="62" fill="#1a1a2e" font-size="10" text-anchor="middle">Deadlock | Timeout | Auth</text>
    <line x1="160" y1="50" x2="190" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="340" y1="50" x2="370" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="125" fill="white" font-size="11" text-anchor="middle">Auto-categorise and prioritise log entries with NLP</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "root-cause": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="220" y="10" width="160" height="35" rx="8" fill="#e94560"/>
    <text x="300" y="32" fill="white" font-size="12" text-anchor="middle">Performance Issue</text>
    <line x1="250" y1="45" x2="100" y2="70" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="300" y1="45" x2="300" y2="70" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="350" y1="45" x2="500" y2="70" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="30" y="70" width="130" height="35" rx="6" fill="#533483"/>
    <text x="95" y="92" fill="white" font-size="10" text-anchor="middle">Blocking?</text>
    <rect x="230" y="70" width="130" height="35" rx="6" fill="#533483"/>
    <text x="295" y="92" fill="white" font-size="10" text-anchor="middle">Resource pressure?</text>
    <rect x="430" y="70" width="130" height="35" rx="6" fill="#533483"/>
    <text x="495" y="92" fill="white" font-size="10" text-anchor="middle">Bad plan?</text>
    <rect x="150" y="120" width="300" height="35" rx="8" fill="#7fdbca"/>
    <text x="300" y="142" fill="#1a1a2e" font-size="12" text-anchor="middle">Decision Tree: Automated RCA</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "llm-intro": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">Training Data</text>
    <text x="110" y="67" fill="white" font-size="11" text-anchor="middle">Billions of tokens</text>
    <rect x="220" y="30" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="50" fill="white" font-size="11" text-anchor="middle">Transformer</text>
    <text x="300" y="67" fill="white" font-size="11" text-anchor="middle">Attention mechanism</text>
    <rect x="410" y="30" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="50" fill="#1a1a2e" font-size="11" text-anchor="middle">LLM Output</text>
    <text x="490" y="67" fill="#1a1a2e" font-size="11" text-anchor="middle">Text generation</text>
    <line x1="190" y1="55" x2="220" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="55" x2="410" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="105" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="127" fill="white" font-size="11" text-anchor="middle">GPT-4 | Gemini | Claude | LLaMA — Foundation Models</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "prompt-engineering": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="20" width="160" height="55" rx="10" fill="#533483"/>
    <text x="110" y="42" fill="#7fdbca" font-size="11" text-anchor="middle">System Prompt</text>
    <text x="110" y="60" fill="white" font-size="10" text-anchor="middle">You are a SQL DBA...</text>
    <rect x="220" y="20" width="160" height="55" rx="10" fill="#e94560"/>
    <text x="300" y="42" fill="white" font-size="11" text-anchor="middle">User Prompt</text>
    <text x="300" y="60" fill="white" font-size="10" text-anchor="middle">Optimise this query...</text>
    <rect x="410" y="20" width="160" height="55" rx="10" fill="#7fdbca"/>
    <text x="490" y="42" fill="#1a1a2e" font-size="11" text-anchor="middle">AI Response</text>
    <text x="490" y="60" fill="#1a1a2e" font-size="10" text-anchor="middle">Add index on...</text>
    <line x1="190" y1="47" x2="220" y2="47" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="47" x2="410" y2="47" stroke="#7fdbca" stroke-width="2"/>
    <rect x="50" y="95" width="500" height="50" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="113" fill="#7fdbca" font-size="11" text-anchor="middle">Prompt Techniques</text>
    <text x="300" y="132" fill="white" font-size="11" text-anchor="middle">Zero-shot | Few-shot | Chain-of-thought | Role-based</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "llm-apis": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">Python Client</text>
    <text x="95" y="67" fill="white" font-size="10" text-anchor="middle">requests / SDK</text>
    <rect x="190" y="30" width="130" height="50" rx="10" fill="#e94560"/>
    <text x="255" y="50" fill="white" font-size="11" text-anchor="middle">REST API</text>
    <text x="255" y="67" fill="white" font-size="10" text-anchor="middle">JSON payload</text>
    <rect x="350" y="15" width="110" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="405" y="37" fill="white" font-size="10" text-anchor="middle">OpenAI</text>
    <rect x="350" y="55" width="110" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="405" y="77" fill="white" font-size="10" text-anchor="middle">Gemini</text>
    <rect x="480" y="15" width="100" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="530" y="37" fill="white" font-size="10" text-anchor="middle">Azure OpenAI</text>
    <rect x="480" y="55" width="100" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="530" y="77" fill="white" font-size="10" text-anchor="middle">Local LLMs</text>
    <line x1="160" y1="55" x2="190" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="320" y1="55" x2="350" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="100" y="110" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="132" fill="white" font-size="11" text-anchor="middle">API Key + Prompt + Parameters = AI-powered DBA tools</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "langchain-intro": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">LangChain</text>
    <text x="95" y="67" fill="white" font-size="10" text-anchor="middle">Framework</text>
    <rect x="190" y="15" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="250" y="37" fill="white" font-size="10" text-anchor="middle">Prompts</text>
    <rect x="190" y="55" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="250" y="77" fill="white" font-size="10" text-anchor="middle">Chains</text>
    <rect x="190" y="95" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="250" y="117" fill="white" font-size="10" text-anchor="middle">Memory</text>
    <rect x="350" y="15" width="120" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="410" y="37" fill="white" font-size="10" text-anchor="middle">Tools</text>
    <rect x="350" y="55" width="120" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="410" y="77" fill="white" font-size="10" text-anchor="middle">Agents</text>
    <rect x="350" y="95" width="120" height="35" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="410" y="117" fill="white" font-size="10" text-anchor="middle">Retrievers</text>
    <rect x="510" y="40" width="70" height="50" rx="8" fill="#7fdbca"/>
    <text x="545" y="60" fill="#1a1a2e" font-size="10" text-anchor="middle">LLM</text>
    <text x="545" y="75" fill="#1a1a2e" font-size="9" text-anchor="middle">Backend</text>
    <text x="300" y="155" fill="white" font-size="11" text-anchor="middle">Orchestrate LLM calls with structured components</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "chains-prompts": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="30" width="120" height="45" rx="8" fill="#533483"/>
    <text x="80" y="57" fill="white" font-size="11" text-anchor="middle">PromptTemplate</text>
    <rect x="160" y="30" width="100" height="45" rx="8" fill="#e94560"/>
    <text x="210" y="57" fill="white" font-size="11" text-anchor="middle">LLM Call</text>
    <rect x="280" y="30" width="120" height="45" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="340" y="57" fill="white" font-size="11" text-anchor="middle">OutputParser</text>
    <rect x="420" y="30" width="160" height="45" rx="8" fill="#7fdbca"/>
    <text x="500" y="57" fill="#1a1a2e" font-size="11" text-anchor="middle">Structured Result</text>
    <line x1="140" y1="52" x2="160" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="260" y1="52" x2="280" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="400" y1="52" x2="420" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="100" width="440" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Chain = Prompt + Model + Parser</text>
    <text x="300" y="135" fill="white" font-size="11" text-anchor="middle">chain.invoke({"query": "SELECT * FROM sys.databases"})</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "sql-assistant": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">DBA Question</text>
    <text x="95" y="67" fill="white" font-size="10" text-anchor="middle">Natural language</text>
    <rect x="190" y="30" width="150" height="50" rx="10" fill="#e94560"/>
    <text x="265" y="50" fill="white" font-size="11" text-anchor="middle">LangChain SQL</text>
    <text x="265" y="67" fill="white" font-size="10" text-anchor="middle">create_sql_agent</text>
    <rect x="370" y="30" width="100" height="50" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="420" y="60" fill="white" font-size="11" text-anchor="middle">SQL Server</text>
    <rect x="490" y="30" width="90" height="50" rx="10" fill="#7fdbca"/>
    <text x="535" y="60" fill="#1a1a2e" font-size="11" text-anchor="middle">Answer</text>
    <line x1="160" y1="55" x2="190" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="340" y1="55" x2="370" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="470" y1="55" x2="490" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="105" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="127" fill="white" font-size="11" text-anchor="middle">"Show top 5 largest databases" -> SELECT TOP 5...</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "rag-architecture": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="30" width="110" height="45" rx="8" fill="#533483"/>
    <text x="75" y="57" fill="white" font-size="11" text-anchor="middle">User Query</text>
    <rect x="150" y="30" width="110" height="45" rx="8" fill="#e94560"/>
    <text x="205" y="57" fill="white" font-size="11" text-anchor="middle">Embed</text>
    <rect x="280" y="30" width="120" height="45" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="340" y="57" fill="white" font-size="11" text-anchor="middle">Vector Search</text>
    <rect x="420" y="30" width="80" height="45" rx="8" fill="#533483"/>
    <text x="460" y="57" fill="white" font-size="11" text-anchor="middle">Context</text>
    <rect x="520" y="30" width="60" height="45" rx="8" fill="#7fdbca"/>
    <text x="550" y="57" fill="#1a1a2e" font-size="11" text-anchor="middle">LLM</text>
    <line x1="130" y1="52" x2="150" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="260" y1="52" x2="280" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="400" y1="52" x2="420" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="500" y1="52" x2="520" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="45" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Retrieval Augmented Generation</text>
    <text x="300" y="136" fill="white" font-size="11" text-anchor="middle">Ground LLM responses with your DBA documentation</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "vector-db": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="150" height="50" rx="10" fill="#533483"/>
    <text x="105" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Documents</text>
    <text x="105" y="62" fill="white" font-size="10" text-anchor="middle">DBA runbooks, docs</text>
    <rect x="210" y="25" width="150" height="50" rx="10" fill="#e94560"/>
    <text x="285" y="45" fill="white" font-size="11" text-anchor="middle">Embeddings</text>
    <text x="285" y="62" fill="white" font-size="10" text-anchor="middle">text -> vectors</text>
    <rect x="390" y="25" width="180" height="50" rx="10" fill="#7fdbca"/>
    <text x="480" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Vector Database</text>
    <text x="480" y="62" fill="#1a1a2e" font-size="10" text-anchor="middle">ChromaDB / Pinecone</text>
    <line x1="180" y1="50" x2="210" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="360" y1="50" x2="390" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Semantic similarity search</text>
    <text x="300" y="135" fill="white" font-size="11" text-anchor="middle">Find relevant docs by meaning, not just keywords</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "dba-knowledge-base": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="20" width="100" height="35" rx="6" fill="#533483"/>
    <text x="70" y="42" fill="white" font-size="10" text-anchor="middle">Runbooks</text>
    <rect x="20" y="60" width="100" height="35" rx="6" fill="#533483"/>
    <text x="70" y="82" fill="white" font-size="10" text-anchor="middle">Best Practices</text>
    <rect x="20" y="100" width="100" height="35" rx="6" fill="#533483"/>
    <text x="70" y="122" fill="white" font-size="10" text-anchor="middle">Error Solutions</text>
    <rect x="150" y="45" width="130" height="50" rx="8" fill="#e94560"/>
    <text x="215" y="65" fill="white" font-size="11" text-anchor="middle">Chunk + Embed</text>
    <text x="215" y="80" fill="white" font-size="10" text-anchor="middle">Split into pieces</text>
    <rect x="310" y="45" width="130" height="50" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="375" y="75" fill="white" font-size="11" text-anchor="middle">Vector Store</text>
    <rect x="470" y="45" width="110" height="50" rx="8" fill="#7fdbca"/>
    <text x="525" y="65" fill="#1a1a2e" font-size="11" text-anchor="middle">RAG Chain</text>
    <text x="525" y="80" fill="#1a1a2e" font-size="10" text-anchor="middle">Q&A Bot</text>
    <line x1="120" y1="70" x2="150" y2="70" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="280" y1="70" x2="310" y2="70" stroke="#7fdbca" stroke-width="2"/>
    <line x1="440" y1="70" x2="470" y2="70" stroke="#7fdbca" stroke-width="2"/>
    <text x="300" y="130" fill="white" font-size="11" text-anchor="middle">Ask: "How to fix error 9002?" -> Retrieves relevant runbook</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "langgraph-intro": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="120" height="45" rx="8" fill="#533483"/>
    <text x="90" y="57" fill="white" font-size="11" text-anchor="middle">LangGraph</text>
    <rect x="180" y="15" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="240" y="37" fill="white" font-size="10" text-anchor="middle">Nodes (Steps)</text>
    <rect x="180" y="55" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="240" y="77" fill="white" font-size="10" text-anchor="middle">Edges (Flow)</text>
    <rect x="180" y="95" width="120" height="35" rx="6" fill="#e94560"/>
    <text x="240" y="117" fill="white" font-size="10" text-anchor="middle">State (Memory)</text>
    <rect x="340" y="40" width="230" height="60" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="455" y="62" fill="#7fdbca" font-size="11" text-anchor="middle">Stateful Agent Graphs</text>
    <text x="455" y="82" fill="white" font-size="10" text-anchor="middle">Conditional routing + cycles</text>
    <line x1="150" y1="52" x2="180" y2="52" stroke="#7fdbca" stroke-width="2"/>
    <line x1="300" y1="52" x2="340" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="300" y="155" fill="white" font-size="11" text-anchor="middle">Build complex multi-step AI agents with graph-based control flow</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "stateful-agents": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <circle cx="80" cy="60" r="30" fill="#533483" stroke="#7fdbca" stroke-width="2"/>
    <text x="80" y="65" fill="white" font-size="10" text-anchor="middle">Analyse</text>
    <circle cx="220" cy="60" r="30" fill="#e94560" stroke="#7fdbca" stroke-width="2"/>
    <text x="220" y="65" fill="white" font-size="10" text-anchor="middle">Decide</text>
    <circle cx="360" cy="60" r="30" fill="#0f3460" stroke="#7fdbca" stroke-width="2"/>
    <text x="360" y="65" fill="white" font-size="10" text-anchor="middle">Act</text>
    <circle cx="500" cy="60" r="30" fill="#7fdbca" stroke="#533483" stroke-width="2"/>
    <text x="500" y="65" fill="#1a1a2e" font-size="10" text-anchor="middle">Report</text>
    <line x1="110" y1="60" x2="190" y2="60" stroke="#7fdbca" stroke-width="2"/>
    <line x1="250" y1="60" x2="330" y2="60" stroke="#7fdbca" stroke-width="2"/>
    <line x1="390" y1="60" x2="470" y2="60" stroke="#7fdbca" stroke-width="2"/>
    <path d="M360,90 C360,130 80,130 80,90" fill="none" stroke="#e94560" stroke-width="1.5" stroke-dasharray="4"/>
    <text x="220" y="125" fill="#e94560" font-size="10" text-anchor="middle">Loop if needed</text>
    <rect x="100" y="140" width="400" height="25" rx="5" fill="#16213e"/>
    <text x="300" y="157" fill="white" font-size="11" text-anchor="middle">State persists across steps: context, findings, actions taken</text>
    <text x="300" y="178" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "dba-agent": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="200" y="10" width="200" height="35" rx="8" fill="#e94560"/>
    <text x="300" y="32" fill="white" font-size="12" text-anchor="middle">DBA Troubleshooting Agent</text>
    <rect x="30" y="65" width="110" height="40" rx="6" fill="#533483"/>
    <text x="85" y="89" fill="white" font-size="10" text-anchor="middle">Check Waits</text>
    <rect x="160" y="65" width="110" height="40" rx="6" fill="#533483"/>
    <text x="215" y="89" fill="white" font-size="10" text-anchor="middle">Check Blocking</text>
    <rect x="290" y="65" width="110" height="40" rx="6" fill="#533483"/>
    <text x="345" y="89" fill="white" font-size="10" text-anchor="middle">Check IO</text>
    <rect x="420" y="65" width="140" height="40" rx="6" fill="#533483"/>
    <text x="490" y="89" fill="white" font-size="10" text-anchor="middle">Recommend Fix</text>
    <line x1="250" y1="45" x2="85" y2="65" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="280" y1="45" x2="215" y2="65" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="320" y1="45" x2="345" y2="65" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="350" y1="45" x2="490" y2="65" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="100" y="125" width="400" height="30" rx="6" fill="#7fdbca"/>
    <text x="300" y="145" fill="#1a1a2e" font-size="11" text-anchor="middle">Autonomous: Diagnose -> Analyse -> Recommend -> Execute</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "nl-to-sql": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="35" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="55" fill="#7fdbca" font-size="11" text-anchor="middle">Natural Language</text>
    <text x="110" y="72" fill="white" font-size="10" text-anchor="middle">"Show slow queries"</text>
    <rect x="220" y="35" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="55" fill="white" font-size="11" text-anchor="middle">LLM + Schema</text>
    <text x="300" y="72" fill="white" font-size="10" text-anchor="middle">Text-to-SQL</text>
    <rect x="410" y="35" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="55" fill="#1a1a2e" font-size="11" text-anchor="middle">T-SQL Output</text>
    <text x="490" y="72" fill="#1a1a2e" font-size="10" text-anchor="middle">SELECT TOP 10...</text>
    <line x1="190" y1="60" x2="220" y2="60" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="60" x2="410" y2="60" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="110" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="132" fill="white" font-size="11" text-anchor="middle">Schema-aware SQL generation with validation</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "incident-response": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="100" height="40" rx="8" fill="#e94560"/>
    <text x="80" y="55" fill="white" font-size="10" text-anchor="middle">Alert Fired</text>
    <rect x="150" y="30" width="100" height="40" rx="8" fill="#533483"/>
    <text x="200" y="55" fill="white" font-size="10" text-anchor="middle">Classify</text>
    <rect x="270" y="30" width="100" height="40" rx="8" fill="#533483"/>
    <text x="320" y="55" fill="white" font-size="10" text-anchor="middle">Diagnose</text>
    <rect x="390" y="30" width="100" height="40" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="440" y="55" fill="white" font-size="10" text-anchor="middle">Remediate</text>
    <rect x="510" y="30" width="70" height="40" rx="8" fill="#7fdbca"/>
    <text x="545" y="55" fill="#1a1a2e" font-size="10" text-anchor="middle">Close</text>
    <line x1="130" y1="50" x2="150" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="250" y1="50" x2="270" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="370" y1="50" x2="390" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="490" y1="50" x2="510" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="95" width="440" height="45" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="113" fill="#7fdbca" font-size="11" text-anchor="middle">AI-Powered Incident Pipeline</text>
    <text x="300" y="131" fill="white" font-size="11" text-anchor="middle">Auto-triage, run diagnostics, suggest/apply fixes</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "capacity-planning": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Current Metrics</text>
    <text x="95" y="62" fill="white" font-size="10" text-anchor="middle">CPU, RAM, Disk, IO</text>
    <rect x="190" y="25" width="130" height="50" rx="10" fill="#e94560"/>
    <text x="255" y="45" fill="white" font-size="11" text-anchor="middle">Growth Model</text>
    <text x="255" y="62" fill="white" font-size="10" text-anchor="middle">ML prediction</text>
    <rect x="350" y="25" width="220" height="50" rx="10" fill="#7fdbca"/>
    <text x="460" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Capacity Report</text>
    <text x="460" y="62" fill="#1a1a2e" font-size="10" text-anchor="middle">Upgrade needed in 60 days</text>
    <line x1="160" y1="50" x2="190" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="320" y1="50" x2="350" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="100" width="400" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="125" fill="white" font-size="11" text-anchor="middle">Data-driven infrastructure planning with confidence intervals</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "ml-pipeline": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="20" y="35" width="80" height="40" rx="6" fill="#533483"/>
    <text x="60" y="59" fill="white" font-size="10" text-anchor="middle">Collect</text>
    <rect x="110" y="35" width="80" height="40" rx="6" fill="#533483"/>
    <text x="150" y="59" fill="white" font-size="10" text-anchor="middle">Clean</text>
    <rect x="200" y="35" width="80" height="40" rx="6" fill="#e94560"/>
    <text x="240" y="59" fill="white" font-size="10" text-anchor="middle">Feature</text>
    <rect x="290" y="35" width="80" height="40" rx="6" fill="#e94560"/>
    <text x="330" y="59" fill="white" font-size="10" text-anchor="middle">Train</text>
    <rect x="380" y="35" width="80" height="40" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="420" y="59" fill="white" font-size="10" text-anchor="middle">Evaluate</text>
    <rect x="470" y="35" width="110" height="40" rx="6" fill="#7fdbca"/>
    <text x="525" y="59" fill="#1a1a2e" font-size="10" text-anchor="middle">Deploy</text>
    <line x1="100" y1="55" x2="110" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="190" y1="55" x2="200" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="280" y1="55" x2="290" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="370" y1="55" x2="380" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="460" y1="55" x2="470" y2="55" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="80" y="100" width="440" height="40" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">End-to-End ML Pipeline for DBA</text>
    <text x="300" y="135" fill="white" font-size="11" text-anchor="middle">Automated: data collection to production prediction</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "model-training": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="160" height="50" rx="10" fill="#533483"/>
    <text x="110" y="45" fill="#7fdbca" font-size="11" text-anchor="middle">Training Data</text>
    <text x="110" y="62" fill="white" font-size="10" text-anchor="middle">80% of dataset</text>
    <rect x="220" y="25" width="160" height="50" rx="10" fill="#e94560"/>
    <text x="300" y="45" fill="white" font-size="11" text-anchor="middle">Model.fit()</text>
    <text x="300" y="62" fill="white" font-size="10" text-anchor="middle">Learn patterns</text>
    <rect x="410" y="25" width="160" height="50" rx="10" fill="#7fdbca"/>
    <text x="490" y="45" fill="#1a1a2e" font-size="11" text-anchor="middle">Evaluation</text>
    <text x="490" y="62" fill="#1a1a2e" font-size="10" text-anchor="middle">Accuracy, F1, RMSE</text>
    <line x1="190" y1="50" x2="220" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <line x1="380" y1="50" x2="410" y2="50" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="100" width="440" height="45" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="118" fill="#7fdbca" font-size="11" text-anchor="middle">Cross-validation + Hyperparameter Tuning</text>
    <text x="300" y="136" fill="white" font-size="11" text-anchor="middle">GridSearchCV | train_test_split | classification_report</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "flask-deploy": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="30" width="130" height="50" rx="10" fill="#533483"/>
    <text x="95" y="50" fill="#7fdbca" font-size="11" text-anchor="middle">Trained Model</text>
    <text x="95" y="67" fill="white" font-size="10" text-anchor="middle">model.pkl</text>
    <rect x="190" y="30" width="130" height="50" rx="10" fill="#e94560"/>
    <text x="255" y="50" fill="white" font-size="11" text-anchor="middle">Flask API</text>
    <text x="255" y="67" fill="white" font-size="10" text-anchor="middle">/predict endpoint</text>
    <rect x="350" y="30" width="100" height="50" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="400" y="60" fill="white" font-size="11" text-anchor="middle">REST API</text>
    <rect x="480" y="30" width="100" height="50" rx="10" fill="#7fdbca"/>
    <text x="530" y="50" fill="#1a1a2e" font-size="11" text-anchor="middle">DBA Tools</text>
    <text x="530" y="67" fill="#1a1a2e" font-size="10" text-anchor="middle">Consumers</text>
    <line x1="160" y1="55" x2="190" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="320" y1="55" x2="350" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <line x1="450" y1="55" x2="480" y2="55" stroke="#7fdbca" stroke-width="2"/>
    <rect x="100" y="105" width="400" height="35" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="127" fill="white" font-size="11" text-anchor="middle">Serve ML predictions via HTTP for integration with monitoring</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "ai-security": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="160" height="55" rx="10" fill="#e94560"/>
    <text x="110" y="47" fill="white" font-size="11" text-anchor="middle">Data Privacy</text>
    <text x="110" y="65" fill="white" font-size="10" text-anchor="middle">PII in training data</text>
    <rect x="220" y="25" width="160" height="55" rx="10" fill="#533483"/>
    <text x="300" y="47" fill="#7fdbca" font-size="11" text-anchor="middle">Model Security</text>
    <text x="300" y="65" fill="white" font-size="10" text-anchor="middle">Prompt injection</text>
    <rect x="410" y="25" width="160" height="55" rx="10" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="490" y="47" fill="#7fdbca" font-size="11" text-anchor="middle">Access Control</text>
    <text x="490" y="65" fill="white" font-size="10" text-anchor="middle">API key management</text>
    <rect x="80" y="100" width="440" height="45" rx="8" fill="#16213e" stroke="#e94560" stroke-width="1.5"/>
    <text x="300" y="118" fill="#e94560" font-size="11" text-anchor="middle">Security Considerations</text>
    <text x="300" y="136" fill="white" font-size="11" text-anchor="middle">Never send production data to public LLMs without sanitisation</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "responsible-ai": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="100" y="20" width="400" height="40" rx="10" fill="#533483"/>
    <text x="300" y="45" fill="white" font-size="14" text-anchor="middle">Responsible AI for Database Management</text>
    <rect x="30" y="80" width="120" height="40" rx="6" fill="#e94560"/>
    <text x="90" y="105" fill="white" font-size="10" text-anchor="middle">Transparency</text>
    <rect x="165" y="80" width="120" height="40" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="225" y="105" fill="white" font-size="10" text-anchor="middle">Fairness</text>
    <rect x="300" y="80" width="120" height="40" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="360" y="105" fill="white" font-size="10" text-anchor="middle">Accountability</text>
    <rect x="435" y="80" width="130" height="40" rx="6" fill="#7fdbca"/>
    <text x="500" y="105" fill="#1a1a2e" font-size="10" text-anchor="middle">Human-in-loop</text>
    <rect x="100" y="135" width="400" height="25" rx="5" fill="#16213e"/>
    <text x="300" y="152" fill="white" font-size="11" text-anchor="middle">AI assists the DBA — never replaces human judgment for critical ops</text>
    <text x="300" y="178" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "ai-assistant-arch": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="220" y="5" width="160" height="35" rx="8" fill="#7fdbca"/>
    <text x="300" y="27" fill="#1a1a2e" font-size="12" text-anchor="middle">AI DBA Assistant</text>
    <rect x="30" y="60" width="100" height="40" rx="6" fill="#533483"/>
    <text x="80" y="84" fill="white" font-size="10" text-anchor="middle">LLM Engine</text>
    <rect x="150" y="60" width="100" height="40" rx="6" fill="#e94560"/>
    <text x="200" y="84" fill="white" font-size="10" text-anchor="middle">RAG Layer</text>
    <rect x="270" y="60" width="100" height="40" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="320" y="84" fill="white" font-size="10" text-anchor="middle">SQL Tools</text>
    <rect x="390" y="60" width="100" height="40" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="440" y="84" fill="white" font-size="10" text-anchor="middle">ML Models</text>
    <rect x="510" y="60" width="70" height="40" rx="6" fill="#533483"/>
    <text x="545" y="84" fill="white" font-size="10" text-anchor="middle">Alerts</text>
    <line x1="250" y1="40" x2="80" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="280" y1="40" x2="200" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="300" y1="40" x2="320" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="320" y1="40" x2="440" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="350" y1="40" x2="545" y2="60" stroke="#7fdbca" stroke-width="1.5"/>
    <rect x="100" y="120" width="400" height="30" rx="6" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="140" fill="white" font-size="11" text-anchor="middle">Unified interface: Chat with your SQL Server infrastructure</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "build-bot": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="30" y="25" width="120" height="45" rx="8" fill="#533483"/>
    <text x="90" y="42" fill="#7fdbca" font-size="10" text-anchor="middle">Streamlit UI</text>
    <text x="90" y="58" fill="white" font-size="10" text-anchor="middle">Chat interface</text>
    <rect x="170" y="25" width="120" height="45" rx="8" fill="#e94560"/>
    <text x="230" y="42" fill="white" font-size="10" text-anchor="middle">LangGraph</text>
    <text x="230" y="58" fill="white" font-size="10" text-anchor="middle">Agent logic</text>
    <rect x="310" y="25" width="120" height="45" rx="8" fill="#0f3460" stroke="#7fdbca" stroke-width="1.5"/>
    <text x="370" y="42" fill="#7fdbca" font-size="10" text-anchor="middle">RAG + Tools</text>
    <text x="370" y="58" fill="white" font-size="10" text-anchor="middle">Knowledge base</text>
    <rect x="450" y="25" width="120" height="45" rx="8" fill="#7fdbca"/>
    <text x="510" y="42" fill="#1a1a2e" font-size="10" text-anchor="middle">SQL Server</text>
    <text x="510" y="58" fill="#1a1a2e" font-size="10" text-anchor="middle">Target DBs</text>
    <line x1="150" y1="47" x2="170" y2="47" stroke="#7fdbca" stroke-width="2"/>
    <line x1="290" y1="47" x2="310" y2="47" stroke="#7fdbca" stroke-width="2"/>
    <line x1="430" y1="47" x2="450" y2="47" stroke="#7fdbca" stroke-width="2"/>
    <rect x="80" y="90" width="440" height="55" rx="8" fill="#16213e" stroke="#533483" stroke-width="1"/>
    <text x="300" y="110" fill="#7fdbca" font-size="11" text-anchor="middle">Capstone Project</text>
    <text x="300" y="128" fill="white" font-size="11" text-anchor="middle">Build a complete AI DBA Bot that monitors, diagnoses,</text>
    <text x="300" y="143" fill="white" font-size="11" text-anchor="middle">and recommends fixes for your SQL Server environment</text>
    <text x="300" y="172" fill="#aaa" font-size="12" text-anchor="middle">${label}</text>
</svg>`,
        "generic": `<svg viewBox="0 0 600 180" width="100%" height="180">
    <rect x="150" y="40" width="300" height="70" rx="12" fill="#533483" stroke="#7fdbca" stroke-width="2"/>
    <text x="300" y="80" fill="white" font-size="16" text-anchor="middle">${label}</text>
    <rect x="50" y="130" width="120" height="30" rx="6" fill="#e94560"/>
    <text x="110" y="150" fill="white" font-size="11" text-anchor="middle">SQL Server</text>
    <rect x="240" y="130" width="120" height="30" rx="6" fill="#0f3460" stroke="#7fdbca" stroke-width="1"/>
    <text x="300" y="150" fill="white" font-size="11" text-anchor="middle">Python</text>
    <rect x="430" y="130" width="120" height="30" rx="6" fill="#7fdbca"/>
    <text x="490" y="150" fill="#1a1a2e" font-size="11" text-anchor="middle">AI / ML</text>
    <line x1="110" y1="130" x2="200" y2="110" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="300" y1="130" x2="300" y2="110" stroke="#7fdbca" stroke-width="1.5"/>
    <line x1="490" y1="130" x2="400" y2="110" stroke="#7fdbca" stroke-width="1.5"/>
</svg>`,
    };
    return svgs[type] || svgs["generic"];
}

const sectionDiagramTypes = {
    "m1s1": "python-dba",
    "m1s2": "python-setup",
    "m1s3": "python-basics",
    "m2s1": "pyodbc-connect",
    "m2s2": "sqlalchemy-orm",
    "m2s3": "query-execute",
    "m3s1": "dataframes",
    "m3s2": "query-perf",
    "m3s3": "matplotlib-viz",
    "m4s1": "ai-ml-concepts",
    "m4s2": "supervised-unsupervised",
    "m4s3": "first-ml-model",
    "m5s1": "predict-growth",
    "m5s2": "anomaly-detection",
    "m5s3": "forecast-resources",
    "m6s1": "query-classification",
    "m6s2": "index-recommendation",
    "m6s3": "workload-patterns",
    "m7s1": "intelligent-alerts",
    "m7s2": "log-analysis",
    "m7s3": "root-cause",
    "m8s1": "llm-intro",
    "m8s2": "prompt-engineering",
    "m8s3": "llm-apis",
    "m9s1": "langchain-intro",
    "m9s2": "chains-prompts",
    "m9s3": "sql-assistant",
    "m10s1": "rag-architecture",
    "m10s2": "vector-db",
    "m10s3": "dba-knowledge-base",
    "m11s1": "langgraph-intro",
    "m11s2": "stateful-agents",
    "m11s3": "dba-agent",
    "m12s1": "nl-to-sql",
    "m12s2": "incident-response",
    "m12s3": "capacity-planning",
    "m13s1": "ml-pipeline",
    "m13s2": "model-training",
    "m13s3": "flask-deploy",
    "m14s1": "ai-security",
    "m14s2": "responsible-ai",
    "m15s1": "ai-assistant-arch",
    "m15s2": "build-bot"
};
