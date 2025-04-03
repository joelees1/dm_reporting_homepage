"use client";

import React from "react";
import styles from "../../styles/appBar.module.css";
import { StyledAppBar } from "../appBar/styledComponents";
import Image from "next/image";
import { Typography } from "@mui/material";

const Footer: React.FC = () => {
	return (
		<StyledAppBar customPosition="footer" className={styles.footer}>
			<div className={styles.titleContainer}>
				<Image
					src="/logo_copy.svg"
					alt="Logo"
					width={150}
					height={50}
				/>
			</div>
			<div className={styles.footerContent}>
				<Typography variant="body2" color="white">
					Email: example@gmail.com
					<br />
					Phone: 0000000000
				</Typography>
			</div>
		</StyledAppBar>
	);
};

export default Footer;
