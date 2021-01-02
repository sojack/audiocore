import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{
	--red:#ff6969;
	--black:#222222;
}

html{
	font-size:10px;
	background-color: var(--black)
}
a{
	color: var(--red);
}
`

export default GlobalStyles