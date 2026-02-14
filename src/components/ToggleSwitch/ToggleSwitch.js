import React, { useState, useEffect } from 'react';
import emoji from "react-easy-emoji";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.setAttribute('data-theme', localTheme);
        } else {
            // Default to dark
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    return (
        <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider round">
                <span className="emoji">{theme === 'dark' ? emoji("🌙") : emoji("☀️")}</span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
