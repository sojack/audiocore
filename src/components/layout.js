import * as React from "react"
import 'normalize.css'
import GlobalStyles from "../styles/GlobalStyles"
import {Link} from "gatsby"
import styled from "styled-components"

const PageContainer = styled.div`
color: var(--white);
display:flex;
flex-direction:row;

`

const Navlinks = styled.ul`
li{
margin:.5em;
}
`

const Layout= ({children}) => {
return(
	<PageContainer>
		<GlobalStyles />
		<Navlinks>
			<li><Link to="/">home</Link></li>
			<li><Link to="/about">about</Link></li>
			<li>location
			<ul>
				<li><Link to="/location/losangeles">Los Angeles</Link></li>
				<li><Link to="/location/sacramento">Sacramento</Link></li>
				<li><Link to="/location/fresno">Fresno</Link></li>
			</ul>
			</li>
		</Navlinks>

		{children}
	</PageContainer>
)
}

export default Layout