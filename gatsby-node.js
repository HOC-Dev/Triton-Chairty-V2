const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			wordpress {
				pages {
					edges {
						node {
							slug
							title
							content
						}
					}
				}
			}
			wordpress {
				posts {
					edges {
						node {
							title
							id
							date
							slug
							content
							featuredImage {
								node {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
	`);

	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors);
	}

	const { wordpress } = result.data;

	// Create pages.
	const pageTemplate = path.resolve(`./src/templates/page.js`);

	wordpress.pages.edges.forEach((page) => {
		createPage({
			path: page.node.slug,
			component: pageTemplate,
			context: page.node,
		});
	});

	// Create posts.
	const postTemplate = path.resolve(`./src/templates/post.js`);

	wordpress.posts.edges.forEach((post) => {
		createPage({
			path: post.node.slug,
			component: postTemplate,
			context: post.node,
		});
	});
};
