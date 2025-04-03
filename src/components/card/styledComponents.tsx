import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
	borderRadius: "8px",
	backgroundColor: "white",
	border: "1px solid #cccccc",
	boxShadow: "none",
	transition: "box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out",
	"&:hover": {
		boxShadow: "0px 16px 30px 0px  rgba(0, 0, 0, 0.15)",
		transform: "scale(1.03)",
	},
	["@media (min-width: 900px)"]: {
		maxWidth: "280px",
	},
}));

// StyledCardContent is used to override the default padding of CardContent
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "10px 20px",
	textAlign: "left",
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	overflow: "hidden",
	"&:hover": {
		color: theme.palette.primary.dark,
	},
}));

export const StyledCardTitle = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
	alignItems: "center",
}));
