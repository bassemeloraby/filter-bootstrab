import React from 'react'
import Category from './components/Category'
import Price from './components/Price'
import Colors from './components/Colors'

const Sidebar = ({handleChange}) => {
  return (
    <div style={{backgroundColor:"yellow",width:"20%"}}>
    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar