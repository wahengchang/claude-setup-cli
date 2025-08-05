# Guide to Share Your Claude Config

Want to share your Claude configuration with the community? Follow this simple guide to contribute your setup templates.

## Step 1: Create Your Template Folder

Create a new folder under `templates/` with a descriptive name:

```bash
templates/your-template-name/
```

**Naming conventions:**
- Use kebab-case: `react-typescript-setup`
- Be descriptive: `nextjs-tailwind-config`
- Include the main technology: `python-fastapi-claude`

## Step 2: Add Required Files

### 2.1 Create `setup.md` (Required)

This file marks your template as a copy endpoint and should contain setup instructions:

```markdown
# Your Template Name

Brief description of what this template provides.

## What's Included

- List of files
- Configuration details
- Any special features

## Setup Instructions

1. Step-by-step instructions
2. Any additional configuration needed
3. How to verify it's working

## Usage

How to use this configuration with Claude.
```

### 2.2 Add `_CLAUDE.md` (Required)

Include your Claude configuration file. Use `_CLAUDE.md` (with underscore) so it gets copied as `CLAUDE.md`:

```markdown
# Project: Your Project Name

## Context
Brief description of your project and how Claude should assist.

## Instructions
- Your Claude instructions
- Coding standards
- Project-specific guidelines

## Files Structure
Brief overview of your project structure.
```

## Step 3: Add Your Configuration Files

Include all your setup files:
- Configuration files (`.env.example`, `package.json`, etc.)
- Documentation files
- Template files
- Any other relevant setup files

Example structure:
```
templates/react-typescript-setup/
├── setup.md                    # Required
├── _CLAUDE.md                  # Required (becomes CLAUDE.md)
├── package.json
├── tsconfig.json
├── .env.example
└── src/
    └── types/
        └── global.d.ts
```

## Step 4: Test Your Template

1. Test the CLI with your new template:
   ```bash
   claude-setup-cli
   ```
2. Navigate to your template and copy files
3. Verify all files are copied correctly
4. Test that the setup instructions work

## Step 5: Clean Up After Setup

**Important:** Your `setup.md` should include instructions to remove setup files after configuration:

```markdown
## Clean Up

After completing the setup, remove these files:
1. `setup.md` - This instruction file
2. Any temporary setup files
3. Keep only the actual configuration files

```bash
rm setup.md
rm any-other-setup-files
```
```

## Contribution Guidelines

- **Keep it simple:** Focus on essential configuration
- **Document everything:** Clear instructions in `setup.md`
- **Test thoroughly:** Ensure your template works in a fresh project
- **Be specific:** Include exact commands and file paths
- **Stay updated:** Keep your templates current with latest best practices

## Example Templates

Look at existing templates for inspiration:
- `templates/claude-github-starter/`
- `templates/claude-starter/mvp-project-setup/`

## Submit Your Template

1. Fork the repository
2. Add your template following this guide
3. Test it thoroughly
4. Submit a pull request with:
   - Clear description of what your template provides
   - Screenshots or examples if helpful
   - Any special requirements or dependencies

Thank you for contributing to the Claude community! 🎉