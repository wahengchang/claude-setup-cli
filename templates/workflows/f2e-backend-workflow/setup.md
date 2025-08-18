# Setup Instructions

## Steps

1. **Add MCP tools**
   ```bash
   claude mcp add playwright npx @playwright/mcp@latest
   ```

2. ensuer packages are install correctly
make sure both `playwright` and  `@playwright/mcp@latest` are installed

3. **Add core npm scripts** (adapt port/commands for your project):
   ```json
   "dev": "nodemon server.js",
   "dev:logs": "nodemon server.js | tee server.log",
   "monitor": "tail -f server.log",
   "kill:port": "lsof -ti:8787 | xargs kill -9"
   ```

4. **Verify you have:**
   - Backend server file
   - Frontend/static directory 

5. copy `_workflow_f2e_backend.md` to `./workflow/workflow_f2e_backend.md`

6. delete tempolary file `_workflow_f2e_backend.md` and `setup.md`
