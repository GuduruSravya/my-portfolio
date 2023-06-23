import './profilepic.css'
import profile from '../assets/profile.png'

const ProfilePic = () =>{
    return(
        <section className="profile-picture-container">
          <img src={profile} className='profile-picture'/>
        </section>
        
    );
}

export default ProfilePic;