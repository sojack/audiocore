import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{
	--red:#ff6969;
	--black:#222222;
	--white:#eeeeee;
}

html{
	font-size:10px;
	background-color: var(--black);
	font-family:Georgia, 'Times New Roman', Times, serif;
}
a{
	color: var(--red);
}
`

export default GlobalStyles