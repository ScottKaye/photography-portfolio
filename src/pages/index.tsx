import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import Layout from "../components/layout";
import GridItem from "../components/grid-item";
import SEO from "../components/SEO";
import { ChildImageSharp } from "../types";

type PageProps = {
	data: {
		projects: {
			nodes: {
				title: string;
				slug: string;
				orientation: string;
				cover: ChildImageSharp;
			}[];
		};
	};
};

const Area = styled(animated.div)`
	display: flex;
	flex-wrap: wrap;
	background: #000;
`;

const Project = styled(GridItem)`
	flex: 1 1
		${(props) => {
			switch (props.orientation) {
				default:
					return `33%`;
				case "landscape":
					return `66%`;
			}
		}};
	height: 70vh;
	min-width: 300px;
`;

const Index: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
	const pageAnimation = useSpring({
		config: config.slow,
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<Layout>
			<SEO />
			<Area style={pageAnimation}>
				{projects.nodes.map((project, i) => (
					<Project
						key={i}
						to={project.slug}
						orientation={project.orientation}
						aria-label={`View project "${project.title}"`}
					>
						<Img fluid={project.cover.childImageSharp.fluid} />
						<span>{project.title}</span>
					</Project>
				))}
			</Area>
		</Layout>
	);
};

export default Index;

export const query = graphql`
	query Index {
		projects: allProjectsYaml {
			nodes {
				title
				slug
				orientation
				cover {
					childImageSharp {
						fluid(quality: 95, maxWidth: 1200) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`;
