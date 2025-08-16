# Create Workflow Files

## For Each Workflow in Your Spec

1. **Create Workflow Directory**: `workflows/{workflow-id}/`
2. **Generate File**: `workflow.yaml`

## Generate workflow.yaml

Use template: `templates/workflows/workflow.yaml.j2`

**Variable Substitutions:**
- `{{ workflow.id }}` → Current workflow's ID
- `{{ workflow.trigger }}` → Trigger type (pr, cron, webhook, manual)
- `{{ workflow.pattern }}` → Pattern type (single, cascade)
- `{{ workflow.states }}` → Process each state in the list

**For States List:**
The template uses `{% for s in workflow.states %}` to create:
```yaml
states:
  - id: STATE1
  - id: STATE2
  - id: STATE3
```

## Example

If your spec has:
```yaml
workflows:
  - id: "pr-review"
    trigger: "pr"
    pattern: "cascade"
    states: ["FETCH_DIFF", "REVIEW", "SUMMARIZE", "DONE"]
```

Create:
- `workflows/pr-review/workflow.yaml`

## References

- See `instructions/06-variables.md` for complete variable reference
- Continue with `instructions/04-create-configs.md`