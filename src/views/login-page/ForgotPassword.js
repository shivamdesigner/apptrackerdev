import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import bg from "../../imgs/login bg/bg.jpg";
import logo from '../../imgs/logo/logo.svg'; // Make sure to provide the correct path to your logo image
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';



const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Typography sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',background: ` url(${bg}) ` , backgroundSize:"cover"  }} component='div'>
            <Card sx={{ maxWidth: 300, marginInline: 'auto',  padding: 3, boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <Box
                    component="div"
                    sx={{  width: '80px', height: '80px', marginInline: 'auto' }}
                >
                    <img src={logo} alt="Logo" width="100%" height="100%" />
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <Typography component="div" sx={{mt:2 , textAlign:'center'}} fullWidth >
                    Enter your Email Address
                </Typography>
                    <FormControl sx={{ mt: 3, minWidth:"300px" }} variant="outlined" fullWidth >
                        <InputLabel htmlFor="outlined-adornment-Email" >Email</InputLabel>
                        <OutlinedInput
                            placeholder='Enter your Email'
                            id="outlined-adornment-Email"
                            label="Email"
                        />
                    </FormControl>

                    <Typography sx={{ mt: 2,textAlign:"center" }} fullWidth>
                        <Button variant="contained"   type='submit'>Submit</Button>
                    </Typography>
                </Box>
            </Card>
        </Typography>
    );
}

export default ForgotPassword;
