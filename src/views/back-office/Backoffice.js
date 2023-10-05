
import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import {  Box, Button, Divider, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography, } from '@mui/material';
import styled from '@emotion/styled';
import Loading from '../../layout/Loader/Loading';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { Link } from 'react-router-dom';




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
    IdNo: "AF1248T2",
    Name:"Stacia Taree",
    Mobile: "9725262848",
    Email: "ste0@fe.com",
  },
  {
    id: 2,
    IdNo: "CF1648T3",
    Name:"Sattar Patel",
    Mobile: "97782628328",
    Email: "sattatp0@gmail.com",
  }, {
    id: 3,
    IdNo: "AN5224P5",
    Name:"Roma Taree",
    Mobile: "9725252848",
    Email: "roma@yayoo.com",
  }, {
    id: 4,
    IdNo: "MF1242R3",
    Name:"Mical Taree",
    Mobile: "9725262821",
    Email: "mical@gmail.com",
  }, {
    id: 5,
    IdNo: "AF1248T2",
    Name:"Vihan Patel",
    Mobile: "9228240842",
    Email: "vihanp101@fe.com",
  },];
const Backoffice = ({loading}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
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
                    <Typography variant='h5'>Back office</Typography>
                    <Button variant="contained" to="/addbackofficeuser" component={Link} > <AddIcon/> add</Button> 
                  </Box>
                  <Divider />
                  <Box sx={{mt:2}}>
                <StyledTable>
  
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Phone</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ padding: '20px' }}>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow
                        key={row.id}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      
                      >
                        <TableCell align="center">{row.IdNo}</TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.Name}
                        </TableCell>
                        <TableCell align="center">+40 {row.Mobile}</TableCell>
                        <TableCell align="center">{row.Email}</TableCell>
                        <TableCell align="center"> <Link to="/backofficedetails"><RemoveRedEyeOutlinedIcon color='primary'/></Link></TableCell>
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

export default Backoffice
