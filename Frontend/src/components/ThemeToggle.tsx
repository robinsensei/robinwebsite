import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="icon" />
            ) : (
                <Moon className="icon" />
            )}
        </button>
    );
}
