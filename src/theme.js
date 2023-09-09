import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primaryColor: {
                    main: "#3b5166",
                },
                secondaryColor: {
                    main: "#3b5166",
                },
                errorColor: {
                    main: "#e74c3c",
                    dark: "#c0392b",
                },
                warningColor: {
                    main: "#ffc107",
                },
                successColor: {
                    main: "#28a745",
                },
                infoColor: {
                    main: "#2a7ddbb3",
                },
                greyColor: {
                    main: "rgb(88, 88, 88)",
                },
             
              
             
            }
            : {
                primaryColor: {
                    main: "#3b5166",
                },
                secondaryColor: {
                    main: "#384b5e",
                },
                errorColor: {
                    main: "#e74c3c",
                    dark: "#c0392b",
                },
                warningColor: {
                    main: "#ffc107",
                },
                successColor: {
                    main: "#28a745",
                },
                infoColor: {
                    main: "#2a7ddbb3",
                },
                greyColor: {
                    main: "rgb(88, 88, 88)",
                },
                backgroundColor: {
                    default: "#efefef",
                },
                textColor: {
                    primary: "#2B3445",
                },

            }),
    },
});

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return [theme, colorMode];
};
