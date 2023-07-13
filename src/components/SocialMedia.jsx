import React from 'react'
import {BiLogoLinkedin} from 'react-icons/bi';
import {TbBrandGithubFilled} from 'react-icons/tb';
import {SiLeetcode} from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/sravya-guduru/" target='_blank' rel="noreferrer">
        <div>
          <BiLogoLinkedin/>
        </div>
      </a>
      <a href="https://github.com/GuduruSravya" target='_blank' rel="noreferrer">  
        <div>
           <TbBrandGithubFilled/>
        </div>
      </a>
      <a href="https://leetcode.com/Sravya_guduru/" target='_blank' rel="noreferrer">
        <div>
            <SiLeetcode/>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia