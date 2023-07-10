import React from 'react';
import {NavigationLinks, SocialMedia} from '../components';

const AppWrap = (Component,idName,classNames) => function HOC(){
  return (
    <div id={idName} className='app__cointainer'>
        <div className='app__flex'>
            {(idName==='home')?"":<SocialMedia/>}
            <div className='app__wrapper'>
                <Component/>
                {(idName==='footer')? <div className='copy_right'>
                    <p className='p-text'>@2023 SRAVYA</p>
                    <p className='p-text'>All rights reserved</p>
                </div>:""}
               
            </div>
            <NavigationLinks active={idName}/>
        </div>
        
        </div>
  )
}

export default AppWrap