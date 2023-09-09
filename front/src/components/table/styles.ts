import styled from "styled-components";
import {color} from "../../theme/constants"

export const ContainerTable = styled.table`
    border-radius: 10px;
    box-shadow: rgba (0, 0, 0, 0.25) 0px 10px 18px;
    margin: 0 auto;
    width: 65%;
    height: auto;
    border-collapse: collapse;
    position: relative;
    overflow: hidden;

`
export const Thead = styled.thead`
    background-color: ${color.secondary};   
    th{    
            color: white;
            font-size: 14px;
            letter-spacing: 0.2px;
            text-align: center;
            padding: 10px;
            border: 2px solid transparent;            
        }
`
export const Tbody = styled.tbody`
    background-color: white;
    
    td{
        color: ${color.primary};
        text-align: center;
        padding: 8px;
    }
      
`