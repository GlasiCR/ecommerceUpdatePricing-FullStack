import styled from "styled-components";
import { color } from "../../theme/constants"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.primary};
    padding: 60px;
    margin-bottom: 30px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: transparent;
`

export const TitleHeader = styled.h2`
    color: white;
`
export const Logo = styled.div`
    border-radius: 50px;
    background-color: ${color.primary};
    border: none;
    width: 25px;
    height: 25px;

`