# Create Config Files

## Generate Configuration Directory

1. **Create Directory**: `configs/`
2. **Generate File**: `secrets.env.example`

## Generate secrets.env.example

Use template: `templates/configs/secrets.env.example.j2`

**Variable Substitutions:**
- This template contains no variables to replace
- Copy the template content directly

## Purpose

This file serves as a secrets contract - it documents what environment variables your system expects without containing actual secret values.

## Example Output

The generated file will contain:
```bash
# Secrets Contract — DO NOT COMMIT REAL VALUES
# (This minimal pack does not require specific secrets, but reserve keys here.)

# Example placeholders (leave empty or document your own)
EXAMPLE_SERVICE_TOKEN=
EXAMPLE_REPO_PAT=
```

## References

- Continue with `instructions/05-create-docs.md`