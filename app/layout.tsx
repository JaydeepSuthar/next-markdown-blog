import Link from "next/link";
import "./globals.css";

const Header = () => {
	return (
		<header>
			<div className="text-center bg-slate-800 p-8 my-6 rounded-md">
				<Link href={`/`}>
					<h1 className="text-3xl text-white font-semibold mb-2">
						Jaydeep's Blog
					</h1>
				</Link>
				<p className="text-slate-300">🤘 Welcome to My Tech Blog 💻</p>
			</div>
		</header>
	);
};

const Footer = () => {
	return (
		<footer>
			<div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
				<h3>
					Developed By <strong>Jaydeep Suthar</strong>
				</h3>
			</div>
		</footer>
	);
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="mx-auto max-w-2xl p-2">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
