import styled from "styled-components";
import { PropsStyle } from "../../type/StyleType";
import { color } from "../../theme/constants";

export const Button = styled.button<PropsStyle>`
    border-radius: 10px;
    color: white;
    padding: 15px 30px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : color.secondary)};
    border: ${(props) => (props.border ? props.border : "none" )};
    &:hover{
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}
    }
`
