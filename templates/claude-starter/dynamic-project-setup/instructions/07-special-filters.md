# Special Filters and Operations

## Date Filter

**Pattern**: `{{ "%Y-%m-%d" | date }}`
**Replacement**: Today's date in YYYY-MM-DD format
**Example**: "2024-08-14"

**Usage in Templates**:
- CHANGELOG.md: `## [0.1.0] — {{ "%Y-%m-%d" | date }}`
- ADR.template.md: `# ADR {{ "%Y-%m-%d" | date }} — {{ title }}`

## Join Filter

**Pattern**: `{{ workflow.states | join(" → ") }}`
**Purpose**: Combines list items with arrows between them
**Example**: `["FETCH_DIFF", "REVIEW", "DONE"]` becomes `"FETCH_DIFF → REVIEW → DONE"`

**Usage in Templates**:
- RUNBOOK.md: `- States: {{ workflow.states | join(" → ") }}`

## Loop Operations

**Pattern**: 
```
{% for s in workflow.states -%}
  - id: {{ s }}
{% endfor %}
```

**Purpose**: Creates a list entry for each state
**Example Output**:
```yaml
states:
  - id: FETCH_DIFF
  - id: REVIEW
  - id: DONE
```

## Default Value Filter

**Pattern**: `{{ variable | default("fallback") }}`
**Purpose**: Use fallback value if variable is missing
**Examples**:
- `{{ purpose.owner | default("codegen") }}`
- `{{ agent.description | default("Purpose-built advisory agent") }}`

## When to Use Each Filter

- **Date**: For timestamps in documentation
- **Join**: For displaying workflow state sequences
- **Loop**: For creating YAML lists from arrays
- **Default**: For optional fields with sensible fallbacks