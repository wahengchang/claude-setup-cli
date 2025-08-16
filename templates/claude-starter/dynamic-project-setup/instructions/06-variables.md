# Variable Substitution Reference

## Common Variables (Available in All Templates)

| Variable | Replacement | Example |
|----------|-------------|---------|
| `{{ purpose.name }}` | Your project name | "pr-review-lite" |
| `{{ purpose.description }}` | Your project description | "Lightweight PR reviewer" |
| `{{ purpose.targets.repo }}` | Your repository URL | "git@github.com:org/repo.git" |
| `{{ purpose.category }}` | Your project category | "code-review" |
| `{{ purpose.owner }}` | Project owner | "codegen" (default) |

## Agent-Specific Variables (In Agent Templates Only)

| Variable | Replacement | Example |
|----------|-------------|---------|
| `{{ agent.id }}` | Current agent's ID | "reviewer" |
| `{{ agent.description }}` | Current agent's description | "Reviews code changes" |

## Workflow-Specific Variables (In Workflow Templates Only)

| Variable | Replacement | Example |
|----------|-------------|---------|
| `{{ workflow.id }}` | Current workflow's ID | "pr-review" |
| `{{ workflow.trigger }}` | Trigger type | "pr", "cron", "webhook", "manual" |
| `{{ workflow.pattern }}` | Pattern type | "single", "cascade" |
| `{{ workflow.states }}` | List of state names | ["FETCH_DIFF", "REVIEW", "DONE"] |

## Memory Variables

| Variable | Replacement | Example |
|----------|-------------|---------|
| `{{ purpose.memory.long_term.index }}` | Index type | "none" |

## Default Values

Some variables have default values if not specified:
- `{{ purpose.owner | default("codegen") }}` → "codegen"
- `{{ agent.description | default("Purpose-built advisory agent") }}` → fallback description
- `{{ purpose.memory.long_term.index | default("none") }}` → "none"

## References

- See `instructions/07-special-filters.md` for date and join operations