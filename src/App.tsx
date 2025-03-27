
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider 
        defaultTheme="system" 
        enableSystem 
        storageKey="ui-theme"
        attribute="class" // This is important for Tailwind dark mode
      >
        <AuthProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
            <Toaster />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
