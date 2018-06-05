import React from "react"
import styled from "styled-components"


const Footer = props => {
  return (
    <styledFooter>
      <p>Copyright 2018</p>
    </styledFooter>
  )
}

export default Footer;

const styledFooter = styled.div`
.styledFooter {
  color: white;
  position: fixed;
  bottom: 0;
  padding: 5px;
  }`
