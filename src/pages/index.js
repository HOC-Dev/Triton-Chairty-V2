import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Hello people!</h1>
		<p>Welcome to our new Triton Charity site.</p>

		<StaticImage
			src="../images/gatsby-astronaut.png"
			width={300}
			quality={95}
			formats={["AUTO", "WEBP", "AVIF"]}
			alt="A Gatsby astronaut"
			style={{ marginBottom: `1.45rem` }}
		/>
	</Layout>
);

export default IndexPage;
