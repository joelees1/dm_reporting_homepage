"use client";

import { AppBar, styled } from "@mui/material";
import Link from "next/link";

interface StyledAppBarProps {
	customPosition: "header" | "footer";
}

export const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "customPosition",
})<StyledAppBarProps>(({ theme, customPosition }) => ({
	display: "flex",
	flexDirection: "row",
	position: "relative",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 20px",
	gap: "10px",
	height: "100px",
	color:
		customPosition === "footer" ? theme.copy.primary : theme.copy.secondary,
	backgroundColor:
		customPosition === "footer"
			? theme.appBar.secondary
			: theme.appBar.primary,
	boxShadow: "none",
	borderBottom: customPosition === "footer" ? "none" : "1px solid #cccccc",
	fontFamily: theme.typography.fontFamily,
}));

interface StyledLinkProps {
	customPosition: "header" | "footer";
}

export const StyledLink = styled(Link, {
	shouldForwardProp: (prop) => prop !== "customPosition",
})<StyledLinkProps>(({ theme, customPosition }) => ({
	color: customPosition === "footer" ? "white" : theme.copy.secondary,
	transition: "color 0.3s ease, text-decoration 0.3s ease",
	"&:hover": {
		color: theme.copy.hovered,
	},
	"&.active": {
		color: theme.copy.active,
	},
}));
