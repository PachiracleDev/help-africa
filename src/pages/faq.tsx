import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../public/assets/images/testimonial-image/testi-bg.jpg";
import Desplegable from "@/components/FAQ/Desplegable";

function FaqPage() {
	return (
		<Layout>
			<BannerPresentation image={imagebg} title="FAQ" />
			<div className="login-register-area pb-100px pt-100px faq-area">
				<div className="container">
					<div className="row">
						<div className="ml-auto mr-auto col-lg-9">
							<div className="checkout-wrapper">
								<div className="inner-descripe">
									<h4 className="title">
										Below are frequently asked questions, you may find the
										answer for yourself
									</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec id erat sagittis, faucibus metus malesuada, eleifend
										turpis. Mauris semper augue id nisl aliquet, a porta lectus
										mattis. Nulla at tortor augue. In eget enim diam. Donec
										gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla
										convallis mauris vitae congue consequat. Donec interdum nunc
										purus, vitae vulputate arcu fringilla quis. Vivamus iaculis
										euismod dui.
									</p>
								</div>
								<div id="faq" className="panel-group">
									<Desplegable
										title="Mauris congue euismod purus at semper. Morbi et vulputate massa?"
										content="Donec mattis finibus elit ut tristique. Nullam tempus
									 nunc eget arcu vulputate, eu porttitor tellus commodo.
									 Aliquam erat volutpat. Aliquam consectetur lorem eu
									 viverra lobortis. Morbi gravida, nisi id fringilla
									 ultricies, elit lorem eleifend lorem"
										index={1}
									/>
									<Desplegable
										title="Donec mattis finibus elit ut tristique? "
										content="	Donec mattis finibus elit ut tristique. Nullam tempus
									 nunc eget arcu vulputate, eu porttitor tellus commodo.
									 Aliquam erat volutpat. Aliquam consectetur lorem eu
									 viverra lobortis. Morbi gravida, nisi id fringilla
									 ultricies, elit lorem eleifend lorem"
										index={2}
									/>
									<Desplegable
										content="Donec mattis finibus elit ut tristique. Nullam tempus
								nunc eget arcu vulputate, eu porttitor tellus commodo.
								Aliquam erat volutpat. Aliquam consectetur lorem eu
								viverra lobortis. Morbi gravida, nisi id fringilla
								ultricies, elit lorem eleifend lorem"
										index={3}
										title="Aenean elit orci, efficitur quis nisl at, accumsan?"
									/>
									<Desplegable
										content="Donec mattis finibus elit ut tristique. Nullam tempus
								nunc eget arcu vulputate, eu porttitor tellus commodo.
								Aliquam erat volutpat. Aliquam consectetur lorem eu
								viverra lobortis. Morbi gravida, nisi id fringilla
								ultricies, elit lorem eleifend lorem"
										index={4}
										title="	Pellentesque habitant morbi tristique senectus et
										netus?"
									/>
									<Desplegable
										content="Donec mattis finibus elit ut tristique. Nullam tempus
										nunc eget arcu vulputate, eu porttitor tellus commodo.
										Aliquam erat volutpat. Aliquam consectetur lorem eu
										viverra lobortis. Morbi gravida, nisi id fringilla
										ultricies, elit lorem eleifend lorem"
										index={5}
										title="Aenean elit orci, efficitur quis nisl at, accumsan?"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default FaqPage;
