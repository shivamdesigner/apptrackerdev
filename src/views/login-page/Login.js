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
import bg1 from "../../imgs/login bg/bg1.jpg";
import bg2 from "../../imgs/login bg/bg2.jpg";
import logo from '../../imgs/logo/logo.svg'; 
import { Link, Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { History } from '@mui/icons-material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({
    //     email: '',
    //     password: '',
    //   });
    // const handleClickShowPassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Replace with your authentication logic
        const validEmail = 'test123@gmail.com';
        const validPassword = '123456';

        if (email === validEmail && password === validPassword) {
            // Successful login logic
            console.log('Logged in successfully');
        } else {
            setErrors({
                email: 'Invalid email or password',
                password: 'Invalid email or password',
            });
        }
    };


    return (
        <Typography sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: ` url(${bg}) ` , backgroundSize:"cover" }} component='div'>
            <Card sx={{ maxWidth: 350, marginInline: 'auto', padding: 3, boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
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

                    <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-Email"  >Email</InputLabel>
                        <OutlinedInput

                            placeholder='Enter your Email'
                            id="outlined-adornment-Email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email !== ''}
                        />
                        {errors.email && <Typography variant="caption" color="error">{errors.email}</Typography>}
                    </FormControl>
                    <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                        <OutlinedInput
                            placeholder='Enter your Password'
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ?  <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            error={errors.password !== ''}
                        />
                        {errors.password && <Typography variant="caption" color="error">{errors.password}</Typography>}
                    </FormControl>

                    <Typography
                        style={{ textAlign: 'end', marginTop: '15px', display: 'block' }}
                        color="primary"
                        to="/forgot-password"
                        component={RouterLink}
                    >
                        Forgot Password?
                    </Typography>

                    <Typography sx={{ mt: 3,textAlign:"center" }} component="div">
                        <Button variant="contained"  to="/user" component={Link}  >Sign in</Button>
                    </Typography>
                </Box>
            </Card>
        </Typography>
    );
}

export default Login
