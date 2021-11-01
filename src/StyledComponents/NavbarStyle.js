import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.div`
background-color: #282C34;
width: 100vw;
font-family: 'Raleway', sans-serif;
display:flex;
justify-content: center;
align-items: center;
padding:10px 0px 20px 0px;
`;

export const SearchBox = styled.div`
display:flex;
flex-direction:row;
width:500px;
`

export const SidebarLink = styled(Link)`
font-size:20px;
font-weight:300;
text-align:center;
height:40px;
line-height:40px;
margin-top:20px;
overflow:hidden;
width:5em;
margin-left:5%;
cursor:pointer;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
transition:all 0.75s;
transform:translateY(100%) translateZ(0);
transition-delay:all 0.25s;
&:hover,
&:active {
  letter-spacing: 5px;
}
&:after,
&:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}
&:hover:after,
&:hover:before{
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

&:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
`;