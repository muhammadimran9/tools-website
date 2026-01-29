// Creating remaining tools
const fs = require('fs');

const remainingTools = [
  {
    name: 'Countdown Timer',
    filename: 'countdown-timer.html',
    description: 'Set countdown timer with custom time and alerts',
    content: `
    <div class="mb-6">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Hours</label>
          <input type="number" id="hours" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="0" min="0" max="23">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Minutes</label>
          <input type="number" id="minutes" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="5" min="0" max="59">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Seconds</label>
          <input type="number" id="seconds" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="0" min="0" max="59">
        </div>
      </div>
      <div id="display" class="text-6xl font-mono mb-8 text-center text-blue-600">05:00</div>
      <div class="text-center space-x-4">
        <button id="start-btn" class="btn btn-primary btn-large">Start</button>
        <button id="pause-btn" class="btn btn-secondary btn-large" disabled>Pause</button>
        <button id="reset-btn" class="btn btn-outline btn-large">Reset</button>
      </div>
    </div>`,
    script: `
    let totalSeconds = 300;
    let remainingSeconds = 300;
    let timerInterval = null;
    let isRunning = false;

    function startTimer() {
      if (!isRunning && remainingSeconds > 0) {
        timerInterval = setInterval(() => {
          remainingSeconds--;
          updateDisplay();
          if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            alert('Time is up!');
            document.getElementById('start-btn').disabled = false;
            document.getElementById('pause-btn').disabled = true;
          }
        }, 1000);
        isRunning = true;
        document.getElementById('start-btn').disabled = true;
        document.getElementById('pause-btn').disabled = false;
      }
    }

    function pauseTimer() {
      clearInterval(timerInterval);
      isRunning = false;
      document.getElementById('start-btn').disabled = false;
      document.getElementById('pause-btn').disabled = true;
    }

    function resetTimer() {
      clearInterval(timerInterval);
      isRunning = false;
      const h = parseInt(document.getElementById('hours').value) || 0;
      const m = parseInt(document.getElementById('minutes').value) || 0;
      const s = parseInt(document.getElementById('seconds').value) || 0;
      totalSeconds = h * 3600 + m * 60 + s;
      remainingSeconds = totalSeconds;
      updateDisplay();
      document.getElementById('start-btn').disabled = false;
      document.getElementById('pause-btn').disabled = true;
    }

    function updateDisplay() {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      
      let display = '';
      if (hours > 0) {
        display = hours.toString().padStart(2, '0') + ':';
      }
      display += minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      
      document.getElementById('display').textContent = display;
    }

    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('start-btn').addEventListener('click', startTimer);
      document.getElementById('pause-btn').addEventListener('click', pauseTimer);
      document.getElementById('reset-btn').addEventListener('click', resetTimer);
      ['hours', 'minutes', 'seconds'].forEach(id => {
        document.getElementById(id).addEventListener('change', resetTimer);
      });
      updateDisplay();
    });`
  },
  {
    name: 'Pomodoro Timer',
    filename: 'pomodoro-timer.html',
    description: 'Productivity timer with work and break intervals',
    content: `
    <div class="text-center mb-6">
      <div id="mode" class="text-xl font-medium mb-4 text-blue-600">Work Session</div>
      <div id="display" class="text-6xl font-mono mb-8 text-blue-600">25:00</div>
      <div class="space-x-4 mb-6">
        <button id="start-btn" class="btn btn-primary btn-large">Start</button>
        <button id="pause-btn" class="btn btn-secondary btn-large" disabled>Pause</button>
        <button id="reset-btn" class="btn btn-outline btn-large">Reset</button>
      </div>
      <div class="grid grid-cols-3 gap-4 text-sm">
        <div class="p-3 bg-blue-50 rounded">
          <div class="font-medium">Work</div>
          <div>25 min</div>
        </div>
        <div class="p-3 bg-green-50 rounded">
          <div class="font-medium">Short Break</div>
          <div>5 min</div>
        </div>
        <div class="p-3 bg-purple-50 rounded">
          <div class="font-medium">Long Break</div>
          <div>15 min</div>
        </div>
      </div>
    </div>`,
    script: `
    let currentMode = 'work'; // work, shortBreak, longBreak
    let workSessions = 0;
    let remainingSeconds = 25 * 60;
    let timerInterval = null;
    let isRunning = false;

    const durations = {
      work: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60
    };

    function startTimer() {
      if (!isRunning) {
        timerInterval = setInterval(() => {
          remainingSeconds--;
          updateDisplay();
          if (remainingSeconds <= 0) {
            completeSession();
          }
        }, 1000);
        isRunning = true;
        document.getElementById('start-btn').disabled = true;
        document.getElementById('pause-btn').disabled = false;
      }
    }

    function pauseTimer() {
      clearInterval(timerInterval);
      isRunning = false;
      document.getElementById('start-btn').disabled = false;
      document.getElementById('pause-btn').disabled = true;
    }

    function resetTimer() {
      clearInterval(timerInterval);
      isRunning = false;
      currentMode = 'work';
      workSessions = 0;
      remainingSeconds = durations[currentMode];
      updateDisplay();
      updateMode();
      document.getElementById('start-btn').disabled = false;
      document.getElementById('pause-btn').disabled = true;
    }

    function completeSession() {
      clearInterval(timerInterval);
      isRunning = false;
      
      if (currentMode === 'work') {
        workSessions++;
        currentMode = workSessions % 4 === 0 ? 'longBreak' : 'shortBreak';
      } else {
        currentMode = 'work';
      }
      
      remainingSeconds = durations[currentMode];
      updateDisplay();
      updateMode();
      alert(\`\${currentMode === 'work' ? 'Break' : 'Work session'} completed! Starting \${currentMode === 'work' ? 'work session' : 'break'}.\`);
      
      document.getElementById('start-btn').disabled = false;
      document.getElementById('pause-btn').disabled = true;
    }

    function updateDisplay() {
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
      document.getElementById('display').textContent = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
    }

    function updateMode() {
      const modeNames = {
        work: 'Work Session',
        shortBreak: 'Short Break',
        longBreak: 'Long Break'
      };
      document.getElementById('mode').textContent = modeNames[currentMode];
    }

    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('start-btn').addEventListener('click', startTimer);
      document.getElementById('pause-btn').addEventListener('click', pauseTimer);
      document.getElementById('reset-btn').addEventListener('click', resetTimer);
      updateDisplay();
      updateMode();
    });`
  }
];

// Create the remaining tools
remainingTools.forEach(tool => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tool.name} - ${tool.description} | Tools Park</title>
  <meta name="description" content="${tool.description}. Free ${tool.name.toLowerCase()} tool with professional features.">
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
            </div>
            <div class="tool-card-body">
              ${tool.content}
            </div>
          </div>
        </div>
        <div class="tool-sidebar">
          <div class="sidebar-card">
            <h3>Instructions</h3>
            <ol>
              <li>Set your desired time</li>
              <li>Click Start to begin</li>
              <li>Use Pause to temporarily stop</li>
              <li>Click Reset to start over</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div data-component="../components/footer.html"></div>
  <script>
    ${tool.script}
  </script>
</body>
</html>`;

  fs.writeFileSync(`tools/${tool.filename}`, html);
  console.log(`Created ${tool.filename}`);
});

console.log('Timer tools created successfully!');