# ToolSpark - Free Online Tools Website

A modern, fast, and responsive tools website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools needed.

## 🎯 Features

- **20+ Tools** for text conversion, code formatting, calculations, and more
- **Fully Responsive** - works perfectly on mobile, tablet, and desktop
- **Modern UI** - clean, professional design with smooth animations
- **Fast & Light** - vanilla JavaScript, no heavy dependencies
- **Privacy First** - all tools run locally in the browser
- **Easy to Extend** - organized folder structure, reusable components
- **No Backend Required** - completely static HTML/CSS/JS

## 📁 Project Structure

```
tools-website/
├── index.html              # Home page
├── tools.html              # Tools listing page
├── about.html              # About ToolSpark page
├── contact.html            # Contact form page
├── css/
│   └── style.css          # All styling (responsive, mobile-first)
├── js/
│   └── main.js            # Common JavaScript utilities
└── tools/                  # Individual tool pages
    ├── text-case.html
    ├── word-counter.html
    ├── character-counter.html
    ├── password-generator.html
    ├── json-formatter.html
    ├── base64.html
    ├── url-encoder.html
    ├── lorem-ipsum.html
    ├── color-picker.html
    ├── qr-code.html
    ├── css-minifier.html
    ├── js-minifier.html
    ├── html-formatter.html
    ├── markdown-previewer.html
    ├── timezone-converter.html
    ├── age-calculator.html
    ├── bmi-calculator.html
    ├── image-to-pdf.html
    ├── pdf-to-image.html
    └── jpg-to-png.html
```

## 🚀 Getting Started

### 1. Simple HTTP Server (Recommended)

#### Using Python 3:
```bash
cd tools-website
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Python 2:
```bash
cd tools-website
python -m SimpleHTTPServer 8000
```

#### Using Node.js (with http-server):
```bash
npm install -g http-server
cd tools-website
http-server
```

#### Using Node.js (with built-in modules):
```bash
cd tools-website
node -e "require('http').createServer((req, res) => { const fs = require('fs'); const path = require('path'); let file = '.' + req.url; if (file === './') file = './index.html'; const content = fs.readFileSync(file); res.writeHead(200); res.end(content); }).listen(8000);"
```

### 2. Direct File Opening
Simply open `index.html` in your web browser (some tools like QR Code may require HTTP).

## 🛠️ Implemented Tools (Fully Functional)

✅ **Text Case Converter** - Convert text to uppercase, lowercase, title case, sentence case, toggle case, camelCase

✅ **Word Counter** - Count words, characters, sentences, paragraphs, reading time

✅ **Character Counter** - Count with and without spaces

✅ **Password Generator** - Generate strong passwords with customizable options

✅ **JSON Formatter** - Format and minify JSON

✅ **Base64 Encoder/Decoder** - Encode/decode text

✅ **URL Encoder/Decoder** - Safely encode/decode URLs

✅ **Lorem Ipsum Generator** - Generate placeholder text

✅ **Color Picker** - Pick colors, convert between HEX, RGB, HSL

✅ **CSS Minifier** - Minify CSS code

✅ **JavaScript Minifier** - Minify JS code

✅ **HTML Formatter** - Format HTML code

✅ **Markdown Previewer** - Preview Markdown in real-time

✅ **Time Zone Converter** - Convert time between zones

✅ **Age Calculator** - Calculate age from date of birth

✅ **BMI Calculator** - Calculate Body Mass Index

✅ **QR Code Generator** - Generate QR codes (uses external API)

✅ **JPG to PNG** - Convert JPG images to PNG

## 📋 Placeholder Tools (UI Ready for Implementation)

⚠️ **Image to PDF** - UI ready, needs PDF library (jsPDF/PDFKit)

⚠️ **PDF to Image** - UI ready, needs PDF.js or similar

## 🎨 Design Features

- **Color Scheme**: Professional indigo and pink accents
- **Responsive Grid Layout**: Auto-adjusting cards and sections
- **Smooth Animations**: Hover effects, transitions, and visual feedback
- **Typography**: Clean, modern system fonts
- **Accessibility**: Semantic HTML, proper contrast ratios
- **Mobile-First**: Optimized for all screen sizes

## 🔧 Customization

### Adding a New Tool

1. Create a new HTML file in the `/tools/` folder (e.g., `tools/my-tool.html`)
2. Use the template structure from existing tools
3. Add tool data to the `tools` array in `js/main.js`:

```javascript
{
  id: 'my-tool',
  name: 'My Tool Name',
  description: 'Short description of what the tool does.',
  link: 'tools/my-tool.html'
}
```

4. The tool will automatically appear on the tools page!

### Modifying Colors

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --primary-color: #6366f1;      /* Main color */
  --secondary-color: #ec4899;    /* Accent color */
  --text-dark: #1f2937;          /* Dark text */
  --text-light: #6b7280;         /* Light text */
  --success-color: #10b981;      /* Success color */
  /* ... more colors */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (optimized grid)
- **Mobile**: Below 768px (single column, touch-friendly)
- **Small Mobile**: Below 480px (compact layout)

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with CTA buttons
- Featured tools section (6 tools)
- "Why Choose ToolSpark" section with 6 benefit cards
- Responsive footer

### Tools Page (`tools.html`)
- Grid layout with all 20+ tools
- Each tool card with name, description, and "Open Tool" button
- Links to individual tool pages

### About Page (`about.html`)
- Mission statement
- "Our Mission" section
- "Who We Serve" section
- "Why Choose ToolSpark" section

### Contact Page (`contact.html`)
- Contact form with validation
- Name, email, message fields
- Frontend validation (no backend)
- Success message display

### Individual Tool Pages
- Consistent header and navigation
- Tool-specific layout (input/output areas)
- Action buttons (copy, clear, etc.)
- Instructions section
- Footer with navigation

## 🔒 Privacy & Security

- **No Data Collection** - Tools run entirely in your browser
- **No Tracking** - No analytics or tracking code
- **No Cookies** - No unnecessary cookies used
- **Open Source Ready** - Can be self-hosted anywhere

## 🎯 Performance Optimizations

- Minimal CSS (single stylesheet)
- Minimal JavaScript (single main file)
- No external fonts (system fonts used)
- No heavy dependencies
- Fast load times
- Optimized for mobile

## 📝 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues & Limitations

- PDF conversion tools (Image to PDF, PDF to Image) need external libraries
- QR Code generator uses external API (requires internet)
- Some tools use simple regex patterns (not suitable for production)
- Minifiers are basic implementations (not industry-strength)

## 🚀 Future Enhancements

- [ ] Dark mode toggle
- [ ] Tool favorites/bookmarks
- [ ] Export results to file
- [ ] Batch processing for some tools
- [ ] Multi-language support
- [ ] PWA (Progressive Web App) capabilities
- [ ] Offline mode
- [ ] User preferences/settings

## 📄 License

This project is free to use, modify, and distribute.

## 💡 Tips

1. **Quick Start**: Just open `index.html` in your browser
2. **Better Experience**: Use a local HTTP server for best results
3. **Tool Development**: Copy and modify existing tools as templates
4. **Customization**: All styles are in `css/style.css`, colors are easy to change
5. **Mobile Testing**: Use browser DevTools to test responsive design

## 📞 Contact & Support

For questions or suggestions about ToolSpark, visit the contact page within the application.

---

**ToolSpark** - Making powerful tools accessible to everyone. Built with ❤️ using vanilla web technologies.
