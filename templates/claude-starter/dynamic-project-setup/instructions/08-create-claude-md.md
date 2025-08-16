# Create CLAUDE.md File

## Most Important Step

The CLAUDE.md file is the **main entry point** for your project. Claude reads this file to understand the entire project context, agents, workflows, and structure.

## Generate CLAUDE.md

Use template: `templates/CLAUDE.md.j2`

**Location**: Root directory (`./CLAUDE.md`)

## Variable Substitutions

**Project Information:**
- `{{ purpose.name }}` → Your project name
- `{{ purpose.description }}` → Your project description
- `{{ purpose.category }}` → Your project category
- `{{ purpose.targets.repo }}` → Repository URL
- `{{ purpose.targets.runtime }}` → Runtime environment

**Dynamic Sections:**
- `{% for agent in purpose.agents %}` → Creates section for each agent
- `{% for workflow in purpose.workflows %}` → Creates section for each workflow  
- `{% for doc in purpose.docs %}` → Lists each documentation file

**Special Operations:**
- `{{ workflow.states | join(" → ") }}` → Joins workflow states with arrows
- `{{ "%Y-%m-%d" | date }}` → Today's date
- `{% if doc == "ADR" %}.template{% endif %}` → Adds .template suffix for ADR files

## Example Output

```markdown
# pr-review-lite

Lightweight PR reviewer: summarize diffs and highlight risks.

## Project Context

**Category**: code-review  
**Repository**: git@github.com:org/repo.git  
**Runtime**: ci

## Agents

### reviewer
Advises on code diff summaries and potential issues.

**Location**: `claude/agents/reviewer/`
- `agent.yaml` - Agent configuration and memory settings
- `system.md` - Working notes and principles

## Workflows

### pr-review
**Trigger**: pr  
**Pattern**: cascade  
**States**: FETCH_DIFF → REVIEW → SUMMARIZE → DONE

**Location**: `workflows/pr-review/workflow.yaml`

## Documentation

- `docs/DESIGN.md`
- `docs/RUNBOOK.md`
- `docs/CHANGELOG.md`

## Configuration

- `configs/secrets.env.example` - Environment variable contract

## Memory Notes

This project uses none indexing for long-term memory.

Generated on 2024-08-14
```

## Importance

CLAUDE.md serves as:
- **Project overview** for Claude to understand context
- **Navigation guide** to all project components
- **Memory anchor** for long-term project understanding
- **Entry point** for any Claude session in this project

This is the **most critical file** in the generated output.