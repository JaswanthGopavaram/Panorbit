import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./index.css"
import users from "./UsersList";

function Login() {
    let navigate = useNavigate();


    const handlechange = () => {
        navigate("/profilepage")

    }
    useEffect(() => {
        window.alert("click on first user")
    })



    return (
        
            <div className="mainbox" >
                <div className="container">
                    <div className="hstyle">
                        <h4 className="heading">Select an account</h4>
                    </div>
                  
                    <div className="displayuser">
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2 onClick={handlechange} >{users[0].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[1].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[2].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[0].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[3].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[0].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[1].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[0].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>
                        <div className="profile-container">
                            <div className="profile-image">
                                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{users[0].name}</h2>

                            </div>
                        </div>
                        <hr className="loginline"/>

                    </div>

                </div>

            </div>




        
    )
}
//    



export default Login;


