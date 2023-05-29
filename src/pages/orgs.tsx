import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../public/images/HEAD.png";

import imageCause1 from "../../public/assets/images/causes-image/1.jpg";
import imageCause2 from "../../public/assets/images/causes-image/2.jpg";
import imageCause3 from "../../public/assets/images/causes-image/3.jpg";
import imageCause4 from "../../public/assets/images/causes-image/4.jpg";
import imageCause5 from "../../public/assets/images/causes-image/5.jpg";

import Image from "next/image";
import Link from "next/link";

const items = [
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
	{
		image: imageCause1,
		title: "Children to get education",
		amount: "$ 25,000 - $ 50,000",
		link: "/single-org/ORG1",
		description:
			"Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
		percent: "w-1/3",
	},
];

function OrgsPage() {
	return (
		<Layout>
			<BannerPresentation image={imagebg} title="ONGS" />
			<div className="causes-page-area pb-100px pt-100px">
				<div className="container">
					<div className="row banner-area">
						{items.map((item) => (
							<div
								key={item.title}
								className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px"
							>
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<Link href={item.link}>
											<Image
												className="img-responsive w-100"
												src={item.image}
												alt=""
											/>
										</Link>
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											<p className="causes-link">{item.title}</p>
										</h5>
										<p className="causes-text">{item.description}</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">{item.amount}</span>
											<Link href="/donate" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</Link>
										</div>
										<div
											className="progress on-scroll"
											data-percent="35%"
											data-scroll-className="active"
										>
											<div
												className={`h-2 bg-primaryCol ${item.percent}`}
											></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default OrgsPage;
