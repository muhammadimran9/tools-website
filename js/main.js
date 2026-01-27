// Tools Park - Main JavaScript File

// Tools Data with Icons
const tools = [
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
    icon: '🔤',
    category: 'text',
    link: 'tools/text-case.html'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in any text.',
    icon: '📊',
    category: 'text',
    link: 'tools/word-counter.html'
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters with and without spaces.',
    icon: '🔢',
    category: 'text',
    link: 'tools/character-counter.html'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords with custom options.',
    icon: '🔐',
    category: 'generator',
    link: 'tools/password-generator.html'
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and minify JSON code.',
    icon: '📋',
    category: 'formatter',
    link: 'tools/json-formatter.html'
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode text using Base64.',
    icon: '🔄',
    category: 'converter',
    link: 'tools/base64.html'
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs safely.',
    icon: '🌐',
    category: 'converter',
    link: 'tools/url-encoder.html'
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder Lorem Ipsum text.',
    icon: '📝',
    category: 'generator',
    link: 'tools/lorem-ipsum.html'
  },
  {
    id: 'qr-code',
    name: 'QR Code Generator',
    description: 'Generate QR codes from text or URLs.',
    icon: '📱',
    category: 'generator',
    link: 'tools/qr-code.html'
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and convert between formats.',
    icon: '🎨',
    category: 'utility',
    link: 'tools/color-picker.html'
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    description: 'Minify CSS code to reduce file size.',
    icon: '🎯',
    category: 'formatter',
    link: 'tools/css-minifier.html'
  },
  {
    id: 'js-minifier',
    name: 'JavaScript Minifier',
    description: 'Minify JavaScript code.',
    icon: '⚡',
    category: 'formatter',
    link: 'tools/js-minifier.html'
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, discounts, and percentage changes.',
    icon: '📈',
    category: 'calculator',
    link: 'tools/percentage-calculator.html'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between length, weight, temperature, and more units.',
    icon: '📏',
    category: 'converter',
    link: 'tools/unit-converter.html'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA1, SHA256, and SHA512 hashes.',
    icon: '🔑',
    category: 'generator',
    link: 'tools/hash-generator.html'
  },
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code.',
    icon: '🌐',
    category: 'formatter',
    link: 'tools/html-formatter.html'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert images to PDF format.',
    icon: '🖼️',
    category: 'converter',
    link: 'tools/image-to-pdf.html'
  },
  {
    id: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG images to PNG format.',
    icon: '🖼️',
    category: 'converter',
    link: 'tools/jpg-to-png.html'
  },
  {
    id: 'markdown-previewer',
    name: 'Markdown Previewer',
    description: 'Preview and format Markdown text.',
    icon: '📝',
    category: 'utility',
    link: 'tools/markdown-previewer.html'
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Convert PDF pages to images.',
    icon: '📄',
    category: 'converter',
    link: 'tools/pdf-to-image.html'
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter',
    description: 'Convert time between different timezones.',
    icon: '🕐',
    category: 'utility',
    link: 'tools/timezone-converter.html'
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age in years, months, and days.',
    icon: '📅',
    category: 'calculator',
    link: 'tools/age-calculator.html'
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and health status.',
    icon: '⚖️',
    category: 'calculator',
    link: 'tools/bmi-calculator.html'
  },
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code.',
    icon: '🏷️',
    category: 'formatter',
    link: 'tools/html-formatter.html'
  },
  {
    id: 'markdown-previewer',
    name: 'Markdown Previewer',
    description: 'Preview Markdown as HTML in real-time.',
    icon: '📖',
    category: 'utility',
    link: 'tools/markdown-previewer.html'
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Convert time across different time zones.',
    icon: '🌍',
    category: 'converter',
    link: 'tools/timezone-converter.html'
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate age from date of birth.',
    icon: '🎂',
    category: 'calculator',
    link: 'tools/age-calculator.html'
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert images to PDF format.',
    icon: '🖼️',
    category: 'converter',
    link: 'tools/image-to-pdf.html'
  },
  {
    id: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG images to PNG format.',
    icon: '�️',
    category: 'converter',
    link: 'tools/jpg-to-png.html'
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Convert PDF pages to images.',
    icon: '�',
    category: 'converter',
    link: 'tools/pdf-to-image.html'
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupMobileMenu();
  setupContactForm();
  setupToolsSearch();
  loadFeaturedTools();
  loadAllTools();
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Contact Form Handling
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateContactForm()) {
      showSuccessMessage();
      contactForm.reset();
      clearFormErrors();
    }
  });
}

function validateContactForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  let isValid = true;
  
  // Clear previous errors
  clearFormErrors();
  
  // Validate name
  if (!name.value.trim()) {
    showFieldError('name', 'Please enter your full name.');
    isValid = false;
  }
  
  // Validate email
  if (!email.value.trim()) {
    showFieldError('email', 'Please enter your email address.');
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showFieldError('email', 'Please enter a valid email address.');
    isValid = false;
  }
  
  // Validate subject
  if (!subject.value) {
    showFieldError('subject', 'Please select a subject.');
    isValid = false;
  }
  
  // Validate message
  if (!message.value.trim()) {
    showFieldError('message', 'Please enter your message.');
    isValid = false;
  }
  
  return isValid;
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + '-error');
  
  if (field && errorElement) {
    field.classList.add('border-red-500');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
  }
}

function clearFormErrors() {
  const fields = ['name', 'email', 'subject', 'message'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    if (field && errorElement) {
      field.classList.remove('border-red-500');
      errorElement.classList.add('hidden');
    }
  });
}

function showSuccessMessage() {
  const successMessage = document.getElementById('success-message');
  if (successMessage) {
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Tools Search Functionality
function setupToolsSearch() {
  const searchInput = document.getElementById('search-tools');
  if (!searchInput) return;

  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterTools(searchTerm);
  });
}

function filterTools(searchTerm) {
  const toolsGrid = document.getElementById('tools-grid');
  if (!toolsGrid) return;

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.category.toLowerCase().includes(searchTerm)
  );

  renderTools(filteredTools, 'tools-grid');
}

// Load Featured Tools (for homepage)
function loadFeaturedTools() {
  const featuredContainer = document.getElementById('featured-tools');
  if (!featuredContainer) return;

  const featuredTools = tools.slice(0, 6);
  renderTools(featuredTools, 'featured-tools');
}

// Load All Tools (for tools page)
function loadAllTools() {
  const toolsContainer = document.getElementById('tools-grid');
  if (!toolsContainer) return;

  renderTools(tools, 'tools-grid');
}

// Render Tools Function
function renderTools(toolsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (toolsArray.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
        <p class="text-gray-500">Try adjusting your search terms</p>
      </div>
    `;
    return;
  }

  toolsArray.forEach(tool => {
    const toolCard = createToolCard(tool);
    container.appendChild(toolCard);
  });
}

// Create Tool Card Element
function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'tool-card';
  
  card.innerHTML = `
    <div class="flex items-center mb-4">
      <div class="text-3xl mr-3">${tool.icon}</div>
      <div>
        <h3 class="tool-title">${tool.name}</h3>
        <span class="tool-category">${tool.category}</span>
      </div>
    </div>
    <p class="tool-description">${tool.description}</p>
    <a href="${tool.link}" 
       class="tool-link">
      Open Tool
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  `;
  
  return card;
}

// Utility Functions
function copyToClipboard(text, buttonElement = null) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showCopySuccess(buttonElement);
    }).catch(err => {
      console.error('Failed to copy:', err);
      fallbackCopyToClipboard(text, buttonElement);
    });
  } else {
    fallbackCopyToClipboard(text, buttonElement);
  }
}

function fallbackCopyToClipboard(text, buttonElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showCopySuccess(buttonElement);
  } catch (err) {
    console.error('Fallback copy failed:', err);
  }
  
  document.body.removeChild(textArea);
}

function showCopySuccess(buttonElement) {
  if (buttonElement) {
    const originalText = buttonElement.textContent;
    const originalClasses = buttonElement.className;
    
    buttonElement.textContent = '✓ Copied!';
    buttonElement.className = buttonElement.className.replace('btn-primary', 'bg-green-600 hover:bg-green-700').replace('btn-secondary', 'bg-green-600 hover:bg-green-700');
    
    setTimeout(() => {
      buttonElement.textContent = originalText;
      buttonElement.className = originalClasses;
    }, 2000);
  }
}

function downloadAsText(filename, content) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function clearInputOutput(inputId, outputId) {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  
  if (input) {
    input.value = '';
    input.focus();
  }
  if (output) {
    output.value = '';
  }
}

// Form validation helper
function validateRequired(value, fieldName) {
  if (!value || value.trim() === '') {
    return `${fieldName} is required.`;
  }
  return null;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  }
  return null;
}

// Export functions for use in tool pages
window.EduTools = {
  copyToClipboard,
  downloadAsText,
  clearInputOutput,
  validateRequired,
  validateEmail,
  tools
};