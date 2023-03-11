import styled, { createGlobalStyle } from 'styled-components';
import { color } from './styles/colors';

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 *:before,
 *:after {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
 
 button{
   cursor: pointer;
 }

 a, a:visited {
   text-decoration: none;
   cursor: pointer;
 }
 
 html, body {
   width: 100%;
   height: 100%;
 }
 
 #root {
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   overflow-y: scroll;
   background-color: ${color.bgPrimary};
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
   justify-content: center;
   background-color: ${color.bgSecondary};
 }
`;

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.bgPrimary};
`;

export default GlobalStyle;
