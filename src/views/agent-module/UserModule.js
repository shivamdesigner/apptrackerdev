// import { Button } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../navbar/topmenu/Navbar'
import {  Box, InputBase, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Toolbar, Typography, alpha } from '@mui/material';
import styled from '@emotion/styled';
// import Switch from '@mui/material/Switch';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import Loading from '../../layout/Loader/Loading';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const StyledTable = styled(Table)(() => ({
  overflowX: 'auto',
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 10, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0 } }
  }
}));
const rows = [
  {
    "id": 1,
    "No": 1516546,
    "Name": "Stacia Taree",
    "Mobile": "9725262848",
    "Email": "staree0@feedburner.com",
  },
  {
    "id": 2,
    "No": 2235467,
    "Name": "Vina Wigglesworth",
    "Mobile": "91424671328",
    "Email": "vwigglesworth1@craigslist.org",
  }, {
    "id": 3,
    "No": 37546318,
    "Name": "Marysa Tudgay",
    "Mobile": "9933267246",
    "Email": "mtudgay2@shinystat.com",
  }, {
    "id": 4,
    "No": 4235495,
    "Name": "Correy Androletti",
    "Mobile": "9335487847",
    "Email": "candroletti3@infoseek.co.jp",
  }, {
    "id": 5,
    "No": 52346574,
    "Name": "Brittne Bloy",
    "Mobile": "8537487845",
    "Email": "bbloy4@last.fm",
  }, {
    "id": 6,
    "No": 6235642,
    "Name": "Daniel Maylard",
    "Mobile": "9235559945",
    "Email": "dmaylard5@ifeng.com",
  }, {
    "id": 7,
    "No": 7234123,
    "Name": "Joyous Shoard",
    "Mobile": "9235467845",
    "Email": "jshoard6@dot.gov",
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
  const handleBlockedToggle = (id) => {
    setRowBlockedStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      marginLeft: "auto",
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  console.log(loading)
  console.log(rows)
  return (
    <>
      <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh" , overflowX:"auto" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10, marginInline: 4, background: "#ffffff", height: "100%", borderRadius: 5 }}>
          {loading ? (
            <Loading />
            ) : (
            <Box className="plan" sx={{ overflowX: 'auto', }}>
              <Typography component="div" sx={{ display: 'flex', justifyContent: "end" }}>
                <Toolbar>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Toolbar>
              </Typography>


              <StyledTable>

                <TableHead>
                  <TableRow>
                    <TableCell align="center">Agent Id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Mobile</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Blocked</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ padding: '20px' }}>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow
                      key={row.id}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.No}
                      </TableCell>
                      <TableCell align="center">{row.Name}</TableCell>
                      <TableCell align="center">{row.Mobile}</TableCell>
                      <TableCell align="center">{row.Email}</TableCell>
                      <TableCell align="center">
                        <Switch {...label} checked={rowBlockedStatus[row.id]} onChange={() => handleBlockedToggle(row.id)} />
                      </TableCell>
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
          )}

        </Box>
      </Box>
    </>
  )
}

export default UserModule
