import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Header from '../header'
import Footer from '../footer'
import '../../../../node_modules/hover.css/scss/hover.scss'
import './layout.scss'

const Layout = (props) => {
  // const pathname = window.location.pathname
  // let jsxDynamicContent = ''
  // if('/' === pathname){
  //   jsxDynamicContent = <div>{props.children}</div>
  // }else {
  //   jsxDynamicContent = 
  //     <div className="content-wrapper">
  //       {props.children}
  //     </div>
  // }
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <div className="content-wrapper">
          {props.children}
        </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;

