
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration completes before rendering to avoid UI flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // During initial rendering, render a simple container to avoid layout shift
  if (!mounted) {
    return <div className="h-full">{children}</div>;
  }

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
