import * as React from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
// styles

// markup

const AboutPage = () => {
  return (
    <Layout>
        <Helmet>
          <title>About - AudioCore</title>
        </Helmet>
        <h1>About Page</h1>
    </Layout>
  )
}

export default AboutPage
