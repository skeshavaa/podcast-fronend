import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hosts from "../sections/hosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hosts />
  </Layout>
)

export default IndexPage
