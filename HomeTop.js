import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function HomeTop(props) {

    const [user,setUser] = useState([]);
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=()=>{
        axios.get("http://localhost:8080/getuser").then((res)=>{
            const data = res.data;
            setUser(data);
        });
    }

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/getuser/${id}`);
        loadUser();
    }

    return (
        <div className="mt-3">
            <table className="table table-dark border">
                <thead>
                <tr>
                    <th scope="col">SI NO :</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((us,ind)=>
                        <tr key={ind}>
                            <th>{ind=ind+1}</th>
                            <td>{us.fname}</td>
                            <td>{us.lname}</td>
                            <td>{us.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2 px-4" to={`/view/${us.id}`}>View</Link>
                                <Link className="btn btn-secondary mx-2" to={`/edit/${us.id}`}>Update</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteUser(us.id)}>Delete</button>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
}
export default HomeTop;