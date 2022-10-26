import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function View(props) {

    const {id} = useParams();
    const [user,setUser] = useState({
        fname:"",
        lname:"",
        email:""
    });
    const loadUser = async (e)=>{
        const result = await axios.get(`http://localhost:8080/getuser/${id}`);
        setUser(result.data);
    }

    useEffect(()=>{
        loadUser().then(r => {
            console.log(r);
        });
    },[])
    const{fname,lname,email}=user;

    return (
        <div className="Container mt-3">
            <div className="Row">
                <div className="col-md-6 offset-md-3 border rounded shadow">
                    <h1 className="text-center mt-3">View User</h1>

                    <div className="card">
                        <div className="card-header">
                                Details of User Id : {id}
                            <ul className="list-group list-group-flush">
                               <li className="list-group-item">
                                  <b>First Name : {fname}</b>
                               </li>
                                <li className="list-group-item">
                                  <b>Last Name : {lname}</b>
                               </li>
                                <li className="list-group-item">
                                  <b>Email : {email}</b>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-secondary bg-dark p-1 m-2" to="/">Back To Home</Link>
                </div>
            </div>
        </div>
    );
}

export default View;