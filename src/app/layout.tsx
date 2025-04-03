import "../styles/globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="description"
					content="Digital Manufacturing Automated Reporting"
				/>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<title>DM Automated Reporting</title>
			</head>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<Header />
						<main>{children}</main>
						<Footer />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
