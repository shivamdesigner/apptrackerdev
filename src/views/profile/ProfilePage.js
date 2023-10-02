import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [showConPassword, setShowConPassword] = useState(false);
  const [Conpassword, setConPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConPassword = () => {
    setShowConPassword(!showConPassword);
  };
  const handleMouseDownConPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", borderRadius: 5 , overflowX:"auto"}}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10, marginInline: 4, borderRadius: 5, background: "#ffffff", height: "100%" }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>

              <Grid item lg={4} md={6} sm={12} xs={12}>

                <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth   >
                  <InputLabel htmlFor="name" >Name</InputLabel>
                  <OutlinedInput
                    placeholder=''
                    id=""
                    label="name"
                  />
                </FormControl>

              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>

                <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-Email" >Email</InputLabel>
                  <OutlinedInput
                    placeholder='Enter your Email'
                    id="outlined-adornment-Email"
                    label="Email"
                    type='email'
                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>

                <FormControl sx={{ mt: 5 }} variant="outlined" fullWidth>
                  <InputLabel htmlFor="mobile-number" >Mobile Number</InputLabel>
                  <OutlinedInput
                    placeholder=''
                    id=""
                    label="mobile-number"
                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>

                <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"

                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
                  <InputLabel htmlFor="confirm-password" > Confirm Password</InputLabel>
                  <OutlinedInput
                    placeholder='Enter your Password'
                    id="outlined-adornment-password"
                    type={showConPassword ? 'text' : 'password'}
                    value={Conpassword}
                    onChange={(e) => setConPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end" >
                        <IconButton

                          aria-label="toggle password visibility"
                          onClick={handleClickShowConPassword}
                          onMouseDown={handleMouseDownConPassword}
                          edge="end"
                        >
                          {showConPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="confirm-Password"

                  />
                </FormControl>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography sx={{ mt: 3, width: "150px", marginInline: "auto" }} >
                  <Button variant="contained" fullWidth to="/user-details" >Save</Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProfilePage
