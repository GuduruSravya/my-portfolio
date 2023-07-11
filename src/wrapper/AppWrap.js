import React from 'react';
import {NavigationLinks, SocialMedia} from '../components';

const AppWrap = (Component,idName,classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        {(idName==='home')?"":<SocialMedia/>}
            <div className='app__wrapper app__flex'>
                <Component/>
                {(idName==='contact')? <div className='copy_right'>
                    <p className='p-text'>@2023 SRAVYA</p>
                    <p className='p-text'>All rights reserved</p>
                </div>:""}
               
            </div>
            <NavigationLinks active={idName}/>
        </div>
  )
}

export default AppWrap