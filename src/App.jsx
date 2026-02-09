import { useState, useEffect } from 'react'
import './App.css'
import thumbnailImage from '../public/Thumbnail.png'
import videoSource from '../public/Video.mp4'

const readmeContent = `
# Auto Deploy Agent CLI

A cutting-edge command-line tool that automatically detects, builds, and deploys web projects to the most suitable hosting platform using AI-powered recommendations.

## 🚀 Key Features

- 🔍 **Automatic Project Detection**: Identifies project types (Next.js, Vite, React, Flask, static sites)
- 🤖 **AI-Powered Platform Recommendation**: Uses Ollama with Llama 3.1 model to suggest the best hosting platform
- 🚀 **One-Command Deployment**: Deploys your project with a single command
- 🛠️ **Automatic CLI Installation**: Guides you through installing required CLIs
- 📦 **Dependency Management**: Automatically installs project dependencies
- 🔧 **Build Automation**: Handles project building when necessary
- 📁 **Modular Architecture**: Code is organized into separate modules for easier maintenance

## ⚡ Quick Start

1. **Install Ollama**: Get Ollama from [ollama.com](https://ollama.com/) and pull the Llama 3.1 model
2. **Install Dependencies**: Run \`pip install .\` in the project directory
3. **Deploy**: Simply run \`deploy-agent\` and let AI handle the rest!

## 🎯 Supported Technologies

**Frameworks & Libraries:**
- Next.js
- Vite
- React
- Flask (Python)
- Static HTML/CSS/JS sites

**Deployment Platforms:**
- Vercel (automated)
- Netlify (automated)
- GitHub Pages (manual)
- Cloudflare Pages (automated)
- Render (manual)

## 🛠 Installation Guide

### Prerequisites

1. **Ollama**: Install from https://ollama.com/
   \`\`\`bash
   ollama pull llama3.1:8b
   \`\`\`

2. **Python**: Version 3.6 or higher

3. **Git**: For Git-based deployments

### Installation Steps

1. Clone the repository
2. Navigate to project directory
3. Install with modern PEP 517 build system:
   \`\`\`bash
   pip install .
   \`\`\`
4. Verify installation:
   \`\`\`bash
   deploy-agent
   \`\`\`

## 💡 Usage Examples

### Method 1: Script Execution (Recommended)
\`\`\`bash
# Windows
deploy.bat

# macOS/Linux
./deploy.sh
\`\`\`

### Method 2: CLI Command
\`\`\`bash
deploy-agent
\`\`\`

### Method 3: Direct Python
\`\`\`bash
python main.py
\`\`\`

## 🏗 Modular Architecture

\`\`\`
Auto Deploy/
├── core/                      # Core functionality modules
│   ├── detector.py            # Project detection logic
│   ├── recommender.py         # Platform recommendation logic
│   ├── model_selector.py      # Ollama model selection
│   ├── cli_manager.py         # CLI tool management
│   ├── git_handler.py         # Git operations
│   ├── builder.py             # Build processes
│   ├── deployer.py            # Deployment functions
│   ├── file_manager.py        # File creation and management
│   └── __init__.py
├── utils/                     # Utility functions
│   └── helpers.py
├── auto_deploy_agent_cli/     # CLI package
│   ├── deploy_agent.py        # CLI entry point
│   └── __init__.py
├── config.py                  # Configuration constants
├── main.py                    # Main entry point
├── deploy.bat                 # Windows deployment script
├── deploy.sh                  # macOS/Linux deployment script
└── pyproject.toml             # Project metadata and dependencies
\`\`\`

## 🤖 How It Works

1. **🔍 Detection**: Scans your project to identify the type based on project files
2. **🤖 AI Recommendation**: Uses Ollama with Llama 3.1 to recommend the best hosting platform
3. **🛠 CLI Setup**: Guides you through installing required platform CLIs
4. **🔧 Build Process**: Automatically builds your project if needed
5. **🚀 Deployment**: Either automates deployment or provides step-by-step instructions

## 🐍 Flask Configuration

For Flask projects deployed to Vercel:
- Export an \`application\` variable
- Include \`gunicorn\` in \`requirements.txt\`
- Follow Vercel's project structure expectations

## 📋 Deployment Types

**Automated Deployment** (Vercel, Netlify, Cloudflare Pages):
- Fully automated authentication and deployment
- Live URL provided upon successful deployment

**Manual Deployment** (GitHub Pages, Render):
- GitHub Pages: Push to GitHub and enable Pages
- Render: Connect Git repository and configure settings
- Detailed step-by-step instructions provided

## ❓ Troubleshooting

**Common Issues:**
- **Ollama not running**: Ensure Ollama is installed and \`llama3.1:8b\` model is pulled
- **CLI tools not found**: Install required CLIs using provided commands
- **Deployment failure**: Check internet connection and platform login status
- **Flask to Vercel**: Verify \`gunicorn\` in \`requirements.txt\` and proper app export

## 🌟 Why Choose Auto Deploy?

- **AI-Powered**: Intelligent platform recommendations
- **Zero Configuration**: Works out of the box
- **Multi-Platform**: Supports all major hosting providers
- **Developer Friendly**: Clear instructions and error handling
- **Open Source**: Free and community-driven

Ready to automate your deployments? Check out our [GitHub repository](https://github.com/MagicalCoder-12/Auto-Deploy)!
`

function App() {
  const [activeSection, setActiveSection] = useState('welcome')
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const sections = [
    { id: 'welcome', title: 'Welcome' },
    { id: 'features', title: 'Features' },
    { id: 'prerequisites', title: 'Prerequisites' },
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    { id: 'architecture', title: 'Architecture' },
    { id: 'troubleshooting', title: 'Troubleshooting' }
  ]

  const renderMarkdown = (content) => {
    if (!content) return '<p>No content available</p>';
    
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/### (.*?)(?=\n)/g, '<h3>$1</h3>')
      .replace(/## (.*?)(?=\n)/g, '<h2>$1</h2>')
      .replace(/# (.*?)(?=\n)/g, '<h1>$1</h1>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/<\/p><p>/, '<p>') + '</p>'
  }

  const getContentBySection = (sectionId) => {
    if (!readmeContent) return '# Welcome\n\nContent loading...';
    
    const sections = readmeContent.split('\n## ');
    
    // Handle the welcome section (before first ##)
    if (sectionId === 'welcome') {
      return sections[0] || '# Welcome\n\nWelcome to Auto Deploy Agent CLI';
    }
    
    // Find the matching section
    const sectionMap = {
      'features': '🚀 Key Features',
      'prerequisites': '⚡ Quick Start',
      'installation': '🛠 Installation Guide',
      'usage': '💡 Usage Examples',
      'architecture': '🏗 Modular Architecture',
      'troubleshooting': '❓ Troubleshooting'
    };
    
    const sectionTitle = sectionMap[sectionId];
    if (sectionTitle) {
      const foundSection = sections.find(s => s.trim().startsWith(sectionTitle));
      return foundSection ? '## ' + foundSection : `## ${sectionTitle}\n\nContent not found.`;
    }
    
    return readmeContent;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <div className="video-background">
          <div className="video-overlay" />
        </div>
        
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              <span className="gradient-text">Auto Deploy</span>
              <br />
              <span className="ai-text">Agent CLI</span>
            </h1>
            <p className="hero-subtitle">
              AI-Powered Automatic Deployment Tool<br />
              <span className="highlight">Uses local LLMs via Ollama</span>
            </p>
            
            <div className="cta-buttons">
              <a 
                href="https://github.com/MagicalCoder-12/Auto-Deploy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-button pulse"
              >
                <span>🌟 View on GitHub</span>
              </a>
              <button 
                onClick={() => setActiveSection('features')}
                className="secondary-button"
              >
                Explore Features
              </button>
            </div>
            
            {/* Video Preview */}
            <div className="video-preview-container">
              <div className="video-preview">
                <img 
                  src={thumbnailImage} 
                  alt="Auto Deploy Demo" 
                  className="video-thumbnail"
                />
                <button 
                  className="play-button"
                  onClick={() => {
                    const video = document.createElement('video');
                    video.src = videoSource;
                    video.controls = true;
                    video.loop = true;
                    video.autoplay = true;
                    video.style.position = 'fixed';
                    video.style.top = '50%';
                    video.style.left = '50%';
                    video.style.transform = 'translate(-50%, -50%)';
                    video.style.maxWidth = '90vw';
                    video.style.maxHeight = '90vh';
                    video.style.zIndex = '10000';
                    video.style.backgroundColor = 'black';
                    
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    overlay.style.zIndex = '9999';
                    overlay.onclick = () => {
                      document.body.removeChild(video);
                      document.body.removeChild(overlay);
                    };
                    
                    document.body.appendChild(overlay);
                    document.body.appendChild(video);
                  }}
                >
                  ▶
                </button>
              </div>
              <p className="video-caption">Click to play demo video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation */}
      <nav className="floating-nav">
        <div className="nav-container">
          <div className="nav-logo">🚀 AutoDeploy</div>
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={activeSection === section.id ? 'nav-active' : ''}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content-wrapper">
        <div className="content-container">
          <div 
            className={`markdown-content ${isVisible ? 'slide-up' : ''}`}
            dangerouslySetInnerHTML={{ 
              __html: renderMarkdown(getContentBySection(activeSection)) 
            }}
          />
        </div>
      </main>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${scrollProgress > 30 ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Auto Deploy Agent CLI</h3>
            <p>AI-powered deployment automation tool</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Vite</span>
              <span>Ollama</span>
              <span>Python</span>
            </div>
          </div>
          
          <div className="footer-links">
            <a 
              href="https://github.com/MagicalCoder-12/Auto-Deploy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-footer-link"
            >
              GitHub Repository
            </a>
            <p className="copyright">© 2024 Auto Deploy Agent | MIT License</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App