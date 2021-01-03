import * as React from "react"
import 'normalize.css'
import GlobalStyles from "../styles/GlobalStyles"
import {Link} from "gatsby"
import styled from "styled-components"
import {Helmet} from "react-helmet"

const PageContainer = styled.div`
color: var(--white);
display:grid;
grid-template-columns: 1fr 3fr;

.navlinks{
	li{
	margin:.5em;
	}
}
.main{
	background-color: var(--red);
	color:white;
	padding: 1em;
}
`

const Navlinks = styled.ul`
`

const Layout= ({children}) => {
return(
	<PageContainer>
		<Helmet>
			<title>AudioCore</title>
		</Helmet>
		<GlobalStyles />
		<ul className="navlinks">
			<li><Link to="/">home</Link></li>
			<li><Link to="/about">about</Link></li>
			<li>location
			<ul>
				<li><Link to="/location/losangeles">Los Angeles</Link></li>
				<li><Link to="/location/sacramento">Sacramento</Link></li>
				<li><Link to="/location/fresno">Fresno</Link></li>
			</ul>
			</li>
		</ul>
		<div className="main">
			{children}
		</div>
	</PageContainer>
)
}

export default Layout