
import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import {  Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import Loading from '../../layout/Loader/Loading';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { Link } from 'react-router-dom';


function getRoleBackgroundColor(role) {
  switch (role) {
    case 'Back office':
      return '#b9e6ad8c';
    case 'Manpower Company':
      return '#d0e6ffb3';
    case 'Recruiter':
      return '#d180f054';
    default:
      return 'inherit'; 
  }
}

const StyledTable = styled(Table)(() => ({
  overflowX: 'auto',
  whiteSpace: 'pre',
    
  '& thead': {
    '& tr': { '& th': { paddingLeft: 10, paddingRight: 0, fontWeight:600 } }
  },
  '& tbody': {
    '& tr': { '& td': { } }
  }
}));
const rows = [
  {
    id: 1,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Back office",

  },
  {
    id: 2,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Manpower Company",
  }, {
    id: 3,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Recruiter",
  }, {
    id: 4,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Back office",
  }, {
    id: 5,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Manpower Company",
  }, {
    id: 6,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Recruiter",
  }, {
    id: 7,
    Name: "Stacia Taree",
    CompanyName:"xyz",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
    Location:"gujarat",
    Role:"Manpower Company",
  },];
const UserModule = ({ loading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowBlockedStatus, setRowBlockedStatus] = useState({}); // State to track Blocked status

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  console.log(loading)
  console.log(rows)
  return (
    <>
      <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh" , overflowX:"auto" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
          {loading ? (
            <Loading />
            ) : (
            <Box sx={{ overflowX: 'auto', background: "#ffffff", p: 3, borderRadius: 5, marginInline: 4, my: 2 }}>
                <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , py:"10px"}}>
                  <Typography variant='h5'>Users</Typography>
                  <Link to="/adduser"><Button variant="contained" to="/adduser" > <AddIcon/> add</Button> </Link> 
                </Box>
                <Divider />
                <Box sx={{mt:2}}>
              <StyledTable>

                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Company</TableCell>
                    <TableCell align="center">Mobile</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Role</TableCell>
                    <TableCell align="center">Action</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody style={{ padding: '20px' }}>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow
                      key={row.id}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    
                    >
                      <TableCell align="center">{row.Name}</TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {row.CompanyName}
                      </TableCell>
                      <TableCell align="center">+40 {row.Mobile}</TableCell>
                      <TableCell align="center">{row.Email}</TableCell>
                      <TableCell align="center">{row.Location}</TableCell>
                      <TableCell align="center" >
                        <Box 
                          style={{ backgroundColor: getRoleBackgroundColor(row.Role) ,
                            padding:"5px 10px" , 
                            width:"min(100% - 0px , 80%)" ,
                            marginInline:"auto" , 
                            borderRadius:"7px",
                            }}>
                              {row.Role}
                          </Box>
                      </TableCell>
                      <TableCell align="center"> <Link to="/userdetails"><RemoveRedEyeOutlinedIcon color='primary'/></Link></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>

              <TablePagination
                sx={{ px: 2 }}
                component="div"
                className="page"
                page={page}
                rowsPerPage={rowsPerPage}
                count={rows.length}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              />
              </Box>
            </Box>
          )}

        </Box>
      </Box>
    </>
  )
}

export default UserModule
