import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Outlet} from 'react-router-dom';
import ClickSpark from './ui/ClickSpark.jsx'

function Layout() {
  return (
    <div>
      <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={45} sparkCount={8} duration={400}>
        <Header/>
        <Outlet/>
        <Footer/>
      </ClickSpark>
    </div>
  )
}

export default Layout