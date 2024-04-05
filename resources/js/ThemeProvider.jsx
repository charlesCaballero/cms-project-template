import {
    useContext,
    createContext,
    useState,
    useCallback,
    useMemo,
} from "react";

export const ThemeContext = createContext("dark", () => {});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = useCallback(() => {
        setTheme(theme === "light" ? "dark" : "light");
    }, [theme]);

    const contextValue = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
//The custom hook
export const useTheme = () => {
    const value = useContext(ThemeContext);
    if (value === undefined) throw new Error("Context is undefined");
    return value;
};

export default ThemeProvider;
