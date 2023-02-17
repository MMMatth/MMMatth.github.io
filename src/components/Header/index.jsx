import color from '../../utils/styles/colors';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    padding: 10px;
    color: #8186a0;
    text-decoration: none;
    font-size: 28px;
    font-family : 'Quicksand', sans-serif, bold;
    color : ${color.background};
`

const StyledNav = styled('nav')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;
`

const HeaderContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    background-color: ${color.primary};


`


function Header(){
    return (
        <HeaderContainer>
            <StyledNav>
                <StyledLink to="portefolio/">Home</StyledLink>
                <StyledLink to="portefolio/about">About</StyledLink>
                <StyledLink to="portefolio/project">Project</StyledLink>
            </StyledNav>
        </HeaderContainer>
    )
}

export default Header 