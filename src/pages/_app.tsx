import "../styles/globals.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/plugins/animate.css";
import "../../public/assets/css/plugins/slick.css";
import "../../public/assets/css/plugins/aos.css";
import "../../public/assets/css/plugins/venobox.css";
import "../../public/assets/css/style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { AppProps } from "next/app";

import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => {
	NProgress.start();
});

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				limit={1}
				rtl={false}
				hideProgressBar={false}
				theme="light"
			/>
		</>
	);
}
