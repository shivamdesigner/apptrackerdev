
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/login-page/Login';
import ForgotPassword from './views/login-page/ForgotPassword';
import OTP from './views/login-page/OTP';
import UserModule from './views/user/UserModule';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import Navbar from './views/navbar/topmenu/Navbar';
import ProfilePage from './views/profile/ProfilePage';
import Error from './views/error/Error';
import Adduser from './views/user/Adduser';
import UserDetails from './views/user/UserDetails';
import CandidateModule from './views/Candidate/CandidateModule';
import AddCandidate from './views/Candidate/AddCandidate';
import CandidateDetails from './views/Candidate/CandidateDetails';
import Backoffice from './views/back-office/Backoffice';
import AddBackofficeuser from './views/back-office/AddBackofficeuser';
import BackofficeDetails from './views/back-office/BackofficeDetails';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2f4c73',
      danger:"red[800]"
    },
    secondary: {
      main: '#117300', 
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/otp" element={<OTP/>} />
            <Route 
            path="/user"
             element={
             <UserModule  
              // loading={true | false }
               />
              } 
            />
             <Route path="/adduser" element={<Adduser/>}/>
             <Route path="/userdetails" element={<UserDetails/>}/>
             <Route path="/candidates" element={<CandidateModule/>}/>
             <Route path="/addcandidates" element={<AddCandidate/>}/>
             <Route path="/candidatesdetails" element={<CandidateDetails/>}/>
             <Route path="/backoffice" element={<Backoffice/>}/>
             <Route path="/addbackofficeuser" element={<AddBackofficeuser/>}/>
             <Route path="/backofficedetails" element={<BackofficeDetails/>}/>
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
