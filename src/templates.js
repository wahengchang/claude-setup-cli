function getTemplateStructure() {
  return {
    'development': {
      name: '🛠️  Development Setup',
      subcategories: {
        'claude-config': {
          name: 'Claude Configuration',
          items: [
            {
              name: 'CLAUDE.md',
              description: 'Claude AI configuration file',
              path: 'mvp-project-setup/_CLAUDE.md',
              destination: 'CLAUDE.md'
            },
            {
              name: 'Setup Guide',
              description: 'Project setup instructions',
              path: 'mvp-project-setup/setup.md',
              destination: 'setup.md'
            }
          ]
        },
        'commands': {
          name: 'Command Templates',
          items: [
            {
              name: 'Development Command',
              description: 'Development environment command template',
              path: 'mvp-project-setup/command-dev.md',
              destination: 'commands/command-dev.md'
            },
            {
              name: 'Production Command',
              description: 'Production environment command template',
              path: 'mvp-project-setup/command-prd.md',
              destination: 'commands/command-prd.md'
            },
            {
              name: 'Dev Review Command',
              description: 'Development review command template',
              path: 'mvp-project-setup/command-dev-review.md',
              destination: 'commands/command-dev-review.md'
            },
            {
              name: 'Subagent Command',
              description: 'Subagent command template',
              path: 'mvp-project-setup/command-subagent.md',
              destination: 'commands/command-subagent.md'
            },
            {
              name: 'Subagent Review Command',
              description: 'Subagent review command template',
              path: 'mvp-project-setup/command-subagent-review.md',
              destination: 'commands/command-subagent-review.md'
            }
          ]
        }
      }
    },
    'samples': {
      name: '📂 Sample Files',
      subcategories: {
        'subagent-samples': {
          name: 'Subagent Examples',
          items: [
            {
              name: 'Sample Subagent',
              description: 'Example subagent implementation',
              path: 'mvp-project-setup/sample-subagent/sample.md',
              destination: 'samples/sample-subagent.md'
            }
          ]
        }
      }
    }
  };
}

module.exports = { getTemplateStructure };