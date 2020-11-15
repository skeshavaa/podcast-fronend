import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hosts from "../sections/hosts"
import Podcast from "../sections/podcast"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hosts />
    <Podcast />
  </Layout>
)

export default IndexPage
