import React from 'react'

const NavigationLinks = ({active}) => {
  return (
    <div className='app__navigation'>
       {['home','about','projects','skills','contact'].map((section,index) => (
        <a 
        href={`#${section}`}
        key={section+index}
        className='app__navigation-dot'
        style={active === section?{backgroundColor:'#313BAC'}:{}}
        ></a>
           
        ))} 
    </div>
  )
}

export default NavigationLinks