const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function copyDirectoryFiles(sourceDir) {
  const projectRoot = process.cwd();
  
  try {
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);
      const destPath = path.join(projectRoot, entry.name);
      
      try {
        if (entry.isFile()) {
          // Create destination directory if needed
          await fs.ensureDir(path.dirname(destPath));
          
          // Copy file (don't overwrite existing files)
          await fs.copy(sourcePath, destPath, { overwrite: false });
          console.log(chalk.green(`✓ Copied: ${entry.name}`));
          
        } else if (entry.isDirectory()) {
          // Recursively copy directory
          await fs.copy(sourcePath, destPath, { overwrite: false });
          console.log(chalk.green(`✓ Copied directory: ${entry.name}/`));
        }
        
      } catch (error) {
        if (error.code === 'EEXIST') {
          console.log(chalk.yellow(`⚠️  Already exists: ${entry.name}`));
        } else {
          console.log(chalk.red(`✗ Error copying ${entry.name}: ${error.message}`));
        }
      }
    }
    
  } catch (error) {
    console.log(chalk.red(`Error reading source directory: ${error.message}`));
  }
}

// Keep the old function for backward compatibility
async function copyFiles(selectedItems) {
  const projectRoot = process.cwd();
  
  for (const item of selectedItems) {
    try {
      const sourcePath = path.join(__dirname, '..', 'templates', item.path);
      const destPath = path.join(projectRoot, item.destination || path.basename(item.path));
      
      if (!await fs.pathExists(sourcePath)) {
        console.log(chalk.red(`⚠️  Source file not found: ${sourcePath}`));
        continue;
      }
      
      await fs.ensureDir(path.dirname(destPath));
      await fs.copy(sourcePath, destPath, { overwrite: false });
      console.log(chalk.green(`✓ Copied: ${item.name} → ${path.relative(projectRoot, destPath)}`));
      
    } catch (error) {
      if (error.code === 'EEXIST') {
        console.log(chalk.yellow(`⚠️  File already exists: ${item.name}`));
      } else {
        console.log(chalk.red(`✗ Error copying ${item.name}: ${error.message}`));
      }
    }
  }
}

module.exports = { copyFiles, copyDirectoryFiles };