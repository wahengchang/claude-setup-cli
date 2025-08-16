# Create Agent Files

## For Each Agent in Your Spec

1. **Create Agent Directory**: `claude/agents/{agent-id}/`
2. **Generate Two Files**: `agent.yaml` and `system.md`

## Generate agent.yaml

Use template: `templates/agents/agent.yaml.j2`

**Variable Substitutions:**
- `{{ agent.id }}` → Current agent's ID
- `{{ agent.description }}` → Current agent's description  
- `{{ purpose.name }}` → Your project name
- `{{ purpose.targets.repo }}` → Your repository URL
- `{{ purpose.category }}` → Your project category
- `{{ purpose.memory.long_term.index }}` → "none" (or use default)

## Generate system.md

Use template: `templates/agents/system.md.j2`

**Variable Substitutions:**
- `{{ agent.id }}` → Current agent's ID
- `{{ purpose.description }}` → Your project description

## Example

If your spec has:
```yaml
agents:
  - id: "reviewer"
    description: "Reviews code changes"
```

Create:
- `claude/agents/reviewer/agent.yaml`
- `claude/agents/reviewer/system.md`

## References

- See `instructions/06-variables.md` for complete variable reference
- Continue with `instructions/03-create-workflows.md`