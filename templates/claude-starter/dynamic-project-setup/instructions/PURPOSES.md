# Purpose Spec — Minimal Field Reference

## Required
- `name`: slug (kebab-case)
- `description`: one-line purpose
- `category`: e.g., code-review | authoring | migration | docs | ops
- `targets`:
  - `repo`: canonical repo identifier (url/ssh)
  - `runtime`: local | ci | service
- `agents[]`:
  - `id`: short name
  - `description`: what this agent advises on
- `workflows[]`:
  - `id`: short name
  - `trigger`: pr | cron | webhook | manual
  - `pattern`: single | cascade
  - `states[]`: ordered list of labels
- `docs`: which docs to render (subset of: DESIGN, RUNBOOK, ADR, CHANGELOG)

## Optional
- `memory.long_term.index`: "none" (reserved for future), leave as "none"

## Example Structure
```yaml
name: "my-pack"
description: "Brief description of what this pack does"
category: "code-review"
targets:
  repo: "git@github.com:org/repo.git"
  runtime: "ci"

agents:
  - id: "reviewer"
    description: "Reviews code changes"

workflows:
  - id: "review-flow"
    trigger: "pr"
    pattern: "cascade"
    states: ["START", "REVIEW", "DONE"]

docs: ["DESIGN", "RUNBOOK"]

memory:
  long_term:
    index: "none"
```