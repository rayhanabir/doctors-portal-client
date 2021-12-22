import React,{useState} from 'react';
import { Alert} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email}
        e.preventDefault()
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'

            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
            }
        })
    }
    return (
        <div>
            <h2>make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} style={{width:'50%', padding:"6px"}} type="text" placeholder='email'/>
                <br />
                <button>Make Admin</button>
            </form>
            {success && <Alert severity="success">Made Admin Succesfully</Alert>}
        </div>
    );
};

export default MakeAdmin;