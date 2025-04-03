import React, { useState } from "react";
import { CardActionArea, CardMedia, Icon, Typography } from "@mui/material";
import {
	StyledCard,
	StyledCardContent,
	StyledCardTitle,
} from "./styledComponents";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface CardProps {
	title: string;
	url: string;
	imgSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, url, imgSrc }) => {
	const [image, setImage] = useState(imgSrc || "/fallback.jpeg");

	return (
		<StyledCard>
			<CardActionArea
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<CardMedia
					component="img"
					src={image}
					alt={title}
					onError={() => {
						setImage("/fallback.jpeg");
					}}
				/>
				<StyledCardContent>
					<StyledCardTitle>
						<Typography variant="h6">{title}</Typography>
						<Icon component={"span"}>
							<OpenInNewIcon fontSize="small" />
						</Icon>
					</StyledCardTitle>
					<Typography
						variant="body2"
						maxWidth={"100%"}
						overflow="hidden"
						textOverflow="ellipsis"
					>
						{url}
					</Typography>
				</StyledCardContent>
			</CardActionArea>
		</StyledCard>
	);
};

export default Card;
