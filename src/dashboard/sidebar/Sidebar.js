import React from 'react'
import Category from './Category'
import Price from './Price'
import Colors from './Colors'

const Sidebar = ({handleChange}) => {
  return (
    <div style={{backgroundColor:""}} className='container col-2'>
    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar