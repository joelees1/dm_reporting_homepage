"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		copy: {
			primary: string;
			secondary: string;
			tertiary: string;
			hovered: string;
			active: string;
		};
		appBar: {
			primary: string;
			secondary: string;
		};
	}
	interface ThemeOptions {
		copy?: {
			primary?: string;
			secondary?: string;
			tertiary?: string;
			hovered?: string;
			active?: string;
		};
		appBar?: {
			primary?: string;
			secondary?: string;
		};
	}
}

export const theme = createTheme({
	cssVariables: true,
	typography: {
		fontFamily: "RRPioneer",
	},
	palette: {
		mode: "light",
		primary: {
			main: "#006dff",
			light: "#4f9dff",
			dark: "#10069f",
		},
		secondary: {
			main: "#efeff4",
			light: "#ffffff",
			dark: "#c8c7cc",
		},
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
	},
	copy: {
		primary: "black",
		secondary: "#10069f",
		tertiary: "#ffffff",
		hovered: "#fc4191",
		active: "#fc4191",
	},
	appBar: {
		primary: "#ffffff",
		secondary: "#10069f",
	},
});

export const DarkTheme = createTheme({
	cssVariables: true,
	typography: {
		fontFamily: "RRPioneer",
	},
	palette: {
		mode: "dark",
		primary: {
			main: "#006dff", // blue
			light: "#4f9dff", // light blue
			dark: "#10069f", // dark blue
		},
		secondary: {
			main: "#efeff4", // light gray
			light: "#ffffff",
			dark: "#c8c7cc", // dark gray
		},
		background: {
			default: "#ffffff",
			paper: "#ffffff",
		},
	},
	copy: {
		primary: "#ffffff",
		secondary: "#ffffff",
		tertiary: "black",
		hovered: "#fc4191", // pink
		active: "#fc4191",
	},
	appBar: {
		primary: "#10069f",
		secondary: "#10069f",
	},
});

export default theme;
