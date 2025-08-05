# Setup CLI

Interactive CLI for selecting and copying setup files to your project using directory-based navigation.

## Installation

```bash
npm install
```

## Usage

Run the CLI:

```bash
npm start
# or
node bin/cli.js
```

## How It Works

The CLI uses your directory structure as the menu system:

1. **Navigate through directories** using arrow keys
2. **Directory = Menu level** (e.g., `templates/frontend/react/`)  
3. **Smart formatting** - directory names like `claude-config` display as `Claude Config`
4. **setup.md file = End point** - when found, you can copy all files in that directory
5. **← Back option** to navigate up one level

## Directory Structure Example

```
templates/
├── development/
│   ├── claude-config/
│   │   ├── setup.md ✓          # End point - copy all files here
│   │   ├── CLAUDE.md
│   │   └── .env.example
│   └── commands/
│       ├── setup.md ✓          # End point - copy all files here
│       └── package.json
├── frontend/
│   ├── react/
│   │   ├── setup.md ✓          # End point - copy all files here
│   │   └── package.json
│   └── vue/
│       ├── setup.md ✓          # End point - copy all files here
│       └── vite.config.ts
└── backend/
    ├── node/
    │   ├── setup.md ✓          # End point - copy all files here
    │   └── package.json
    └── python/
        ├── setup.md ✓          # End point - copy all files here
        └── requirements.txt
```

## Features

- **Directory-based navigation** - no configuration needed
- **Automatic menu generation** from filesystem
- **Smart name formatting** - converts `abc-efg` to `Abc Efg` in menus
- **setup.md detection** - marks copy endpoints
- **Prevents overwriting** existing files
- **Colored output** with progress indicators
- **Back navigation** through directory levels

## Adding New Templates

1. Create directory structure under `templates/`
2. Add your template files to the directory
3. Create a `setup.md` file to mark it as a copy endpoint
4. The CLI will automatically detect and include it in the menu

## Example Template Directory

```
templates/my-new-template/
├── setup.md                    # Required - marks this as an endpoint
├── package.json               # Your template files
├── src/
│   └── index.js
└── README.md
```

The `setup.md` should contain instructions for using the template files.

## Directory Name Formatting

Directory names are automatically formatted in the CLI menus:
- `claude-config` → `Claude Config`
- `my-awesome-template` → `My Awesome Template`
- `backend-api` → `Backend Api`

This makes the menus more readable while keeping your directory names developer-friendly.