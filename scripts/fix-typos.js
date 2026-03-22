const fs = require('fs');
const path = require('path');

const walk = function(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '..'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace both casing typos
  content = content.replace(/Pestraid/g, 'Pestraid');
  content = content.replace(/Pestraid/g, 'Pestraid');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed typo in:', file);
  }
});
