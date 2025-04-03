// styled mui accordion

import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	boxShadow: "none",
	"&:before": {
		display: "none",
	},
	"& > h3 > button > span": {
		display: "flex",
		flexDirection: "column",
		gap: "5px",
	},
}));
