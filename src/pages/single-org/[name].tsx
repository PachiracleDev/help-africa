import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../../public/assets/images/testimonial-image/testi-bg.jpg";
import { useRouter } from "next/router";
import Image from "next/image";
import image1 from "../../../public/assets/images/causes-image/causes-single-1.jpg";
import image2 from "../../../public/assets/images/causes-image/causes-single-2.png";
import { toast } from "react-toastify";

function SingleOne() {
	const router = useRouter();
	const nameTitle = router.query.name as string;

	const [amount, setAmount] = React.useState(0);
	const [dedication, setDedication] = React.useState("");
	const [currency, setCurrency] = React.useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const body = { amount, dedication, currency };

		if (!amount || !dedication || !currency)
			return toast.error("Please fill all the fields");

		try {
			const rta = await fetch("/api/donate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const data = await rta.json();

			window.location.href = data.url;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<BannerPresentation image={imagebg} title={nameTitle || ""} />
			<div className="single-cuases-area pt-100px pb-100px">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mb-md-60px mb-lm-60px">
							<div className="single-cuases-wrappwe">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper position-relative overflow-hidden">
										<a href="causes-grid.html">
											<Image
												className="img-responsive w-100"
												src={image1}
												alt=""
											/>
										</a>
									</div>
									<div className="causes-content">
										<h3 className="content-title">
											{" "}
											<a className="causes-link" href="causes-grid.html">
												How this charity changed my life
											</a>
										</h3>
										<p className="causes-text">
											Hi everyone, I’m Laurie, and this is my BIG Little Sister,
											Sarrah. (note to reader: this is funny because my Little
											Sister is physically bigger and taller than I am. Ha ha!).
											Without the Big Sisters organization – and all the
											sponsors, volunteers, staff, and board members – I would
											never have met my Little Sister Sarrah. And I would’ve
											missed out on one of the highlights of my whole life:
											being a Big Sister.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 45,000 - $ 85,000
											</span>
											<span className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</span>
										</div>
										<div
											className="progress on-scroll"
											data-percent="75%"
											data-scroll-className="active"
										>
											<div className="bg-primaryCol h-2 w-4/5"></div>
										</div>
									</div>
								</div>
								<div className="single-cuases-content ">
									<h4 className="title mt-30px mb-10px">
										Summary of an Inspirational Speech
									</h4>
									<p className="content-desc mb-20px">
										In your charity fundraising speech, describe:
									</p>
									<ul>
										<li data-aos-delay="200">
											<i className="fa fa-check"></i>How and why your charity is
											life-changing, both specifically and generally
										</li>
										<li data-aos-delay="300">
											<i className="fa fa-check"></i>The challenges your charity
											has overcome, or is overcoming
										</li>
										<li data-aos-delay="400">
											<i className="fa fa-check"></i>The successes you’ve faced
											as a charity or an individual
										</li>
										<li data-aos-delay="500">
											<i className="fa fa-check"></i>End your inspirational
											speech with an ask for a specific amount of money.
										</li>
										<li data-aos-delay="600">
											<i className="fa fa-check"></i>Don’t be shy about asking
											for money – that’s what charity events and fundraising
											galas are for
										</li>
									</ul>

									<Image
										className="img-responsive w-100 "
										src={image2}
										alt=""
									/>
								</div>
								<div className="single-cuases-content">
									<h4 className="title mt-30px mb-15px">
										Challenges of Nonprofit Organization
									</h4>
									<p className="content-desc mb-20px">
										This inspirational speech is from my heart, which is what
										made it work. If you’re giving a speech at a charity event,
										write it from the very core of you! The more authentic and
										sincere you are, the better your fundraising efforts,
										inspirational speech, and charity event will be
									</p>
									<p className="content-desc">
										Why are you searching for charity speeches? Feel free to
										share your nonprofit organization’s information here —
										including what you’re raising money for. This is a good and
										safe place to practice your fundraising efforts 🙂 Feel free
										to share links to your organization or charity event.
									</p>
								</div>
								<div className="single-cuases-content">
									<h4 className="title mt-20px mb-15px">
										Conclude the Inspirational Speech
									</h4>
									<p className="content-desc">
										The biggest change I’ve seen in Sarrah is her increased
										confidence in herself. When we were first matched, our first
										outing was the Big Sisters picnic in Stanley Park – in the
										pouring rain! Sarrah was so shy and quiet, and she spoke so
										softly that people couldn’t hear what she was saying.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-cuases-sidebar">
								<div className="donation-form">
									<form action="#" method="get">
										<div className="row">
											<div className="col-lg-12">
												<h3 className="title">Donation Form</h3>
											</div>
											<div className="col-lg-12">
												<div className="amount-price flex flex-col gap-4 ">
													<div>
														<p className="text-gray-600 text-center">
															How much would you like to donate?
														</p>
														<input
															type="number"
															value={amount}
															onChange={(e) =>
																setAmount(parseInt(e.target.value))
															}
															placeholder="Enter your pledged donation"
															className="input input-bordered border input-primary w-full"
														/>
													</div>

													<select
														onChange={(e) => setCurrency(e.target.value)}
														value={currency}
														className="select border  w-full text-gray-600"
													>
														<option>Currency</option>
														<option value="USD">USD</option>
														<option value="EUR">EUR</option>
													</select>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<div className="form_group">
													<textarea
														name="comment"
														value={dedication}
														onChange={(e) => setDedication(e.target.value)}
														className="textarea h-40 border resize-none"
														placeholder="Dedication"
													></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<div className="form_btn">
													<button
														onClick={handleSubmit}
														className="btn btn-primary btn-hover-dark w-auto"
													>
														Donate now
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default SingleOne;
