import React from 'react'
import Content from '../components/Contents/Content'
import Sidebar from '../components/Sidebar/Sidebar'
import Nav from '../components/Nav/Nav'



function MainLayout() {
  return (
    <section id = "main-layout">
        <Nav></Nav>
        <Content></Content>
        <Sidebar></Sidebar>
    </section>
  )
}

export default MainLayout
