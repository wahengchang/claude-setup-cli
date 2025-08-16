# Minimal Generation Pack

A tiny scaffolding system that transforms your draft idea into structured agent and workflow files.

## Quick Start

### 1. Prepare Your Input
Create a file called `_input.md` with your draft idea:

```markdown
I want to create a system that automatically reviews pull requests in my GitHub repo. 
It should check for code quality issues and provide feedback to developers.
```

### 2. Start Claude
Run Claude in this directory:
```bash
claude
```

### 3. Generate Your Pack
In Claude, run:
```
Read INSTRUCTIONS.md and help me generate my minimal pack from _input.md
```

Claude will:
1. Transform your draft idea into a purpose specification
2. Generate all the scaffolding files using the templates
3. Create the complete directory structure

## What You'll Get

From your simple idea, you'll generate:
- `agents/` - Advisory agent definitions with identity and memory
- `workflows/` - Labeled workflow states and triggers  
- `configs/` - Secrets contract (no real secrets)
- `docs/` - DESIGN, RUNBOOK, ADR template, and CHANGELOG

## Example Structure

```
your-project/
├── CLAUDE.md              # 🎯 Main entry point for Claude
├── claude/
│   └── agents/
│       ├── reviewer/
│       │   ├── agent.yaml
│       │   └── system.md
│       └── summarizer/
│           ├── agent.yaml
│           └── system.md
├── workflows/
│   └── pr-review/
│       └── workflow.yaml
├── configs/
│   └── secrets.env.example
└── docs/
    ├── DESIGN.md
    ├── RUNBOOK.md
    └── CHANGELOG.md
```

## Manual Generation (Alternative)

If you prefer to generate manually:
1. See `instructions/GENERATOR.md` for complete step-by-step instructions
2. Follow `instructions/00-draft-to-spec.md` through `instructions/05-create-docs.md`

## Boundaries

This pack focuses on minimal scaffolding only:
- ✅ Agent identities and memory notes
- ✅ Workflow state labels and triggers
- ✅ Documentation structure
- ❌ Execution, routing, guardrails, telemetry (add these later)

## Files in This Pack

- `README.md` - This file (start here)
- `INSTRUCTIONS.md` - Overview and boundaries
- `instructions/` - All detailed guides including:
  - `GENERATOR.md` - Manual generation overview
  - `PURPOSES.md` - Purpose spec field reference
  - `00-draft-to-spec.md` through `07-special-filters.md` - Step-by-step guides
- `templates/` - Jinja2 templates for generation