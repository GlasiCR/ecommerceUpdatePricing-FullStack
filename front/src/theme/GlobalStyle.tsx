import { createGlobalStyle } from 'styled-components'
import {color } from './constants'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body{
    background-color: ${color.bgPage};
  }
`