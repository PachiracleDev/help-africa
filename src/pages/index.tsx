import CommingSoon from "@/components/CommingSoon";
import Banner from "@/components/Main/Banner";
import BannerTwo from "@/components/Main/BannerTwo";
import Gallery from "@/components/Main/Gallery";
import HowCanYou from "@/components/Main/HowCanYou";
import Ongs from "@/components/Main/Ongs";
import OrgsList from "@/components/Main/OrgsList";
import Layout from "@/layout";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
	let bool = false;
	return bool ? (
		<Layout>
			<Banner />
			<Ongs />
			<HowCanYou />
			<Gallery />
			<BannerTwo />
			<OrgsList />
		</Layout>
	) : (
		<CommingSoon />
	);
}
{
}
