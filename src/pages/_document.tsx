import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&amp;display=swap"
					rel="stylesheet"
				/>
				<link
					//FONT AWESOME
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<Script
					// you might need to get a newer version
					src="https://kit.fontawesome.com/fbadad80a0.js"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
