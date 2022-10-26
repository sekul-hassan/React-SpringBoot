import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";




function Add(props) {

    const navigate = useNavigate();
    const [user,setUser] = useState({
        fname:"",
        lname:"",
        email:""
    });
    const getValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
    }

    const submitHandle = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }

    return (
        <div className="Container mt-3">
            <div className="Row">
                <div className="col-md-6 offset-md-3 border rounded shadow">
                    <h1 className="text-center mt-3">Register Now</h1>
                    <form className="p-4 m-4">
                        <label htmlFor="text" className="form-label">First Name</label>
                        <input type="text" className="form-control" onChange={(e)=>getValue(e)} name="fname"/>
                        <label htmlFor="text" className="form-label">Last Name</label>
                        <input type="text" name="lname" className="form-control" onChange={(e)=>getValue(e)}/>
                        <label htmlFor="text" className="form-label">E-mail</label>
                        <input type="text" name="email" className="form-control" onChange={(e)=>getValue(e)}/>
                        <Link type="submit" onClick={(e)=>submitHandle(e)} className="btn btn-outline-success m-3">Submit</Link>
                        <Link className="btn btn-outline-success m-3" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;