# Create Documentation Files

## Generate Documentation Directory

1. **Create Directory**: `docs/`
2. **Generate Files**: Based on your `docs` array in the purpose spec

## Available Documentation Types

### DESIGN.md
**Template**: `templates/docs/DESIGN.md.j2`
**Variables**: `{{ purpose.name }}`

### RUNBOOK.md  
**Template**: `templates/docs/RUNBOOK.md.j2`
**Variables**: 
- `{{ purpose.name }}`
- `{{ workflow.trigger }}` (from first workflow)
- `{{ workflow.states | join(" → ") }}` (join states with arrows)

### ADR.template.md
**Template**: `templates/docs/ADR.template.md.j2`
**Variables**: 
- `{{ "%Y-%m-%d" | date }}` → Today's date (YYYY-MM-DD)
- `{{ title }}` → Leave as placeholder

**Note**: Output filename is `ADR.template.md`

### CHANGELOG.md
**Template**: `templates/docs/CHANGELOG.md.j2`
**Variables**: 
- `{{ purpose.name }}`
- `{{ "%Y-%m-%d" | date }}` → Today's date

## Generation Logic

Only generate docs listed in your `docs` array:
```yaml
docs: ["DESIGN", "RUNBOOK", "CHANGELOG"]
```

## Workflow Context

For templates that need workflow information (like RUNBOOK.md), use the first workflow from your workflows list.

## References

- See `instructions/06-variables.md` for complete variable reference
- See `instructions/07-special-filters.md` for date and join operations