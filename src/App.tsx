import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header with dark mode toggle */}
      <header className="fixed top-0 right-0 p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace with laptop and coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Welcome to Our Digital Space
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We create innovative solutions that bridge the gap between imagination and reality. 
              Our passion lies in crafting digital experiences that not only meet but exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With years of experience in software development and design, 
              we bring your ideas to life with cutting-edge technology and creative excellence.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;