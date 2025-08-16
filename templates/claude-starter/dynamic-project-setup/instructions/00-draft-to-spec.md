# From Draft Idea to Purpose Spec

## Input: User's Draft Idea

User provides a simple description of what they want to build. Examples:

**Example 1:**
> "I want to create a system that automatically reviews pull requests in my GitHub repo. It should check for code quality issues and provide feedback to developers."

**Example 2:** 
> "I need a documentation generator that runs every night and updates our API docs based on code changes."

**Example 3:**
> "I want to build a migration assistant that helps move code from one framework to another, with step-by-step guidance."

## Output: Generate Purpose Spec

Transform the draft idea into a structured YAML specification by identifying:

### 1. Extract Basic Information
- **Name**: Create a kebab-case name from the idea
- **Description**: Refine the user's description to one clear line
- **Category**: Classify as: code-review | authoring | migration | docs | ops

### 2. Determine Targets
- **Repo**: Ask user for repository URL or use placeholder
- **Runtime**: Infer from context (local | ci | service)

### 3. Identify Required Agents
Break down the idea into advisory roles:
- What different types of guidance are needed?
- What expertise areas are required?
- Create 1-3 agents with clear responsibilities

### 4. Design Workflow
- **Trigger**: When should this run? (pr | cron | webhook | manual)
- **Pattern**: Single action or cascade of steps?
- **States**: What are the logical steps from start to finish?

### 5. Select Documentation
Choose appropriate docs from: DESIGN, RUNBOOK, ADR, CHANGELOG

## Example Transformation

**User Input:**
> "I want automated PR reviews that check code quality and security issues"

**Generated Spec:**
```yaml
name: "automated-pr-review"
description: "Automated PR reviewer that checks code quality and security issues"
category: "code-review"
targets:
  repo: "git@github.com:user/repo.git"
  runtime: "ci"

agents:
  - id: "quality-checker"
    description: "Analyzes code quality, style, and best practices"
  - id: "security-scanner" 
    description: "Identifies potential security vulnerabilities"
  - id: "reviewer-summarizer"
    description: "Consolidates findings into actionable feedback"

workflows:
  - id: "pr-review-flow"
    trigger: "pr"
    pattern: "cascade"
    states: ["FETCH_CHANGES", "QUALITY_CHECK", "SECURITY_SCAN", "SUMMARIZE", "COMMENT"]

docs: ["DESIGN", "RUNBOOK", "CHANGELOG"]

memory:
  long_term:
    index: "none"
```

## Next Steps

Once the purpose spec is generated:
1. Save it as `purposes/your-project.yaml`
2. Continue with `instructions/01-parse-spec.md`