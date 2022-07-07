import * as React from 'react'
import Layout from '../components/layout'
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, PageProps } from "gatsby";

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter?.title}</h2>
                            <p>Posted: {node.frontmatter?.date}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query BlogPage {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
            }
        }
    }
`

export default BlogPage