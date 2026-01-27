// Professional Tool Updater Script - Fixed Version
// This script will update all tool pages with the professional design system

const fs = require('fs');
const path = require('path');

// Tool configurations
const tools = [
  {
    file: 'age-calculator.html',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days, hours, minutes, and seconds.',
    category: 'Calculator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>'
  },
  {
    file: 'base64.html',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings instantly. Professional tool for data encoding.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>'
  },
  {
    file: 'bmi-calculator.html',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) and get health insights instantly.',
    category: 'Calculator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>'
  },
  {
    file: 'character-counter.html',
    name: 'Character Counter',
    description: 'Count characters, letters, numbers, and spaces in your text instantly.',
    category: 'Text Tools',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0118 8.586V17a2 2 0 01-2 2z"></path></svg>'
  },
  {
    file: 'color-picker.html',
    name: 'Color Picker',
    description: 'Professional color picker with HEX, RGB, HSL values and color palette.',
    category: 'Generator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>'
  },
  {
    file: 'css-minifier.html',
    name: 'CSS Minifier',
    description: 'Minify CSS code to reduce file size and improve website performance.',
    category: 'Text Tools',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
  },
  {
    file: 'html-formatter.html',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code with proper indentation and structure.',
    category: 'Text Tools',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
  },
  {
    file: 'image-to-pdf.html',
    name: 'Image to PDF Converter',
    description: 'Convert images to PDF documents instantly. Support multiple image formats.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>'
  },
  {
    file: 'jpg-to-png.html',
    name: 'JPG to PNG Converter',
    description: 'Convert JPG images to PNG format with transparency support.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>'
  },
  {
    file: 'json-formatter.html',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data with proper indentation.',
    category: 'Text Tools',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
  },
  {
    file: 'lorem-ipsum.html',
    name: 'Lorem Ipsum Generator',
    description: 'Generate Lorem Ipsum placeholder text for design and testing purposes.',
    category: 'Generator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>'
  },
  {
    file: 'markdown-previewer.html',
    name: 'Markdown Previewer',
    description: 'Preview Markdown text with live rendering and formatting.',
    category: 'Text Tools',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0118 8.586V17a2 2 0 01-2 2z"></path></svg>'
  },
  {
    file: 'password-generator.html',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords with customizable options.',
    category: 'Generator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>'
  },
  {
    file: 'pdf-to-image.html',
    name: 'PDF to Image Converter',
    description: 'Convert PDF pages to images instantly. Support JPG, PNG formats.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'
  },
  {
    file: 'qr-code.html',
    name: 'QR Code Generator',
    description: 'Generate QR codes for text, URLs, and other data instantly.',
    category: 'Generator',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>'
  },
  {
    file: 'timezone-converter.html',
    name: 'Timezone Converter',
    description: 'Convert time between different timezones worldwide instantly.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
  },
  {
    file: 'url-encoder.html',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs for safe transmission and proper formatting.',
    category: 'Converter',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>'
  }
];

// Template for generating professional tool pages
const generateToolPage = (tool) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tool.name} - Professional Educational Tools | EduTools</title>
  <meta name="description" content="${tool.description} Free, secure, and instant professional tool.">
  
  <!-- Professional Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Professional Styles -->
  <link rel="stylesheet" href="../css/professional.css">
  
  <!-- Component Loader -->
  <script src="../js/components.js"></script>
</head>
<body class="bg-gray-50 text-gray-800">
  <!-- Header Component -->
  <div data-component="../components/header.html"></div>

  <!-- Tool Header -->
  <section class="tool-header">
    <div class="container">
      <div class="tool-header-content">
        <div class="tool-breadcrumb">
          <a href="../index.html" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Home
          </a>
          <svg class="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <a href="../tools.html" class="breadcrumb-link">Tools</a>
          <svg class="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="breadcrumb-current">${tool.name}</span>
        </div>
        
        <div class="tool-info">
          <div class="tool-icon-wrapper">
            ${tool.icon}
          </div>
          <div class="tool-details">
            <h1 class="tool-title">${tool.name}</h1>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-meta">
              <span class="tool-category">${tool.category}</span>
              <span class="tool-status">Professional Tool</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tool Content -->
  <section class="tool-content">
    <div class="container">
      <div class="tool-layout">
        <!-- Main Tool Area -->
        <div class="tool-main">
          <div class="tool-card">
            <div class="tool-card-header">
              <h2 class="tool-card-title">${tool.name}</h2>
              <div class="tool-actions">
                <button id="clear-btn" class="btn btn-outline">
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Clear
                </button>
                <button id="copy-btn" class="btn btn-secondary">
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Copy
                </button>
              </div>
            </div>
            
            <div class="tool-card-body">
              <div class="text-center py-12">
                <div class="tool-icon-wrapper mx-auto mb-6" style="width: 6rem; height: 6rem; font-size: 3rem;">
                  ${tool.icon}
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">${tool.name}</h3>
                <p class="text-gray-600 mb-8 max-w-2xl mx-auto">${tool.description}</p>
                
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
                  <div class="flex items-center mb-3">
                    <svg class="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="font-semibold text-blue-900">Coming Soon</span>
                  </div>
                  <p class="text-blue-800 text-sm">This professional tool is currently being developed with advanced features and will be available soon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="tool-sidebar">
          <!-- Instructions -->
          <div class="sidebar-card">
            <div class="sidebar-card-header">
              <h3 class="sidebar-card-title">
                <svg class="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Instructions
              </h3>
            </div>
            <div class="sidebar-card-body">
              <ol class="instruction-list">
                <li>Tool interface will appear here</li>
                <li>Enter your data or input</li>
                <li>Get instant results</li>
                <li>Copy or download results</li>
              </ol>
            </div>
          </div>

          <!-- Features -->
          <div class="sidebar-card">
            <div class="sidebar-card-header">
              <h3 class="sidebar-card-title">
                <svg class="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Features
              </h3>
            </div>
            <div class="sidebar-card-body">
              <ul class="feature-list">
                <li>Professional interface</li>
                <li>Instant processing</li>
                <li>Privacy-focused</li>
                <li>No character limits</li>
                <li>Mobile responsive</li>
                <li>Free to use</li>
              </ul>
            </div>
          </div>

          <!-- Related Tools -->
          <div class="sidebar-card">
            <div class="sidebar-card-header">
              <h3 class="sidebar-card-title">
                <svg class="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                Related Tools
              </h3>
            </div>
            <div class="sidebar-card-body">
              <div class="related-tools">
                <a href="text-case.html" class="related-tool-link">
                  <div class="related-tool-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">Text Case Converter</div>
                    <div class="text-xs text-gray-500">Convert text cases</div>
                  </div>
                </a>
                <a href="word-counter.html" class="related-tool-link">
                  <div class="related-tool-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">Word Counter</div>
                    <div class="text-xs text-gray-500">Count words and characters</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer Component -->
  <div data-component="../components/footer.html"></div>

  <!-- Tool JavaScript -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize tool
      console.log('${tool.name} initialized');
      
      // Event listeners
      document.getElementById('clear-btn')?.addEventListener('click', function() {
        console.log('Tool cleared');
      });
      
      document.getElementById('copy-btn')?.addEventListener('click', function() {
        console.log('Result copied');
      });
    });
  </script>
</body>
</html>`;

// Update all tool pages
tools.forEach(tool => {
  const filePath = path.join(__dirname, tool.file);
  const htmlContent = generateToolPage(tool);
  
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  console.log(`Updated ${tool.file}`);
});

console.log('All tool pages have been updated with professional design!');
