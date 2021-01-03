import * as React from "react"
import Layout from "../../components/layout"
import {Helmet} from 'react-helmet'
// styles

// markup

const LosAngelesPage = () => {
  return (
	<Layout>
      <Helmet>
        <title>LA - Location</title>
      </Helmet>
		<h1>LosAngeles Page</h1>
	</Layout>
  )
}

export default LosAngelesPage
