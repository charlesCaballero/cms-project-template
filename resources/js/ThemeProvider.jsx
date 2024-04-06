import {
    useContext,
    createContext,
    useState,
    useCallback,
    useMemo,
    useEffect,
} from "react";

export const ThemeContext = createContext("dark", () => {});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : "light";
    });

    const getThemeFromLocalStorage = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    };

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }, [theme]);

    useEffect(() => {
        getThemeFromLocalStorage();
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
