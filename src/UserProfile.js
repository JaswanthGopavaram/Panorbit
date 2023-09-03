import 'bootstrap/dist/css/bootstrap.css';
import React, { useState} from 'react'
import users from "./UsersList";
import { useNavigate } from 'react-router-dom';
import Map from "./Map.jpeg"


function UserProfile() {
  // console.log(users)
  const [open, setOpen] = useState(false)
  let navigate=useNavigate()

  return (


    <div>
      <div className='topbar'>
        <h4>Profile</h4>
        <div className="navprofile">
          <div className="profile-image">
            <img onClick={() => setOpen(!open)} src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 onClick={() => setOpen(!open)} >{users[0].name}</h2>
          </div>
        </div>
      </div>
      {open &&(
                <div className="dropdown">
                    <ul>
                        <li className="signoutname">{users[0].name}</li>
                        <li className="signoutemail">{users[0].email}</li>
                        <button className="signoutbutton" onClick={()=>navigate('/')}>Signout</button>
                    </ul>
                </div>
            
            )
}
      <hr className='profileline' />
      <div className='profiledata'>

        <div className='firstside'>
          <img src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg' alt='profile' className='profile' />
          <h4 className='profileusername'>{users[0].name}</h4>
          <ul className='info-list'>
          <li><b>Username</b> {users && users[0].username}</li>
          <li><b>email </b>{users && users[0].email}</li>
          <li><b>phone </b>{users && users[0].phone}</li>
          <li><b>Website </b>{users && users[0].website}</li>
          </ul>
          <hr className='line' />
          <h4  className='profileusername'>Company</h4>
          <ul className='info-list'>
          <li><b>Name </b> {users && users[0].company.name}</li>
          <li><b>Catchphrase </b>{users && users[0].company.catchPhrase}</li>
          <li><b>bs </b> {users && users[0].company.bs}</li>
          </ul>
        </div>
        <div className='vl'></div>
        <div className='addressbox'>
          <h4 className='profileusername'>Address</h4>
          <ul className='info-list'>
          <li><b>Street </b> {users && users[0].address.street}</li>
          <li><b>Suite </b> {users && users[0].address.suite}</li>
          <li><b>city </b>{users && users[0].address.city}</li>
          <li><b>Zipcode </b>{users && users[0].address.zipcode}</li>
          </ul>
          <img src={Map} alt='map' className='Mapimage' />
          <div className='map'>
            <p className='lat'>Lat : {users && users[0].address.geo.lat}</p>
            <p className='lon'>Long : {users && users[0].address.geo.lng}</p>
          </div>
        </div>

      </div>

    </div>
   
  );
}

export default UserProfile;
