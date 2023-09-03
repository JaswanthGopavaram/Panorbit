import users from "../UsersList"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


function Post() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    return (
        <div>
            <div className='navigation'>
                <nav>
                    <ul>
                        <li className='list-active'>
                            <h4 onClick={() => navigate("/profilepage")}>Profile</h4>
                            <hr />
                        </li>
                        <li className='list-active'>
                            <h4 className='profileactive'>Post</h4>
                            <hr />
                        </li>
                        <li className='list-active'>
                            <h4 onClick={() => navigate("/gallery")}>Gallery</h4>
                            <hr />
                        </li>
                        <li className='list-active'>
                            <h4 onClick={() => navigate("/profilepage/todo")}>ToDo</h4>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="topbar">
                <h4>Post</h4>
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
            <h2 className="cominglabel">Coming Soon</h2>



        </div>

    )
}

export default Post