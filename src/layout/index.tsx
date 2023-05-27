import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
