import React from 'react'
import {BiLogoLinkedin} from 'react-icons/bi';
import {TbBrandGithubFilled} from 'react-icons/tb';
import {SiLeetcode} from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BiLogoLinkedin/>
        </div>
        <div>
            <TbBrandGithubFilled/>
        </div>
        <div>
            <SiLeetcode/>
        </div>
    </div>
  )
}

export default SocialMedia