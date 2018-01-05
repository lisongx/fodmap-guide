import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  return (<div>
     <div dangerouslySetInnerHTML={{ __html: data.indexPage.html }} />
   </div>)
}


export default IndexPage

export const query = graphql`
  query IndexQuery {
    indexPage: markdownRemark(id: {regex: "/data/index.md/"}) {
      id
      frontmatter {
        title
      }
      excerpt
      html
    }
  }
`
