# Generation Instructions

## Process Overview

Transform your purpose specification YAML into scaffolding files by following the detailed instructions in the `instructions/` directory.

## Step-by-Step Instructions

Follow these instruction files in order:

0. **`instructions/00-draft-to-spec.md`** - Transform user's draft idea into purpose spec
1. **`instructions/01-parse-spec.md`** - Extract information from your purpose spec
2. **`instructions/02-create-agents.md`** - Generate agent files  
3. **`instructions/03-create-workflows.md`** - Generate workflow files
4. **`instructions/04-create-configs.md`** - Generate configuration files
5. **`instructions/05-create-docs.md`** - Generate documentation files
6. **`instructions/08-create-claude-md.md`** - Generate CLAUDE.md (MOST IMPORTANT)

## Reference Materials

- **`instructions/06-variables.md`** - Complete variable substitution reference
- **`instructions/07-special-filters.md`** - Date filters, joins, and loops

## What You'll Generate

From your purpose spec, you'll create:
- **`CLAUDE.md`** - Main entry point for Claude (MOST IMPORTANT)
- `claude/agents/{id}/` directories with `agent.yaml` and `system.md`
- `workflows/{id}/` directories with `workflow.yaml` 
- `configs/` directory with `secrets.env.example`
- `docs/` directory with selected documentation files

## Getting Started

Begin with `instructions/00-draft-to-spec.md` to transform a simple draft idea into a structured purpose specification, then continue through the numbered steps.