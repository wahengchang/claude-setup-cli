const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { copyDirectoryFiles } = require('./fileManager');

async function setupMenu() {
  console.log(chalk.blue.bold('\n🚀 Welcome to Setup CLI!\n'));
  
  const templatesPath = path.join(__dirname, '..', 'templates');
  await navigateMenu(templatesPath, []);
}

async function navigateMenu(currentPath, breadcrumb) {
  const items = await scanDirectory(currentPath);
  
  if (items.setupFiles.length > 0) {
    // This directory has setup.md files - this is an endpoint
    console.log(chalk.green(`\n📁 Found setup files in: ${breadcrumb.join(' → ')}`));
    
    const confirm = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: `Copy files from this directory to your project root?`,
        default: true
      }
    ]);

    if (confirm.proceed) {
      await copyDirectoryFiles(currentPath);
      console.log(chalk.green.bold('\n✅ Files copied successfully!\n'));
    }
    return;
  }

  if (items.directories.length === 0) {
    console.log(chalk.yellow('No subdirectories or setup files found.'));
    return;
  }

  // Show directory choices
  const choices = items.directories.map(dir => ({
    name: formatDirectoryName(dir),
    value: dir
  }));

  choices.push({ name: chalk.gray('← Back'), value: '__back__' });

  const choice = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      message: breadcrumb.length > 0 ? 
        `Select from ${breadcrumb.join(' → ')}:` : 
        'Select a category:',
      choices: choices
    }
  ]);

  if (choice.selected === '__back__') {
    return;
  }

  const nextPath = path.join(currentPath, choice.selected);
  const nextBreadcrumb = [...breadcrumb, choice.selected];
  
  await navigateMenu(nextPath, nextBreadcrumb);
}

async function scanDirectory(dirPath) {
  const items = {
    directories: [],
    setupFiles: []
  };

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        items.directories.push(entry.name);
      } else if (entry.name === 'setup.md') {
        items.setupFiles.push(entry.name);
      }
    }
  } catch (error) {
    console.log(chalk.red(`Error reading directory: ${error.message}`));
  }

  return items;
}

function formatDirectoryName(dirName) {
  return dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = setupMenu;