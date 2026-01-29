const fs = require('fs');
const path = require('path');

const tools = [
  {
    name: 'Text Reverser',
    filename: 'text-reverser.html',
    description: 'Reverse text instantly - characters, words, or lines',
    placeholder: 'Enter text to reverse...',
    sampleInput: 'Hello World',
    sampleOutput: 'dlroW olleH',
    logic: `
      const modes = ['characters', 'words', 'lines'];
      let currentMode = 'characters';
      
      function reverseText() {
        const input = document.getElementById('input-text').value;
        const output = document.getElementById('output-text');
        
        if (!input) {
          output.textContent = '';
          return;
        }
        
        let result = '';
        switch(currentMode) {
          case 'characters':
            result = input.split('').reverse().join('');
            break;
          case 'words':
            result = input.split(' ').reverse().join(' ');
            break;
          case 'lines':
            result = input.split('\\n').reverse().join('\\n');
            break;
        }
        output.textContent = result;
      }
    `
  },
  {
    name: 'Text Sorter',
    filename: 'text-sorter.html',
    description: 'Sort text lines alphabetically or numerically',
    placeholder: 'Enter lines to sort...',
    sampleInput: 'zebra\\napple\\nbanana',
    sampleOutput: 'apple\\nbanana\\nzebra',
    logic: `
      let sortMode = 'alphabetical';
      let sortOrder = 'ascending';
      
      function sortText() {
        const input = document.getElementById('input-text').value;
        const output = document.getElementById('output-text');
        
        if (!input) {
          output.textContent = '';
          return;
        }
        
        let lines = input.split('\\n').filter(line => line.trim());
        
        if (sortMode === 'numerical') {
          lines.sort((a, b) => parseFloat(a) - parseFloat(b));
        } else {
          lines.sort();
        }
        
        if (sortOrder === 'descending') {
          lines.reverse();
        }
        
        output.textContent = lines.join('\\n');
      }
    `
  },
  {
    name: 'Duplicate Remover',
    filename: 'duplicate-remover.html',
    description: 'Remove duplicate lines from text instantly',
    placeholder: 'Enter text with duplicates...',
    sampleInput: 'apple\\nbanana\\napple\\ncherry\\nbanana',
    sampleOutput: 'apple\\nbanana\\ncherry',
    logic: `
      function removeDuplicates() {
        const input = document.getElementById('input-text').value;
        const output = document.getElementById('output-text');
        
        if (!input) {
          output.textContent = '';
          return;
        }
        
        const lines = input.split('\\n');
        const unique = [...new Set(lines)];
        output.textContent = unique.join('\\n');
      }
    `
  },
  {
    name: 'Line Counter',
    filename: 'line-counter.html',
    description: 'Count lines, paragraphs, and empty lines in text',
    placeholder: 'Enter text to count lines...',
    sampleInput: 'Line 1\\nLine 2\\n\\nLine 4',
    sampleOutput: 'Total Lines: 4\\nNon-empty Lines: 3\\nEmpty Lines: 1',
    logic: `
      function countLines() {
        const input = document.getElementById('input-text').value;
        const output = document.getElementById('output-text');
        
        if (!input) {
          output.textContent = 'Total Lines: 0\\nNon-empty Lines: 0\\nEmpty Lines: 0';
          return;
        }
        
        const lines = input.split('\\n');
        const totalLines = lines.length;
        const nonEmptyLines = lines.filter(line => line.trim()).length;
        const emptyLines = totalLines - nonEmptyLines;
        
        output.textContent = \`Total Lines: \${totalLines}\\nNon-empty Lines: \${nonEmptyLines}\\nEmpty Lines: \${emptyLines}\`;
      }
    `
  },
  {
    name: 'Text Replacer',
    filename: 'text-replacer.html',
    description: 'Find and replace text with regex support',
    placeholder: 'Enter text to process...',
    sampleInput: 'Hello World',
    sampleOutput: 'Hi World',
    logic: `
      function replaceText() {
        const input = document.getElementById('input-text').value;
        const findText = document.getElementById('find-text').value;
        const replaceWith = document.getElementById('replace-text').value;
        const output = document.getElementById('output-text');
        
        if (!input || !findText) {
          output.textContent = input;
          return;
        }
        
        const result = input.replace(new RegExp(findText, 'g'), replaceWith);
        output.textContent = result;
      }
    `
  }
];

const toolTemplate = (tool) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tool.name} - ${tool.description} | Tools Park</title>
  <meta name="description" content="${tool.description}. Free ${tool.name.toLowerCase()} tool with instant results.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/professional.css">
  <script src="../js/components.js"></script>
</head>
<body class="bg-gray-50 text-gray-800">
  <div data-component="../components/header.html"></div>
  <section class="tool-header">
    <div class="container">
      <div class="tool-header-content">
        <div class="tool-breadcrumb">
          <a href="../index.html" class="breadcrumb-link">Home</a><span>›</span><a href="../tools.html" class="breadcrumb-link">Tools</a><span>›</span><span class="breadcrumb-current">${tool.name}</span>
        </div>
        <div class="tool-info">
          <h1 class="tool-title">${tool.name}</h1>
          <p class="tool-description">${tool.description}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="tool-content">
    <div class="container">
      <div class="tool-layout">
        <div class="tool-main">
          <div class="tool-card">
            <div class="tool-card-header">
              <h2>${tool.name}</h2>
              <div class="tool-actions">
                <button id="clear-btn" class="btn btn-outline">Clear</button>
                <button id="copy-btn" class="btn btn-secondary">Copy</button>
              </div>
            </div>
            <div class="tool-card-body">
              ${tool.filename === 'text-replacer.html' ? `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="find-text" class="block text-sm font-medium text-gray-700 mb-2">Find</label>
                  <input type="text" id="find-text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Text to find..." value="Hello">
                </div>
                <div>
                  <label for="replace-text" class="block text-sm font-medium text-gray-700 mb-2">Replace with</label>
                  <input type="text" id="replace-text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Replacement text..." value="Hi">
                </div>
              </div>
              ` : ''}
              <div class="mb-6">
                <label for="input-text" class="block text-sm font-medium text-gray-700 mb-2">Input Text</label>
                <textarea id="input-text" class="tool-textarea" placeholder="${tool.placeholder}" rows="8">${tool.sampleInput}</textarea>
              </div>
              <div>
                <label for="output-text" class="block text-sm font-medium text-gray-700 mb-2">Output</label>
                <div id="output-text" class="tool-output">${tool.sampleOutput}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="tool-sidebar">
          <div class="sidebar-card">
            <h3>Instructions</h3>
            <ol>
              <li>Enter your text in the input area</li>
              <li>Result appears instantly</li>
              <li>Click Copy to copy the result</li>
              <li>Click Clear to reset everything</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div data-component="../components/footer.html"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('clear-btn')?.addEventListener('click', clearTool);
      document.getElementById('copy-btn')?.addEventListener('click', copyResult);
      document.getElementById('input-text')?.addEventListener('input', processText);
      ${tool.filename === 'text-replacer.html' ? `
      document.getElementById('find-text')?.addEventListener('input', processText);
      document.getElementById('replace-text')?.addEventListener('input', processText);
      ` : ''}
      processText();
    });

    ${tool.logic}

    function processText() {
      ${tool.filename === 'text-reverser.html' ? 'reverseText();' : 
        tool.filename === 'text-sorter.html' ? 'sortText();' :
        tool.filename === 'duplicate-remover.html' ? 'removeDuplicates();' :
        tool.filename === 'line-counter.html' ? 'countLines();' :
        tool.filename === 'text-replacer.html' ? 'replaceText();' : 'processText();'}
    }

    function clearTool() {
      document.getElementById('input-text').value = '';
      document.getElementById('output-text').textContent = '';
      ${tool.filename === 'text-replacer.html' ? `
      document.getElementById('find-text').value = '';
      document.getElementById('replace-text').value = '';
      ` : ''}
    }

    function copyResult() {
      const result = document.getElementById('output-text').textContent;
      if (!result) return;
      navigator.clipboard.writeText(result).then(() => {
        showNotification('Copied to clipboard!', 'success');
      });
    }

    function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.textContent = message;
      notification.style.cssText = \`position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px; font-weight: 500; z-index: 1000; background: \${type === 'success' ? '#10b981' : '#3b82f6'}; color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\`;
      document.body.appendChild(notification);
      setTimeout(() => document.body.removeChild(notification), 3000);
    }
  </script>
</body>
</html>`;

// Generate all tools
tools.forEach(tool => {
  const content = toolTemplate(tool);
  const filePath = path.join(__dirname, 'tools', tool.filename);
  fs.writeFileSync(filePath, content);
  console.log(`Created ${tool.filename}`);
});

console.log('All tools created successfully!');