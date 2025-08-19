# Contextual Engineering Agent Setup

1. analyse the existing project structure, find out the ./docs/ folder and ./claude.md file
2. base on the File Categories, copy and modify the `_context-agent.md` file to `./.claude/agents/context-agent.md`
3. base on the updated File Categories, modify and adding below content to `./claude.md`
```
## Documentation Operation Rules

⚠️ **Managed files MUST use subagent: context-agent**

### Managed Categories
- **Core**: `claude.md` 
- **Docs**: `./doc/*.md`
- **Config**: `package.json`
- **Workflows**: `./workflow/*`
```
4. remove all termporary files: `_context-agent.md`, `setup.md`