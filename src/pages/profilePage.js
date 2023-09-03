import React from 'react'
import { useNavigate} from 'react-router-dom'
import "./profilePage.css"; // Import your CSS file for styling
import UserProfile from '../UserProfile';

function ProfilePage() {
  const navigate=useNavigate();


  return (
    <div className='body'>
      <div className='navigation'>
        <nav>
        <ul>
          <li className='list-active'>
        <h4 className='profileactive'>Profile</h4>
        <hr />
          </li>
          <li className='list-active'>
          <h4 onClick={()=>navigate("/profilepage/post")}>Post</h4>
          <hr />
          </li>
          <li className='list-active'>
          <h4 onClick={()=>navigate("/gallery")}>Gallery</h4>
          <hr />
          </li>
          <li className='list-active'>
          <h4 onClick={()=>navigate("/profilepage/todo")}>ToDo</h4>
          </li>
        </ul>
        </nav>
      </div>
      <UserProfile />
    </div>
  )
}
export default ProfilePage