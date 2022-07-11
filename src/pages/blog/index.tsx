import * as React from 'react'
import Layout from "../../components/layout";
import { graphql, Link, PageProps } from "gatsby";

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter?.title}
                                </Link>
                            </h2>
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
                slug
            }
        }
    }
`

export default BlogPage