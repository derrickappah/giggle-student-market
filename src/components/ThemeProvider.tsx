
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Create a context for theme information
const ThemeContext = createContext({ isDarkMode: false });

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ensure hydration completes before rendering to avoid UI flicker
  useEffect(() => {
    setMounted(true);
    
    // Check if the current theme is dark
    const isDark = document.documentElement.classList.contains('dark') || 
                  window.localStorage.getItem('ui-theme') === 'dark' ||
                  (window.localStorage.getItem('ui-theme') === 'system' && 
                   window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // During initial rendering, render a simple container to avoid layout shift
  if (!mounted) {
    return <div className="h-full">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}
