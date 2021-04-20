import * as React from "react";

import { Link } from "gatsby";

const Header = () => (
	<header
		style={{
			background: `black`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					Charity Rebuild
				</Link>
			</h1>
		</div>
	</header>
);

export default Header;
