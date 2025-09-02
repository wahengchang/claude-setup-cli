# Contextual Engineering Agent Setup

1. Analyze the existing project structure, find the ./docs/ folder and ./claude.md file
2. Based on the File Categories, copy and modify the `_context-agent.md` file to `./.claude/agents/context-agent.md`
3. Based on the updated File Categories, modify and add the following content to `./claude.md`:

```markdown
## Documentation Operation Rules

⚠️ **Managed files MUST use subagent: context-agent**

### Managed Categories
- **Core**: `claude.md` 
- **Docs**: `./docs/*.md`
- **Config**: `package.json`
- **Workflows**: `./workflow/*`
```

4. Remove all temporary files: `_context-agent.md`, `setup.md`