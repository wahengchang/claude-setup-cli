# Parse Your Purpose Spec

## What to Extract

Read your `purposes/my-spec.yaml` file and extract these key elements:

- **Project Identity**: name, description, category
- **Target Information**: repo URL, runtime environment  
- **Agent Definitions**: list of agents with IDs and descriptions
- **Workflow Definitions**: list of workflows with triggers, patterns, and states
- **Documentation Requirements**: which docs to generate

## Expected Structure

Your YAML should contain:
```yaml
name: "project-name"
description: "Brief project description"
category: "project-category"
targets:
  repo: "git@github.com:org/repo.git"
  runtime: "ci"

agents:
  - id: "agent-name"
    description: "What this agent does"

workflows:
  - id: "workflow-name"
    trigger: "pr"
    pattern: "cascade"
    states: ["STATE1", "STATE2", "STATE3"]

docs: ["DESIGN", "RUNBOOK", "CHANGELOG"]
```

## Next Steps

Once you have extracted this information, proceed to:
- `instructions/02-create-agents.md` for agent generation
- `instructions/03-create-workflows.md` for workflow generation
- `instructions/04-create-configs.md` for config generation
- `instructions/05-create-docs.md` for documentation generation