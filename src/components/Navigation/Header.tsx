import React from "react";
import Link from "next/link";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import classNames from "classnames";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

function Header() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	const cn = classNames("ModalMenu", {
		ModalMenuActivate: navbarOpen,
	});

	return (
		<>
			<header className="header-wrapper border-b">
				<div className="header-nav bg-theme d-lg-block d-none">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-lg-5 col-xl-6 align-self-center justify-content-center">
								<div className="follow d-flex">
									<ul className="link-follow">
										<li>
											<a
												className="linkedin fa fa-linkedin"
												title="Linkedin"
												href="#"
											></a>
										</li>
										<li>
											<a
												className="twitter fa fa-twitter"
												title="Twitter"
												href="#"
											></a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-7 col-lg-7 col-xl-6 align-self-center text-end">
								<div className="call-to-action">
									<nav>
										<ul>
											<li>
												<a href="mailto:ourmail@domain.com">
													<i className="fa fa-envelope" aria-hidden="true"></i>{" "}
													Email: hello@helpafrica.click
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-menu sticky top-0 z-50 bg-white d-lg-block d-none ptb-10px">
					<div className="container">
						<div className="row">
							<div className="col-md-3 d-flex">
								<div className="logo align-self-center">
									<Link href="/" className="text-lg text-stone-700 font-medium">
										<Image src={logo} alt="Logo" width={100} height={50} />
									</Link>
								</div>
							</div>
							<div className="col-md-7  d-flex">
								<div className="header-horizontal-menu align-self-center">
									<ul className="menu-content">
										<li className="active menu-dropdown">
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href="/about">About</Link>
										</li>
										<li className="menu-dropdown">
											<Link href="/orgs">ONG</Link>
										</li>

										<li className="menu-dropdown">
											<Link href="/faq">FAQ</Link>
										</li>
										<li>
											<Link href="/contact">Contact</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-2 align-self-center">
								<div className="header-right-element d-flex justify-content-end">
									<Link
										className="btn btn-primary btn-hover-dark"
										href="/donate"
									>
										Donate
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="mobile-header d-lg-none sticky top-0 z-50 bg-white border-b ptb-10px">
				<div className="w-full justify-between flex px-4  items-center">
					<Link href="/" className="text-lg text-stone-700 font-medium">
						<Image src={logo} alt="Logo" width={100} height={40} />
					</Link>
					<div className="flex items-center gap-2">
						<HiBars3BottomRight
							onClick={() => setNavbarOpen(!navbarOpen)}
							size={35}
							className="text-gray-700"
						/>
					</div>
				</div>
			</div>

			<div className={cn}>
				<div className="flex justify-between items-center py-4 w-full mb-6">
					<h6 className="font-bold text-xl flex gap-2 items-center">
						<HiBars3BottomRight className="h-7 w-7" />
						MENU
					</h6>

					<HiXMark
						onClick={() => setNavbarOpen(!navbarOpen)}
						className="h-7 w-7 cursor-pointer text-gray-700"
					/>
				</div>
				<div className="flex flex-col justify-center gap-4 ">
					<Link onClick={() => setNavbarOpen(!navbarOpen)} href="/">
						HOME
					</Link>
					<Link href="/about" onClick={() => setNavbarOpen(!navbarOpen)}>
						ABOUT
					</Link>
					<Link href="/orgs" onClick={() => setNavbarOpen(!navbarOpen)}>
						ORGS
					</Link>
					<Link href="/faq" onClick={() => setNavbarOpen(!navbarOpen)}>
						FAQ
					</Link>
					<Link onClick={() => setNavbarOpen(!navbarOpen)} href="/contact">
						CONTACT
					</Link>
				</div>
				<div className="mt-3 flex justify-center mx-auto">
					<Link className="btn btn-primary btn-hover-dark" href="/donate">
						Donate
					</Link>
				</div>
				<div className="flex justify-end w-full my-12 tems-center gap-6 text-2xl">
					<Link
						target="_blank"
						rel="noreferrer"
						href="https://www.facebook.com/"
					>
						<BsFacebook size={25} className="text-primaryCol" />
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href="https://www.twitter.com/"
					>
						<BsTwitter size={25} className="text-primaryCol" />
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
