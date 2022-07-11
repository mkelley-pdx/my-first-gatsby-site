import * as React from 'react';
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";


const PageDirectory = ({ data }: PageProps<Queries.DirectoryListQuery>) => {
    return (
        <Layout pageTitle="Page Directory">
            <ul>
                {
                    data.allSitePage.nodes.map(node => (
                        <article key={node.id}>
                            <li>
                                <Link to={node.path}>
                                    {node.path}
                                </Link>
                            </li>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query DirectoryList {
        allSitePage {
            nodes {
                path
                id
            }
        }
    }
`;

export default PageDirectory;