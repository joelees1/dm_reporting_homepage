"use client";

import {
	Box,
	Typography,
	Grid,
	Divider,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/page.module.css";
import Card from "../components/card/card";
import { StyledAccordion } from "@/components/accordion/styledComponents";

export default function Home() {
	const linksSection1 = [
		{
			title: "Link 1",
			url: "https://example.comqehfoqhfoqejfoiqefohqofhqeof",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 2",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 3",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 4",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
	];
	const linksSection2 = [
		{
			title: "Link 5",
			url: "https://example.comehgwohgowrhgowhrohwoghwoghowhgowhg",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 6",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 7",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
		{
			title: "Link 8",
			url: "https://example.com",
			imgSrc: "/fallback.jpeg",
		},
	];

	return (
		<Box className={styles.pageContainer}>
			<StyledAccordion defaultExpanded disableGutters>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					classes={{ root: styles.accordionSummary }}
				>
					<Typography variant="h5">IOT Links Section 1</Typography>
					<Divider
						aria-hidden="true"
						classes={{ root: styles.divider }}
					/>
				</AccordionSummary>
				<AccordionDetails>
					<Box className={styles.boxContainer}>
						<Grid
							container
							spacing={4}
							justifyContent={"space-between"}
						>
							{linksSection1.map((link, index) => (
								<Grid
									size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
									key={index}
									className={styles.gridItem}
								>
									<Card
										key={index}
										title={link.title}
										url={link.url}
										imgSrc={link.imgSrc}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</AccordionDetails>
			</StyledAccordion>

			<StyledAccordion defaultExpanded disableGutters>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					classes={{ root: styles.accordionSummary }}
				>
					<Typography variant="h5">IOT Links Section 2</Typography>
					<Divider
						aria-hidden="true"
						classes={{ root: styles.divider }}
					/>
				</AccordionSummary>
				<AccordionDetails>
					<Box className={styles.boxContainer}>
						<Grid
							container
							spacing={4}
							justifyContent={"space-between"}
						>
							{linksSection2.map((link, index) => (
								<Grid
									size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
									key={index}
									className={styles.gridItem}
								>
									<Card
										key={index}
										title={link.title}
										url={link.url}
										imgSrc={link.imgSrc}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</AccordionDetails>
			</StyledAccordion>
		</Box>
	);
}
