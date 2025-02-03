import React, { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";
import fnavarroImage from "./fnavarro8bit.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
              src={fnavarroImage}
              alt="Workspace with laptop and coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Francesc Navarro
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hi there! I’m a Frontend Developer and Staff Engineer at
              Innovamat, where I turn complex problems into smooth,
              user-friendly web experiences. I specialize in React, TypeScript,
              and React Query, making sure everything runs fast, looks great,
              and doesn’t break (too often). From crafting intuitive UIs to
              optimizing performance, I love building products that feel
              effortless to use.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I’m not wrangling JavaScript or taming a monorepo, I’m
              mentoring teammates, fine-tuning deployment pipelines with
              Terraform and AWS, and making sure our apps don’t crash at the
              worst possible moment. I believe in clean code, solid
              architecture, and a dash of humor to keep things interesting. If
              you need someone who can build, debug, and maybe sneak in an
              Easter egg or two, you’re in the right place!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://bsky.app/profile/fnavarrodev.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/fnavarrodeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/fnavarrodev"
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
