import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="bg-base-100 text-base-content dark" data-theme="dark">
			<Head />
			<body className="antialiased dark">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
