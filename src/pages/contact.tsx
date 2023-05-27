import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import { useState } from "react";
import imagebg from "../../public/assets/images/testimonial-image/testi-bg.jpg";
import { toast } from "react-toastify";

function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const data = {
				name,
				email,
				subject,
				message,
			};
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const resData = await response.json();
			toast.success(resData.message);
		} catch (error: any) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<Layout>
			<BannerPresentation image={imagebg} title="CONTACT US" />
			<div className="contact-area pb-100px pt-100px">
				<div className="container">
					<div className="custom-row-2 row">
						<div className="col-lg-4 col-md-5 mb-lm-60px col-sm-12 col-xs-12 w-sm-100">
							<div className="contact-info-wrap">
								<h2 className="title" data-aos="fade-up" data-aos-delay="200">
									Contact Info
								</h2>
								<div className="single-contact-info">
									<div className="contact-info-inner">
										<span className="sub-title">Phone:</span>
									</div>
									<div className="contact-info-dec">
										<p>
											<a href="tel:+012345678102">+012 345 678 102</a>
										</p>
										<p>
											<a href="tel:+012345678102">+012 345 678 102</a>
										</p>
									</div>
								</div>
								<div className="single-contact-info">
									<div className="contact-info-inner">
										<span className="sub-title">Email:</span>
									</div>
									<div className="contact-info-dec">
										<p>
											<a href="mailto://urname@email.com">urname@email.com</a>
										</p>
										<p>
											<a href="mailto://urwebsitenaem.com">urwebsitenaem.com</a>
										</p>
									</div>
								</div>
								<div className="single-contact-info">
									<div className="contact-info-inner">
										<span className="sub-title">Address:</span>
									</div>
									<div className="contact-info-dec">
										<p>Address goes here,</p>
										<p>street, Crossroad 123.</p>
									</div>
								</div>
								<div className="contact-social">
									<h3 className="title" data-aos="fade-up" data-aos-delay="200">
										Follow Us
									</h3>
									<div className="social-info">
										<ul>
											<li>
												<a href="#">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-twitter"></i>
												</a>
											</li>

											<li>
												<a href="#">
													<i className="fa fa-google"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fa fa-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
							<div className="contact-form">
								<div className="contact-title mb-30">
									<h2 className="title">Get In Touch</h2>
								</div>
								<form
									className="contact-form-style"
									id="contact-form"
									onSubmit={handleSubmit}
								>
									<div className="row">
										<div className="col-lg-6">
											<input
												value={name}
												onChange={(e) => setName(e.target.value)}
												name="name"
												placeholder="Name*"
												type="text"
											/>
										</div>
										<div className="col-lg-6">
											<input
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												name="email"
												placeholder="Email*"
												type="email"
											/>
										</div>
										<div className="col-lg-12">
											<input
												name="subject"
												value={subject}
												onChange={(e) => setSubject(e.target.value)}
												placeholder="Subject*"
												type="text"
											/>
										</div>
										<div className="col-lg-12">
											<textarea
												name="message"
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												placeholder="Your Message*"
											></textarea>
											<button
												className="btn btn-primary btn-hover-dark w-auto mt-20px"
												type="submit"
											>
												SEND
											</button>
										</div>
									</div>
								</form>
								<p className="form-messege"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ContactPage;
