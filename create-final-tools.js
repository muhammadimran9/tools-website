const fs = require('fs');

const finalTools = [
  'morse-code-translator.html',
  'rgb-to-hex.html', 
  'text-to-speech.html',
  'speech-to-text.html',
  'image-resizer.html',
  'image-compressor.html',
  'barcode-generator.html',
  'invoice-generator.html',
  'expense-tracker.html',
  'loan-calculator.html',
  'tip-calculator.html',
  'currency-converter.html'
];

const toolData = {
  'morse-code-translator.html': {
    name: 'Morse Code Translator',
    description: 'Convert text to Morse code and vice versa',
    content: `
    <div class="tool-button-group mb-6">
      <button class="tool-button active" data-mode="text-to-morse">Text to Morse</button>
      <button class="tool-button" data-mode="morse-to-text">Morse to Text</button>
    </div>
    <div class="mb-6">
      <label for="input-text" class="block text-sm font-medium text-gray-700 mb-2">Input</label>
      <textarea id="input-text" class="tool-textarea" placeholder="Enter text..." rows="6">HELLO WORLD</textarea>
    </div>
    <div>
      <label for="output-text" class="block text-sm font-medium text-gray-700 mb-2">Output</label>
      <div id="output-text" class="tool-output">.... . .-.. .-.. --- / .-- --- .-. .-.. -..</div>
    </div>`,
    script: `
    const morseCode = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
      '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
      '8': '---..', '9': '----.', ' ': '/'
    };
    
    const reverseMorse = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));
    let currentMode = 'text-to-morse';
    
    function translateMorse() {
      const input = document.getElementById('input-text').value.toUpperCase();
      const output = document.getElementById('output-text');
      
      if (currentMode === 'text-to-morse') {
        const result = input.split('').map(char => morseCode[char] || char).join(' ');
        output.textContent = result;
      } else {
        const result = input.split(' ').map(morse => reverseMorse[morse] || morse).join('');
        output.textContent = result;
      }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.tool-button').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.tool-button').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentMode = this.dataset.mode;
          translateMorse();
        });
      });
      document.getElementById('input-text').addEventListener('input', translateMorse);
      translateMorse();
    });`
  },
  'rgb-to-hex.html': {
    name: 'RGB to Hex Converter',
    description: 'Convert RGB colors to Hex and vice versa',
    content: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="text-lg font-medium mb-4">RGB Input</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Red (0-255)</label>
            <input type="number" id="red" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="255" min="0" max="255">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Green (0-255)</label>
            <input type="number" id="green" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="0" min="0" max="255">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Blue (0-255)</label>
            <input type="number" id="blue" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="0" min="0" max="255">
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-4">Hex Output</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Hex Code</label>
          <input type="text" id="hex-output" class="w-full px-3 py-2 border border-gray-300 rounded-md font-mono" value="#FF0000" readonly>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Color Preview</label>
          <div id="color-preview" class="w-full h-20 border border-gray-300 rounded-md" style="background-color: #FF0000;"></div>
        </div>
      </div>
    </div>`,
    script: `
    function convertRgbToHex() {
      const r = parseInt(document.getElementById('red').value) || 0;
      const g = parseInt(document.getElementById('green').value) || 0;
      const b = parseInt(document.getElementById('blue').value) || 0;
      
      const hex = '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('').toUpperCase();
      
      document.getElementById('hex-output').value = hex;
      document.getElementById('color-preview').style.backgroundColor = hex;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      ['red', 'green', 'blue'].forEach(id => {
        document.getElementById(id).addEventListener('input', convertRgbToHex);
      });
      convertRgbToHex();
    });`
  },
  'tip-calculator.html': {
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills easily',
    content: `
    <div class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Bill Amount ($)</label>
        <input type="number" id="bill-amount" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="100" step="0.01">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Tip Percentage (%)</label>
        <input type="number" id="tip-percent" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="15" step="0.1">
        <div class="flex space-x-2 mt-2">
          <button class="btn btn-outline btn-sm" onclick="setTip(10)">10%</button>
          <button class="btn btn-outline btn-sm" onclick="setTip(15)">15%</button>
          <button class="btn btn-outline btn-sm" onclick="setTip(18)">18%</button>
          <button class="btn btn-outline btn-sm" onclick="setTip(20)">20%</button>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
        <input type="number" id="people-count" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="1" min="1">
      </div>
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="grid grid-cols-2 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-blue-600" id="tip-amount">$15.00</div>
            <div class="text-sm text-gray-600">Tip Amount</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600" id="total-amount">$115.00</div>
            <div class="text-sm text-gray-600">Total Amount</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600" id="per-person">$115.00</div>
            <div class="text-sm text-gray-600">Per Person</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600" id="tip-per-person">$15.00</div>
            <div class="text-sm text-gray-600">Tip Per Person</div>
          </div>
        </div>
      </div>
    </div>`,
    script: `
    function calculateTip() {
      const billAmount = parseFloat(document.getElementById('bill-amount').value) || 0;
      const tipPercent = parseFloat(document.getElementById('tip-percent').value) || 0;
      const peopleCount = parseInt(document.getElementById('people-count').value) || 1;
      
      const tipAmount = billAmount * (tipPercent / 100);
      const totalAmount = billAmount + tipAmount;
      const perPerson = totalAmount / peopleCount;
      const tipPerPerson = tipAmount / peopleCount;
      
      document.getElementById('tip-amount').textContent = '$' + tipAmount.toFixed(2);
      document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2);
      document.getElementById('per-person').textContent = '$' + perPerson.toFixed(2);
      document.getElementById('tip-per-person').textContent = '$' + tipPerPerson.toFixed(2);
    }
    
    function setTip(percent) {
      document.getElementById('tip-percent').value = percent;
      calculateTip();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      ['bill-amount', 'tip-percent', 'people-count'].forEach(id => {
        document.getElementById(id).addEventListener('input', calculateTip);
      });
      calculateTip();
    });`
  }
};

// Create simplified versions for remaining tools
const simpleTools = [
  'text-to-speech.html',
  'speech-to-text.html', 
  'image-resizer.html',
  'image-compressor.html',
  'barcode-generator.html',
  'invoice-generator.html',
  'expense-tracker.html',
  'loan-calculator.html',
  'currency-converter.html'
];

simpleTools.forEach(filename => {
  const name = filename.replace('.html', '').split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Professional Tool | Tools Park</title>
  <meta name="description" content="${name} tool for professional use. Free and easy to use.">
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
          <a href="../index.html" class="breadcrumb-link">Home</a><span>›</span><a href="../tools.html" class="breadcrumb-link">Tools</a><span>›</span><span class="breadcrumb-current">${name}</span>
        </div>
        <div class="tool-info">
          <h1 class="tool-title">${name}</h1>
          <p class="tool-description">Professional ${name.toLowerCase()} tool</p>
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
              <h2>${name}</h2>
            </div>
            <div class="tool-card-body">
              <div class="text-center py-12">
                <div class="text-6xl mb-4">🔧</div>
                <h3 class="text-xl font-medium mb-2">${name}</h3>
                <p class="text-gray-600">This tool is coming soon with advanced features!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tool-sidebar">
          <div class="sidebar-card">
            <h3>Coming Soon</h3>
            <p>This tool is under development and will be available soon with professional features.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div data-component="../components/footer.html"></div>
</body>
</html>`;
  
  fs.writeFileSync(`tools/${filename}`, html);
  console.log(`Created ${filename}`);
});

// Create the detailed tools
Object.entries(toolData).forEach(([filename, data]) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.name} - ${data.description} | Tools Park</title>
  <meta name="description" content="${data.description}. Free ${data.name.toLowerCase()} tool.">
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
          <a href="../index.html" class="breadcrumb-link">Home</a><span>›</span><a href="../tools.html" class="breadcrumb-link">Tools</a><span>›</span><span class="breadcrumb-current">${data.name}</span>
        </div>
        <div class="tool-info">
          <h1 class="tool-title">${data.name}</h1>
          <p class="tool-description">${data.description}</p>
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
              <h2>${data.name}</h2>
              <div class="tool-actions">
                <button id="clear-btn" class="btn btn-outline">Clear</button>
                <button id="copy-btn" class="btn btn-secondary">Copy</button>
              </div>
            </div>
            <div class="tool-card-body">
              ${data.content}
            </div>
          </div>
        </div>
        <div class="tool-sidebar">
          <div class="sidebar-card">
            <h3>Instructions</h3>
            <ol>
              <li>Enter your input</li>
              <li>Result appears instantly</li>
              <li>Click Copy to copy result</li>
              <li>Click Clear to reset</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div data-component="../components/footer.html"></div>
  <script>
    ${data.script}
    
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('clear-btn')?.addEventListener('click', function() {
        document.querySelectorAll('input, textarea').forEach(el => el.value = '');
        document.querySelectorAll('.tool-output').forEach(el => el.textContent = '');
      });
      
      document.getElementById('copy-btn')?.addEventListener('click', function() {
        const output = document.querySelector('.tool-output, #hex-output');
        if (output) {
          const text = output.textContent || output.value;
          navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
          });
        }
      });
    });
    
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
  
  fs.writeFileSync(`tools/${filename}`, html);
  console.log(`Created ${filename}`);
});

console.log('All final tools created successfully!');