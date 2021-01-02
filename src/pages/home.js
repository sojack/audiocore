import * as React from "react"
import {Link} from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"

// styles
const HomeMain = styled.main`
font-family:Georgia, 'Times New Roman', Times, serif;
font-size:3em;
color:#3456f6;
margin:0;
h1{
	margin:0;
}
`

// markup

const HomePage = () => {
  return (
	  <Layout>
    <HomeMain>
      <title>Home Page</title>
	  <h1>Audio Core</h1>
	  <ul>
		  <li>home</li>
		  <li>about</li>
		  <li>location
			  <ul>
				  <li><Link to="/location/losangeles">Los Angeles</Link></li>
				  <li><Link to="/location/sacramento">Sacramento</Link></li>
				  <li><Link to="/location/fresno">Fresno</Link></li>
			  </ul>
		  </li>
	  </ul>
    </HomeMain>
	</Layout>
  )
}

export default HomePage
