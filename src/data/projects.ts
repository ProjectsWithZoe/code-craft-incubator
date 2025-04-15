export interface Step {
  id: string;
  stepTitle: string;
  explanation: string;
  codeSnippet: string;
  codeLanguage: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'frontend' | 'backend' | 'fullstack' | 'api';
  steps: Step[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Interactive Todo List",
    description: "Build a functional todo list with React hooks and local storage to persist user data.",
    difficulty: "beginner",
    category: "frontend",
    steps: [
      {
        id: "1-1",
        stepTitle: "Set up the basic React component",
        explanation: "Create a functional component for your Todo app with state for tasks using the useState hook.",
        codeSnippet: `import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {/* We'll add our input and list here */}
    </div>
  );
}

export default TodoApp;`,
        codeLanguage: "jsx"
      },
      {
        id: "1-2",
        stepTitle: "Create the input form",
        explanation: "Add an input field and a button to submit new todos. Handle the form submission to add items to the todo list.",
        codeSnippet: `// Inside TodoApp component
const handleSubmit = (e) => {
  e.preventDefault();
  if (inputValue.trim() === '') return;
  
  const newTodo = {
    id: Date.now(),
    text: inputValue,
    completed: false
  };
  
  setTodos([...todos, newTodo]);
  setInputValue('');
};

return (
  <div className="todo-app">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit">Add</button>
    </form>
    {/* Todo list will go here */}
  </div>
);`,
        codeLanguage: "jsx"
      },
      {
        id: "1-3",
        stepTitle: "Display the todo items",
        explanation: "Map through the todos array to display each item. Add functionality to mark items as completed or delete them.",
        codeSnippet: `// Inside TodoApp component
const toggleComplete = (id) => {
  setTodos(
    todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

return (
  <div className="todo-app">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
      {/* Form inputs from previous step */}
    </form>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);`,
        codeLanguage: "jsx"
      },
      {
        id: "1-4",
        stepTitle: "Add local storage persistence",
        explanation: "Use the useEffect hook to save todos to localStorage whenever they change, and initialize from localStorage when the component mounts.",
        codeSnippet: `import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    // Initialize from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  
  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Rest of the component remains the same
  // ...
}`,
        codeLanguage: "jsx"
      }
    ]
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "Create a weather dashboard that fetches data from a weather API and displays current conditions and forecasts.",
    difficulty: "beginner",
    category: "api",
    steps: [
      {
        id: "2-1",
        stepTitle: "Set up the Weather App component",
        explanation: "Create the basic structure for your weather dashboard application with state for the location and weather data.",
        codeSnippet: `import React, { useState } from 'react';

function WeatherDashboard() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      {/* Search form and weather display will go here */}
    </div>
  );
}

export default WeatherDashboard;`,
        codeLanguage: "jsx"
      },
      {
        id: "2-2",
        stepTitle: "Create the search form",
        explanation: "Add a form that allows users to enter a city name and fetch weather data for that location.",
        codeSnippet: `// Inside WeatherDashboard component
const handleSubmit = (e) => {
  e.preventDefault();
  if (location.trim() === '') return;
  
  fetchWeatherData(location);
};

return (
  <div className="weather-dashboard">
    <h1>Weather Dashboard</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name..."
      />
      <button type="submit">Get Weather</button>
    </form>
    {/* Weather data display will go here */}
  </div>
);`,
        codeLanguage: "jsx"
      },
      {
        id: "2-3",
        stepTitle: "Fetch data from a weather API",
        explanation: "Create a function to fetch weather data from a public API like OpenWeatherMap. You'll need to sign up for a free API key.",
        codeSnippet: `// Inside WeatherDashboard component
const fetchWeatherData = async (city) => {
  const API_KEY = 'your_api_key_here'; // Replace with your actual API key
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;
  
  setLoading(true);
  setError(null);
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    const data = await response.json();
    setWeatherData(data);
  } catch (err) {
    setError(err.message);
    setWeatherData(null);
  } finally {
    setLoading(false);
  }
};`,
        codeLanguage: "jsx"
      },
      {
        id: "2-4",
        stepTitle: "Display the weather information",
        explanation: "Create a component to display the current weather conditions including temperature, humidity, wind speed, and weather description.",
        codeSnippet: `// Inside WeatherDashboard component return statement
return (
  <div className="weather-dashboard">
    <h1>Weather Dashboard</h1>
    <form onSubmit={handleSubmit}>
      {/* Form inputs from previous step */}
    </form>
    
    {loading && <p>Loading...</p>}
    {error && <p className="error">{error}</p>}
    
    {weatherData && (
      <div className="weather-data">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <div className="current-weather">
          <img 
            src={\`http://openweathermap.org/img/wn/\${weatherData.weather[0].icon}@2x.png\`} 
            alt={weatherData.weather[0].description} 
          />
          <div>
            <h3>{Math.round(weatherData.main.temp)}°C</h3>
            <p>{weatherData.weather[0].description}</p>
          </div>
        </div>
        <div className="weather-details">
          <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    )}
  </div>
);`,
        codeLanguage: "jsx"
      }
    ]
  },
  {
    id: "3",
    title: "Markdown Notes App",
    description: "Build a markdown editor that allows users to create, edit, and preview notes with markdown formatting.",
    difficulty: "intermediate",
    category: "frontend",
    steps: [
      {
        id: "3-1",
        stepTitle: "Set up the Notes App component",
        explanation: "Create the basic structure for your markdown notes application with state for the current note content.",
        codeSnippet: `import React, { useState } from 'react';

function MarkdownNotesApp() {
  const [markdown, setMarkdown] = useState('# Hello World\\n\\nStart writing your markdown here!');
  
  return (
    <div className="markdown-app">
      <h1>Markdown Notes</h1>
      <div className="editor-container">
        {/* Editor and preview will go here */}
      </div>
    </div>
  );
}

export default MarkdownNotesApp;`,
        codeLanguage: "jsx"
      },
      {
        id: "3-2",
        stepTitle: "Create the markdown editor",
        explanation: "Add a textarea where users can input markdown text. The textarea should update the state as the user types.",
        codeSnippet: `// Inside MarkdownNotesApp component
return (
  <div className="markdown-app">
    <h1>Markdown Notes</h1>
    <div className="editor-container">
      <div className="editor">
        <h2>Editor</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={20}
          placeholder="Write your markdown here..."
        />
      </div>
      {/* Preview will go here */}
    </div>
  </div>
);`,
        codeLanguage: "jsx"
      },
      {
        id: "3-3",
        stepTitle: "Install and set up markdown parser",
        explanation: "Install the marked library to convert markdown to HTML, and create the preview component to display the rendered markdown.",
        codeSnippet: `// First, install marked:
// npm install marked

import React, { useState } from 'react';
import { marked } from 'marked';

function MarkdownNotesApp() {
  const [markdown, setMarkdown] = useState('# Hello World\\n\\nStart writing your markdown here!');
  
  // Function to convert markdown to HTML
  const getMarkdownHtml = () => {
    return { __html: marked(markdown) };
  };
  
  return (
    <div className="markdown-app">
      <h1>Markdown Notes</h1>
      <div className="editor-container">
        <div className="editor">
          <h2>Editor</h2>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows={20}
            placeholder="Write your markdown here..."
          />
        </div>
        <div className="preview">
          <h2>Preview</h2>
          <div 
            className="markdown-preview"
            dangerouslySetInnerHTML={getMarkdownHtml()} 
          />
        </div>
      </div>
    </div>
  );
}`,
        codeLanguage: "jsx"
      },
      {
        id: "3-4",
        stepTitle: "Add local storage for notes",
        explanation: "Implement localStorage to save and retrieve notes, allowing users to persist their markdown content between sessions.",
        codeSnippet: `import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

function MarkdownNotesApp() {
  const [markdown, setMarkdown] = useState(() => {
    // Initialize from localStorage
    const savedMarkdown = localStorage.getItem('markdown');
    return savedMarkdown || '# Hello World\\n\\nStart writing your markdown here!';
  });
  
  // Save to localStorage whenever markdown changes
  useEffect(() => {
    localStorage.setItem('markdown', markdown);
  }, [markdown]);
  
  // Function to convert markdown to HTML
  const getMarkdownHtml = () => {
    return { __html: marked(markdown) };
  };
  
  // ... rest of the component remains the same
}`,
        codeLanguage: "jsx"
      }
    ]
  },
  {
    id: "4",
    title: "Real-time Chat Application",
    description: "Build a simple chat application with Firebase Realtime Database to handle real-time messaging between users.",
    difficulty: "intermediate",
    category: "fullstack",
    steps: [
      {
        id: "4-1",
        stepTitle: "Set up Firebase for your project",
        explanation: "Create a new Firebase project, set up the Realtime Database, and install the Firebase SDK in your React application.",
        codeSnippet: `// Install Firebase:
// npm install firebase

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };`,
        codeLanguage: "javascript"
      },
      {
        id: "4-2",
        stepTitle: "Create a basic chat UI",
        explanation: "Set up the UI components for the chat application, including a message list and an input form for sending messages.",
        codeSnippet: `import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('User_' + Math.floor(Math.random() * 1000));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // We'll add code to send messages in the next step
    
    setNewMessage('');
  };
  
  return (
    <div className="chat-app">
      <h1>Real-time Chat</h1>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.user}: </strong> 
            <span>{msg.text}</span>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;`,
        codeLanguage: "jsx"
      },
      {
        id: "4-3",
        stepTitle: "Implement message sending functionality",
        explanation: "Add the functionality to send messages to the Firebase Realtime Database when the user submits the form.",
        codeSnippet: `import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('User_' + Math.floor(Math.random() * 1000));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // Send message to Firebase
    const messagesRef = ref(db, 'messages');
    push(messagesRef, {
      text: newMessage,
      user: user,
      timestamp: serverTimestamp()
    });
    
    setNewMessage('');
  };
  
  // Rest of the component remains the same
  // ...
}`,
        codeLanguage: "jsx"
      },
      {
        id: "4-4",
        stepTitle: "Set up real-time message listeners",
        explanation: "Add a listener to receive messages from Firebase in real-time and update the UI accordingly.",
        codeSnippet: `import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, push, onValue, serverTimestamp } from 'firebase/database';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('User_' + Math.floor(Math.random() * 1000));
  const messagesEndRef = useRef(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Set up Firebase listener
    const messagesRef = ref(db, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      
      if (messagesData) {
        const messagesList = Object.entries(messagesData).map(([id, data]) => ({
          id,
          ...data,
          timestamp: data.timestamp || Date.now()
        }));
        
        // Sort messages by timestamp
        messagesList.sort((a, b) => a.timestamp - b.timestamp);
        setMessages(messagesList);
      }
    });
    
    // Clean up listener
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // Send message to Firebase
    const messagesRef = ref(db, 'messages');
    push(messagesRef, {
      text: newMessage,
      user: user,
      timestamp: serverTimestamp()
    });
    
    setNewMessage('');
  };
  
  return (
    <div className="chat-app">
      <h1>Real-time Chat</h1>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.user}: </strong> 
            <span>{msg.text}</span>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}`,
        codeLanguage: "jsx"
      }
    ]
  },
  {
    id: "5",
    title: "Personal Portfolio Website",
    description: "Create a responsive portfolio website to showcase your projects and skills.",
    difficulty: "beginner",
    category: "frontend",
    steps: [
      {
        id: "5-1",
        stepTitle: "Set up the project structure",
        explanation: "Create the basic structure for your portfolio website with components for each section.",
        codeSnippet: `import React from 'react';

// Import section components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;`,
        codeLanguage: "jsx"
      },
      {
        id: "5-2",
        stepTitle: "Create the navigation and header",
        explanation: "Build a responsive navigation menu and header for your portfolio.",
        codeSnippet: `// components/Header.js
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="logo">
        <h1>Your Name</h1>
      </div>
      
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={isMenuOpen ? 'open' : ''}>Menu</span>
      </button>
      
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;`,
        codeLanguage: "jsx"
      },
      {
        id: "5-3",
        stepTitle: "Implement the projects section",
        explanation: "Create a grid of project cards to showcase your work with images, descriptions, and links.",
        codeSnippet: `// components/Projects.js
import React from 'react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Node.js',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A weather application that displays forecast data from a public API',
    image: '/images/project2.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  // Add more projects as needed
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;`,
        codeLanguage: "jsx"
      },
      {
        id: "5-4",
        stepTitle: "Make the website responsive",
        explanation: "Add CSS media queries to ensure your portfolio looks good on all devices, from mobile to desktop.",
        codeSnippet: `/* styles.css */
/* Base styles */
.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.mobile-menu-btn {
  display: none;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 20px;
}

/* Projects section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Media queries for responsiveness */
@media screen and (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  nav {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }
  
  nav.open {
    height: auto;
    padding: 20px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  nav ul {
    flex-direction: column;
    align-items: center;
  }
  
  nav ul li {
    margin: 10px 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .projects-section h2,
  .about-section h2 {
    font-size: 24px;
  }
  
  .project-card {
    margin-bottom: 20px;
  }
}`,
        codeLanguage: "css"
      }
    ]
  }
];

// Helper function to get random projects
export const getRandomProjects = (count: number = 3): Project[] => {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
