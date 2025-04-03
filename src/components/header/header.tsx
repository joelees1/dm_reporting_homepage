"use client";

import React from "react";
import styles from "../../styles/appBar.module.css";
import { StyledAppBar, StyledLink } from "../appBar/styledComponents";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
	const pathname = usePathname(); // Get the current route

	return (
		<StyledAppBar customPosition="header">
			<Link href="/" className={styles.titleContainer}>
				<Image src="/logo.png" alt="Logo" width={51} height={75} />
				<Typography variant="h5" noWrap>
					Digital Manufacturing Automated Reporting
				</Typography>
			</Link>
			<nav className={styles.nav}>
				<StyledLink
					href="/"
					customPosition="header"
					className={pathname === "/" ? "active" : ""}
				>
					Home
				</StyledLink>
				<StyledLink
					href="/contact"
					customPosition="header"
					className={pathname === "/contact" ? "active" : ""}
				>
					Contact
				</StyledLink>
			</nav>
		</StyledAppBar>
	);
};

export default Header;
