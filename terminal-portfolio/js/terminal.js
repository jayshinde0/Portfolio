document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('command-input');
    const cursor = document.querySelector('.cursor');
    
    // Available commands and their descriptions
    const commands = {
        help: 'Show available commands',
        about: 'Show personal information',
        skills: 'List technical skills',
        projects: 'Show all projects',
        experience: 'Work experience',
        contact: 'Contact information',
        resume: 'View and download resume',
        whoami: 'Display current user',
        clear: 'Clear the terminal',
    };

    // Command handlers
    const commandHandlers = {
        help: () => {
            let output = '<p>Available commands:</p><ul class="commands-list">';
            for (const [cmd, desc] of Object.entries(commands)) {
                output += `<li><span class="command">${cmd}</span> — ${desc}</li>`;
            }
            output += '</ul>';
            return output;
        },
        
        about: () => {
            return `
                <p>Hello! I'm <span class="highlight">Jay Shinde</span>, a passionate developer.</p>
                <p>I love creating interactive and efficient solutions to real-world problems.</p>
                <p>Type <span class="command">skills</span> to see what I work with, or <span class="command">projects</span> to see my work.</p>
            `;
        },
        
        skills: () => {
            return `
                <p>Here are some of my technical skills:</p>
                <ul class="skills-list">
                    <li><strong>Programming Languages:</strong> JavaScript, Python, Java, C++</li>
                    <li><strong>Web Development:</strong> React, Node.js, Express, MongoDB</li>
                    <li><strong>Tools & Technologies:</strong> Git, Docker, AWS, Linux</li>
                    <li><strong>Other:</strong> Data Structures, Algorithms, Problem Solving</li>
                </ul>
            `;
        },
        
        projects: () => {
            return `
                <p>Here are some of my recent projects:</p>
                <ul class="projects-list">
                    <li><strong>Terminal Portfolio</strong> - Interactive portfolio website (you're looking at it!)</li>
                    <li><strong>Project 2</strong> - Description of project 2</li>
                    <li><strong>Project 3</strong> - Description of project 3</li>
                </ul>
                <p>Check out my <a href="https://github.com/yourusername" target="_blank">GitHub</a> for more!</p>
            `;
        },
        
        experience: () => {
            return `
                <p>My professional experience includes:</p>
                <ul class="experience-list">
                    <li><strong>Software Developer</strong> at Company Name (2022-Present)</li>
                    <li><strong>Web Developer Intern</strong> at Another Company (2021-2022)</li>
                    <li><strong>Freelance Developer</strong> (2020-2021)</li>
                </ul>
            `;
        },
        
        contact: () => {
            return `
                <p>You can reach me through the following channels:</p>
                <ul class="contact-list">
                    <li><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></li>
                    <li><strong>Twitter:</strong> <a href="https://twitter.com/yourusername" target="_blank">@yourusername</a></li>
                </ul>
            `;
        },
        
        resume: () => {
            return `
                <p>You can view and download my resume here:</p>
                <p><a href="#" class="command">Download Resume (PDF)</a></p>
                <p>Or view it online: <a href="#" target="_blank">View Resume</a></p>
            `;
        },
        
        whoami: () => {
            return `visitor`;
        },
        
        clear: () => {
            const output = terminal.querySelector('.output');
            output.innerHTML = '';
            return '';
        },
        
        default: (cmd) => {
            return `<p>Command not found: ${cmd}. Type <span class="command">help</span> to see available commands.</p>`;
        }
    };

    // Create a new command line
    function createNewCommandLine() {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        commandLine.innerHTML = `
            <span class="prompt">visitor@portfolio:~$</span>
            <input type="text" class="command-input" autofocus>
            <span class="cursor">█</span>
        `;
        terminal.appendChild(commandLine);
        
        const newInput = commandLine.querySelector('.command-input');
        const newCursor = commandLine.querySelector('.cursor');
        
        newInput.focus();
        
        // Handle input focus
        newInput.addEventListener('focus', () => {
            newCursor.style.animation = 'blink 1s step-end infinite';
        });
        
        newInput.addEventListener('blur', () => {
            newCursor.style.animation = 'none';
        });
        
        // Handle command execution on Enter
        newInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = newInput.value.trim().toLowerCase();
                newInput.disabled = true;
                
                // Display the executed command
                const commandOutput = document.createElement('div');
                commandOutput.className = 'command-output';
                
                // Handle the command
                let output = '';
                if (command in commandHandlers) {
                    output = commandHandlers[command]();
                } else if (command) {
                    output = commandHandlers.default(command);
                }
                
                commandOutput.innerHTML = output;
                terminal.insertBefore(commandOutput, commandLine);
                
                // Auto-scroll to bottom
                terminal.scrollTop = terminal.scrollHeight;
                
                // Create a new command line
                createNewCommandLine();
            }
        });
    }
    
    // Initialize the first command line
    createNewCommandLine();
    
    // Focus the initial input
    commandInput.focus();
    
    // Handle cursor animation on focus/blur
    commandInput.addEventListener('focus', () => {
        cursor.style.animation = 'blink 1s step-end infinite';
    });
    
    commandInput.addEventListener('blur', () => {
        cursor.style.animation = 'none';
    });
    
    // Handle command execution on Enter
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = commandInput.value.trim().toLowerCase();
            commandInput.disabled = true;
            
            // Display the executed command
            const commandOutput = document.createElement('div');
            commandOutput.className = 'command-output';
            
            // Handle the command
            let output = '';
            if (command in commandHandlers) {
                output = commandHandlers[command]();
            } else if (command) {
                output = commandHandlers.default(command);
            }
            
            commandOutput.innerHTML = output;
            terminal.insertBefore(commandOutput, commandInput.parentElement.nextSibling);
            
            // Auto-scroll to bottom
            terminal.scrollTop = terminal.scrollHeight;
            
            // Create a new command line
            createNewCommandLine();
        }
    });
    
    // Add click-to-focus functionality
    terminal.addEventListener('click', (e) => {
        const commandLines = document.querySelectorAll('.command-input');
        const lastCommandLine = commandLines[commandLines.length - 1];
        if (lastCommandLine) {
            lastCommandLine.focus();
        }
    });
    
    // Prevent default behavior for tab key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
        }
    });
    
    // Initial welcome message
    const welcomeMessage = `
        <p>Welcome to <span class="highlight">Jay Shinde's</span> Interactive Portfolio (v1.0.0)</p>
        <p>Type <span class="command">help</span> to see available commands.</p>
    `;
    
    document.querySelector('.welcome-message').innerHTML = welcomeMessage;
});
