import color from '../../utils/styles/colors';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
    padding: 10px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    font : 400 18px/1.5 'Roboto', sans-serif;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${color.primary};`}
`

const StyledNav = styled('nav')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${color.primary};
    color: white;
`

const HeaderContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    background-color: white;


`


function Header(){
    return (
        <HeaderContainer>
            <StyledNav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </StyledNav>
        </HeaderContainer>
    )
}

export default Header 