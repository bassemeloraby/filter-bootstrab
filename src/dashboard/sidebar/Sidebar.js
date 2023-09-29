import React from 'react'
import Category from './Category'
import Price from './Price'
import Colors from './Colors'

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