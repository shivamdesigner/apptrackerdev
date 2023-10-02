
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/login-page/Login';
import ForgotPassword from './views/login-page/ForgotPassword';
import UserList from './views/user-details/UserList';
import UserModule from './views/agent-module/UserModule';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import Navbar from './views/navbar/topmenu/Navbar';
import ProfilePage from './views/profile/ProfilePage';
import Error from './views/error/Error';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1173FF',
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
            {/* <Route path="/user-list" element={<UserList/>}/> */}
            {/* <Route 
            path="/agent-module"
             element={
             <UserModule  
              // loading={true | false }
               />
              } 
            /> */}
            {/* <Route path="/profile" element={<ProfilePage/>} /> */}
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
