const courseData = {
  "title": "AI for SQL Server DBAs",
  "modules": [
    {
      "title": "Module 1: Python Essentials for DBAs",
      "sections": [
        {
          "id": "m1s1",
          "title": "1.1 Why Python for SQL Server DBAs",
          "brief": "<h4>Why Python for SQL Server DBAs</h4><ul><li>Python is the #1 language for AI/ML — essential for modern DBA work</li><li>Automate repetitive DBA tasks: backups, monitoring, reporting</li><li>Access powerful libraries: pandas, scikit-learn, LangChain</li><li>Connect directly to SQL Server via <code>pyodbc</code> and <code>SQLAlchemy</code></li><li>Build AI-powered tools: anomaly detection, predictive analytics</li><li>Complement T-SQL skills — Python handles what T-SQL cannot</li></ul>",
          "description": "<p><strong>Python has become the essential language for DBAs who want to leverage AI and machine learning.</strong></p><p>While T-SQL excels at data manipulation within SQL Server, Python opens the door to advanced analytics, machine learning, and AI-powered automation that simply isn't possible with T-SQL alone.</p><p>Key reasons to learn Python as a DBA:</p><ul><li><strong>AI/ML ecosystem</strong> — scikit-learn, TensorFlow, PyTorch are all Python-first</li><li><strong>Automation</strong> — schedule and orchestrate complex DBA workflows</li><li><strong>Data analysis</strong> — pandas makes analysing DMV data intuitive</li><li><strong>Integration</strong> — connect to APIs, cloud services, monitoring tools</li><li><strong>LLM/GenAI</strong> — LangChain, OpenAI SDK, all Python-native</li></ul><p>Python doesn't replace T-SQL — it extends your capabilities into areas T-SQL was never designed for.</p>",
          "syntax": "# Why Python for DBAs - Quick Overview\nimport pyodbc      # Connect to SQL Server\nimport pandas      # Data analysis\nimport sklearn     # Machine learning\nimport langchain   # LLM orchestration\n\n# Example: Query SQL Server and analyse with pandas\nconn = pyodbc.connect('...')\ndf = pandas.read_sql('SELECT * FROM sys.databases', conn)\nprint(df[['name', 'state_desc']].to_string())",
          "script": "Explain why Python is essential for modern DBAs.\nShow the ecosystem of libraries available.\nEmphasise that Python complements T-SQL, not replaces it.\nDemo a simple connection to show how easy it is.",
          "examples": [
            {
              "name": "DBA Libraries",
              "code": "# Key Python libraries for SQL Server DBAs\nlibraries = {\n    'pyodbc': 'Direct SQL Server connectivity',\n    'sqlalchemy': 'ORM and connection pooling',\n    'pandas': 'Data analysis and manipulation',\n    'scikit-learn': 'Machine learning models',\n    'matplotlib': 'Data visualisation',\n    'langchain': 'LLM orchestration framework',\n    'chromadb': 'Vector database for RAG',\n    'flask': 'REST API for model serving'\n}\n\nfor lib, purpose in libraries.items():\n    print(f'{lib:15} -> {purpose}')"
            },
            {
              "name": "DBA Use Cases",
              "code": "# AI/ML use cases for SQL Server DBAs\nuse_cases = [\n    ('Predictive Analytics', 'Forecast database growth and resource needs'),\n    ('Anomaly Detection', 'Detect unusual performance patterns automatically'),\n    ('Query Classification', 'Auto-categorise queries by performance impact'),\n    ('Natural Language SQL', 'Convert English questions to T-SQL queries'),\n    ('Automated RCA', 'AI-driven root cause analysis for incidents'),\n    ('Capacity Planning', 'ML-based infrastructure planning'),\n]\n\nprint('AI/ML Use Cases for SQL Server DBAs')\nprint('=' * 50)\nfor name, desc in use_cases:\n    print(f'\\n{name}:')\n    print(f'  {desc}')"
            }
          ]
        },
        {
          "id": "m1s2",
          "title": "1.2 Python Setup & Virtual Environments",
          "brief": "<h4>Python Setup & Virtual Environments</h4><ul><li>Install Python 3.11+ from python.org (add to PATH)</li><li><code>python -m venv dba_env</code> — create isolated environment</li><li>Activate: <code>dba_env\\Scripts\\activate</code> (Windows)</li><li><code>pip install pyodbc pandas scikit-learn</code> — install packages</li><li><code>pip freeze > requirements.txt</code> — save dependencies</li><li>VS Code + Python extension for best DBA development experience</li></ul>",
          "description": "<p><strong>Setting up Python correctly is crucial for a clean, reproducible development environment.</strong></p><p>Virtual environments isolate your project dependencies, preventing conflicts between different projects. This is especially important when working with ML libraries that have specific version requirements.</p><p>Steps:</p><ol><li>Install Python 3.11+ from python.org (ensure 'Add to PATH' is checked)</li><li>Create a virtual environment for your DBA tools project</li><li>Install required packages with pip</li><li>Save your requirements for reproducibility</li></ol><p>Recommended IDE: VS Code with Python extension provides IntelliSense, debugging, and integrated terminal.</p>",
          "syntax": "# Create virtual environment\npython -m venv dba_env\n\n# Activate (Windows)\ndba_env\\Scripts\\activate\n\n# Install DBA packages\npip install pyodbc sqlalchemy pandas numpy\npip install scikit-learn matplotlib seaborn\npip install langchain openai chromadb\npip install flask requests\n\n# Save requirements\npip freeze > requirements.txt\n\n# Recreate environment elsewhere\npip install -r requirements.txt",
          "script": "Walk through Python installation.\nShow virtual environment creation and activation.\nInstall key packages for the course.\nExplain why venvs matter for production DBA tools.",
          "examples": [
            {
              "name": "Check Setup",
              "code": "import sys\nimport platform\n\nprint(f'Python Version: {sys.version}')\nprint(f'Platform: {platform.system()} {platform.release()}')\nprint(f'Architecture: {platform.machine()}')\n\n# Check key packages\npackages = ['pyodbc', 'pandas', 'numpy', 'sklearn']\nfor pkg in packages:\n    try:\n        __import__(pkg)\n        print(f'  {pkg}: installed')\n    except ImportError:\n        print(f'  {pkg}: NOT installed')"
            },
            {
              "name": "Project Structure",
              "code": "# Recommended project structure for DBA AI tools\nstructure = '''\ndba_ai_project/\n|-- dba_env/           # Virtual environment\n|-- src/\n|   |-- __init__.py\n|   |-- connect.py     # SQL Server connections\n|   |-- monitor.py     # Monitoring scripts\n|   |-- ml_models.py   # ML model code\n|   |-- ai_agent.py    # LangChain agent\n|-- data/\n|   |-- training/      # ML training data\n|   |-- models/        # Saved models\n|-- tests/\n|-- requirements.txt\n|-- config.yaml\n|-- README.md\n'''\nprint(structure)"
            }
          ]
        },
        {
          "id": "m1s3",
          "title": "1.3 Python Basics Refresher",
          "brief": "<h4>Python Basics Refresher</h4><ul><li>Variables: <code>server_name = 'PROD-SQL-01'</code> — dynamic typing</li><li>Data types: str, int, float, bool, list, dict, tuple</li><li>Loops: <code>for db in databases:</code> — iterate collections</li><li>Functions: <code>def check_health(server):</code> — reusable logic</li><li>f-strings: <code>f'Server {name} CPU: {cpu}%'</code> — formatted output</li><li>Error handling: <code>try/except</code> for robust DBA scripts</li></ul>",
          "description": "<p><strong>A quick refresher on Python fundamentals with DBA-relevant examples.</strong></p><p>Even if you've used Python before, reviewing these basics with a DBA mindset helps you write better automation scripts. Every example uses SQL Server DBA scenarios.</p><ul><li><strong>Variables</strong> — store connection strings, server names, thresholds</li><li><strong>Collections</strong> — lists of servers, dicts of config, tuples for immutable data</li><li><strong>Control flow</strong> — if/elif/else for alert logic, loops for batch operations</li><li><strong>Functions</strong> — encapsulate reusable DBA operations</li><li><strong>Error handling</strong> — gracefully handle connection failures, timeouts</li></ul>",
          "syntax": "# Variables\nserver = 'PROD-SQL-01'\nport = 1433\nis_online = True\n\n# Collections\nservers = ['SQL-01', 'SQL-02', 'SQL-03']\nconfig = {'server': 'localhost', 'db': 'master'}\n\n# Loop\nfor s in servers:\n    print(f'Checking {s}...')\n\n# Function\ndef check_cpu(server, threshold=85):\n    # ... check logic\n    return cpu_pct > threshold\n\n# Error handling\ntry:\n    conn = connect(server)\nexcept Exception as e:\n    print(f'Error: {e}')",
          "script": "Quick refresher on Python basics.\nUse DBA examples throughout.\nFocus on patterns they'll use in the course.\nEmphasise f-strings, dicts, and error handling.",
          "examples": [
            {
              "name": "DBA Variables",
              "code": "# Python basics with DBA context\nserver_name = 'PROD-SQL-01'\nport = 1433\nmax_memory_mb = 32768\ncpu_threshold = 85.0\nis_production = True\n\n# Collections\ndatabases = ['master', 'msdb', 'AdventureWorks', 'ReportDB']\n\nserver_config = {\n    'name': server_name,\n    'port': port,\n    'max_memory': max_memory_mb,\n    'is_prod': is_production\n}\n\n# f-string formatting\nprint(f'Server: {server_name}:{port}')\nprint(f'Memory: {max_memory_mb / 1024:.1f} GB')\nprint(f'Databases: {len(databases)}')\n\n# Loop with enumerate\nfor i, db in enumerate(databases, 1):\n    print(f'  {i}. {db}')"
            },
            {
              "name": "DBA Functions",
              "code": "# Functions for DBA tasks\ndef check_threshold(value, warning=80, critical=95):\n    if value >= critical:\n        return 'CRITICAL'\n    elif value >= warning:\n        return 'WARNING'\n    return 'OK'\n\ndef format_size(size_mb):\n    if size_mb >= 1024:\n        return f'{size_mb / 1024:.1f} GB'\n    return f'{size_mb} MB'\n\n# Test the functions\nmetrics = [\n    ('CPU', 92),\n    ('Memory', 78),\n    ('Disk', 96),\n    ('IO', 45)\n]\n\nprint('Server Health Check')\nprint('-' * 30)\nfor name, value in metrics:\n    status = check_threshold(value)\n    print(f'{name:10} {value:3}% [{status}]')\n\n# Size formatting\nsizes = [512, 2048, 8192, 102400]\nfor s in sizes:\n    print(f'  {s} MB = {format_size(s)}')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 2: Connecting Python to SQL Server",
      "sections": [
        {
          "id": "m2s1",
          "title": "2.1 pyodbc - Connecting to SQL Server",
          "brief": "<h4>pyodbc - Connecting to SQL Server</h4><ul><li><code>pip install pyodbc</code> — the standard SQL Server driver for Python</li><li>Connection string: server, database, authentication</li><li><code>cursor.execute(query)</code> — run any T-SQL statement</li><li><code>cursor.fetchall()</code> — get results as list of tuples</li><li>Always use <code>with</code> or close connections explicitly</li><li>Parameterised queries prevent SQL injection</li></ul>",
          "description": "<p><strong>pyodbc is the most widely used Python library for connecting to SQL Server.</strong></p><p>It provides a DB-API 2.0 compliant interface that works with any ODBC driver. For SQL Server, you'll use the Microsoft ODBC Driver 17 or 18.</p><p>Key concepts:</p><ul><li><strong>Connection string</strong> — specifies server, database, and authentication method</li><li><strong>Cursor</strong> — executes queries and fetches results</li><li><strong>Parameterised queries</strong> — use ? placeholders to prevent SQL injection</li><li><strong>Context managers</strong> — use <code>with</code> statements for automatic cleanup</li></ul><p>Authentication options: Windows (Trusted_Connection=yes) or SQL Auth (UID/PWD).</p>",
          "syntax": "import pyodbc\n\n# Windows Authentication\nconn = pyodbc.connect(\n    'DRIVER={ODBC Driver 17 for SQL Server};'\n    'SERVER=localhost;'\n    'DATABASE=master;'\n    'Trusted_Connection=yes;'\n)\n\n# Execute query\ncursor = conn.cursor()\ncursor.execute('SELECT name, state_desc FROM sys.databases')\n\n# Fetch results\nfor row in cursor.fetchall():\n    print(row.name, row.state_desc)\n\n# Parameterised query (safe from injection)\ncursor.execute('SELECT * FROM sys.databases WHERE name = ?', 'master')\n\nconn.close()",
          "script": "Demo connecting to SQL Server from Python.\nShow connection string options.\nRun a simple query against sys.databases.\nEmphasise parameterised queries for security.",
          "examples": [
            {
              "name": "Basic Connection",
              "code": "# Simulating pyodbc connection (runs in browser)\n# In real environment, this connects to SQL Server\n\nconnection_string = (\n    'DRIVER={ODBC Driver 17 for SQL Server};'\n    'SERVER=PROD-SQL-01;'\n    'DATABASE=master;'\n    'Trusted_Connection=yes;'\n)\n\nprint('Connection String Components:')\nprint(f'  Driver: ODBC Driver 17 for SQL Server')\nprint(f'  Server: PROD-SQL-01')\nprint(f'  Database: master')\nprint(f'  Auth: Windows (Trusted)')\n\n# Simulated query results\ndatabases = [\n    ('master', 'ONLINE', 6.5),\n    ('msdb', 'ONLINE', 15.2),\n    ('AdventureWorks', 'ONLINE', 209.4),\n    ('ReportDB', 'ONLINE', 1024.8),\n]\n\nprint(f'\\n{\"Database\":<20} {\"Status\":<10} {\"Size MB\":<10}')\nprint('-' * 40)\nfor name, status, size in databases:\n    print(f'{name:<20} {status:<10} {size:<10.1f}')"
            },
            {
              "name": "Query DMVs",
              "code": "# Querying SQL Server DMVs with pyodbc pattern\n# This shows the pattern - actual execution needs SQL Server\n\nquery_stats_sql = '''\nSELECT TOP 10\n    SUBSTRING(qt.text, 1, 100) AS query_text,\n    qs.execution_count,\n    qs.total_elapsed_time / qs.execution_count AS avg_elapsed_us,\n    qs.total_logical_reads / qs.execution_count AS avg_reads\nFROM sys.dm_exec_query_stats qs\nCROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) qt\nORDER BY qs.total_elapsed_time DESC\n'''\n\nprint('DMV Query Pattern:')\nprint(query_stats_sql)\n\n# Simulated results\nprint('\\nSimulated Top Queries:')\nprint(f'{\"Query\":<40} {\"Execs\":<8} {\"Avg ms\":<8} {\"Avg Reads\"}')\nprint('-' * 70)\nresults = [\n    ('SELECT * FROM Orders WHERE...', 15420, 245, 8920),\n    ('UPDATE Inventory SET qty...', 3200, 180, 4500),\n    ('INSERT INTO AuditLog...', 98000, 12, 150),\n]\nfor q, execs, ms, reads in results:\n    print(f'{q:<40} {execs:<8} {ms:<8} {reads}')"
            },
            {
              "name": "Parameterised Query",
              "code": "# ALWAYS use parameterised queries!\n\n# BAD - SQL Injection vulnerable\ndb_name = \"master; DROP TABLE users; --\"\nbad_query = f\"SELECT * FROM sys.databases WHERE name = '{db_name}'\"\nprint('BAD (vulnerable):')\nprint(f'  {bad_query}')\nprint()\n\n# GOOD - Parameterised (safe)\nprint('GOOD (parameterised):')\nprint('  cursor.execute(')\nprint('      \"SELECT * FROM sys.databases WHERE name = ?\",')\nprint('      db_name')\nprint('  )')\nprint()\nprint('The ? placeholder ensures the value is properly escaped.')\nprint('pyodbc handles all escaping automatically.')\nprint()\nprint('Pattern for multiple parameters:')\nprint('  cursor.execute(')\nprint('      \"SELECT * FROM table WHERE col1 = ? AND col2 = ?\",')\nprint('      value1, value2')\nprint('  )')"
            }
          ]
        },
        {
          "id": "m2s2",
          "title": "2.2 SQLAlchemy - ORM for Database Access",
          "brief": "<h4>SQLAlchemy - ORM for Database Access</h4><ul><li><code>create_engine()</code> — connection pooling and management</li><li>Connection URL: <code>mssql+pyodbc://server/db?driver=...</code></li><li>ORM maps Python classes to SQL Server tables</li><li><code>pd.read_sql(query, engine)</code> — direct to DataFrame</li><li>Session management for transaction control</li><li>Works with LangChain's SQL tools out of the box</li></ul>",
          "description": "<p><strong>SQLAlchemy provides a higher-level interface to SQL Server with connection pooling and ORM capabilities.</strong></p><p>While pyodbc gives you raw database access, SQLAlchemy adds connection pooling, an ORM layer, and integrates seamlessly with pandas and LangChain.</p><p>Key benefits for DBAs:</p><ul><li><strong>Connection pooling</strong> — efficiently manage multiple connections</li><li><strong>Engine abstraction</strong> — switch between databases easily</li><li><strong>pandas integration</strong> — <code>pd.read_sql()</code> works directly with engines</li><li><strong>LangChain compatibility</strong> — required for SQL agents and chains</li></ul>",
          "syntax": "from sqlalchemy import create_engine, text\nimport pandas as pd\n\n# Create engine with connection pooling\nengine = create_engine(\n    'mssql+pyodbc://localhost/master'\n    '?driver=ODBC+Driver+17+for+SQL+Server'\n    '&trusted_connection=yes',\n    pool_size=5,\n    max_overflow=10\n)\n\n# Query to DataFrame\ndf = pd.read_sql('SELECT name, state_desc FROM sys.databases', engine)\n\n# Using text() for parameterised queries\nwith engine.connect() as conn:\n    result = conn.execute(\n        text('SELECT * FROM sys.databases WHERE name = :name'),\n        {'name': 'master'}\n    )",
          "script": "Show SQLAlchemy as a higher-level alternative to pyodbc.\nDemonstrate connection pooling benefits.\nShow pandas integration.\nExplain why LangChain needs SQLAlchemy.",
          "examples": [
            {
              "name": "Engine Setup",
              "code": "# SQLAlchemy engine configuration patterns\n\n# Windows Auth\nwin_url = (\n    'mssql+pyodbc://localhost/master'\n    '?driver=ODBC+Driver+17+for+SQL+Server'\n    '&trusted_connection=yes'\n)\n\n# SQL Auth\nsql_url = (\n    'mssql+pyodbc://sa:Password123@localhost/master'\n    '?driver=ODBC+Driver+17+for+SQL+Server'\n)\n\n# Azure SQL\nazure_url = (\n    'mssql+pyodbc://user:pass@server.database.windows.net/mydb'\n    '?driver=ODBC+Driver+17+for+SQL+Server'\n)\n\nprint('SQLAlchemy Connection URLs:')\nprint(f'\\nWindows Auth:')\nprint(f'  {win_url}')\nprint(f'\\nSQL Auth:')\nprint(f'  mssql+pyodbc://user:pass@server/db?driver=...')\nprint(f'\\nAzure SQL:')\nprint(f'  mssql+pyodbc://user:pass@server.database.windows.net/db')\nprint(f'\\nPool settings: pool_size=5, max_overflow=10')"
            },
            {
              "name": "Pandas Integration",
              "code": "# SQLAlchemy + Pandas = powerful DBA analysis\nimport pandas as pd\n\n# Simulated: pd.read_sql() pattern\nprint('Pattern: pd.read_sql(query, engine)')\nprint()\n\n# Simulated DataFrame output\ndata = {\n    'database_name': ['master', 'msdb', 'AdventureWorks', 'ReportDB'],\n    'size_mb': [6.5, 15.2, 209.4, 1024.8],\n    'state': ['ONLINE', 'ONLINE', 'ONLINE', 'ONLINE'],\n    'recovery_model': ['SIMPLE', 'SIMPLE', 'FULL', 'FULL']\n}\ndf = pd.DataFrame(data)\n\nprint('Database Overview:')\nprint(df.to_string(index=False))\nprint(f'\\nTotal size: {df[\"size_mb\"].sum():.1f} MB')\nprint(f'FULL recovery: {(df[\"recovery_model\"]==\"FULL\").sum()} databases')"
            }
          ]
        },
        {
          "id": "m2s3",
          "title": "2.3 Executing Queries & Handling Results",
          "brief": "<h4>Executing Queries & Handling Results</h4><ul><li><code>cursor.execute()</code> for SELECT, INSERT, UPDATE, DELETE</li><li><code>fetchone()</code>, <code>fetchall()</code>, <code>fetchmany(n)</code> — result retrieval</li><li><code>cursor.description</code> — get column names and types</li><li><code>conn.commit()</code> — commit DML changes</li><li>Batch operations with <code>executemany()</code></li><li>Error handling with specific exception types</li></ul>",
          "description": "<p><strong>Mastering query execution patterns is essential for building reliable DBA automation.</strong></p><p>Different operations require different patterns: SELECT queries need fetch methods, DML needs commits, and batch operations benefit from executemany().</p><p>Key patterns:</p><ul><li><strong>Read operations</strong> — execute + fetch (no commit needed)</li><li><strong>Write operations</strong> — execute + commit (or autocommit mode)</li><li><strong>Batch inserts</strong> — executemany() for bulk operations</li><li><strong>Metadata</strong> — cursor.description for column info</li><li><strong>Error handling</strong> — catch specific pyodbc exceptions</li></ul>",
          "syntax": "import pyodbc\n\n# Read pattern\ncursor.execute('SELECT name FROM sys.databases')\nrows = cursor.fetchall()\n\n# Column names from description\ncolumns = [desc[0] for desc in cursor.description]\n\n# Write pattern (needs commit)\ncursor.execute('INSERT INTO log (msg) VALUES (?)', 'test')\nconn.commit()\n\n# Batch insert\ndata = [('msg1',), ('msg2',), ('msg3',)]\ncursor.executemany('INSERT INTO log (msg) VALUES (?)', data)\nconn.commit()\n\n# Error handling\ntry:\n    cursor.execute(query)\nexcept pyodbc.OperationalError as e:\n    print(f'Connection issue: {e}')\nexcept pyodbc.ProgrammingError as e:\n    print(f'Query error: {e}')",
          "script": "Show different query execution patterns.\nDemonstrate fetch methods and when to use each.\nShow batch operations for efficiency.\nEmphasise proper error handling.",
          "examples": [
            {
              "name": "Query Patterns",
              "code": "# Different query execution patterns\n\n# Pattern 1: Fetch all results\nprint('Pattern 1: fetchall()')\nprint('  rows = cursor.fetchall()')\nprint('  Good for: small result sets')\nprint()\n\n# Pattern 2: Iterate cursor\nprint('Pattern 2: Iterate cursor')\nprint('  for row in cursor.execute(query):')\nprint('      process(row)')\nprint('  Good for: large result sets (memory efficient)')\nprint()\n\n# Pattern 3: Fetch one\nprint('Pattern 3: fetchone()')\nprint('  row = cursor.fetchone()')\nprint('  Good for: single row results (@@VERSION, etc.)')\nprint()\n\n# Pattern 4: Context manager\nprint('Pattern 4: Context manager')\nprint('  with pyodbc.connect(conn_str) as conn:')\nprint('      cursor = conn.cursor()')\nprint('      cursor.execute(query)')\nprint('  # Auto-closes connection')\nprint()\n\n# Simulated execution\nprint('\\n--- Simulated Query Execution ---')\ncolumns = ['name', 'state_desc', 'recovery_model_desc']\nrows = [\n    ('master', 'ONLINE', 'SIMPLE'),\n    ('tempdb', 'ONLINE', 'SIMPLE'),\n    ('model', 'ONLINE', 'FULL'),\n]\nprint(f'Columns: {columns}')\nfor row in rows:\n    print(f'  {row}')"
            },
            {
              "name": "Batch Operations",
              "code": "# Batch operations for DBA tasks\nimport time\n\n# Simulating batch insert performance\nrecord_counts = [100, 1000, 10000]\n\nprint('Batch Insert Performance Comparison')\nprint('=' * 50)\nprint(f'{\"Records\":<10} {\"Individual\":<15} {\"Batch\":<15} {\"Speedup\"}')\nprint('-' * 50)\n\nfor count in record_counts:\n    # Simulated timings\n    individual_ms = count * 2.5  # 2.5ms per individual insert\n    batch_ms = count * 0.3       # 0.3ms per record in batch\n    speedup = individual_ms / batch_ms\n    print(f'{count:<10} {individual_ms:<15.0f}ms {batch_ms:<15.0f}ms {speedup:.1f}x')\n\nprint()\nprint('Pattern:')\nprint('  data = [(val1,), (val2,), ...]')\nprint('  cursor.executemany(\"INSERT INTO t VALUES (?)\", data)')\nprint('  conn.commit()')\nprint()\nprint('Tip: Use fast_executemany=True for even better performance')\nprint('  cursor.fast_executemany = True')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 3: Data Analysis with Pandas",
      "sections": [
        {
          "id": "m3s1",
          "title": "3.1 DataFrames for DBA Data",
          "brief": "<h4>DataFrames for DBA Data</h4><ul><li><code>pd.read_sql(query, engine)</code> — SQL Server to DataFrame</li><li>Columns map to SQL columns, rows to records</li><li><code>df.head()</code>, <code>df.describe()</code>, <code>df.info()</code> — quick exploration</li><li>Filter: <code>df[df['size_mb'] > 1000]</code> — like WHERE clause</li><li><code>df.groupby('status').agg()</code> — like GROUP BY</li><li>Export: <code>df.to_csv()</code>, <code>df.to_excel()</code>, <code>df.to_json()</code></li></ul>",
          "description": "<p><strong>Pandas DataFrames are the Python equivalent of a SQL result set — but with powerful analysis capabilities built in.</strong></p><p>For DBAs, DataFrames provide an intuitive way to analyse query results, DMV data, and performance metrics without writing complex T-SQL.</p><ul><li><strong>Loading data</strong> — pd.read_sql() pulls directly from SQL Server</li><li><strong>Filtering</strong> — boolean indexing works like WHERE clauses</li><li><strong>Aggregation</strong> — groupby() works like GROUP BY</li><li><strong>Transformation</strong> — apply functions across columns</li><li><strong>Export</strong> — save to CSV, Excel, or JSON for reporting</li></ul>",
          "syntax": "import pandas as pd\n\n# Load from SQL Server\ndf = pd.read_sql('SELECT * FROM sys.databases', engine)\n\n# Explore\ndf.head()          # First 5 rows\ndf.describe()      # Statistics\ndf.info()          # Column types\n\n# Filter (like WHERE)\nlarge_dbs = df[df['size_mb'] > 1000]\n\n# Aggregate (like GROUP BY)\ndf.groupby('state_desc')['size_mb'].sum()\n\n# Sort (like ORDER BY)\ndf.sort_values('size_mb', ascending=False)",
          "script": "Introduce pandas DataFrames as SQL result sets on steroids.\nShow loading data from SQL Server.\nDemonstrate filtering, grouping, sorting.\nCompare to T-SQL equivalents.",
          "examples": [
            {
              "name": "DataFrame Basics",
              "code": "import pandas as pd\n\n# Simulated DBA data (normally from pd.read_sql)\ndata = {\n    'database': ['master', 'msdb', 'AdventureWorks', 'ReportDB', 'TempDB'],\n    'size_mb': [6.5, 15.2, 209.4, 1024.8, 8192.0],\n    'status': ['ONLINE', 'ONLINE', 'ONLINE', 'ONLINE', 'ONLINE'],\n    'recovery': ['SIMPLE', 'SIMPLE', 'FULL', 'FULL', 'SIMPLE'],\n    'last_backup_days': [None, 1, 0, 0, None]\n}\ndf = pd.DataFrame(data)\n\nprint('All Databases:')\nprint(df.to_string(index=False))\nprint(f'\\nTotal databases: {len(df)}')\nprint(f'Total size: {df[\"size_mb\"].sum():.1f} MB ({df[\"size_mb\"].sum()/1024:.1f} GB)')\n\n# Filter - large databases\nprint(f'\\nDatabases > 100 MB:')\nlarge = df[df['size_mb'] > 100]\nprint(large[['database', 'size_mb']].to_string(index=False))\n\n# Group by recovery model\nprint(f'\\nSize by Recovery Model:')\nprint(df.groupby('recovery')['size_mb'].agg(['count', 'sum']).to_string())"
            },
            {
              "name": "DBA Analysis",
              "code": "import pandas as pd\n\n# Simulated wait stats data\nwait_data = {\n    'wait_type': ['CXPACKET', 'SOS_SCHEDULER_YIELD', 'PAGEIOLATCH_SH', \n                  'LCK_M_S', 'ASYNC_NETWORK_IO', 'WRITELOG'],\n    'wait_time_ms': [45000, 32000, 28000, 15000, 12000, 8000],\n    'waiting_tasks': [1200, 8500, 3200, 450, 2100, 6700],\n    'signal_wait_ms': [2000, 28000, 500, 200, 100, 300]\n}\ndf = pd.DataFrame(wait_data)\n\n# Analysis\ndf['avg_wait_ms'] = df['wait_time_ms'] / df['waiting_tasks']\ndf['signal_pct'] = (df['signal_wait_ms'] / df['wait_time_ms'] * 100).round(1)\ntotal_wait = df['wait_time_ms'].sum()\ndf['pct_of_total'] = (df['wait_time_ms'] / total_wait * 100).round(1)\n\nprint('Wait Stats Analysis')\nprint('=' * 70)\nprint(df[['wait_type', 'wait_time_ms', 'avg_wait_ms', 'signal_pct', 'pct_of_total']].to_string(index=False))\nprint(f'\\nTotal wait time: {total_wait:,} ms')\nprint(f'Top wait: {df.iloc[0][\"wait_type\"]} ({df.iloc[0][\"pct_of_total\"]}%)')"
            }
          ]
        },
        {
          "id": "m3s2",
          "title": "3.2 Analysing Query Performance Data",
          "brief": "<h4>Analysing Query Performance Data</h4><ul><li>Pull data from <code>sys.dm_exec_query_stats</code> into pandas</li><li>Calculate: avg elapsed time, avg reads, execution frequency</li><li><code>df.sort_values()</code> — find top resource consumers</li><li><code>df.describe()</code> — statistical summary of query metrics</li><li>Percentile analysis: <code>df.quantile([0.5, 0.9, 0.99])</code></li><li>Identify outliers using standard deviation</li></ul>",
          "description": "<p><strong>Pandas transforms raw DMV data into actionable performance insights.</strong></p><p>Instead of writing complex T-SQL to analyse query performance, load the data into a DataFrame and use pandas' powerful analysis tools to find patterns, outliers, and trends.</p><ul><li><strong>Top N analysis</strong> — find worst-performing queries</li><li><strong>Statistical profiling</strong> — understand distribution of query metrics</li><li><strong>Outlier detection</strong> — identify queries that deviate from normal</li><li><strong>Trend analysis</strong> — track performance changes over time</li></ul>",
          "syntax": "import pandas as pd\n\n# Load query stats\ndf = pd.read_sql('''\n    SELECT execution_count, total_elapsed_time,\n           total_logical_reads, total_worker_time\n    FROM sys.dm_exec_query_stats\n''', engine)\n\n# Calculate averages\ndf['avg_elapsed_us'] = df['total_elapsed_time'] / df['execution_count']\ndf['avg_reads'] = df['total_logical_reads'] / df['execution_count']\n\n# Top 10 by elapsed time\ntop10 = df.nlargest(10, 'avg_elapsed_us')\n\n# Percentile analysis\ndf['avg_elapsed_us'].quantile([0.5, 0.9, 0.95, 0.99])",
          "script": "Show how to analyse query performance data with pandas.\nDemonstrate finding top resource consumers.\nShow percentile analysis for SLA monitoring.\nIdentify outlier queries.",
          "examples": [
            {
              "name": "Top Queries",
              "code": "import pandas as pd\nimport numpy as np\n\n# Simulated query stats (normally from DMV)\nnp.random.seed(42)\nn_queries = 50\ndata = {\n    'query_hash': [f'0x{i:08X}' for i in range(n_queries)],\n    'execution_count': np.random.randint(1, 50000, n_queries),\n    'total_elapsed_us': np.random.exponential(500000, n_queries).astype(int),\n    'total_reads': np.random.exponential(100000, n_queries).astype(int),\n}\ndf = pd.DataFrame(data)\n\n# Calculate per-execution metrics\ndf['avg_elapsed_ms'] = (df['total_elapsed_us'] / df['execution_count'] / 1000).round(2)\ndf['avg_reads'] = (df['total_reads'] / df['execution_count']).round(0)\n\n# Top 10 by average elapsed time\nprint('Top 10 Slowest Queries (by avg elapsed time)')\nprint('=' * 60)\ntop10 = df.nlargest(10, 'avg_elapsed_ms')\nprint(top10[['query_hash', 'execution_count', 'avg_elapsed_ms', 'avg_reads']].to_string(index=False))\n\n# Percentile analysis\nprint(f'\\nElapsed Time Percentiles (ms):')\npercentiles = df['avg_elapsed_ms'].quantile([0.5, 0.9, 0.95, 0.99])\nfor p, v in percentiles.items():\n    print(f'  P{int(p*100)}: {v:.2f} ms')"
            },
            {
              "name": "Outlier Detection",
              "code": "import pandas as pd\nimport numpy as np\n\n# Simulated performance data\nnp.random.seed(123)\nn = 100\ndata = {\n    'query_id': range(n),\n    'avg_duration_ms': np.concatenate([\n        np.random.normal(50, 15, 90),   # Normal queries\n        np.random.normal(500, 100, 10)  # Outlier queries\n    ])\n}\ndf = pd.DataFrame(data)\n\n# Z-score outlier detection\nmean = df['avg_duration_ms'].mean()\nstd = df['avg_duration_ms'].std()\ndf['z_score'] = ((df['avg_duration_ms'] - mean) / std).round(2)\ndf['is_outlier'] = df['z_score'].abs() > 2\n\nprint('Query Performance Outlier Analysis')\nprint('=' * 50)\nprint(f'Total queries: {len(df)}')\nprint(f'Mean duration: {mean:.1f} ms')\nprint(f'Std deviation: {std:.1f} ms')\nprint(f'Outliers (|z| > 2): {df[\"is_outlier\"].sum()}')\nprint(f'\\nOutlier Queries:')\noutliers = df[df['is_outlier']].sort_values('avg_duration_ms', ascending=False)\nprint(outliers[['query_id', 'avg_duration_ms', 'z_score']].head(10).to_string(index=False))"
            }
          ]
        },
        {
          "id": "m3s3",
          "title": "3.3 Visualising Metrics with Matplotlib",
          "brief": "<h4>Visualising Metrics with Matplotlib</h4><ul><li><code>import matplotlib.pyplot as plt</code> — plotting library</li><li>Bar charts: compare wait stats, database sizes</li><li>Line plots: CPU/memory over time</li><li>Histograms: query duration distribution</li><li><code>df.plot()</code> — pandas built-in plotting</li><li>Save plots: <code>plt.savefig('report.png')</code></li></ul>",
          "description": "<p><strong>Visualisation transforms raw numbers into insights that are immediately understandable.</strong></p><p>Matplotlib integrates with pandas to create professional charts from your DBA data. Use visualisations for reports, dashboards, and identifying patterns that aren't obvious in tabular data.</p><ul><li><strong>Bar charts</strong> — compare metrics across databases or wait types</li><li><strong>Line plots</strong> — show trends over time (CPU, memory, IO)</li><li><strong>Histograms</strong> — understand distribution of query durations</li><li><strong>Heatmaps</strong> — visualise activity patterns by hour/day</li></ul>",
          "syntax": "import matplotlib.pyplot as plt\nimport pandas as pd\n\n# Bar chart - wait stats\ndf.plot(kind='bar', x='wait_type', y='wait_time_ms')\nplt.title('Top Wait Types')\nplt.ylabel('Wait Time (ms)')\nplt.tight_layout()\nplt.savefig('wait_stats.png')\n\n# Line plot - CPU over time\nplt.plot(timestamps, cpu_values)\nplt.axhline(y=85, color='r', linestyle='--', label='Threshold')\nplt.title('CPU Usage Over Time')\nplt.legend()\nplt.show()",
          "script": "Show how to create DBA-relevant visualisations.\nDemonstrate bar charts for comparisons.\nShow line plots for time series.\nExplain when to use each chart type.",
          "examples": [
            {
              "name": "Chart Types",
              "code": "# Matplotlib chart types for DBA data\n# (In browser, we show the code patterns)\n\nprint('Matplotlib Chart Types for DBAs')\nprint('=' * 50)\n\nchart_types = [\n    ('Bar Chart', 'plt.bar(x, y)', 'Compare: wait stats, DB sizes, query counts'),\n    ('Line Plot', 'plt.plot(x, y)', 'Trends: CPU over time, growth rates'),\n    ('Histogram', 'plt.hist(data, bins=50)', 'Distribution: query durations, IO latency'),\n    ('Scatter', 'plt.scatter(x, y)', 'Correlation: reads vs duration'),\n    ('Heatmap', 'plt.imshow(matrix)', 'Patterns: activity by hour/day'),\n    ('Box Plot', 'plt.boxplot(data)', 'Outliers: response time by database'),\n]\n\nfor name, code, use_case in chart_types:\n    print(f'\\n{name}:')\n    print(f'  Code: {code}')\n    print(f'  Use:  {use_case}')\n\nprint('\\n\\nSave pattern:')\nprint('  plt.figure(figsize=(12, 6))')\nprint('  plt.title(\"DBA Report\")')\nprint('  plt.tight_layout()')\nprint('  plt.savefig(\"report.png\", dpi=150)')"
            },
            {
              "name": "Data for Plotting",
              "code": "import pandas as pd\nimport numpy as np\n\n# Generate time-series data for plotting\nnp.random.seed(42)\nhours = 24\ntime_labels = [f'{h:02d}:00' for h in range(hours)]\n\n# Simulated CPU data with daily pattern\nbase_cpu = 30 + 40 * np.sin(np.linspace(0, np.pi, hours))  # Peak at midday\nnoise = np.random.normal(0, 5, hours)\ncpu_data = np.clip(base_cpu + noise, 5, 100)\n\ndf = pd.DataFrame({\n    'hour': time_labels,\n    'cpu_pct': cpu_data.round(1),\n    'memory_pct': (60 + np.random.normal(0, 3, hours)).round(1),\n    'active_sessions': (50 + 100 * np.sin(np.linspace(0, np.pi, hours)) + np.random.normal(0, 10, hours)).astype(int)\n})\n\nprint('Hourly Server Metrics (for plotting)')\nprint('=' * 55)\nprint(df.to_string(index=False))\nprint(f'\\nPeak CPU: {df[\"cpu_pct\"].max():.1f}% at {df.loc[df[\"cpu_pct\"].idxmax(), \"hour\"]}')\nprint(f'Peak Sessions: {df[\"active_sessions\"].max()} at {df.loc[df[\"active_sessions\"].idxmax(), \"hour\"]}')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 4: Introduction to AI & Machine Learning",
      "sections": [
        {
          "id": "m4s1",
          "title": "4.1 AI/ML Concepts for DBAs",
          "brief": "<h4>AI/ML Concepts for DBAs</h4><ul><li>AI = machines performing tasks that normally require human intelligence</li><li>ML = subset of AI that learns patterns from data</li><li>DBA data is perfect for ML: structured, time-series, high volume</li><li>Features = input columns, Labels = what we predict</li><li>Training = learning patterns, Inference = making predictions</li><li>Key algorithms: regression, classification, clustering, anomaly detection</li></ul>",
          "description": "<p><strong>AI and Machine Learning are not just buzzwords — they solve real DBA problems.</strong></p><p>As a DBA, you sit on a goldmine of structured data: performance metrics, query patterns, growth trends, and error logs. ML algorithms can find patterns in this data that humans would miss.</p><ul><li><strong>Regression</strong> — predict continuous values (database growth, resource usage)</li><li><strong>Classification</strong> — categorise items (query type, alert severity)</li><li><strong>Clustering</strong> — group similar items (workload patterns, query families)</li><li><strong>Anomaly detection</strong> — find unusual patterns (performance spikes, security events)</li></ul><p>The key insight: you don't need to be a data scientist. You need to know enough to apply these tools to DBA problems.</p>",
          "syntax": "# ML Workflow for DBAs\n# 1. Collect data (DMVs, monitoring)\n# 2. Prepare features (clean, transform)\n# 3. Choose algorithm (based on problem type)\n# 4. Train model (fit to historical data)\n# 5. Evaluate (accuracy, precision, recall)\n# 6. Deploy (serve predictions)\n\n# Problem types:\n# Regression: predict_growth(days=30) -> 150 GB\n# Classification: classify_query(features) -> 'slow'\n# Clustering: cluster_workloads(data) -> groups\n# Anomaly: detect_anomaly(metrics) -> True/False",
          "script": "Introduce AI/ML concepts in DBA context.\nExplain the difference between AI, ML, and Deep Learning.\nShow how DBA data maps to ML problems.\nKeep it practical, not theoretical.",
          "examples": [
            {
              "name": "ML Problem Types",
              "code": "# Mapping DBA problems to ML algorithms\n\nml_problems = {\n    'Regression (predict numbers)': [\n        'Predict database size in 30 days',\n        'Forecast CPU usage for next week',\n        'Estimate query execution time',\n    ],\n    'Classification (predict categories)': [\n        'Is this query slow/medium/fast?',\n        'Will this backup succeed or fail?',\n        'Is this login attempt suspicious?',\n    ],\n    'Clustering (find groups)': [\n        'Group similar queries together',\n        'Identify workload patterns (peak/off-peak)',\n        'Cluster databases by usage profile',\n    ],\n    'Anomaly Detection (find unusual)': [\n        'Detect unusual CPU spikes',\n        'Find abnormal query patterns',\n        'Identify security anomalies in logins',\n    ]\n}\n\nfor problem_type, examples in ml_problems.items():\n    print(f'\\n{problem_type}:')\n    for ex in examples:\n        print(f'  - {ex}')"
            },
            {
              "name": "ML Vocabulary",
              "code": "# ML vocabulary for DBAs\n\nvocab = [\n    ('Feature', 'Input column (e.g., cpu_pct, query_reads, time_of_day)'),\n    ('Label/Target', 'What we predict (e.g., is_slow, growth_mb)'),\n    ('Training Data', 'Historical data used to learn patterns'),\n    ('Test Data', 'Held-out data to evaluate model quality'),\n    ('Model', 'The learned pattern (like a formula)'),\n    ('Training (fit)', 'Process of learning from data'),\n    ('Inference (predict)', 'Using trained model on new data'),\n    ('Overfitting', 'Model memorises training data, fails on new data'),\n    ('Accuracy', 'Percentage of correct predictions'),\n    ('Feature Engineering', 'Creating useful input columns from raw data'),\n]\n\nprint('ML Vocabulary for DBAs')\nprint('=' * 60)\nfor term, definition in vocab:\n    print(f'\\n  {term}:')\n    print(f'    {definition}')"
            }
          ]
        },
        {
          "id": "m4s2",
          "title": "4.2 Supervised vs Unsupervised Learning",
          "brief": "<h4>Supervised vs Unsupervised Learning</h4><ul><li><strong>Supervised</strong>: labelled data — input/output pairs for training</li><li>Classification: predict categories (slow/fast query)</li><li>Regression: predict numbers (future DB size)</li><li><strong>Unsupervised</strong>: no labels — find hidden patterns</li><li>Clustering: group similar workloads</li><li>Anomaly detection: find outliers in metrics</li></ul>",
          "description": "<p><strong>Understanding the difference between supervised and unsupervised learning helps you choose the right approach for each DBA problem.</strong></p><p><strong>Supervised Learning</strong> requires labelled training data — you provide examples of inputs and correct outputs. The model learns the mapping.</p><p><strong>Unsupervised Learning</strong> works without labels — the algorithm discovers structure in the data on its own.</p><p>For DBAs:</p><ul><li>Use <strong>supervised</strong> when you have historical examples with known outcomes (queries that timed out, backups that failed)</li><li>Use <strong>unsupervised</strong> when you want to discover patterns you haven't defined yet (unusual behaviour, natural groupings)</li></ul>",
          "syntax": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.cluster import KMeans\nfrom sklearn.ensemble import IsolationForest\n\n# Supervised: Classification\nclf = RandomForestClassifier()\nclf.fit(X_train, y_train)  # Learn from labelled data\npredictions = clf.predict(X_new)\n\n# Unsupervised: Clustering\nkmeans = KMeans(n_clusters=3)\nclusters = kmeans.fit_predict(X)  # No labels needed\n\n# Unsupervised: Anomaly Detection\niso = IsolationForest(contamination=0.05)\nanomalies = iso.fit_predict(X)  # -1 = anomaly",
          "script": "Explain supervised vs unsupervised with DBA examples.\nShow when to use each approach.\nDemonstrate simple examples of both.",
          "examples": [
            {
              "name": "Supervised Example",
              "code": "import numpy as np\n\n# Supervised Learning: Predict if query will be slow\n# Features: logical_reads, cpu_time_ms, execution_count\n# Label: is_slow (True/False)\n\n# Training data (historical queries with known outcomes)\nnp.random.seed(42)\nn = 20\nreads = np.random.randint(100, 100000, n)\ncpu_ms = np.random.randint(1, 5000, n)\nis_slow = (reads > 50000) | (cpu_ms > 2000)  # Our label\n\nprint('Supervised Learning: Query Performance Classification')\nprint('=' * 55)\nprint(f'{\"Reads\":<10} {\"CPU(ms)\":<10} {\"Is Slow\"}')\nprint('-' * 30)\nfor i in range(min(10, n)):\n    print(f'{reads[i]:<10} {cpu_ms[i]:<10} {is_slow[i]}')\n\nprint(f'\\nTotal queries: {n}')\nprint(f'Slow queries: {is_slow.sum()} ({is_slow.sum()/n*100:.0f}%)')\nprint(f'Fast queries: {(~is_slow).sum()} ({(~is_slow).sum()/n*100:.0f}%)')\nprint('\\nModel learns: high reads OR high CPU -> slow')"
            },
            {
              "name": "Unsupervised Example",
              "code": "import numpy as np\n\n# Unsupervised: Cluster workload patterns\n# No labels - algorithm finds natural groups\n\nnp.random.seed(42)\n\n# Simulated hourly metrics for different workload types\n# Group 1: OLTP (high transactions, low reads)\n# Group 2: Reporting (low transactions, high reads)\n# Group 3: Batch (periodic spikes)\n\nworkloads = []\nfor _ in range(10):  # OLTP\n    workloads.append(('?', np.random.randint(5000, 10000), np.random.randint(100, 500)))\nfor _ in range(10):  # Reporting\n    workloads.append(('?', np.random.randint(100, 500), np.random.randint(5000, 20000)))\nfor _ in range(5):   # Batch\n    workloads.append(('?', np.random.randint(2000, 8000), np.random.randint(2000, 8000)))\n\nprint('Unsupervised: Workload Clustering')\nprint('=' * 50)\nprint(f'{\"Cluster\":<10} {\"Transactions\":<15} {\"Reads\"}')\nprint('-' * 35)\nfor cluster, txn, reads in workloads[:8]:\n    print(f'{cluster:<10} {txn:<15} {reads}')\nprint('...')\nprint(f'\\nTotal samples: {len(workloads)}')\nprint('\\nK-Means would discover 3 natural clusters:')\nprint('  Cluster 0: High txn, low reads (OLTP)')\nprint('  Cluster 1: Low txn, high reads (Reporting)')\nprint('  Cluster 2: Mixed (Batch processing)')"
            }
          ]
        },
        {
          "id": "m4s3",
          "title": "4.3 Your First ML Model (scikit-learn)",
          "brief": "<h4>Your First ML Model (scikit-learn)</h4><ul><li><code>from sklearn.ensemble import RandomForestClassifier</code></li><li><code>train_test_split(X, y, test_size=0.2)</code> — split data</li><li><code>model.fit(X_train, y_train)</code> — train the model</li><li><code>model.predict(X_test)</code> — make predictions</li><li><code>accuracy_score(y_test, predictions)</code> — evaluate</li><li>Full pipeline: load -> split -> train -> evaluate -> predict</li></ul>",
          "description": "<p><strong>scikit-learn makes building ML models straightforward with a consistent API.</strong></p><p>Every model in scikit-learn follows the same pattern: create, fit, predict. This consistency means once you learn one model, you can easily switch to others.</p><p>The standard ML workflow:</p><ol><li><strong>Prepare data</strong> — features (X) and labels (y)</li><li><strong>Split</strong> — training set (80%) and test set (20%)</li><li><strong>Train</strong> — model.fit(X_train, y_train)</li><li><strong>Predict</strong> — model.predict(X_test)</li><li><strong>Evaluate</strong> — compare predictions to actual values</li></ol>",
          "syntax": "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# Prepare data\nX = df[['reads', 'cpu_ms', 'exec_count']]  # Features\ny = df['is_slow']                            # Label\n\n# Split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Train\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# Predict & Evaluate\npredictions = model.predict(X_test)\nprint(classification_report(y_test, predictions))",
          "script": "Build first ML model step by step.\nUse query classification as the example.\nShow the full pipeline from data to evaluation.\nExplain each metric in the classification report.",
          "examples": [
            {
              "name": "Full ML Pipeline",
              "code": "import numpy as np\n\n# Simulated ML pipeline for query classification\nnp.random.seed(42)\n\n# Generate training data\nn_samples = 200\nreads = np.random.exponential(5000, n_samples)\ncpu_ms = np.random.exponential(100, n_samples)\nexec_count = np.random.randint(1, 1000, n_samples)\n\n# Label: slow if reads > 10000 OR cpu > 300ms\nis_slow = ((reads > 10000) | (cpu_ms > 300)).astype(int)\n\n# Simulate train/test split\nsplit = int(0.8 * n_samples)\nX_train_reads, X_test_reads = reads[:split], reads[split:]\ny_train, y_test = is_slow[:split], is_slow[split:]\n\n# Simulate model predictions (simplified)\n# In reality: model.fit() then model.predict()\npredictions = ((X_test_reads > 10000)).astype(int)\n\n# Calculate metrics\ncorrect = (predictions == y_test).sum()\ntotal = len(y_test)\naccuracy = correct / total\n\nprint('ML Pipeline: Query Performance Classification')\nprint('=' * 50)\nprint(f'Training samples: {split}')\nprint(f'Test samples: {total}')\nprint(f'\\nResults:')\nprint(f'  Correct predictions: {correct}/{total}')\nprint(f'  Accuracy: {accuracy:.1%}')\nprint(f'\\nConfusion Matrix:')\ntp = ((predictions == 1) & (y_test == 1)).sum()\nfp = ((predictions == 1) & (y_test == 0)).sum()\ntn = ((predictions == 0) & (y_test == 0)).sum()\nfn = ((predictions == 0) & (y_test == 1)).sum()\nprint(f'  True Positives:  {tp} (correctly identified slow)')\nprint(f'  True Negatives:  {tn} (correctly identified fast)')\nprint(f'  False Positives: {fp} (false alarm)')\nprint(f'  False Negatives: {fn} (missed slow query)')"
            },
            {
              "name": "Model Comparison",
              "code": "import numpy as np\n\n# Compare different ML algorithms for DBA tasks\n\nmodels = [\n    ('Random Forest', 'Classification/Regression', 0.92, 'Query classification, failure prediction'),\n    ('Gradient Boosting', 'Classification/Regression', 0.94, 'Performance prediction, ranking'),\n    ('Linear Regression', 'Regression', 0.85, 'Growth prediction, trend analysis'),\n    ('Isolation Forest', 'Anomaly Detection', 0.88, 'Unusual performance patterns'),\n    ('K-Means', 'Clustering', None, 'Workload grouping, pattern discovery'),\n    ('DBSCAN', 'Clustering/Anomaly', None, 'Density-based anomaly detection'),\n]\n\nprint('ML Algorithm Comparison for DBA Tasks')\nprint('=' * 70)\nprint(f'{\"Algorithm\":<20} {\"Type\":<25} {\"Accuracy\":<10} {\"DBA Use Case\"}')\nprint('-' * 70)\nfor name, mtype, acc, use in models:\n    acc_str = f'{acc:.0%}' if acc else 'N/A'\n    print(f'{name:<20} {mtype:<25} {acc_str:<10} {use}')\n\nprint('\\nRecommendation for beginners: Start with Random Forest')\nprint('  - Works well out of the box')\nprint('  - Handles mixed feature types')\nprint('  - Provides feature importance')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 5: Predictive Analytics for SQL Server",
      "sections": [
        {
          "id": "m5s1",
          "title": "5.1 Predicting Database Growth",
          "brief": "<h4>Predicting Database Growth</h4><ul><li>Collect historical size data from <code>msdb.dbo.backupset</code></li><li>Linear regression: <code>LinearRegression().fit(days, sizes)</code></li><li>Predict when disk will be full</li><li>Polynomial regression for non-linear growth</li><li>Confidence intervals for planning</li><li>Automate alerts: 'Disk full in N days'</li></ul>",
          "description": "<p><strong>Predicting database growth lets you plan capacity before running out of space.</strong></p><p>By fitting a regression model to historical size data, you can forecast future growth and proactively request storage or archive data.</p><ul><li>Collect size snapshots over time</li><li>Fit linear or polynomial regression</li><li>Predict future size at any date</li><li>Calculate days until threshold</li></ul>",
          "syntax": "from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Historical data: days since start, size in GB\ndays = np.array([0, 30, 60, 90, 120]).reshape(-1, 1)\nsizes = np.array([100, 115, 128, 145, 160])\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(days, sizes)\n\n# Predict 6 months out\nfuture = np.array([[180], [270], [365]])\npredicted = model.predict(future)\nprint(f'Growth rate: {model.coef_[0]:.2f} GB/day')",
          "script": "Show how to predict database growth with linear regression.\nUse backup history data as source.\nCalculate days until disk full.\nDiscuss non-linear growth patterns.",
          "examples": [
            {
              "name": "Growth Prediction",
              "code": "import numpy as np\n\n# Simulated database growth data\nnp.random.seed(42)\ndays = np.arange(0, 180, 7)  # Weekly snapshots\nbase_growth = 100 + 0.5 * days  # 0.5 GB/day growth\nnoise = np.random.normal(0, 2, len(days))\nsizes = base_growth + noise\n\n# Simple linear regression (manual)\nn = len(days)\nslope = (n * np.sum(days * sizes) - np.sum(days) * np.sum(sizes)) / (n * np.sum(days**2) - np.sum(days)**2)\nintercept = (np.sum(sizes) - slope * np.sum(days)) / n\n\nprint('Database Growth Prediction')\nprint('=' * 50)\nprint(f'Current size: {sizes[-1]:.1f} GB')\nprint(f'Growth rate: {slope:.3f} GB/day ({slope*30:.1f} GB/month)')\nprint(f'\\nPredictions:')\nfor future_days in [30, 60, 90, 180, 365]:\n    predicted = intercept + slope * (days[-1] + future_days)\n    print(f'  +{future_days:3d} days: {predicted:.1f} GB')\n\n# When will we hit 500 GB?\ntarget = 500\ndays_to_target = (target - sizes[-1]) / slope\nprint(f'\\nDisk capacity: 500 GB')\nprint(f'Days until full: {days_to_target:.0f} days')\nprint(f'Action needed by: ~{days_to_target/30:.0f} months from now')"
            },
            {
              "name": "Multiple DBs",
              "code": "import numpy as np\n\n# Predict growth for multiple databases\nnp.random.seed(123)\n\ndatabases = [\n    ('OrdersDB', 250, 1.2, 500),\n    ('ArchiveDB', 800, 3.5, 2000),\n    ('LogDB', 150, 0.8, 300),\n    ('ReportDB', 400, 0.3, 1000),\n    ('TempAnalytics', 50, 2.0, 200),\n]\n\nprint('Multi-Database Growth Forecast')\nprint('=' * 65)\nprint(f'{\"Database\":<15} {\"Current GB\":<12} {\"Rate GB/day\":<12} {\"Limit GB\":<10} {\"Days Left\"}')\nprint('-' * 65)\n\nalerts = []\nfor name, current, rate, limit in databases:\n    days_left = (limit - current) / rate if rate > 0 else float('inf')\n    status = '!!!' if days_left < 60 else '!' if days_left < 180 else ''\n    print(f'{name:<15} {current:<12.0f} {rate:<12.1f} {limit:<10.0f} {days_left:>6.0f} {status}')\n    if days_left < 90:\n        alerts.append((name, days_left))\n\nif alerts:\n    print(f'\\n*** ALERTS ***')\n    for name, days in alerts:\n        print(f'  {name}: Only {days:.0f} days until capacity limit!')"
            }
          ]
        },
        {
          "id": "m5s2",
          "title": "5.2 Anomaly Detection in Performance Metrics",
          "brief": "<h4>Anomaly Detection in Performance Metrics</h4><ul><li>Isolation Forest: <code>IsolationForest(contamination=0.05)</code></li><li>Z-score method: flag values > 3 standard deviations</li><li>Apply to: CPU spikes, unusual wait patterns, login anomalies</li><li>Rolling window baselines for time-aware detection</li><li>Reduce false positives with dynamic thresholds</li><li>Integrate with alerting systems</li></ul>",
          "description": "<p><strong>Anomaly detection automatically identifies unusual patterns in your SQL Server metrics.</strong></p><p>Instead of static thresholds (CPU > 90%), ML-based anomaly detection learns what's normal for YOUR environment and flags deviations.</p><ul><li><strong>Isolation Forest</strong> — tree-based, works well with high-dimensional data</li><li><strong>Z-score</strong> — simple statistical approach for single metrics</li><li><strong>DBSCAN</strong> — density-based, finds clusters and outliers</li><li><strong>Rolling baselines</strong> — account for time-of-day patterns</li></ul>",
          "syntax": "from sklearn.ensemble import IsolationForest\nimport numpy as np\n\n# Fit anomaly detector\nmodel = IsolationForest(contamination=0.05, random_state=42)\nmodel.fit(metrics_data)\n\n# Predict: 1 = normal, -1 = anomaly\npredictions = model.predict(new_data)\nanomalies = new_data[predictions == -1]",
          "script": "Show anomaly detection for DBA metrics.\nCompare Isolation Forest vs Z-score.\nDemonstrate on CPU/wait stats data.\nDiscuss reducing false positives.",
          "examples": [
            {
              "name": "Isolation Forest",
              "code": "import numpy as np\n\n# Simulated server metrics with anomalies\nnp.random.seed(42)\nn_normal = 95\nn_anomaly = 5\n\n# Normal metrics\ncpu_normal = np.random.normal(45, 10, n_normal)\nmem_normal = np.random.normal(60, 8, n_normal)\nio_normal = np.random.normal(30, 12, n_normal)\n\n# Anomalous metrics (spikes)\ncpu_anomaly = np.random.normal(95, 3, n_anomaly)\nmem_anomaly = np.random.normal(95, 2, n_anomaly)\nio_anomaly = np.random.normal(90, 5, n_anomaly)\n\ncpu = np.concatenate([cpu_normal, cpu_anomaly])\nmem = np.concatenate([mem_normal, mem_anomaly])\nio = np.concatenate([io_normal, io_anomaly])\n\n# Simple anomaly detection (Z-score based)\ncpu_mean, cpu_std = cpu[:n_normal].mean(), cpu[:n_normal].std()\nanomalies = np.abs(cpu - cpu_mean) > 2.5 * cpu_std\n\nprint('Anomaly Detection Results')\nprint('=' * 50)\nprint(f'Total samples: {len(cpu)}')\nprint(f'Detected anomalies: {anomalies.sum()}')\nprint(f'Actual anomalies: {n_anomaly}')\nprint(f'\\nAnomaly details:')\nfor i in np.where(anomalies)[0]:\n    print(f'  Sample {i}: CPU={cpu[i]:.1f}% Mem={mem[i]:.1f}% IO={io[i]:.1f}%')"
            },
            {
              "name": "Dynamic Baseline",
              "code": "import numpy as np\n\n# Dynamic baseline: different thresholds by time of day\nnp.random.seed(42)\n\n# Hourly baselines (learned from historical data)\nhourly_baseline = {\n    'business_hours': {'cpu_mean': 65, 'cpu_std': 12},\n    'off_hours': {'cpu_mean': 25, 'cpu_std': 8},\n    'batch_window': {'cpu_mean': 80, 'cpu_std': 10},\n}\n\n# Current readings\nreadings = [\n    (9, 72, 'business_hours'),\n    (10, 95, 'business_hours'),  # Anomaly!\n    (14, 60, 'business_hours'),\n    (22, 28, 'off_hours'),\n    (23, 75, 'off_hours'),       # Anomaly!\n    (2, 85, 'batch_window'),\n    (3, 82, 'batch_window'),\n]\n\nprint('Dynamic Baseline Anomaly Detection')\nprint('=' * 55)\nprint(f'{\"Hour\":<6} {\"CPU%\":<6} {\"Period\":<16} {\"Baseline\":<12} {\"Status\"}')\nprint('-' * 55)\nfor hour, cpu, period in readings:\n    baseline = hourly_baseline[period]\n    z_score = abs(cpu - baseline['cpu_mean']) / baseline['cpu_std']\n    status = 'ANOMALY' if z_score > 2.5 else 'Normal'\n    bl_str = f\"{baseline['cpu_mean']}+/-{baseline['cpu_std']}\"\n    flag = ' <<<' if status == 'ANOMALY' else ''\n    print(f'{hour:02d}:00 {cpu:<6} {period:<16} {bl_str:<12} {status}{flag}')\n\nprint('\\nKey: Static threshold (CPU>90) would miss the 23:00 anomaly')\nprint('     Dynamic baseline catches it because off-hours CPU is normally ~25%')"
            }
          ]
        },
        {
          "id": "m5s3",
          "title": "5.3 Forecasting Resource Usage",
          "brief": "<h4>Forecasting Resource Usage</h4><ul><li>Time series forecasting with seasonal patterns</li><li>Prophet / ARIMA for CPU, memory, IO predictions</li><li>Decompose: trend + seasonality + residual</li><li>7-day and 30-day forecasts for capacity planning</li><li>Identify peak usage windows automatically</li><li>Schedule maintenance during predicted low-usage periods</li></ul>",
          "description": "<p><strong>Resource forecasting helps you plan maintenance windows and capacity upgrades.</strong></p><p>SQL Server workloads have predictable patterns: daily cycles, weekly patterns, and monthly trends. Time series models capture these patterns to predict future resource usage.</p><ul><li><strong>Trend</strong> — long-term direction (growing, stable, declining)</li><li><strong>Seasonality</strong> — repeating patterns (daily, weekly)</li><li><strong>Residual</strong> — random variation</li></ul>",
          "syntax": "# Time series decomposition\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\nresult = seasonal_decompose(cpu_series, period=24)  # Daily\ntrend = result.trend\nseasonal = result.seasonal\nresidual = result.resid\n\n# Simple forecast with Prophet\nfrom prophet import Prophet\nmodel = Prophet()\nmodel.fit(df[['ds', 'y']])  # ds=datetime, y=value\nfuture = model.make_future_dataframe(periods=168)  # 7 days\nforecast = model.predict(future)",
          "script": "Show time series forecasting for DBA metrics.\nDemonstrate seasonal decomposition.\nPredict resource usage for next 7 days.\nIdentify optimal maintenance windows.",
          "examples": [
            {
              "name": "Seasonal Pattern",
              "code": "import numpy as np\n\n# Simulated daily CPU pattern with weekly seasonality\nnp.random.seed(42)\nhours = 168  # 1 week\nt = np.arange(hours)\n\n# Daily pattern (peak at 10am-2pm)\ndaily = 30 * np.sin(2 * np.pi * (t % 24 - 6) / 24)\ndaily = np.clip(daily, 0, 30)\n\n# Weekly pattern (lower on weekends)\nweekday_factor = np.array([1.0, 1.0, 1.0, 1.0, 1.0, 0.4, 0.3])\nweekly = np.array([weekday_factor[int(h/24)] for h in t])\n\n# Combined\ncpu = 30 + daily * weekly + np.random.normal(0, 3, hours)\ncpu = np.clip(cpu, 5, 100)\n\n# Identify patterns\ndays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\nprint('Weekly CPU Pattern Summary')\nprint('=' * 45)\nfor d in range(7):\n    day_data = cpu[d*24:(d+1)*24]\n    print(f'{days[d]}: avg={day_data.mean():.1f}% peak={day_data.max():.1f}% low={day_data.min():.1f}%')\n\nprint(f'\\nBest maintenance window: Saturday 02:00-06:00')\nprint(f'  Average CPU during window: {cpu[5*24+2:5*24+6].mean():.1f}%')"
            },
            {
              "name": "7-Day Forecast",
              "code": "import numpy as np\n\n# Simple forecasting using moving average + trend\nnp.random.seed(42)\n\n# Historical daily averages (30 days)\nhistorical = 45 + np.arange(30) * 0.3 + np.random.normal(0, 3, 30)\n\n# Calculate trend\ntrend_per_day = (historical[-7:].mean() - historical[:7].mean()) / 23\n\n# 7-day forecast\nlast_week = historical[-7:]  # Use last week as seasonal pattern\nforecast = []\nfor d in range(7):\n    predicted = last_week[d] + trend_per_day * (d + 1)\n    forecast.append(predicted)\n\nprint('CPU Usage 7-Day Forecast')\nprint('=' * 45)\nprint(f'Current avg: {historical[-1]:.1f}%')\nprint(f'Trend: +{trend_per_day:.2f}%/day')\nprint(f'\\nForecast:')\ndays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\nfor d, (day, val) in enumerate(zip(days, forecast)):\n    bar = '#' * int(val / 2)\n    alert = ' [!]' if val > 80 else ''\n    print(f'  {day}: {val:5.1f}% {bar}{alert}')\n\nprint(f'\\nPeak predicted: {max(forecast):.1f}% on {days[np.argmax(forecast)]}')\nif max(forecast) > 80:\n    print('  WARNING: Consider scaling up before peak')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 6: AI for Performance Tuning",
      "sections": [
        {
          "id": "m6s1",
          "title": "6.1 Query Performance Classification",
          "brief": "<h4>Query Performance Classification</h4><ul><li>Classify queries as Fast/Medium/Slow/Critical</li><li>Features: logical_reads, cpu_time, duration, exec_count</li><li>Random Forest classifier with DMV training data</li><li>Auto-prioritise tuning efforts on worst queries</li><li>Feature importance reveals what makes queries slow</li><li>Retrain periodically as workload evolves</li></ul>",
          "description": "<p><strong>ML classification automatically categorises queries by performance impact, helping you focus tuning efforts where they matter most.</strong></p>",
          "syntax": "from sklearn.ensemble import RandomForestClassifier\n\n# Features from sys.dm_exec_query_stats\nfeatures = ['avg_reads', 'avg_cpu_ms', 'avg_duration_ms', 'exec_count']\nX = df[features]\ny = df['performance_class']  # fast/medium/slow/critical\n\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# Classify new queries\nnew_query_class = model.predict(new_query_features)",
          "script": "Show how to classify queries by performance.\nTrain on DMV data.\nDemonstrate feature importance.",
          "examples": [
            {
              "name": "Query Classifier",
              "code": "import numpy as np\n\n# Simulated query classification\nnp.random.seed(42)\n\nqueries = [\n    {'reads': 150, 'cpu_ms': 5, 'duration_ms': 10, 'class': 'Fast'},\n    {'reads': 5000, 'cpu_ms': 50, 'duration_ms': 200, 'class': 'Medium'},\n    {'reads': 50000, 'cpu_ms': 500, 'duration_ms': 2000, 'class': 'Slow'},\n    {'reads': 500000, 'cpu_ms': 5000, 'duration_ms': 30000, 'class': 'Critical'},\n    {'reads': 200, 'cpu_ms': 8, 'duration_ms': 15, 'class': 'Fast'},\n    {'reads': 80000, 'cpu_ms': 800, 'duration_ms': 5000, 'class': 'Slow'},\n]\n\nprint('Query Performance Classification')\nprint('=' * 60)\nprint(f'{\"Reads\":<10} {\"CPU(ms)\":<10} {\"Duration\":<12} {\"Class\"}')\nprint('-' * 45)\nfor q in queries:\n    print(f'{q[\"reads\"]:<10} {q[\"cpu_ms\"]:<10} {q[\"duration_ms\"]:<12} {q[\"class\"]}')\n\nprint('\\nFeature Importance (from Random Forest):')\nprint('  avg_logical_reads:  0.42 ****')\nprint('  avg_duration_ms:    0.28 ***')\nprint('  avg_cpu_time_ms:    0.18 **')\nprint('  execution_count:    0.12 *')"
            },
            {
              "name": "Tuning Priority",
              "code": "import numpy as np\n\n# Prioritise tuning based on ML classification + impact\nnp.random.seed(42)\n\nqueries = [\n    ('SELECT * FROM Orders WHERE...', 'Critical', 15000, 89.2),\n    ('UPDATE Inventory SET...', 'Slow', 3200, 45.1),\n    ('INSERT INTO AuditLog...', 'Medium', 98000, 32.8),\n    ('SELECT TOP 10 FROM Products', 'Fast', 50000, 5.2),\n    ('DELETE FROM TempData WHERE...', 'Slow', 500, 18.5),\n]\n\nprint('AI-Driven Query Tuning Priority')\nprint('=' * 65)\nprint(f'{\"Query\":<35} {\"Class\":<10} {\"Execs\":<8} {\"Impact Score\"}')\nprint('-' * 65)\nfor query, cls, execs, impact in sorted(queries, key=lambda x: -x[3]):\n    priority = 'HIGH' if impact > 50 else 'MED' if impact > 20 else 'LOW'\n    print(f'{query:<35} {cls:<10} {execs:<8} {impact:>5.1f} [{priority}]')\n\nprint('\\nImpact Score = class_weight * execution_count * avg_duration')\nprint('Focus tuning on HIGH priority queries first')"
            }
          ]
        },
        {
          "id": "m6s2",
          "title": "6.2 Index Recommendation with ML",
          "brief": "<h4>Index Recommendation with ML</h4><ul><li>Analyse missing index DMVs with ML</li><li>Features: user_seeks, user_scans, avg_impact</li><li>Predict index benefit before creating</li><li>Avoid redundant/overlapping indexes</li><li>Cost-benefit analysis: maintenance vs query speed</li><li>Automated CREATE INDEX script generation</li></ul>",
          "description": "<p><strong>ML can analyse query patterns and missing index DMVs to recommend optimal indexes.</strong></p>",
          "syntax": "# Analyse missing indexes with ML scoring\nimport pandas as pd\n\ndf = pd.read_sql('''\n    SELECT d.statement, d.equality_columns,\n           d.inequality_columns, d.included_columns,\n           s.user_seeks, s.user_scans, s.avg_user_impact\n    FROM sys.dm_db_missing_index_details d\n    JOIN sys.dm_db_missing_index_groups g ON d.index_handle = g.index_handle\n    JOIN sys.dm_db_missing_index_group_stats s ON g.index_group_handle = s.group_handle\n''', engine)\n\n# ML-based scoring\ndf['ml_score'] = model.predict(df[features])",
          "script": "Show ML-based index recommendation.\nAnalyse missing index DMVs.\nScore and prioritise recommendations.",
          "examples": [
            {
              "name": "Index Scoring",
              "code": "import numpy as np\n\n# ML-scored index recommendations\nrecommendations = [\n    {'table': 'Orders', 'columns': 'CustomerID, OrderDate', 'seeks': 45000, 'impact': 92.5, 'ml_score': 0.95},\n    {'table': 'Products', 'columns': 'CategoryID', 'seeks': 12000, 'impact': 78.3, 'ml_score': 0.82},\n    {'table': 'OrderItems', 'columns': 'ProductID, Quantity', 'seeks': 8500, 'impact': 65.1, 'ml_score': 0.71},\n    {'table': 'Customers', 'columns': 'Email', 'seeks': 3200, 'impact': 45.8, 'ml_score': 0.55},\n    {'table': 'Logs', 'columns': 'CreatedDate', 'seeks': 500, 'impact': 30.2, 'ml_score': 0.28},\n]\n\nprint('ML-Scored Index Recommendations')\nprint('=' * 70)\nprint(f'{\"Table\":<15} {\"Columns\":<25} {\"Seeks\":<8} {\"Impact%\":<9} {\"ML Score\":<9} {\"Action\"}')\nprint('-' * 70)\nfor r in recommendations:\n    action = 'CREATE' if r['ml_score'] > 0.7 else 'REVIEW' if r['ml_score'] > 0.4 else 'SKIP'\n    print(f'{r[\"table\"]:<15} {r[\"columns\"]:<25} {r[\"seeks\"]:<8} {r[\"impact\"]:<9.1f} {r[\"ml_score\"]:<9.2f} {action}')\n\nprint('\\nML Score considers: seeks, impact, table size, existing indexes, write cost')"
            },
            {
              "name": "Index Script Gen",
              "code": "# Generate CREATE INDEX scripts from ML recommendations\n\nrecommendations = [\n    ('Orders', ['CustomerID', 'OrderDate'], ['TotalAmount'], 0.95),\n    ('Products', ['CategoryID'], ['Name', 'Price'], 0.82),\n    ('OrderItems', ['ProductID'], ['Quantity', 'UnitPrice'], 0.71),\n]\n\nprint('-- ML-Generated Index Scripts')\nprint('-- Only creating indexes with ML score > 0.7')\nprint()\nfor table, key_cols, include_cols, score in recommendations:\n    if score > 0.7:\n        idx_name = f'IX_{table}_{\"_\".join(key_cols)}'\n        key_str = ', '.join(key_cols)\n        inc_str = ', '.join(include_cols)\n        print(f'-- ML Score: {score:.2f}')\n        print(f'CREATE NONCLUSTERED INDEX [{idx_name}]')\n        print(f'ON [dbo].[{table}] ({key_str})')\n        print(f'INCLUDE ({inc_str})')\n        print(f'WITH (ONLINE = ON, SORT_IN_TEMPDB = ON);')\n        print()"
            }
          ]
        },
        {
          "id": "m6s3",
          "title": "6.3 Workload Pattern Analysis",
          "brief": "<h4>Workload Pattern Analysis</h4><ul><li>K-Means clustering to identify workload types</li><li>Features: transactions/sec, reads/sec, time of day</li><li>Discover: OLTP, Reporting, Batch, Idle patterns</li><li>Optimise resource allocation per pattern</li><li>Schedule maintenance during low-activity clusters</li><li>Detect workload drift over time</li></ul>",
          "description": "<p><strong>Clustering algorithms discover natural workload patterns in your SQL Server environment.</strong></p>",
          "syntax": "from sklearn.cluster import KMeans\nimport pandas as pd\n\n# Hourly metrics\ndf = pd.read_sql('SELECT hour, batch_requests_sec, page_reads_sec FROM metrics', engine)\n\n# Find 4 workload clusters\nkmeans = KMeans(n_clusters=4, random_state=42)\ndf['cluster'] = kmeans.fit_predict(df[['batch_requests_sec', 'page_reads_sec']])\n\n# Analyse clusters\nfor c in range(4):\n    cluster_data = df[df['cluster'] == c]\n    print(f'Cluster {c}: {len(cluster_data)} hours')",
          "script": "Show workload clustering with K-Means.\nIdentify OLTP vs Reporting vs Batch patterns.\nUse results for maintenance scheduling.",
          "examples": [
            {
              "name": "Workload Clusters",
              "code": "import numpy as np\n\n# Simulated workload clustering results\nnp.random.seed(42)\n\nclusters = [\n    {'name': 'OLTP Peak', 'hours': '09:00-17:00 weekdays', 'batch_req': 5200, 'reads': 1200, 'pct': 35},\n    {'name': 'Reporting', 'hours': '06:00-09:00 weekdays', 'batch_req': 800, 'reads': 15000, 'pct': 15},\n    {'name': 'Batch Jobs', 'hours': '01:00-05:00 daily', 'batch_req': 3000, 'reads': 8000, 'pct': 20},\n    {'name': 'Low Activity', 'hours': '18:00-01:00 + weekends', 'batch_req': 200, 'reads': 300, 'pct': 30},\n]\n\nprint('Workload Pattern Analysis (K-Means Clustering)')\nprint('=' * 65)\nprint(f'{\"Cluster\":<15} {\"Hours\":<25} {\"Batch/s\":<10} {\"Reads/s\":<10} {\"Time%\"}')\nprint('-' * 65)\nfor c in clusters:\n    print(f'{c[\"name\"]:<15} {c[\"hours\"]:<25} {c[\"batch_req\"]:<10} {c[\"reads\"]:<10} {c[\"pct\"]}%')\n\nprint('\\nRecommendations:')\nprint('  Maintenance window: Low Activity cluster (18:00-01:00 weekends)')\nprint('  Scale up: OLTP Peak hours need max resources')\nprint('  Index rebuilds: During Batch Jobs window (already high IO)')"
            },
            {
              "name": "Pattern Detection",
              "code": "import numpy as np\n\n# Detect if current workload matches expected pattern\nnp.random.seed(42)\n\n# Expected patterns by hour (from historical clustering)\nexpected = {\n    9: {'type': 'OLTP', 'batch_req': (4000, 6000), 'reads': (800, 1500)},\n    14: {'type': 'OLTP', 'batch_req': (4000, 6000), 'reads': (800, 1500)},\n    3: {'type': 'Batch', 'batch_req': (2000, 4000), 'reads': (6000, 10000)},\n    22: {'type': 'Low', 'batch_req': (100, 400), 'reads': (100, 500)},\n}\n\n# Current readings\ncurrent = [\n    (9, 5100, 1100, 'Normal'),\n    (14, 5500, 12000, 'DRIFT!'),  # Reads too high for OLTP\n    (3, 3200, 7500, 'Normal'),\n    (22, 4500, 3000, 'DRIFT!'),   # Activity too high for Low period\n]\n\nprint('Workload Drift Detection')\nprint('=' * 55)\nprint(f'{\"Hour\":<6} {\"Batch/s\":<10} {\"Reads/s\":<10} {\"Expected\":<10} {\"Status\"}')\nprint('-' * 55)\nfor hour, batch, reads, status in current:\n    exp = expected[hour]\n    print(f'{hour:02d}:00 {batch:<10} {reads:<10} {exp[\"type\"]:<10} {status}')\n\nprint('\\nDrift detected at 14:00 and 22:00')\nprint('  14:00: Reads 12000 (expected 800-1500) - possible report running')\nprint('  22:00: Batch 4500 (expected 100-400) - unexpected batch job')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 7: AI for Monitoring & Alerting",
      "sections": [
        {
          "id": "m7s1",
          "title": "7.1 Intelligent Alert Systems",
          "brief": "<h4>Intelligent Alert Systems</h4><ul><li>Replace static thresholds with ML-based dynamic baselines</li><li>Learn normal patterns per time-of-day and day-of-week</li><li>Reduce alert fatigue by suppressing expected spikes</li><li>Severity scoring based on deviation magnitude</li><li>Correlation: group related alerts into incidents</li><li>Auto-escalation based on predicted impact</li></ul>",
          "description": "<p><strong>ML-powered alerting reduces noise and catches real issues that static thresholds miss.</strong></p>",
          "syntax": "# Dynamic threshold alerting\ndef check_metric(value, hour, day):\n    baseline = get_baseline(hour, day)  # ML-learned\n    z_score = (value - baseline.mean) / baseline.std\n    if z_score > 3:\n        return 'CRITICAL'\n    elif z_score > 2:\n        return 'WARNING'\n    return 'OK'",
          "script": "Show intelligent alerting vs static thresholds.\nDemonstrate dynamic baselines.\nDiscuss alert fatigue reduction.",
          "examples": [
            {
              "name": "Smart Alerts",
              "code": "import numpy as np\n\n# Compare static vs dynamic alerting\nreadings = [\n    (9, 82, 'business'),   # Normal for business hours\n    (10, 88, 'business'),  # Normal peak\n    (14, 75, 'business'),  # Normal\n    (22, 55, 'off_hours'), # Anomaly! (normally ~20)\n    (3, 15, 'batch'),      # Normal for batch\n    (11, 92, 'business'),  # Slight spike but normal range\n]\n\nbaselines = {'business': (70, 12), 'off_hours': (20, 8), 'batch': (40, 15)}\nstatic_threshold = 85\n\nprint('Static vs Dynamic Alert Comparison')\nprint('=' * 65)\nprint(f'{\"Hour\":<6} {\"CPU%\":<6} {\"Static\":<12} {\"Dynamic\":<12} {\"Better?\"}')\nprint('-' * 50)\nfor hour, cpu, period in readings:\n    # Static\n    static = 'ALERT' if cpu > static_threshold else 'OK'\n    # Dynamic\n    mean, std = baselines[period]\n    z = abs(cpu - mean) / std\n    dynamic = 'ALERT' if z > 2.5 else 'OK'\n    better = '<-- Dynamic wins' if static != dynamic else ''\n    print(f'{hour:02d}:00 {cpu:<6} {static:<12} {dynamic:<12} {better}')\n\nprint('\\nDynamic alerting:')\nprint('  - Catches 22:00 anomaly (55% is high for off-hours)')\nprint('  - Suppresses 10:00/11:00 false alarms (normal for business)')"
            },
            {
              "name": "Alert Correlation",
              "code": "# Correlate multiple alerts into single incident\n\nalerts = [\n    ('10:05:01', 'CPU', 95, 'CRITICAL'),\n    ('10:05:03', 'Memory', 92, 'WARNING'),\n    ('10:05:05', 'Disk IO', 88, 'WARNING'),\n    ('10:05:08', 'Blocking', 15, 'WARNING'),\n    ('10:05:10', 'Long Query', 45000, 'CRITICAL'),\n]\n\nprint('Alert Correlation Engine')\nprint('=' * 55)\nprint(f'\\nRaw Alerts (5 separate notifications):')\nfor time, metric, value, sev in alerts:\n    print(f'  [{sev:<8}] {time} {metric}: {value}')\n\nprint(f'\\n--- AI Correlation ---')\nprint(f'\\nCorrelated Incident #1247:')\nprint(f'  Root Cause: Long-running query causing resource pressure')\nprint(f'  Evidence:')\nprint(f'    - Long query (45s) started at ~10:05')\nprint(f'    - Caused CPU spike to 95%')\nprint(f'    - Memory pressure from large result set')\nprint(f'    - Blocking other sessions (15 blocked)')\nprint(f'  Severity: CRITICAL')\nprint(f'  Suggested Action: Kill SPID or wait for completion')\nprint(f'\\nResult: 5 alerts -> 1 actionable incident')"
            }
          ]
        },
        {
          "id": "m7s2",
          "title": "7.2 Log Analysis with NLP",
          "brief": "<h4>Log Analysis with NLP</h4><ul><li>Parse SQL Server error logs with Python</li><li>TF-IDF vectorisation of log messages</li><li>Classify log entries: Error, Warning, Info, Security</li><li>Cluster similar errors to find patterns</li><li>Sentiment/severity scoring of log messages</li><li>Auto-summarise log activity for daily reports</li></ul>",
          "description": "<p><strong>NLP techniques can automatically categorise and prioritise SQL Server log entries.</strong></p>",
          "syntax": "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.cluster import KMeans\n\n# Vectorise log messages\nvectorizer = TfidfVectorizer(max_features=1000)\nX = vectorizer.fit_transform(log_messages)\n\n# Cluster similar messages\nkmeans = KMeans(n_clusters=10)\nclusters = kmeans.fit_predict(X)",
          "script": "Show NLP for SQL Server log analysis.\nDemonstrate TF-IDF and clustering.\nAuto-categorise error messages.",
          "examples": [
            {
              "name": "Log Classifier",
              "code": "# SQL Server log classification with NLP\n\nlog_entries = [\n    ('Error: 9002, Severity: 17 - Transaction log full for database ReportDB', 'CRITICAL'),\n    ('Login failed for user sa. Reason: Password did not match', 'SECURITY'),\n    ('I/O request taking longer than 15 seconds on file D:\\\\Data\\\\tempdb.mdf', 'WARNING'),\n    ('Database backup completed successfully. Database: AdventureWorks', 'INFO'),\n    ('Error: 1205 - Transaction was deadlocked on lock resources', 'ERROR'),\n    ('CHECKDB found 0 allocation errors and 0 consistency errors', 'INFO'),\n    ('Login failed for user admin from IP 192.168.1.100', 'SECURITY'),\n    ('Error: 823 - I/O error detected during read at offset', 'CRITICAL'),\n]\n\nprint('NLP Log Classification Results')\nprint('=' * 70)\nprint(f'{\"Category\":<10} {\"Message\"}')\nprint('-' * 70)\nfor msg, category in log_entries:\n    print(f'[{category:<8}] {msg[:60]}...' if len(msg) > 60 else f'[{category:<8}] {msg}')\n\nprint(f'\\nSummary:')\ncategories = {}\nfor _, cat in log_entries:\n    categories[cat] = categories.get(cat, 0) + 1\nfor cat, count in sorted(categories.items(), key=lambda x: -x[1]):\n    print(f'  {cat}: {count}')"
            },
            {
              "name": "Pattern Mining",
              "code": "# Find recurring error patterns in logs\n\nerror_patterns = [\n    {'pattern': 'Transaction log full', 'count': 23, 'databases': ['ReportDB', 'LogDB'], 'trend': 'increasing'},\n    {'pattern': 'Login failed', 'count': 156, 'databases': ['master'], 'trend': 'stable'},\n    {'pattern': 'Deadlock victim', 'count': 8, 'databases': ['OrdersDB'], 'trend': 'new'},\n    {'pattern': 'I/O timeout', 'count': 5, 'databases': ['TempDB'], 'trend': 'decreasing'},\n    {'pattern': 'Memory grant timeout', 'count': 12, 'databases': ['ReportDB'], 'trend': 'increasing'},\n]\n\nprint('Error Pattern Mining (Last 24 Hours)')\nprint('=' * 65)\nprint(f'{\"Pattern\":<25} {\"Count\":<7} {\"Databases\":<20} {\"Trend\"}')\nprint('-' * 65)\nfor p in sorted(error_patterns, key=lambda x: -x['count']):\n    trend_icon = {'increasing': '\\u2191', 'decreasing': '\\u2193', 'stable': '\\u2192', 'new': '\\u2605'}[p['trend']]\n    dbs = ', '.join(p['databases'])\n    print(f'{p[\"pattern\"]:<25} {p[\"count\"]:<7} {dbs:<20} {trend_icon} {p[\"trend\"]}')\n\nprint('\\nAction Items:')\nprint('  1. ReportDB: Log full + memory grants increasing - needs attention')\nprint('  2. OrdersDB: New deadlock pattern - investigate')"
            }
          ]
        },
        {
          "id": "m7s3",
          "title": "7.3 Automated Root Cause Analysis",
          "brief": "<h4>Automated Root Cause Analysis</h4><ul><li>Decision tree model for systematic diagnosis</li><li>Input: symptoms (high CPU, blocking, IO waits)</li><li>Output: probable root cause + recommended action</li><li>Knowledge base of common SQL Server issues</li><li>Automated data collection during incidents</li><li>Generate incident reports with findings</li></ul>",
          "description": "<p><strong>AI can automate the diagnostic process that experienced DBAs follow mentally.</strong></p>",
          "syntax": "# Decision tree for root cause analysis\ndef diagnose(symptoms):\n    if symptoms['cpu'] > 90 and symptoms['blocking'] > 5:\n        return 'Blocking causing CPU pressure'\n    elif symptoms['io_waits'] > 50:\n        return 'Storage subsystem bottleneck'\n    elif symptoms['memory_grants_pending'] > 0:\n        return 'Memory pressure - queries waiting for grants'\n    # ... more rules or ML model",
          "script": "Show automated root cause analysis.\nBuild a decision tree for common issues.\nDemonstrate systematic diagnosis.",
          "examples": [
            {
              "name": "RCA Engine",
              "code": "# Automated Root Cause Analysis\n\ndef diagnose_issue(metrics):\n    findings = []\n    root_cause = 'Unknown'\n    \n    if metrics['cpu_pct'] > 90:\n        findings.append('High CPU utilisation')\n        if metrics['parallelism_waits'] > 30:\n            root_cause = 'Excessive parallelism (CXPACKET waits)'\n            findings.append('High CXPACKET waits - consider MAXDOP')\n        elif metrics['compilation_pct'] > 20:\n            root_cause = 'Excessive query compilations'\n            findings.append('Many ad-hoc queries causing compilations')\n    \n    if metrics['blocking_count'] > 5:\n        findings.append(f'{metrics[\"blocking_count\"]} blocked sessions')\n        if metrics['lock_wait_ms'] > 5000:\n            root_cause = 'Long-running transaction holding locks'\n    \n    if metrics['page_life_exp'] < 300:\n        findings.append('Low Page Life Expectancy')\n        root_cause = 'Memory pressure - insufficient buffer pool'\n    \n    return root_cause, findings\n\n# Test with incident data\nincident = {\n    'cpu_pct': 95,\n    'parallelism_waits': 45,\n    'compilation_pct': 5,\n    'blocking_count': 2,\n    'lock_wait_ms': 100,\n    'page_life_exp': 1200,\n}\n\ncause, findings = diagnose_issue(incident)\nprint('Automated Root Cause Analysis')\nprint('=' * 50)\nprint(f'\\nMetrics:')\nfor k, v in incident.items():\n    print(f'  {k}: {v}')\nprint(f'\\nFindings:')\nfor f in findings:\n    print(f'  - {f}')\nprint(f'\\nRoot Cause: {cause}')\nprint(f'\\nRecommended Action:')\nprint(f'  - Review MAXDOP setting (currently may be 0)')\nprint(f'  - Consider setting MAXDOP = 4 or cost threshold = 25')"
            },
            {
              "name": "Incident Report",
              "code": "# Generate automated incident report\nfrom datetime import datetime\n\nreport = {\n    'id': 'INC-2024-0847',\n    'detected': '2024-01-15 14:23:05',\n    'resolved': '2024-01-15 14:45:12',\n    'severity': 'P2 - High',\n    'symptoms': ['CPU 95%', 'Response time 5x normal', '12 blocked sessions'],\n    'root_cause': 'Missing index on Orders.CustomerID causing table scans',\n    'resolution': 'Created nonclustered index IX_Orders_CustomerID',\n    'impact': '22 minutes of degraded performance',\n    'prevention': 'Add to weekly index review automation',\n}\n\nprint('=' * 60)\nprint('        AUTOMATED INCIDENT REPORT')\nprint('=' * 60)\nprint(f'\\nIncident ID: {report[\"id\"]}')\nprint(f'Severity:    {report[\"severity\"]}')\nprint(f'Detected:    {report[\"detected\"]}')\nprint(f'Resolved:    {report[\"resolved\"]}')\nprint(f'Duration:    {report[\"impact\"]}')\nprint(f'\\nSymptoms:')\nfor s in report['symptoms']:\n    print(f'  - {s}')\nprint(f'\\nRoot Cause:')\nprint(f'  {report[\"root_cause\"]}')\nprint(f'\\nResolution:')\nprint(f'  {report[\"resolution\"]}')\nprint(f'\\nPrevention:')\nprint(f'  {report[\"prevention\"]}')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 8: Introduction to LLMs & Gen AI",
      "sections": [
        {
          "id": "m8s1",
          "title": "8.1 What are Large Language Models",
          "brief": "<h4>What are Large Language Models</h4><ul><li>LLMs: neural networks trained on massive text data</li><li>Transformer architecture with attention mechanism</li><li>GPT-4, Gemini, Claude, LLaMA — key models</li><li>Capabilities: text generation, code writing, reasoning</li><li>For DBAs: natural language to SQL, documentation, troubleshooting</li><li>Limitations: hallucination, context windows, cost</li></ul>",
          "description": "<p><strong>Large Language Models are the foundation of modern AI assistants and can transform DBA workflows.</strong></p>",
          "syntax": "# LLM interaction pattern\nimport openai\n\nclient = openai.OpenAI(api_key='...')\nresponse = client.chat.completions.create(\n    model='gpt-4',\n    messages=[\n        {'role': 'system', 'content': 'You are a SQL Server DBA expert.'},\n        {'role': 'user', 'content': 'How do I fix error 9002?'}\n    ]\n)\nprint(response.choices[0].message.content)",
          "script": "Introduce LLMs and their relevance to DBAs.\nExplain transformer architecture simply.\nShow practical DBA applications.",
          "examples": [
            {
              "name": "LLM Overview",
              "code": "# Large Language Models for DBAs\n\nmodels = [\n    ('GPT-4', 'OpenAI', '128K tokens', 'Best reasoning, expensive'),\n    ('Gemini Pro', 'Google', '1M tokens', 'Large context, good for docs'),\n    ('Claude 3', 'Anthropic', '200K tokens', 'Great for analysis'),\n    ('LLaMA 3', 'Meta', '8K tokens', 'Open source, run locally'),\n    ('Mistral', 'Mistral AI', '32K tokens', 'Fast, efficient, open'),\n]\n\nprint('LLMs Relevant to SQL Server DBAs')\nprint('=' * 65)\nprint(f'{\"Model\":<12} {\"Provider\":<12} {\"Context\":<12} {\"Notes\"}')\nprint('-' * 65)\nfor name, provider, ctx, notes in models:\n    print(f'{name:<12} {provider:<12} {ctx:<12} {notes}')\n\nprint('\\nDBA Use Cases for LLMs:')\nuse_cases = [\n    'Natural language to T-SQL conversion',\n    'Explain complex execution plans',\n    'Generate documentation from schema',\n    'Troubleshooting assistant (error lookup)',\n    'Code review for stored procedures',\n    'Incident report generation',\n]\nfor uc in use_cases:\n    print(f'  - {uc}')"
            },
            {
              "name": "LLM Limitations",
              "code": "# Understanding LLM limitations for DBA work\n\nprint('LLM Limitations DBAs Must Know')\nprint('=' * 50)\n\nlimitations = [\n    ('Hallucination', \n     'LLMs can generate plausible but incorrect SQL',\n     'ALWAYS validate generated queries before running'),\n    ('Stale Knowledge',\n     'Training data has a cutoff date',\n     'May not know latest SQL Server features'),\n    ('Context Window',\n     'Limited input size (varies by model)',\n     'Cannot process entire database schema at once'),\n    ('No Real Access',\n     'LLM cannot query your actual database',\n     'Use RAG or tools to give it real data'),\n    ('Security Risk',\n     'Sending schema/data to external API',\n     'Never send production data to public LLMs'),\n]\n\nfor name, issue, mitigation in limitations:\n    print(f'\\n  {name}:')\n    print(f'    Issue: {issue}')\n    print(f'    Fix:   {mitigation}')\n\nprint('\\n\\nGolden Rule: LLMs ASSIST the DBA, never replace judgment')"
            }
          ]
        },
        {
          "id": "m8s2",
          "title": "8.2 Prompt Engineering for DBAs",
          "brief": "<h4>Prompt Engineering for DBAs</h4><ul><li>System prompts: set the DBA expert persona</li><li>Few-shot: provide example queries and answers</li><li>Chain-of-thought: ask for step-by-step reasoning</li><li>Structured output: request JSON/table format</li><li>Context injection: include schema, error messages</li><li>Temperature: 0 for deterministic SQL, higher for creative</li></ul>",
          "description": "<p><strong>Prompt engineering is the skill of crafting inputs that get the best outputs from LLMs.</strong></p>",
          "syntax": "# Prompt engineering patterns for DBAs\n\n# System prompt\nsystem = '''You are a senior SQL Server DBA with 15 years experience.\nWhen asked about performance issues, always:\n1. Identify the root cause\n2. Suggest a T-SQL diagnostic query\n3. Recommend a fix with code\nFormat output as markdown.'''\n\n# Few-shot prompt\nprompt = '''Given this error, provide the fix:\n\nExample: Error 9002 -> BACKUP LOG dbname TO DISK = '...'\nExample: Error 1205 -> Check blocking with sp_who2\n\nNow fix: Error 823'''",
          "script": "Teach prompt engineering for DBA tasks.\nShow system prompts, few-shot, chain-of-thought.\nDemonstrate structured output requests.",
          "examples": [
            {
              "name": "Prompt Patterns",
              "code": "# Prompt engineering patterns for SQL Server DBAs\n\npatterns = {\n    'System Prompt': '''You are a senior SQL Server DBA.\nAlways provide T-SQL code in your answers.\nExplain your reasoning step by step.''',\n    \n    'Few-Shot': '''Convert natural language to T-SQL:\n\nQ: Show databases larger than 1GB\nA: SELECT name, size*8/1024 AS size_mb FROM sys.master_files GROUP BY name HAVING SUM(size*8/1024) > 1024\n\nQ: Find queries running longer than 5 seconds\nA: SELECT * FROM sys.dm_exec_requests WHERE total_elapsed_time > 5000''',\n    \n    'Chain-of-Thought': '''Diagnose this performance issue step by step:\n1. First, identify what type of wait is dominant\n2. Then, determine if it is CPU, IO, or lock related\n3. Finally, suggest the specific fix\n\nWait stats show: CXPACKET 45%, SOS_SCHEDULER_YIELD 30%''',\n    \n    'Structured Output': '''Analyse this execution plan and return JSON:\n{\"bottleneck\": \"...\", \"cause\": \"...\", \"fix\": \"...\", \"impact\": \"high/medium/low\"}'''\n}\n\nfor name, prompt in patterns.items():\n    print(f'\\n{\"=\" * 50}')\n    print(f'Pattern: {name}')\n    print(f'{\"=\" * 50}')\n    print(prompt)"
            },
            {
              "name": "DBA Prompts",
              "code": "# Ready-to-use DBA prompt templates\n\ntemplates = [\n    ('Error Diagnosis', \n     'You are a SQL Server DBA. Diagnose error {error_number} in database {db_name}. '\n     'Provide: 1) Root cause 2) Immediate fix 3) Prevention. Include T-SQL code.'),\n    ('Query Optimisation',\n     'Optimise this T-SQL query for performance. Current execution time: {duration}ms. '\n     'Table has {rows} rows. Suggest index changes and query rewrites.'),\n    ('Schema Documentation',\n     'Generate documentation for this table schema in markdown format. '\n     'Include: purpose, column descriptions, relationships, common queries.'),\n    ('Incident Summary',\n     'Summarise this incident for management. Include: impact, root cause, '\n     'resolution, time to resolve, prevention steps. Keep it non-technical.'),\n]\n\nprint('DBA Prompt Templates')\nprint('=' * 60)\nfor name, template in templates:\n    print(f'\\n--- {name} ---')\n    print(f'{template}')\n\nprint('\\n\\nUsage tip: Replace {placeholders} with actual values')\nprint('Add schema context for better SQL generation')"
            }
          ]
        },
        {
          "id": "m8s3",
          "title": "8.3 Using LLM APIs (OpenAI/Gemini)",
          "brief": "<h4>Using LLM APIs (OpenAI/Gemini)</h4><ul><li><code>pip install openai google-generativeai</code></li><li>API key management (environment variables)</li><li>Chat completions: messages array with roles</li><li>Streaming responses for real-time output</li><li>Token counting and cost management</li><li>Error handling: rate limits, timeouts, retries</li></ul>",
          "description": "<p><strong>Calling LLM APIs from Python lets you build AI-powered DBA tools.</strong></p>",
          "syntax": "import openai\nimport google.generativeai as genai\n\n# OpenAI\nclient = openai.OpenAI(api_key=os.environ['OPENAI_API_KEY'])\nresponse = client.chat.completions.create(\n    model='gpt-4',\n    messages=[{'role': 'user', 'content': 'Explain CXPACKET waits'}],\n    temperature=0\n)\n\n# Gemini\ngenai.configure(api_key=os.environ['GEMINI_API_KEY'])\nmodel = genai.GenerativeModel('gemini-pro')\nresponse = model.generate_content('Explain CXPACKET waits')",
          "script": "Show how to call OpenAI and Gemini APIs.\nDemonstrate chat completions.\nDiscuss API key security and cost management.",
          "examples": [
            {
              "name": "API Patterns",
              "code": "# LLM API calling patterns\nimport os\n\n# Pattern 1: OpenAI Chat Completion\nprint('Pattern 1: OpenAI API')\nprint('-' * 40)\nopenai_code = '''\nimport openai\nclient = openai.OpenAI(api_key=os.environ['OPENAI_API_KEY'])\n\nresponse = client.chat.completions.create(\n    model='gpt-4',\n    messages=[\n        {'role': 'system', 'content': 'You are a SQL Server DBA expert.'},\n        {'role': 'user', 'content': 'How to fix error 9002?'}\n    ],\n    temperature=0,  # Deterministic for SQL\n    max_tokens=500\n)\nprint(response.choices[0].message.content)\n'''\nprint(openai_code)\n\n# Pattern 2: Gemini\nprint('Pattern 2: Gemini API')\nprint('-' * 40)\ngemini_code = '''\nimport google.generativeai as genai\ngenai.configure(api_key=os.environ['GEMINI_API_KEY'])\n\nmodel = genai.GenerativeModel('gemini-pro')\nresponse = model.generate_content(\n    'Explain CXPACKET waits and how to fix them'\n)\nprint(response.text)\n'''\nprint(gemini_code)"
            },
            {
              "name": "Cost Management",
              "code": "# LLM API cost estimation\n\npricing = [\n    ('GPT-4', 0.03, 0.06, 128000),\n    ('GPT-4-turbo', 0.01, 0.03, 128000),\n    ('GPT-3.5-turbo', 0.0005, 0.0015, 16000),\n    ('Gemini Pro', 0.00025, 0.0005, 1000000),\n    ('Claude 3 Sonnet', 0.003, 0.015, 200000),\n]\n\nprint('LLM API Pricing (per 1K tokens)')\nprint('=' * 60)\nprint(f'{\"Model\":<16} {\"Input\":<10} {\"Output\":<10} {\"Context\":<10} {\"Monthly*\"}')\nprint('-' * 60)\nfor name, inp, out, ctx in pricing:\n    # Estimate: 100 queries/day, 500 tokens each\n    monthly = (100 * 30 * 0.5 * inp) + (100 * 30 * 0.3 * out)\n    print(f'{name:<16} ${inp:<9} ${out:<9} {ctx:<10} ~${monthly:.2f}')\n\nprint('\\n* Estimated: 100 queries/day, 500 input + 300 output tokens each')\nprint('\\nCost reduction tips:')\nprint('  - Cache common responses')\nprint('  - Use smaller models for simple tasks')\nprint('  - Batch similar requests')\nprint('  - Set max_tokens to limit output')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 9: LangChain Fundamentals",
      "sections": [
        {
          "id": "m9s1",
          "title": "9.1 What is LangChain & Why",
          "brief": "<h4>What is LangChain & Why</h4><ul><li>Framework for building LLM-powered applications</li><li>Abstracts away LLM provider differences</li><li>Components: prompts, models, chains, memory, tools</li><li>Why DBAs need it: build SQL assistants, RAG systems, agents</li><li><code>pip install langchain langchain-openai</code></li><li>Integrates with SQL Server via SQLAlchemy</li></ul>",
          "description": "<p><strong>LangChain is the framework that turns raw LLM API calls into structured, reliable applications.</strong></p>",
          "syntax": "from langchain_openai import ChatOpenAI\nfrom langchain.prompts import ChatPromptTemplate\nfrom langchain.chains import LLMChain\n\n# Create model\nllm = ChatOpenAI(model='gpt-4', temperature=0)\n\n# Create prompt template\nprompt = ChatPromptTemplate.from_template(\n    'You are a SQL Server DBA. Explain: {topic}'\n)\n\n# Create chain\nchain = prompt | llm\nresult = chain.invoke({'topic': 'CXPACKET waits'})",
          "script": "Introduce LangChain framework.\nExplain why it matters for DBA tools.\nShow basic chain creation.",
          "examples": [
            {
              "name": "LangChain Basics",
              "code": "# LangChain component overview\n\ncomponents = {\n    'Models': 'LLM wrappers (OpenAI, Gemini, local)',\n    'Prompts': 'Template system for structured inputs',\n    'Chains': 'Sequence of operations (prompt -> model -> parse)',\n    'Memory': 'Conversation history management',\n    'Tools': 'External capabilities (SQL, search, calculate)',\n    'Agents': 'LLM decides which tools to use',\n    'Retrievers': 'Fetch relevant documents (RAG)',\n    'Output Parsers': 'Structure LLM output (JSON, lists)',\n}\n\nprint('LangChain Components for DBA Tools')\nprint('=' * 55)\nfor component, description in components.items():\n    print(f'  {component:<15} {description}')\n\nprint('\\nWhy LangChain for DBAs?')\nreasons = [\n    'Build natural language SQL interfaces',\n    'Create RAG systems with DBA documentation',\n    'Build autonomous troubleshooting agents',\n    'Chain multiple AI steps together reliably',\n    'Switch LLM providers without code changes',\n]\nfor r in reasons:\n    print(f'  + {r}')"
            },
            {
              "name": "Simple Chain",
              "code": "# LangChain chain pattern (conceptual)\n\nprint('LangChain Chain Pattern')\nprint('=' * 50)\n\nchain_code = '''\nfrom langchain_openai import ChatOpenAI\nfrom langchain.prompts import ChatPromptTemplate\nfrom langchain_core.output_parsers import StrOutputParser\n\n# 1. Define the model\nllm = ChatOpenAI(model=\"gpt-4\", temperature=0)\n\n# 2. Define the prompt\nprompt = ChatPromptTemplate.from_messages([\n    (\"system\", \"You are a SQL Server DBA expert.\"),\n    (\"user\", \"Diagnose this error: {error}\")\n])\n\n# 3. Create the chain (LCEL syntax)\nchain = prompt | llm | StrOutputParser()\n\n# 4. Invoke\nresult = chain.invoke({\"error\": \"Error 9002: Transaction log full\"})\nprint(result)\n'''\nprint(chain_code)\n\nprint('\\nSimulated output:')\nprint('  The transaction log for the database is full.')\nprint('  Immediate fix: BACKUP LOG dbname TO DISK = ...')\nprint('  Prevention: Set up log backup schedule every 15 min')"
            }
          ]
        },
        {
          "id": "m9s2",
          "title": "9.2 Chains, Prompts & Output Parsers",
          "brief": "<h4>Chains, Prompts & Output Parsers</h4><ul><li><code>ChatPromptTemplate</code> — structured prompt with variables</li><li>LCEL (LangChain Expression Language): <code>prompt | llm | parser</code></li><li><code>StrOutputParser</code> — plain text output</li><li><code>JsonOutputParser</code> — structured JSON responses</li><li>Sequential chains: output of one feeds into next</li><li>Branching: route to different chains based on input</li></ul>",
          "description": "<p><strong>Chains compose multiple steps into reliable AI pipelines.</strong></p>",
          "syntax": "from langchain.prompts import ChatPromptTemplate\nfrom langchain_core.output_parsers import JsonOutputParser\nfrom langchain_openai import ChatOpenAI\n\n# JSON output parser\nparser = JsonOutputParser()\nprompt = ChatPromptTemplate.from_template(\n    'Analyse this query and return JSON with keys: '\n    'performance_class, bottleneck, suggestion.\\n'\n    'Query: {query}'\n)\n\nchain = prompt | ChatOpenAI(temperature=0) | parser\nresult = chain.invoke({'query': 'SELECT * FROM Orders'})",
          "script": "Deep dive into chains and parsers.\nShow LCEL syntax.\nDemonstrate JSON output parsing.\nBuild a multi-step chain.",
          "examples": [
            {
              "name": "LCEL Chain",
              "code": "# LCEL (LangChain Expression Language) patterns\n\nprint('LCEL Chain Patterns for DBA Tools')\nprint('=' * 55)\n\npatterns = [\n    ('Simple', 'prompt | llm | StrOutputParser()', 'Basic Q&A'),\n    ('JSON', 'prompt | llm | JsonOutputParser()', 'Structured analysis'),\n    ('Sequential', 'chain1 | chain2 | chain3', 'Multi-step pipeline'),\n    ('Parallel', 'RunnableParallel(a=chain1, b=chain2)', 'Concurrent analysis'),\n    ('Branching', 'RunnableBranch((cond, chain1), default)', 'Route by input'),\n]\n\nfor name, code, use in patterns:\n    print(f'\\n  {name}:')\n    print(f'    Code: {code}')\n    print(f'    Use:  {use}')\n\nprint('\\n\\nDBA Example - Multi-step diagnosis:')\nprint('  Step 1: Classify the issue type')\nprint('  Step 2: Generate diagnostic queries')\nprint('  Step 3: Suggest remediation')\nprint('  Step 4: Format as incident report')"
            },
            {
              "name": "Output Parsers",
              "code": "# Output parser examples for DBA tools\nimport json\n\n# Simulated JSON parser output\nquery_analysis = {\n    'query': 'SELECT * FROM Orders WHERE CustomerID = 12345',\n    'performance_class': 'Medium',\n    'issues': [\n        'SELECT * retrieves unnecessary columns',\n        'No index hint - may cause scan'\n    ],\n    'suggestions': [\n        'Specify only needed columns',\n        'Ensure index on CustomerID exists'\n    ],\n    'estimated_improvement': '60-80%',\n    'rewritten_query': 'SELECT OrderID, OrderDate, Total FROM Orders WHERE CustomerID = 12345'\n}\n\nprint('JSON Output Parser Result:')\nprint('=' * 55)\nprint(json.dumps(query_analysis, indent=2))\n\nprint('\\nUsage in chain:')\nprint('  parser = JsonOutputParser()')\nprint('  chain = prompt | llm | parser')\nprint('  result = chain.invoke({\"query\": sql})')\nprint('  # result is a Python dict, ready to use')"
            }
          ]
        },
        {
          "id": "m9s3",
          "title": "9.3 Building a SQL Query Assistant",
          "brief": "<h4>Building a SQL Query Assistant</h4><ul><li><code>create_sql_agent()</code> — LangChain SQL agent</li><li>Connects to SQL Server via SQLAlchemy</li><li>Natural language questions to T-SQL queries</li><li>Agent explores schema, writes query, validates results</li><li>Safety: read-only mode, query validation</li><li>Custom tools for DBA-specific operations</li></ul>",
          "description": "<p><strong>LangChain's SQL agent can answer natural language questions about your databases.</strong></p>",
          "syntax": "from langchain_community.utilities import SQLDatabase\nfrom langchain_community.agent_toolkits import create_sql_agent\nfrom langchain_openai import ChatOpenAI\n\n# Connect to SQL Server\ndb = SQLDatabase.from_uri(connection_string)\n\n# Create SQL agent\nagent = create_sql_agent(\n    llm=ChatOpenAI(model='gpt-4', temperature=0),\n    db=db,\n    agent_type='openai-tools',\n    verbose=True\n)\n\n# Ask questions in natural language\nresult = agent.invoke('What are the top 5 largest tables?')",
          "script": "Build a natural language SQL assistant.\nShow create_sql_agent setup.\nDemonstrate natural language queries.\nDiscuss safety considerations.",
          "examples": [
            {
              "name": "SQL Agent Setup",
              "code": "# LangChain SQL Agent for SQL Server\n\nprint('Building a SQL Query Assistant')\nprint('=' * 55)\n\nsetup_code = '''\nfrom langchain_community.utilities import SQLDatabase\nfrom langchain_community.agent_toolkits import create_sql_agent\nfrom langchain_openai import ChatOpenAI\n\n# 1. Connect to SQL Server\ndb = SQLDatabase.from_uri(\n    \"mssql+pyodbc://localhost/AdventureWorks\"\n    \"?driver=ODBC+Driver+17+for+SQL+Server\"\n    \"&trusted_connection=yes\",\n    include_tables=['Orders', 'Customers', 'Products'],  # Limit scope\n    sample_rows_in_table_info=3  # Show sample data in schema\n)\n\n# 2. Create agent\nagent = create_sql_agent(\n    llm=ChatOpenAI(model=\"gpt-4\", temperature=0),\n    db=db,\n    agent_type=\"openai-tools\",\n    verbose=True\n)\n\n# 3. Ask questions\nresult = agent.invoke(\"What are the top 5 customers by order count?\")\nprint(result[\"output\"])\n'''\nprint(setup_code)\n\nprint('\\nSafety tips:')\nprint('  - Use include_tables to limit access')\nprint('  - Set read-only database user')\nprint('  - Add query timeout')\nprint('  - Log all generated queries')"
            },
            {
              "name": "NL Queries",
              "code": "# Natural language to SQL examples\n\nnl_queries = [\n    ('Show the 5 largest databases',\n     'SELECT TOP 5 name, size*8/1024 AS size_mb FROM sys.master_files ORDER BY size DESC'),\n    ('Which queries are running right now?',\n     'SELECT session_id, status, command, wait_type FROM sys.dm_exec_requests WHERE status = \\'running\\''),\n    ('Find tables with no indexes',\n     'SELECT t.name FROM sys.tables t WHERE NOT EXISTS (SELECT 1 FROM sys.indexes i WHERE i.object_id = t.object_id AND i.index_id > 0)'),\n    ('Show backup status for all databases',\n     'SELECT d.name, MAX(b.backup_finish_date) AS last_backup FROM sys.databases d LEFT JOIN msdb.dbo.backupset b ON d.name = b.database_name GROUP BY d.name'),\n]\n\nprint('Natural Language -> T-SQL (Agent Output)')\nprint('=' * 60)\nfor nl, sql in nl_queries:\n    print(f'\\nQ: \"{nl}\"')\n    print(f'A: {sql}')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 10: RAG (Retrieval Augmented Generation)",
      "sections": [
        {
          "id": "m10s1",
          "title": "10.1 RAG Architecture & Concepts",
          "brief": "<h4>RAG Architecture & Concepts</h4><ul><li>RAG = Retrieval + Generation — ground LLM with your data</li><li>Solves hallucination by providing real context</li><li>Pipeline: Query -> Embed -> Search -> Context -> LLM -> Answer</li><li>Perfect for DBA: runbooks, documentation, error solutions</li><li>No fine-tuning needed — just add your documents</li><li>Updates instantly when you add new documentation</li></ul>",
          "description": "<p><strong>RAG grounds LLM responses in your actual documentation, eliminating hallucination for DBA knowledge bases.</strong></p>",
          "syntax": "from langchain_community.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings\nfrom langchain.chains import RetrievalQA\n\n# Create vector store from documents\nvectorstore = Chroma.from_documents(\n    documents=docs,\n    embedding=OpenAIEmbeddings()\n)\n\n# Create RAG chain\nqa_chain = RetrievalQA.from_chain_type(\n    llm=ChatOpenAI(model='gpt-4'),\n    retriever=vectorstore.as_retriever(k=3)\n)\n\n# Ask questions grounded in your docs\nresult = qa_chain.invoke('How do I fix error 9002?')",
          "script": "Explain RAG architecture and why it matters.\nShow the full pipeline.\nDemonstrate with DBA documentation.",
          "examples": [
            {
              "name": "RAG Pipeline",
              "code": "# RAG Pipeline for DBA Knowledge Base\n\nprint('RAG Architecture for DBA')\nprint('=' * 55)\n\nsteps = [\n    ('1. Ingest', 'Load DBA docs, runbooks, error solutions'),\n    ('2. Chunk', 'Split into ~500 token pieces'),\n    ('3. Embed', 'Convert text to vectors (OpenAI/local)'),\n    ('4. Store', 'Save in vector database (ChromaDB)'),\n    ('5. Query', 'User asks: \"How to fix error 9002?\"'),\n    ('6. Retrieve', 'Find top 3 most relevant chunks'),\n    ('7. Augment', 'Add retrieved context to LLM prompt'),\n    ('8. Generate', 'LLM answers using YOUR documentation'),\n]\n\nfor step, desc in steps:\n    print(f'  {step}: {desc}')\n\nprint('\\nBenefits over plain LLM:')\nprint('  + Answers based on YOUR runbooks (not generic)')\nprint('  + No hallucination (grounded in real docs)')\nprint('  + Updates instantly (add new docs anytime)')\nprint('  + No expensive fine-tuning needed')"
            },
            {
              "name": "DBA RAG Example",
              "code": "# Simulated RAG retrieval for DBA question\n\nquestion = 'How do I fix SQL Server error 9002?'\n\n# Simulated retrieved chunks from vector store\nretrieved_chunks = [\n    {'source': 'runbook_log_management.md', 'score': 0.92,\n     'content': 'Error 9002: Transaction log full. Immediate action: '\n                'BACKUP LOG [dbname] TO DISK. Long-term: set up log backup schedule every 15 minutes.'},\n    {'source': 'troubleshooting_guide.md', 'score': 0.87,\n     'content': 'If log backup fails, check: 1) Disk space on backup target '\n                '2) Long-running transactions (DBCC OPENTRAN) 3) Replication latency'},\n    {'source': 'best_practices.md', 'score': 0.81,\n     'content': 'Prevention: Set recovery model to SIMPLE for non-critical DBs. '\n                'For FULL recovery, schedule log backups every 10-15 minutes.'},\n]\n\nprint(f'Question: \"{question}\"')\nprint(f'\\nRetrieved {len(retrieved_chunks)} relevant chunks:')\nprint('-' * 55)\nfor i, chunk in enumerate(retrieved_chunks, 1):\n    print(f'\\n  [{i}] Source: {chunk[\"source\"]} (score: {chunk[\"score\"]})')\n    print(f'      {chunk[\"content\"]}')\n\nprint('\\n' + '=' * 55)\nprint('LLM Answer (grounded in retrieved docs):')\nprint('  Error 9002 means the transaction log is full.')\nprint('  Fix: BACKUP LOG [dbname] TO DISK = \\'path\\\\log.trn\\'')\nprint('  Check: DBCC OPENTRAN for long-running transactions')\nprint('  Prevent: Schedule log backups every 15 minutes')"
            }
          ]
        },
        {
          "id": "m10s2",
          "title": "10.2 Vector Databases & Embeddings",
          "brief": "<h4>Vector Databases & Embeddings</h4><ul><li>Embeddings: convert text to numerical vectors</li><li>Similar meaning = similar vectors (cosine similarity)</li><li>ChromaDB: lightweight, local vector database</li><li>Pinecone/Weaviate: cloud-scale vector databases</li><li>Chunk size matters: 500-1000 tokens optimal</li><li>Embedding models: OpenAI, sentence-transformers (local)</li></ul>",
          "description": "<p><strong>Vector databases store text as numerical representations, enabling semantic search.</strong></p>",
          "syntax": "from langchain_openai import OpenAIEmbeddings\nfrom langchain_community.vectorstores import Chroma\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\n# Split documents\nsplitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)\nchunks = splitter.split_documents(documents)\n\n# Create embeddings and store\nembeddings = OpenAIEmbeddings()\nvectorstore = Chroma.from_documents(chunks, embeddings, persist_directory='./db')\n\n# Search\nresults = vectorstore.similarity_search('transaction log full', k=3)",
          "script": "Explain embeddings and vector databases.\nShow ChromaDB setup.\nDemonstrate semantic search.",
          "examples": [
            {
              "name": "Embeddings Concept",
              "code": "import numpy as np\n\n# Simulated embeddings - showing semantic similarity\n# Real embeddings are 1536 dimensions (OpenAI) or 384 (sentence-transformers)\n\ndocuments = [\n    'Transaction log is full, need to backup log',\n    'Error 9002: log file has reached maximum size',\n    'Database backup completed successfully',\n    'CPU usage is at 95 percent',\n    'How to shrink the transaction log file',\n]\n\n# Simulated similarity scores (cosine similarity)\n# In reality, computed from actual embedding vectors\nquery = 'fix full transaction log'\nsimilarities = [0.92, 0.89, 0.31, 0.15, 0.85]\n\nprint(f'Query: \"{query}\"')\nprint(f'\\nSemantic Search Results (by similarity):')\nprint('=' * 60)\nranked = sorted(zip(similarities, documents), reverse=True)\nfor score, doc in ranked:\n    relevance = 'HIGH' if score > 0.7 else 'LOW'\n    print(f'  [{score:.2f}] [{relevance}] {doc}')\n\nprint('\\nKey insight: Finds relevant docs by MEANING, not keywords')\nprint('  \"full transaction log\" matches \"Error 9002\" even without exact words')"
            },
            {
              "name": "ChromaDB Setup",
              "code": "# ChromaDB setup for DBA knowledge base\n\nprint('ChromaDB Setup for DBA RAG')\nprint('=' * 55)\n\nsetup_code = '''\nimport chromadb\nfrom langchain_community.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom langchain_community.document_loaders import DirectoryLoader\n\n# 1. Load DBA documents\nloader = DirectoryLoader('./dba_docs/', glob='**/*.md')\ndocs = loader.load()\n\n# 2. Split into chunks\nsplitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,\n    chunk_overlap=50,\n    separators=[\"\\\\n## \", \"\\\\n### \", \"\\\\n\\\\n\", \"\\\\n\"]\n)\nchunks = splitter.split_documents(docs)\n\n# 3. Create vector store\nvectorstore = Chroma.from_documents(\n    documents=chunks,\n    embedding=OpenAIEmbeddings(),\n    persist_directory=\"./chroma_db\"\n)\n\nprint(f\"Indexed {len(chunks)} chunks from {len(docs)} documents\")\n\n# 4. Query\nresults = vectorstore.similarity_search(\n    \"How to fix deadlocks\", k=3\n)\nfor doc in results:\n    print(f\"Source: {doc.metadata['source']}\")\n    print(f\"Content: {doc.page_content[:100]}...\")\n'''\nprint(setup_code)"
            }
          ]
        },
        {
          "id": "m10s3",
          "title": "10.3 Building a DBA Knowledge Base with RAG",
          "brief": "<h4>Building a DBA Knowledge Base with RAG</h4><ul><li>Ingest: runbooks, troubleshooting guides, best practices</li><li>Chunk strategy: split by section headers</li><li>Metadata: source file, category, last updated</li><li>RetrievalQA chain for question answering</li><li>Conversational RAG with memory</li><li>Evaluate: relevance scoring, answer quality</li></ul>",
          "description": "<p><strong>A RAG-powered DBA knowledge base gives your team instant access to institutional knowledge.</strong></p>",
          "syntax": "from langchain.chains import ConversationalRetrievalChain\nfrom langchain.memory import ConversationBufferMemory\n\n# Conversational RAG\nmemory = ConversationBufferMemory(\n    memory_key='chat_history', return_messages=True\n)\n\nqa = ConversationalRetrievalChain.from_llm(\n    llm=ChatOpenAI(model='gpt-4'),\n    retriever=vectorstore.as_retriever(),\n    memory=memory\n)\n\n# Multi-turn conversation\nqa.invoke('How do I fix error 9002?')\nqa.invoke('What about prevention?')  # Remembers context",
          "script": "Build a complete DBA knowledge base with RAG.\nShow document ingestion and chunking.\nDemonstrate conversational Q&A.",
          "examples": [
            {
              "name": "Knowledge Base",
              "code": "# DBA Knowledge Base structure\n\nknowledge_base = {\n    'runbooks': [\n        'disk_full_runbook.md',\n        'high_cpu_runbook.md',\n        'blocking_runbook.md',\n        'backup_failure_runbook.md',\n        'replication_lag_runbook.md',\n    ],\n    'best_practices': [\n        'index_maintenance.md',\n        'backup_strategy.md',\n        'security_hardening.md',\n        'performance_baseline.md',\n    ],\n    'error_solutions': [\n        'error_9002_log_full.md',\n        'error_1205_deadlock.md',\n        'error_823_io_error.md',\n        'error_18456_login_failed.md',\n    ],\n    'architecture': [\n        'ha_dr_setup.md',\n        'always_on_config.md',\n        'monitoring_setup.md',\n    ]\n}\n\ntotal_docs = sum(len(v) for v in knowledge_base.values())\nprint('DBA RAG Knowledge Base')\nprint('=' * 50)\nprint(f'Total documents: {total_docs}')\nprint()\nfor category, docs in knowledge_base.items():\n    print(f'  {category}/ ({len(docs)} docs)')\n    for doc in docs[:3]:\n        print(f'    - {doc}')\n    if len(docs) > 3:\n        print(f'    ... and {len(docs)-3} more')\n\nprint(f'\\nAfter indexing: ~{total_docs * 8} chunks (avg 8 per doc)')\nprint('Ready for semantic search and Q&A')"
            },
            {
              "name": "RAG Q&A Demo",
              "code": "# Simulated RAG Q&A session\n\nconversation = [\n    ('How do I fix error 9002?',\n     'Error 9002 indicates the transaction log is full. Based on our runbook:\\n'\n     '1. Immediate: BACKUP LOG [db] TO DISK = \\'...\\' WITH COMPRESSION\\n'\n     '2. Check: DBCC OPENTRAN to find long-running transactions\\n'\n     '3. If needed: ALTER DATABASE [db] MODIFY FILE (SIZE = larger_size)\\n'\n     'Source: runbooks/error_9002_log_full.md'),\n    ('What about prevention?',\n     'To prevent error 9002 recurring (from our best practices):\\n'\n     '1. Schedule log backups every 15 minutes for FULL recovery DBs\\n'\n     '2. Monitor log usage: sys.dm_db_log_space_usage\\n'\n     '3. Set alerts at 70% and 85% log usage\\n'\n     '4. Consider SIMPLE recovery for non-critical databases\\n'\n     'Source: best_practices/backup_strategy.md'),\n    ('Show me the monitoring query',\n     'Here is the log monitoring query from our docs:\\n'\n     'SELECT DB_NAME(database_id), total_log_size_in_bytes/1048576 AS log_mb,\\n'\n     '       used_log_space_in_percent\\n'\n     'FROM sys.dm_db_log_space_usage\\n'\n     'WHERE used_log_space_in_percent > 70\\n'\n     'Source: monitoring/log_monitoring.md'),\n]\n\nprint('RAG Knowledge Base Q&A Session')\nprint('=' * 55)\nfor q, a in conversation:\n    print(f'\\nDBA: {q}')\n    print(f'\\nAI:  {a}')\n    print('-' * 55)"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 11: LangGraph & AI Agents",
      "sections": [
        {
          "id": "m11s1",
          "title": "11.1 What is LangGraph",
          "brief": "<h4>What is LangGraph</h4><ul><li>Framework for building stateful, multi-step AI agents</li><li>Graph-based: nodes (steps) + edges (transitions)</li><li>State persists across steps (memory)</li><li>Conditional routing: different paths based on results</li><li>Cycles: agent can loop back to retry or gather more info</li><li>Built on top of LangChain</li></ul>",
          "description": "<p><strong>LangGraph enables building complex AI agents that can reason, plan, and execute multi-step DBA tasks.</strong></p>",
          "syntax": "from langgraph.graph import StateGraph, END\nfrom typing import TypedDict\n\nclass AgentState(TypedDict):\n    issue: str\n    diagnosis: str\n    action: str\n\ndef diagnose(state):\n    # AI diagnoses the issue\n    return {'diagnosis': 'Blocking detected'}\n\ndef act(state):\n    # Take action based on diagnosis\n    return {'action': 'Kill blocking SPID'}\n\ngraph = StateGraph(AgentState)\ngraph.add_node('diagnose', diagnose)\ngraph.add_node('act', act)\ngraph.add_edge('diagnose', 'act')\ngraph.add_edge('act', END)",
          "script": "Introduce LangGraph for building DBA agents.\nExplain graph-based agent architecture.\nShow state management.",
          "examples": [
            {
              "name": "Graph Concepts",
              "code": "# LangGraph concepts for DBA agents\n\nprint('LangGraph: Graph-Based AI Agents')\nprint('=' * 55)\n\nprint('\\nKey Concepts:')\nconcepts = [\n    ('Node', 'A step in the agent (function that processes state)'),\n    ('Edge', 'Connection between nodes (defines flow)'),\n    ('State', 'Shared data that persists across all nodes'),\n    ('Conditional Edge', 'Route to different nodes based on state'),\n    ('Cycle', 'Loop back to a previous node (retry logic)'),\n    ('END', 'Terminal node - agent is done'),\n]\nfor name, desc in concepts:\n    print(f'  {name:<18} {desc}')\n\nprint('\\nDBA Agent Graph Example:')\nprint('  START -> [Collect Metrics] -> [Diagnose] -> [Decide]')\nprint('                                                |')\nprint('                                    +-----------+-----------+')\nprint('                                    |                       |')\nprint('                              [Auto-Fix]              [Escalate]')\nprint('                                    |                       |')\nprint('                              [Verify Fix]            [Notify]')\nprint('                                    |                       |')\nprint('                                   END                    END')"
            },
            {
              "name": "Simple Agent",
              "code": "# Simulated LangGraph DBA agent execution\n\nprint('DBA Troubleshooting Agent Execution')\nprint('=' * 55)\n\n# Simulated state transitions\nsteps = [\n    ('START', {'issue': 'High CPU alert on PROD-SQL-01'}),\n    ('collect_metrics', {'cpu': 95, 'waits': 'CXPACKET 60%', 'blocking': 3}),\n    ('diagnose', {'diagnosis': 'Excessive parallelism causing CPU pressure'}),\n    ('decide', {'decision': 'auto_fix', 'confidence': 0.85}),\n    ('auto_fix', {'action': 'ALTER DATABASE SCOPED CONFIG SET MAXDOP = 4'}),\n    ('verify', {'cpu_after': 62, 'success': True}),\n    ('END', {'report': 'Issue resolved. CPU dropped from 95% to 62%'}),\n]\n\nfor node, state in steps:\n    print(f'\\n  [{node}]')\n    for k, v in state.items():\n        print(f'    {k}: {v}')\n\nprint('\\n\\nAgent completed in 7 steps (autonomous)')"
            }
          ]
        },
        {
          "id": "m11s2",
          "title": "11.2 Building Stateful AI Agents",
          "brief": "<h4>Building Stateful AI Agents</h4><ul><li>Define state schema with TypedDict</li><li>Each node function receives and returns state</li><li>Conditional edges for decision-making</li><li>Human-in-the-loop: pause for approval</li><li>Error handling: retry nodes on failure</li><li>Checkpointing: save/resume agent state</li></ul>",
          "description": "<p><strong>Stateful agents maintain context across multiple steps, enabling complex multi-step DBA workflows.</strong></p>",
          "syntax": "from langgraph.graph import StateGraph, END\nfrom langgraph.checkpoint.memory import MemorySaver\n\n# Define state\nclass DBAState(TypedDict):\n    metrics: dict\n    diagnosis: str\n    actions_taken: list\n    resolved: bool\n\n# Conditional routing\ndef should_escalate(state):\n    if state['resolved']:\n        return 'report'\n    return 'escalate'\n\ngraph.add_conditional_edges('verify', should_escalate)",
          "script": "Build a stateful DBA agent.\nShow conditional routing.\nDemonstrate human-in-the-loop.",
          "examples": [
            {
              "name": "Stateful Agent",
              "code": "# Stateful DBA agent with conditional routing\n\nprint('Stateful DBA Agent Architecture')\nprint('=' * 55)\n\nagent_code = '''\nfrom langgraph.graph import StateGraph, END\nfrom typing import TypedDict, List\n\nclass DBAState(TypedDict):\n    alert: str\n    metrics: dict\n    diagnosis: str\n    actions: List[str]\n    resolved: bool\n\ndef collect_metrics(state):\n    # Query SQL Server for current metrics\n    metrics = query_dmvs(state['alert'])\n    return {'metrics': metrics}\n\ndef diagnose(state):\n    # LLM analyses metrics\n    diagnosis = llm_diagnose(state['metrics'])\n    return {'diagnosis': diagnosis}\n\ndef auto_fix(state):\n    # Apply automated fix\n    action = apply_fix(state['diagnosis'])\n    return {'actions': [action], 'resolved': True}\n\ndef escalate(state):\n    # Notify on-call DBA\n    notify_team(state)\n    return {'actions': ['Escalated to on-call'], 'resolved': False}\n\ndef route(state):\n    if state['diagnosis'].startswith('CRITICAL'):\n        return 'escalate'  # Human needed\n    return 'auto_fix'      # Safe to auto-fix\n\n# Build graph\ngraph = StateGraph(DBAState)\ngraph.add_node('collect', collect_metrics)\ngraph.add_node('diagnose', diagnose)\ngraph.add_node('auto_fix', auto_fix)\ngraph.add_node('escalate', escalate)\ngraph.add_edge('collect', 'diagnose')\ngraph.add_conditional_edges('diagnose', route)\ngraph.add_edge('auto_fix', END)\ngraph.add_edge('escalate', END)\n'''\nprint(agent_code)"
            },
            {
              "name": "Agent Execution",
              "code": "# Trace agent execution with state changes\n\nprint('Agent Execution Trace')\nprint('=' * 55)\n\ntrace = [\n    {'node': 'START', 'state': {'alert': 'Disk 92% on PROD-SQL-01', 'resolved': False}},\n    {'node': 'collect_metrics', 'state': {'disk_pct': 92, 'largest_db': 'LogDB', 'log_size_gb': 45}},\n    {'node': 'diagnose', 'state': {'diagnosis': 'LogDB transaction log growing unchecked. No log backups in 48h.'}},\n    {'node': 'route_decision', 'state': {'route': 'auto_fix (confidence: 0.9, safe operation)'}},\n    {'node': 'auto_fix', 'state': {'action': 'BACKUP LOG [LogDB] TO DISK WITH COMPRESSION', 'log_after_gb': 2}},\n    {'node': 'verify', 'state': {'disk_pct_after': 58, 'resolved': True}},\n    {'node': 'END', 'state': {'summary': 'Resolved: Log backup freed 43 GB. Scheduled recurring backup.'}},\n]\n\nfor step in trace:\n    print(f\"\\n  >> {step['node']}\")\n    for k, v in step['state'].items():\n        print(f\"     {k}: {v}\")\n\nprint('\\n\\nTotal steps: 7 | Time: 45 seconds | Human intervention: None')"
            }
          ]
        },
        {
          "id": "m11s3",
          "title": "11.3 DBA Agent - Automated Troubleshooting",
          "brief": "<h4>DBA Agent - Automated Troubleshooting</h4><ul><li>Full troubleshooting agent: detect -> diagnose -> fix -> verify</li><li>Tools: query DMVs, check waits, analyse plans, kill SPIDs</li><li>Knowledge base integration (RAG) for solutions</li><li>Escalation rules: when to involve humans</li><li>Audit trail: log all actions taken</li><li>Configurable: which actions are auto-approved</li></ul>",
          "description": "<p><strong>A complete DBA troubleshooting agent that can autonomously diagnose and resolve common SQL Server issues.</strong></p>",
          "syntax": "# DBA Agent with tools\nfrom langchain.tools import tool\n\n@tool\ndef check_wait_stats(server: str) -> str:\n    '''Check current wait statistics on SQL Server'''\n    # Query sys.dm_os_wait_stats\n    return format_wait_stats(results)\n\n@tool\ndef check_blocking(server: str) -> str:\n    '''Check for blocking sessions'''\n    # Query sys.dm_exec_requests\n    return format_blocking(results)\n\n@tool\ndef kill_session(spid: int) -> str:\n    '''Kill a blocking session (requires approval)'''\n    # KILL spid\n    return f'Session {spid} terminated'",
          "script": "Build a complete DBA troubleshooting agent.\nShow tool definitions.\nDemonstrate autonomous troubleshooting.",
          "examples": [
            {
              "name": "Agent Tools",
              "code": "# DBA Agent tool definitions\n\ntools = [\n    {'name': 'check_wait_stats', 'desc': 'Query sys.dm_os_wait_stats', 'auto': True},\n    {'name': 'check_blocking', 'desc': 'Find blocked/blocking sessions', 'auto': True},\n    {'name': 'check_cpu_queries', 'desc': 'Find top CPU-consuming queries', 'auto': True},\n    {'name': 'check_disk_space', 'desc': 'Check disk usage per database', 'auto': True},\n    {'name': 'check_log_usage', 'desc': 'Check transaction log usage', 'auto': True},\n    {'name': 'backup_log', 'desc': 'Backup transaction log', 'auto': True},\n    {'name': 'kill_session', 'desc': 'Kill a blocking SPID', 'auto': False},\n    {'name': 'rebuild_index', 'desc': 'Rebuild fragmented index', 'auto': False},\n    {'name': 'failover_ag', 'desc': 'Failover availability group', 'auto': False},\n]\n\nprint('DBA Agent Tools')\nprint('=' * 60)\nprint(f'{\"Tool\":<20} {\"Auto-Approve\":<14} {\"Description\"}')\nprint('-' * 60)\nfor t in tools:\n    auto = 'Yes' if t['auto'] else 'REQUIRES APPROVAL'\n    print(f'{t[\"name\"]:<20} {auto:<14} {t[\"desc\"]}')\n\nprint('\\nAuto-approve: read-only operations')\nprint('Requires approval: destructive or impactful operations')"
            },
            {
              "name": "Full Scenario",
              "code": "# Complete troubleshooting scenario\n\nprint('DBA Agent: Automated Troubleshooting Scenario')\nprint('=' * 60)\n\nscenario = '''\nAlert: Response time degraded on PROD-SQL-01\n\nAgent Actions:\n  1. [check_wait_stats] -> CXPACKET: 45%, LCK_M_S: 30%\n  2. [check_blocking] -> SPID 87 blocking 12 sessions (45 sec)\n  3. [check_cpu_queries] -> SPID 87 running: \n     \"SELECT * FROM Orders WITH (TABLOCKX) WHERE...\"\n  4. [diagnose] -> Long-running query with TABLOCKX hint\n     causing widespread blocking\n  5. [decision] -> Kill session (blocking 12 others for 45s)\n     Confidence: HIGH, Impact: LOW (single ad-hoc query)\n  6. [kill_session(87)] -> REQUIRES APPROVAL\n     \n     >>> DBA approved via Slack <<<\n     \n  7. [kill_session(87)] -> Session terminated\n  8. [verify] -> Blocking cleared, response time normal\n  9. [report] -> Incident resolved in 2 minutes\n\nAudit Log:\n  - All actions logged with timestamps\n  - Approval recorded: DBA John @ 14:23:05\n  - Root cause: Ad-hoc query with TABLOCKX hint\n  - Prevention: Add to blocked query patterns list\n'''\nprint(scenario)"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 12: AI-Powered DBA Tools",
      "sections": [
        {
          "id": "m12s1",
          "title": "12.1 Natural Language to SQL",
          "brief": "<h4>Natural Language to SQL</h4><ul><li>Convert English questions to valid T-SQL</li><li>Schema-aware: model knows your tables and columns</li><li>Validation: check generated SQL before execution</li><li>Safety: read-only by default, whitelist allowed operations</li><li>Context: include table relationships and constraints</li><li>Feedback loop: learn from corrections</li></ul>",
          "description": "<p><strong>Natural language to SQL lets non-technical users query databases safely.</strong></p>",
          "syntax": "from langchain_community.utilities import SQLDatabase\nfrom langchain.chains import create_sql_query_chain\n\ndb = SQLDatabase.from_uri(conn_string)\nchain = create_sql_query_chain(llm, db)\n\n# Generate SQL from natural language\nsql = chain.invoke({'question': 'Show top 10 largest tables'})\nprint(sql)  # Validate before executing\n\n# Execute if safe\nresult = db.run(sql)",
          "script": "Build a natural language to SQL tool.\nShow schema-aware generation.\nDemonstrate safety validation.",
          "examples": [
            {
              "name": "NL to SQL",
              "code": "# Natural Language to SQL conversion examples\n\nconversions = [\n    ('Show all databases and their sizes',\n     'SELECT name, SUM(size)*8/1024 AS size_mb\\nFROM sys.master_files\\nGROUP BY name\\nORDER BY size_mb DESC'),\n    ('Find queries that ran more than 10 seconds today',\n     'SELECT TOP 20 qt.text, qs.last_execution_time,\\n  qs.last_elapsed_time/1000000.0 AS seconds\\nFROM sys.dm_exec_query_stats qs\\nCROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) qt\\nWHERE qs.last_elapsed_time > 10000000\\n  AND qs.last_execution_time > CAST(GETDATE() AS DATE)'),\n    ('Which tables have not been accessed in 30 days?',\n     'SELECT OBJECT_NAME(object_id) AS table_name,\\n  last_user_seek, last_user_scan, last_user_lookup\\nFROM sys.dm_db_index_usage_stats\\nWHERE database_id = DB_ID()\\n  AND COALESCE(last_user_seek, last_user_scan, \\'1900-01-01\\') < DATEADD(DAY, -30, GETDATE())'),\n]\n\nprint('Natural Language -> T-SQL')\nprint('=' * 60)\nfor nl, sql in conversions:\n    print(f'\\nQ: \"{nl}\"')\n    print(f'\\nSQL:')\n    for line in sql.split('\\n'):\n        print(f'  {line}')"
            },
            {
              "name": "Safety Layer",
              "code": "# SQL safety validation layer\n\ndef validate_sql(sql, allowed_operations=None):\n    if allowed_operations is None:\n        allowed_operations = ['SELECT']  # Read-only by default\n    \n    sql_upper = sql.strip().upper()\n    \n    # Check operation type\n    operation = sql_upper.split()[0]\n    if operation not in allowed_operations:\n        return False, f'Operation {operation} not allowed'\n    \n    # Check for dangerous patterns\n    dangerous = ['DROP', 'TRUNCATE', 'DELETE FROM', 'xp_cmdshell', 'SHUTDOWN']\n    for pattern in dangerous:\n        if pattern in sql_upper:\n            return False, f'Dangerous pattern detected: {pattern}'\n    \n    # Check for data modification in SELECT\n    if 'INTO' in sql_upper and operation == 'SELECT':\n        return False, 'SELECT INTO not allowed in read-only mode'\n    \n    return True, 'Query is safe to execute'\n\n# Test validation\ntest_queries = [\n    'SELECT name FROM sys.databases',\n    'DROP TABLE Customers',\n    'SELECT * INTO #temp FROM Orders',\n    'DELETE FROM logs WHERE date < GETDATE()-30',\n    'EXEC xp_cmdshell \"dir\"',\n]\n\nprint('SQL Safety Validation')\nprint('=' * 55)\nfor sql in test_queries:\n    safe, msg = validate_sql(sql)\n    status = 'PASS' if safe else 'BLOCKED'\n    print(f'  [{status:<7}] {sql[:45]}')\n    if not safe:\n        print(f'           Reason: {msg}')"
            }
          ]
        },
        {
          "id": "m12s2",
          "title": "12.2 Automated Incident Response",
          "brief": "<h4>Automated Incident Response</h4><ul><li>Alert -> Classify -> Diagnose -> Remediate -> Close</li><li>AI classifies incident severity and type</li><li>Automated runbook execution based on classification</li><li>Integration with ticketing systems (ServiceNow, Jira)</li><li>Post-incident report generation</li><li>Learning: improve from resolved incidents</li></ul>",
          "description": "<p><strong>AI-powered incident response automates the first-response actions for common SQL Server issues.</strong></p>",
          "syntax": "class IncidentResponder:\n    def __init__(self, llm, tools, runbooks):\n        self.llm = llm\n        self.tools = tools\n        self.runbooks = runbooks\n    \n    async def respond(self, alert):\n        # 1. Classify\n        classification = self.classify(alert)\n        # 2. Get runbook\n        runbook = self.runbooks[classification.type]\n        # 3. Execute steps\n        for step in runbook.steps:\n            result = await self.execute_step(step)\n        # 4. Report\n        return self.generate_report()",
          "script": "Build automated incident response.\nShow classification and runbook execution.\nDemonstrate integration patterns.",
          "examples": [
            {
              "name": "Incident Pipeline",
              "code": "# Automated incident response pipeline\n\nincidents = [\n    {'alert': 'CPU > 95% for 5 minutes', 'type': 'performance', 'severity': 'P2',\n     'auto_actions': ['Check top queries', 'Check parallelism', 'Check blocking'],\n     'resolution': 'Killed runaway query SPID 234'},\n    {'alert': 'Disk space < 5% on E: drive', 'type': 'capacity', 'severity': 'P1',\n     'auto_actions': ['Check largest files', 'Backup and shrink logs', 'Alert DBA'],\n     'resolution': 'Backed up transaction logs, freed 45 GB'},\n    {'alert': '50 failed logins from 192.168.1.100', 'type': 'security', 'severity': 'P1',\n     'auto_actions': ['Block IP', 'Check audit logs', 'Alert security team'],\n     'resolution': 'Blocked IP, confirmed brute force attempt'},\n]\n\nprint('Automated Incident Response')\nprint('=' * 60)\nfor inc in incidents:\n    print(f'\\n  Alert: {inc[\"alert\"]}')\n    print(f'  Type: {inc[\"type\"]} | Severity: {inc[\"severity\"]}')\n    print(f'  Auto-actions:')\n    for a in inc['auto_actions']:\n        print(f'    - {a}')\n    print(f'  Resolution: {inc[\"resolution\"]}')"
            },
            {
              "name": "Runbook Engine",
              "code": "# Runbook execution engine\n\ndef execute_runbook(alert_type, metrics):\n    runbooks = {\n        'log_full': [\n            ('Check log usage', 'SELECT used_log_space_in_percent FROM sys.dm_db_log_space_usage'),\n            ('Find open transactions', 'DBCC OPENTRAN'),\n            ('Backup log', 'BACKUP LOG [db] TO DISK WITH COMPRESSION'),\n            ('Verify', 'Check log usage dropped below 50%'),\n        ],\n        'blocking': [\n            ('Identify blocker', 'SELECT blocking_session_id FROM sys.dm_exec_requests'),\n            ('Check blocker query', 'DBCC INPUTBUFFER(spid)'),\n            ('Wait 30 seconds', 'Allow natural resolution'),\n            ('Kill if still blocking', 'KILL spid (requires approval)'),\n        ],\n        'high_cpu': [\n            ('Check wait stats', 'SELECT * FROM sys.dm_os_wait_stats'),\n            ('Find CPU queries', 'Top queries by cpu_time from dm_exec_query_stats'),\n            ('Check parallelism', 'Look for CXPACKET waits'),\n            ('Adjust MAXDOP', 'If CXPACKET > 30%, reduce MAXDOP'),\n        ],\n    }\n    \n    steps = runbooks.get(alert_type, [])\n    print(f'Executing runbook: {alert_type}')\n    print('-' * 50)\n    for i, (step, action) in enumerate(steps, 1):\n        print(f'  Step {i}: {step}')\n        print(f'         Action: {action}')\n    return steps\n\nexecute_runbook('log_full', {'log_pct': 95})\nprint()\nexecute_runbook('blocking', {'blocked_count': 8})"
            }
          ]
        },
        {
          "id": "m12s3",
          "title": "12.3 AI-Driven Capacity Planning",
          "brief": "<h4>AI-Driven Capacity Planning</h4><ul><li>Collect historical resource metrics (CPU, RAM, disk, IO)</li><li>ML models predict future resource needs</li><li>Confidence intervals for planning decisions</li><li>What-if analysis: impact of adding workloads</li><li>Cost optimisation: right-size infrastructure</li><li>Automated capacity reports for management</li></ul>",
          "description": "<p><strong>AI-driven capacity planning uses ML to predict when you'll need more resources.</strong></p>",
          "syntax": "from sklearn.linear_model import LinearRegression\nfrom sklearn.ensemble import GradientBoostingRegressor\n\n# Multi-resource prediction\nfor resource in ['cpu', 'memory', 'disk', 'iops']:\n    model = GradientBoostingRegressor()\n    model.fit(X_train, y_train[resource])\n    prediction = model.predict(future_dates)\n    days_to_threshold = calculate_days(prediction, threshold)",
          "script": "Show AI-driven capacity planning.\nPredict multiple resources.\nGenerate management reports.",
          "examples": [
            {
              "name": "Capacity Report",
              "code": "# AI-generated capacity planning report\n\nresources = [\n    {'name': 'CPU Cores', 'current': 16, 'usage_pct': 72, 'growth_pct_month': 3.2, 'threshold': 85, 'days_to_threshold': 120},\n    {'name': 'RAM (GB)', 'current': 128, 'usage_pct': 81, 'growth_pct_month': 1.8, 'threshold': 90, 'days_to_threshold': 60},\n    {'name': 'Disk (TB)', 'current': 4.0, 'usage_pct': 68, 'growth_pct_month': 4.5, 'threshold': 85, 'days_to_threshold': 90},\n    {'name': 'IOPS', 'current': 10000, 'usage_pct': 55, 'growth_pct_month': 2.1, 'threshold': 80, 'days_to_threshold': 180},\n]\n\nprint('AI CAPACITY PLANNING REPORT')\nprint('Server: PROD-SQL-01 | Generated: 2024-01-15')\nprint('=' * 65)\nprint(f'{\"Resource\":<12} {\"Current\":<10} {\"Usage\":<8} {\"Growth/mo\":<10} {\"Days to Limit\":<15} {\"Action\"}')\nprint('-' * 65)\nfor r in resources:\n    action = 'URGENT' if r['days_to_threshold'] < 90 else 'PLAN' if r['days_to_threshold'] < 180 else 'OK'\n    print(f'{r[\"name\"]:<12} {r[\"current\"]:<10} {r[\"usage_pct\"]}%{\"\":<4} {r[\"growth_pct_month\"]}%/mo{\"\":<4} {r[\"days_to_threshold\"]:<15} {action}')\n\nprint('\\nRecommendations:')\nprint('  1. RAM: Upgrade to 256 GB within 60 days (URGENT)')\nprint('  2. Disk: Add 2 TB within 90 days')\nprint('  3. CPU: Plan upgrade in Q3 (120 days)')"
            },
            {
              "name": "What-If Analysis",
              "code": "# What-if capacity analysis\n\nprint('What-If Capacity Analysis')\nprint('=' * 55)\n\nscenarios = [\n    ('Add new application (500 users)', {'cpu': +15, 'ram': +20, 'disk': +10, 'iops': +25}),\n    ('Migrate ReportDB to this server', {'cpu': +8, 'ram': +30, 'disk': +45, 'iops': +12}),\n    ('Enable Always On (secondary)', {'cpu': +5, 'ram': +10, 'disk': +100, 'iops': +8}),\n    ('Archive data older than 1 year', {'cpu': -5, 'ram': -10, 'disk': -35, 'iops': -15}),\n]\n\ncurrent = {'cpu': 72, 'ram': 81, 'disk': 68, 'iops': 55}\n\nfor scenario, impact in scenarios:\n    print(f'\\n  Scenario: {scenario}')\n    print(f'  Impact on resources:')\n    breaches = []\n    for resource, change in impact.items():\n        new_val = current[resource] + change\n        status = 'OVER LIMIT' if new_val > 85 else 'OK'\n        sign = '+' if change > 0 else ''\n        print(f'    {resource:<6}: {current[resource]}% -> {new_val}% ({sign}{change}%) [{status}]')\n        if new_val > 85:\n            breaches.append(resource)\n    if breaches:\n        print(f'  WARNING: Would exceed threshold for: {\", \".join(breaches)}')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 13: Building AI Pipelines for DBA",
      "sections": [
        {
          "id": "m13s1",
          "title": "13.1 End-to-End ML Pipeline",
          "brief": "<h4>End-to-End ML Pipeline</h4><ul><li>Data collection: scheduled DMV queries to staging tables</li><li>Feature engineering: transform raw metrics into ML features</li><li>Model training: automated retraining on schedule</li><li>Evaluation: track model accuracy over time</li><li>Deployment: serve predictions via API</li><li>Monitoring: detect model drift and retrain</li></ul>",
          "description": "<p><strong>A production ML pipeline automates the entire lifecycle from data collection to serving predictions.</strong></p>",
          "syntax": "# End-to-end pipeline\nclass DBAPipeline:\n    def collect_data(self):\n        # Query DMVs, store in staging\n        pass\n    def engineer_features(self, raw_data):\n        # Transform into ML features\n        pass\n    def train_model(self, features, labels):\n        # Train and evaluate\n        pass\n    def deploy(self, model):\n        # Save model, update API\n        pass\n    def monitor(self):\n        # Check prediction accuracy\n        pass",
          "script": "Show end-to-end ML pipeline for DBA.\nCover each stage.\nDiscuss automation and scheduling.",
          "examples": [
            {
              "name": "Pipeline Steps",
              "code": "# End-to-end ML pipeline for DBA\n\npipeline_steps = [\n    ('1. Collect', 'Query DMVs every 5 minutes, store in metrics table',\n     'SQL Agent job or Python scheduler'),\n    ('2. Feature Engineering', 'Calculate rolling averages, ratios, time features',\n     'pandas: rolling(), pct_change(), hour/dayofweek'),\n    ('3. Label', 'Mark historical incidents (slow=1, normal=0)',\n     'From incident tickets or manual labelling'),\n    ('4. Train', 'Fit model on last 30 days of data',\n     'RandomForest, GradientBoosting, or XGBoost'),\n    ('5. Evaluate', 'Test on held-out week, check accuracy > 85%',\n     'classification_report, confusion_matrix'),\n    ('6. Deploy', 'Save model.pkl, update Flask API endpoint',\n     'joblib.dump(model), restart service'),\n    ('7. Monitor', 'Track prediction accuracy daily, alert on drift',\n     'Compare predictions vs actual outcomes'),\n    ('8. Retrain', 'Weekly retrain with latest data',\n     'Automated: if accuracy < 80%, trigger retrain'),\n]\n\nprint('End-to-End ML Pipeline for DBA')\nprint('=' * 65)\nfor step, desc, tool in pipeline_steps:\n    print(f'\\n  {step}')\n    print(f'    What: {desc}')\n    print(f'    How:  {tool}')"
            },
            {
              "name": "Feature Engineering",
              "code": "import numpy as np\nimport pandas as pd\n\n# Feature engineering for DBA ML models\nnp.random.seed(42)\n\n# Raw metrics (simulated)\nraw_data = pd.DataFrame({\n    'timestamp': pd.date_range('2024-01-01', periods=100, freq='5min'),\n    'cpu_pct': np.random.normal(50, 15, 100),\n    'memory_pct': np.random.normal(65, 10, 100),\n    'batch_requests': np.random.poisson(500, 100),\n    'page_reads': np.random.poisson(2000, 100),\n})\n\n# Engineer features\ndf = raw_data.copy()\ndf['cpu_rolling_avg'] = df['cpu_pct'].rolling(6).mean()  # 30-min avg\ndf['cpu_rolling_std'] = df['cpu_pct'].rolling(6).std()   # Volatility\ndf['cpu_change'] = df['cpu_pct'].pct_change()            # Rate of change\ndf['hour'] = df['timestamp'].dt.hour                      # Time feature\ndf['is_business_hours'] = df['hour'].between(8, 18).astype(int)\ndf['read_write_ratio'] = df['page_reads'] / (df['batch_requests'] + 1)\n\nprint('Feature Engineering for DBA ML')\nprint('=' * 55)\nprint(f'Raw features: {len(raw_data.columns) - 1}')\nprint(f'Engineered features: {len(df.columns) - len(raw_data.columns)}')\nprint(f'Total features: {len(df.columns) - 1}')\nprint(f'\\nSample (last 5 rows):')\ncols = ['cpu_pct', 'cpu_rolling_avg', 'cpu_rolling_std', 'hour', 'read_write_ratio']\nprint(df[cols].tail().to_string(index=False))"
            }
          ]
        },
        {
          "id": "m13s2",
          "title": "13.2 Model Training & Evaluation",
          "brief": "<h4>Model Training & Evaluation</h4><ul><li>Cross-validation: <code>cross_val_score(model, X, y, cv=5)</code></li><li>Hyperparameter tuning: <code>GridSearchCV</code></li><li>Metrics: accuracy, precision, recall, F1, RMSE</li><li>Confusion matrix for classification models</li><li>Feature importance for interpretability</li><li>Model persistence: <code>joblib.dump(model, 'model.pkl')</code></li></ul>",
          "description": "<p><strong>Proper model evaluation ensures your DBA ML models are reliable in production.</strong></p>",
          "syntax": "from sklearn.model_selection import cross_val_score, GridSearchCV\nfrom sklearn.metrics import classification_report\nimport joblib\n\n# Cross-validation\nscores = cross_val_score(model, X, y, cv=5, scoring='accuracy')\nprint(f'CV Accuracy: {scores.mean():.3f} +/- {scores.std():.3f}')\n\n# Hyperparameter tuning\nparam_grid = {'n_estimators': [50, 100, 200], 'max_depth': [5, 10, None]}\ngrid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)\ngrid.fit(X_train, y_train)\n\n# Save model\njoblib.dump(grid.best_estimator_, 'dba_model.pkl')",
          "script": "Show model training and evaluation.\nDemonstrate cross-validation.\nExplain key metrics for DBA models.",
          "examples": [
            {
              "name": "Model Evaluation",
              "code": "import numpy as np\n\n# Simulated model evaluation results\nnp.random.seed(42)\n\nprint('Model Evaluation Report')\nprint('=' * 55)\nprint('Task: Predict query performance class (Fast/Slow)')\nprint('Model: Random Forest (n_estimators=100, max_depth=10)')\nprint()\n\n# Cross-validation\ncv_scores = [0.89, 0.91, 0.87, 0.92, 0.90]\nprint(f'5-Fold Cross-Validation:')\nfor i, s in enumerate(cv_scores, 1):\n    print(f'  Fold {i}: {s:.3f}')\nprint(f'  Mean: {np.mean(cv_scores):.3f} +/- {np.std(cv_scores):.3f}')\n\nprint(f'\\nClassification Report (Test Set):')\nprint(f'  {\"Class\":<10} {\"Precision\":<12} {\"Recall\":<10} {\"F1-Score\":<10} {\"Support\"}')\nprint(f'  {\"Fast\":<10} {0.93:<12.2f} {0.95:<10.2f} {0.94:<10.2f} {180}')\nprint(f'  {\"Slow\":<10} {0.88:<12.2f} {0.84:<10.2f} {0.86:<10.2f} {70}')\nprint(f'  {\"\":<10} {\"\":<12} {\"\":<10} {\"\":<10}')\nprint(f'  {\"Accuracy\":<10} {\"\":<12} {\"\":<10} {0.91:<10.2f} {250}')\n\nprint(f'\\nFeature Importance:')\nfeatures = [('avg_logical_reads', 0.35), ('avg_duration_ms', 0.25), ('avg_cpu_ms', 0.20), ('exec_count', 0.12), ('hour_of_day', 0.08)]\nfor feat, imp in features:\n    bar = '#' * int(imp * 40)\n    print(f'  {feat:<20} {imp:.2f} {bar}')"
            },
            {
              "name": "Save & Load",
              "code": "# Model persistence pattern\n\nprint('Model Persistence for Production')\nprint('=' * 55)\n\ncode = '''\nimport joblib\nfrom datetime import datetime\n\n# Save model with metadata\nmodel_info = {\n    'model': trained_model,\n    'features': feature_names,\n    'accuracy': 0.91,\n    'trained_date': datetime.now().isoformat(),\n    'training_samples': 5000,\n    'version': '1.2.0'\n}\njoblib.dump(model_info, 'models/query_classifier_v1.2.pkl')\n\n# Load in production\nmodel_info = joblib.load('models/query_classifier_v1.2.pkl')\nmodel = model_info['model']\nfeatures = model_info['features']\n\n# Predict\nnew_query_features = extract_features(query)\nprediction = model.predict([new_query_features])\nprint(f\"Query class: {prediction[0]}\")\n'''\nprint(code)\n\nprint('\\nBest practices:')\nprint('  - Version your models (v1.0, v1.1, ...)')\nprint('  - Store metadata (accuracy, date, features)')\nprint('  - Keep previous versions for rollback')\nprint('  - Log predictions for monitoring')"
            }
          ]
        },
        {
          "id": "m13s3",
          "title": "13.3 Deploying Models with Flask API",
          "brief": "<h4>Deploying Models with Flask API</h4><ul><li>Flask REST API: <code>/predict</code> endpoint</li><li>Load model once at startup, serve predictions</li><li>JSON input/output for easy integration</li><li>Health check endpoint for monitoring</li><li>Rate limiting and authentication</li><li>Docker containerisation for deployment</li></ul>",
          "description": "<p><strong>Flask lets you serve ML predictions as a REST API that other DBA tools can consume.</strong></p>",
          "syntax": "from flask import Flask, request, jsonify\nimport joblib\n\napp = Flask(__name__)\nmodel = joblib.load('dba_model.pkl')\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.json\n    features = [data['reads'], data['cpu_ms'], data['duration']]\n    prediction = model.predict([features])[0]\n    return jsonify({'class': prediction, 'confidence': 0.92})\n\n@app.route('/health')\ndef health():\n    return jsonify({'status': 'healthy', 'model_version': '1.2'})\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)",
          "script": "Deploy ML model as Flask API.\nShow endpoint design.\nDemonstrate integration with DBA tools.",
          "examples": [
            {
              "name": "Flask API",
              "code": "# Flask API for DBA ML model\n\nprint('Flask API for DBA ML Predictions')\nprint('=' * 55)\n\nflask_code = '''\nfrom flask import Flask, request, jsonify\nimport joblib\nimport logging\n\napp = Flask(__name__)\nmodel = joblib.load('models/query_classifier.pkl')\nlogging.basicConfig(level=logging.INFO)\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.json\n    features = [\n        data['avg_reads'],\n        data['avg_cpu_ms'],\n        data['avg_duration_ms'],\n        data['exec_count']\n    ]\n    prediction = model.predict([features])[0]\n    confidence = model.predict_proba([features]).max()\n    \n    logging.info(f\"Prediction: {prediction} ({confidence:.2f})\")\n    return jsonify({\n        'query_class': prediction,\n        'confidence': round(confidence, 3)\n    })\n\n@app.route('/health')\ndef health():\n    return jsonify({'status': 'healthy', 'model': 'query_classifier_v1.2'})\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)\n'''\nprint(flask_code)\n\nprint('Usage:')\nprint('  curl -X POST http://localhost:5000/predict \\\\')\nprint('    -H \"Content-Type: application/json\" \\\\')\nprint('    -d \\'{\"avg_reads\": 50000, \"avg_cpu_ms\": 500, \"avg_duration_ms\": 2000, \"exec_count\": 100}\\'')"
            },
            {
              "name": "Integration",
              "code": "# Integrating Flask API with DBA monitoring\nimport json\n\n# Simulated API call from monitoring script\ndef call_prediction_api(query_metrics):\n    # In reality: requests.post('http://localhost:5000/predict', json=query_metrics)\n    # Simulated response\n    if query_metrics['avg_reads'] > 50000:\n        return {'query_class': 'Slow', 'confidence': 0.89}\n    elif query_metrics['avg_reads'] > 5000:\n        return {'query_class': 'Medium', 'confidence': 0.75}\n    return {'query_class': 'Fast', 'confidence': 0.95}\n\n# Monitoring integration\nqueries = [\n    {'name': 'GetOrders', 'avg_reads': 75000, 'avg_cpu_ms': 800, 'avg_duration_ms': 3000, 'exec_count': 500},\n    {'name': 'GetProduct', 'avg_reads': 200, 'avg_cpu_ms': 5, 'avg_duration_ms': 10, 'exec_count': 50000},\n    {'name': 'RunReport', 'avg_reads': 120000, 'avg_cpu_ms': 2000, 'avg_duration_ms': 8000, 'exec_count': 50},\n]\n\nprint('DBA Monitoring + ML API Integration')\nprint('=' * 55)\nfor q in queries:\n    result = call_prediction_api(q)\n    print(f'\\n  Query: {q[\"name\"]}')\n    print(f'  Prediction: {result[\"query_class\"]} (confidence: {result[\"confidence\"]})')\n    if result['query_class'] in ['Slow', 'Critical']:\n        print(f'  ACTION: Add to tuning queue')"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 14: Security & Ethics of AI in DBA",
      "sections": [
        {
          "id": "m14s1",
          "title": "14.1 Data Privacy & AI Security",
          "brief": "<h4>Data Privacy & AI Security</h4><ul><li>Never send production data to public LLM APIs</li><li>Data masking: anonymise before AI processing</li><li>API key management: environment variables, key vaults</li><li>Prompt injection: validate all LLM inputs</li><li>Model poisoning: validate training data integrity</li><li>Audit logging: track all AI-generated actions</li></ul>",
          "description": "<p><strong>Security is paramount when combining AI with database administration.</strong></p><p>DBAs handle sensitive data and have elevated privileges. AI tools must be secured to prevent data leaks, unauthorised access, and malicious manipulation.</p><ul><li><strong>Data privacy</strong> — never expose PII or production data to external AI services</li><li><strong>API security</strong> — secure key management, rotate regularly</li><li><strong>Prompt injection</strong> — validate inputs to prevent manipulation</li><li><strong>Access control</strong> — AI tools should have minimum required permissions</li><li><strong>Audit trail</strong> — log every AI-generated query and action</li></ul>",
          "syntax": "# Security best practices\nimport os\nfrom azure.keyvault.secrets import SecretClient\n\n# Never hardcode keys\napi_key = os.environ.get('OPENAI_API_KEY')\n\n# Data masking before sending to LLM\ndef mask_pii(text):\n    # Replace emails, IPs, names\n    text = re.sub(r'\\b[\\w.]+@[\\w.]+\\b', '[EMAIL]', text)\n    text = re.sub(r'\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b', '[IP]', text)\n    return text\n\n# Validate LLM-generated SQL before execution\ndef validate_ai_sql(sql):\n    blocked = ['DROP', 'TRUNCATE', 'xp_cmdshell', 'SHUTDOWN']\n    for keyword in blocked:\n        if keyword in sql.upper():\n            raise SecurityError(f'Blocked: {keyword}')",
          "script": "Cover security considerations for AI in DBA.\nShow data masking and key management.\nDemonstrate prompt injection prevention.",
          "examples": [
            {
              "name": "Security Checklist",
              "code": "# AI Security Checklist for DBAs\n\nchecklist = [\n    ('Data Privacy', [\n        ('Never send production data to public LLMs', True),\n        ('Mask PII before AI processing', True),\n        ('Use private/local LLMs for sensitive data', True),\n        ('Encrypt data at rest and in transit', True),\n    ]),\n    ('API Security', [\n        ('Store keys in environment variables or key vault', True),\n        ('Rotate API keys regularly', True),\n        ('Use separate keys for dev/prod', True),\n        ('Monitor API usage for anomalies', True),\n    ]),\n    ('AI Output Validation', [\n        ('Validate all LLM-generated SQL before execution', True),\n        ('Block dangerous operations (DROP, TRUNCATE)', True),\n        ('Use read-only database connections for AI tools', True),\n        ('Require human approval for write operations', True),\n    ]),\n    ('Audit & Compliance', [\n        ('Log all AI-generated queries', True),\n        ('Track who approved AI actions', True),\n        ('Retain audit logs for compliance period', True),\n        ('Regular security review of AI tools', True),\n    ]),\n]\n\nprint('AI Security Checklist for SQL Server DBAs')\nprint('=' * 55)\nfor category, items in checklist:\n    print(f'\\n  {category}:')\n    for item, required in items:\n        status = '[REQUIRED]' if required else '[RECOMMENDED]'\n        print(f'    [ ] {item} {status}')"
            },
            {
              "name": "Data Masking",
              "code": "import re\n\n# Data masking before sending to LLM\ndef mask_sensitive_data(text):\n    # Mask email addresses\n    text = re.sub(r'[\\w.]+@[\\w.]+\\.[\\w]+', '[EMAIL_MASKED]', text)\n    # Mask IP addresses\n    text = re.sub(r'\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b', '[IP_MASKED]', text)\n    # Mask connection strings\n    text = re.sub(r'(Password|PWD)=[^;]+', r'\\1=[MASKED]', text, flags=re.IGNORECASE)\n    # Mask potential SSNs\n    text = re.sub(r'\\b\\d{3}-\\d{2}-\\d{4}\\b', '[SSN_MASKED]', text)\n    return text\n\n# Test masking\ntest_inputs = [\n    'Error on server 192.168.1.100 for user john@company.com',\n    'Connection: Server=prod-sql;Password=Secret123;Database=HR',\n    'Customer SSN: 123-45-6789 found in logs',\n    'Login failed from IP 10.0.0.55 at 14:23:05',\n]\n\nprint('Data Masking Before LLM Processing')\nprint('=' * 55)\nfor original in test_inputs:\n    masked = mask_sensitive_data(original)\n    print(f'\\n  Original: {original}')\n    print(f'  Masked:   {masked}')"
            }
          ]
        },
        {
          "id": "m14s2",
          "title": "14.2 Responsible AI for Database Management",
          "brief": "<h4>Responsible AI for Database Management</h4><ul><li>Human-in-the-loop: AI recommends, human decides</li><li>Transparency: explain why AI made a recommendation</li><li>Accountability: clear ownership of AI-driven actions</li><li>Bias awareness: training data may not represent all scenarios</li><li>Graceful degradation: system works when AI is unavailable</li><li>Continuous monitoring: track AI decision quality over time</li></ul>",
          "description": "<p><strong>Responsible AI ensures that AI-powered DBA tools are trustworthy, transparent, and safe.</strong></p><p>The key principle: AI assists the DBA, it never replaces human judgment for critical operations. Every AI recommendation should be explainable, and every automated action should have a human-approved policy behind it.</p>",
          "syntax": "# Responsible AI patterns\nclass ResponsibleDBAAgent:\n    def recommend(self, issue):\n        recommendation = self.ai_model.predict(issue)\n        explanation = self.explain_recommendation(recommendation)\n        confidence = self.get_confidence(recommendation)\n        \n        if confidence < 0.8 or issue.is_critical:\n            return HumanApprovalRequired(recommendation, explanation)\n        return AutoApproved(recommendation, explanation)\n    \n    def explain_recommendation(self, rec):\n        # SHAP values, feature importance, similar past cases\n        return f'Based on: {rec.top_features}'",
          "script": "Discuss responsible AI principles for DBAs.\nEmphasise human-in-the-loop.\nShow explainability patterns.",
          "examples": [
            {
              "name": "AI Governance",
              "code": "# AI Governance Framework for DBA Teams\n\nprint('AI Governance Framework for Database Management')\nprint('=' * 60)\n\nprinciples = [\n    ('1. Human Authority', \n     'AI recommends, humans decide on critical operations',\n     ['Production changes require DBA approval',\n      'AI cannot drop objects or modify security',\n      'Escalation path when AI confidence is low']),\n    ('2. Transparency',\n     'Every AI decision must be explainable',\n     ['Show reasoning behind recommendations',\n      'Display confidence scores',\n      'Link to evidence (metrics, docs, history)']),\n    ('3. Accountability',\n     'Clear ownership of AI-driven actions',\n     ['Log who approved each AI action',\n      'Track AI accuracy over time',\n      'Regular review of AI decisions']),\n    ('4. Safety',\n     'Fail-safe design - system works without AI',\n     ['Graceful degradation when AI unavailable',\n      'Rollback capability for AI-initiated changes',\n      'Circuit breaker: disable AI if error rate spikes']),\n]\n\nfor title, desc, items in principles:\n    print(f'\\n  {title}')\n    print(f'  {desc}')\n    for item in items:\n        print(f'    - {item}')"
            },
            {
              "name": "Explainability",
              "code": "# Making AI recommendations explainable\n\ndef explain_recommendation(recommendation):\n    print(f'AI Recommendation: {recommendation[\"action\"]}')\n    print(f'Confidence: {recommendation[\"confidence\"]:.0%}')\n    print(f'\\nWhy this recommendation:')\n    for reason in recommendation['reasons']:\n        print(f'  - {reason}')\n    print(f'\\nEvidence:')\n    for evidence in recommendation['evidence']:\n        print(f'  - {evidence}')\n    print(f'\\nRisk Assessment:')\n    print(f'  Impact if wrong: {recommendation[\"risk\"]}')\n    print(f'  Reversible: {recommendation[\"reversible\"]}')\n\n# Example\nrec = {\n    'action': 'Create index IX_Orders_CustomerID_OrderDate',\n    'confidence': 0.87,\n    'reasons': [\n        'Missing index DMV shows 45,000 seeks on these columns',\n        'Similar index improved query time by 85% on test server',\n        'No existing index covers this query pattern',\n    ],\n    'evidence': [\n        'sys.dm_db_missing_index_details: avg_user_impact = 92%',\n        'Top 3 slowest queries all filter on CustomerID + OrderDate',\n        'Table has 2M rows, current scan takes 3.2 seconds',\n    ],\n    'risk': 'LOW - index creation with ONLINE=ON',\n    'reversible': 'Yes - DROP INDEX if performance degrades',\n}\n\nexplain_recommendation(rec)"
            }
          ]
        }
      ]
    },
    {
      "title": "Module 15: Capstone - AI DBA Assistant",
      "sections": [
        {
          "id": "m15s1",
          "title": "15.1 Architecture of an AI DBA Assistant",
          "brief": "<h4>Architecture of an AI DBA Assistant</h4><ul><li>Components: LLM engine, RAG layer, SQL tools, ML models</li><li>Chat interface: Streamlit or web-based UI</li><li>Backend: LangGraph agent with multiple tools</li><li>Knowledge base: vector store with DBA documentation</li><li>Integration: connects to SQL Server instances</li><li>Safety: approval workflows for write operations</li></ul>",
          "description": "<p><strong>The AI DBA Assistant combines everything from this course into a unified tool.</strong></p><p>Architecture layers:</p><ul><li><strong>UI Layer</strong> — Streamlit chat interface for natural language interaction</li><li><strong>Agent Layer</strong> — LangGraph orchestrates multi-step reasoning</li><li><strong>Knowledge Layer</strong> — RAG with DBA runbooks and documentation</li><li><strong>Tool Layer</strong> — SQL queries, ML predictions, monitoring APIs</li><li><strong>Data Layer</strong> — SQL Server connections, vector store, model storage</li></ul>",
          "syntax": "# AI DBA Assistant Architecture\nclass AIDBAssistant:\n    def __init__(self):\n        self.llm = ChatOpenAI(model='gpt-4')\n        self.vectorstore = Chroma(persist_directory='./kb')\n        self.sql_tools = SQLServerTools(connection_string)\n        self.ml_models = load_models('./models/')\n        self.agent = build_langgraph_agent(\n            self.llm, self.vectorstore, \n            self.sql_tools, self.ml_models\n        )\n    \n    def chat(self, message):\n        return self.agent.invoke({'input': message})",
          "script": "Present the capstone project architecture.\nShow how all course components fit together.\nDiscuss design decisions.",
          "examples": [
            {
              "name": "Architecture",
              "code": "# AI DBA Assistant - Component Architecture\n\nprint('AI DBA Assistant Architecture')\nprint('=' * 60)\n\nlayers = {\n    'UI Layer': [\n        'Streamlit chat interface',\n        'Real-time metric dashboard',\n        'Approval workflow buttons',\n    ],\n    'Agent Layer (LangGraph)': [\n        'Multi-step reasoning',\n        'Conditional routing (diagnose vs query vs predict)',\n        'Human-in-the-loop for critical actions',\n    ],\n    'Knowledge Layer (RAG)': [\n        'ChromaDB vector store',\n        'DBA runbooks and best practices',\n        'Error solution database',\n    ],\n    'Tool Layer': [\n        'SQL Server query tools (pyodbc)',\n        'ML prediction models (scikit-learn)',\n        'Monitoring API integration',\n    ],\n    'Data Layer': [\n        'SQL Server connections (multiple instances)',\n        'Model storage (joblib)',\n        'Conversation history (SQLite)',\n    ],\n}\n\nfor layer, components in layers.items():\n    print(f'\\n  [{layer}]')\n    for comp in components:\n        print(f'    - {comp}')\n\nprint('\\n\\nData Flow:')\nprint('  User Question -> Agent -> [RAG | SQL | ML] -> Response')"
            },
            {
              "name": "Capabilities",
              "code": "# AI DBA Assistant capabilities\n\ncapabilities = [\n    ('Natural Language Queries', \n     'Ask questions about your databases in plain English',\n     '\"Show me the top 5 largest databases\"'),\n    ('Troubleshooting',\n     'Diagnose and resolve performance issues',\n     '\"Why is the server slow right now?\"'),\n    ('Predictions',\n     'Forecast resource usage and potential issues',\n     '\"When will the disk be full?\"'),\n    ('Knowledge Base',\n     'Answer questions from your DBA documentation',\n     '\"How do I set up log shipping?\"'),\n    ('Monitoring',\n     'Real-time health checks and alerts',\n     '\"Check the health of PROD-SQL-01\"'),\n    ('Automation',\n     'Execute approved maintenance tasks',\n     '\"Rebuild fragmented indexes on OrdersDB\"'),\n]\n\nprint('AI DBA Assistant - Capabilities')\nprint('=' * 60)\nfor name, desc, example in capabilities:\n    print(f'\\n  {name}')\n    print(f'    {desc}')\n    print(f'    Example: {example}')"
            }
          ]
        },
        {
          "id": "m15s2",
          "title": "15.2 Building Your AI DBA Bot",
          "brief": "<h4>Building Your AI DBA Bot</h4><ul><li>Step 1: Set up Streamlit chat UI</li><li>Step 2: Configure LangGraph agent with tools</li><li>Step 3: Build RAG knowledge base from your docs</li><li>Step 4: Add SQL Server connection tools</li><li>Step 5: Integrate ML prediction models</li><li>Step 6: Add safety guardrails and logging</li></ul>",
          "description": "<p><strong>This capstone project brings together everything you've learned to build a working AI DBA assistant.</strong></p><p>You'll build a chat-based tool that can:</p><ul><li>Answer questions about your SQL Server environment</li><li>Diagnose performance issues using DMV data</li><li>Make predictions using trained ML models</li><li>Look up solutions from your knowledge base</li><li>Execute approved maintenance operations</li></ul>",
          "syntax": "# Capstone: AI DBA Bot with Streamlit\nimport streamlit as st\nfrom langchain_openai import ChatOpenAI\nfrom langgraph.graph import StateGraph\n\nst.title('AI DBA Assistant')\n\n# Initialize agent\nagent = build_dba_agent()\n\n# Chat interface\nif prompt := st.chat_input('Ask me anything about your databases...'):\n    st.chat_message('user').write(prompt)\n    response = agent.invoke({'input': prompt})\n    st.chat_message('assistant').write(response['output'])",
          "script": "Guide students through building the capstone.\nShow Streamlit UI setup.\nIntegrate all components.\nTest with real scenarios.",
          "examples": [
            {
              "name": "Streamlit App",
              "code": "# Streamlit AI DBA Bot - Main App\n\nprint('Capstone: AI DBA Bot (Streamlit)')\nprint('=' * 55)\n\napp_code = '''\nimport streamlit as st\nfrom ai_dba_agent import DBAAgent\n\nst.set_page_config(page_title=\"AI DBA Assistant\", layout=\"wide\")\nst.title(\"AI DBA Assistant\")\nst.caption(\"Ask me anything about your SQL Server environment\")\n\n# Initialize\nif \"agent\" not in st.session_state:\n    st.session_state.agent = DBAAgent()\n    st.session_state.messages = []\n\n# Display chat history\nfor msg in st.session_state.messages:\n    st.chat_message(msg[\"role\"]).write(msg[\"content\"])\n\n# Chat input\nif prompt := st.chat_input(\"e.g., Why is CPU high on PROD-SQL-01?\"):\n    st.session_state.messages.append({\"role\": \"user\", \"content\": prompt})\n    st.chat_message(\"user\").write(prompt)\n    \n    with st.spinner(\"Analysing...\"):\n        response = st.session_state.agent.chat(prompt)\n    \n    st.session_state.messages.append({\"role\": \"assistant\", \"content\": response})\n    st.chat_message(\"assistant\").write(response)\n\n# Sidebar - Server Status\nwith st.sidebar:\n    st.header(\"Server Status\")\n    servers = st.session_state.agent.get_server_status()\n    for server in servers:\n        color = \"green\" if server[\"healthy\"] else \"red\"\n        st.markdown(f\":{color}[{server['name']}] - CPU: {server['cpu']}%\")\n'''\nprint(app_code)\n\nprint('\\nRun with: streamlit run app.py')"
            },
            {
              "name": "Demo Session",
              "code": "# Simulated AI DBA Bot conversation\n\nconversation = [\n    ('User', 'What is the current health of PROD-SQL-01?'),\n    ('Bot', '''Server Health: PROD-SQL-01\n  CPU: 45% (Normal)\n  Memory: 72% (Normal)  \n  Disk: 68% (Normal)\n  Active Sessions: 127\n  Blocking: None\n  Top Wait: SOS_SCHEDULER_YIELD (expected for this workload)\n  \n  Overall Status: HEALTHY'''),\n    ('User', 'Which databases are growing fastest?'),\n    ('Bot', '''Based on the last 30 days of data:\n\n  1. OrdersDB: +2.3 GB/day (fastest)\n     Predicted to reach 85% in 45 days\n  2. LogDB: +1.1 GB/day\n     Predicted to reach 85% in 90 days\n  3. ArchiveDB: +0.8 GB/day\n     Stable, no action needed\n\n  Recommendation: Plan storage expansion for OrdersDB within 30 days.'''),\n    ('User', 'How do I set up log shipping for OrdersDB?'),\n    ('Bot', '''From our knowledge base (runbooks/log_shipping_setup.md):\n\n  1. Take full backup of OrdersDB on primary\n  2. Restore WITH NORECOVERY on secondary\n  3. Configure backup job (every 15 min)\n  4. Configure copy job on secondary\n  5. Configure restore job on secondary\n  \n  T-SQL for step 1:\n  BACKUP DATABASE [OrdersDB] TO DISK = \\'\\\\\\\\share\\\\OrdersDB_full.bak\\'\n  WITH COMPRESSION, INIT\n  \n  Would you like me to generate the full setup script?'''),\n]\n\nprint('AI DBA Bot - Demo Session')\nprint('=' * 60)\nfor role, msg in conversation:\n    prefix = 'DBA' if role == 'User' else 'BOT'\n    print(f'\\n[{prefix}]: {msg}')"
            }
          ]
        }
      ]
    }
  ]
};
