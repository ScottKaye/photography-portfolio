import React from "react";
import { config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox } from "../elements";
import SEO from "../components/SEO";

const About = () => {
	const pageAnimation = useSpring({
		config: config.slow,
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<Layout>
			<SEO title="About | Scott Kaye" />
			<AnimatedBox
				style={pageAnimation}
				py={[6, 6, 6, 8]}
				px={[6, 6, 8, 6, 8, 13]}
			>
				<h1>&#x1f44b; Hi, I'm Scott!</h1>
				<p>
					I take photos for fun, and have a small but growing
					collection of stock photographs on{" "}
					<a
						href="https://www.istockphoto.com/ca/portfolio/scottkaye"
						target="_blank"
						rel="noopener"
					>
						iStock.
					</a>
				</p>
			</AnimatedBox>
		</Layout>
	);
};

export default About;
