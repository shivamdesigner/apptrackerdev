import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Modal, TextField, Typography } from "@mui/material";
import Navbar from "../navbar/topmenu/Navbar";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserCardApi from "../../API/UserCardApi";
import CloseIcon from '@mui/icons-material/Close';
import userlogo from '../../imgs/userlogo.svg'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { theme } from "../../App";
import Loading from "../../layout/Loader/Loading";

const options = [
  'Edit',
  'Delete',
  'Download PDF',
];

const Modelstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
};
const uplodcamerastyle = {
  position: "absolute",
  right: '-8px',
  bottom: '-5px',
  background: '#f9f8f8e8',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};
const ITEM_HEIGHT = 48;
const UserList = ({loading}) => {
  const [UserCardData] = useState(UserCardApi);
  const [userCardData, setUserCardData] = useState(UserCardData);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [Modelopen, ModelsetOpen] = useState(false);
  const handleModelOpen = () => ModelsetOpen(true);
  const handleModelClose = () => ModelsetOpen(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteCard = (index) => {

    const updatedUserCardData = [...userCardData];
    updatedUserCardData.splice(index, 1);
    setUserCardData(updatedUserCardData);
  };

  return (

      <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", borderRadius: 5 }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10, marginInline: 4, borderRadius: 5, background: "#ffffff", height: "100%" }}>
          {loading ? (<Loading/>):(
            <Grid container spacing={2}>
            {UserCardData.map((curElem, index) => {
              const { UserImg, userName, Code, AgName, UDate, UTime } = curElem;
              return (

                <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                  <Card>
                    <Typography sx={{ textAlign: 'right' }} component="div">
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={anchorEl ? 'long-menu' : undefined}
                        aria-expanded={anchorEl ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '15ch',
                            boxShadow: "none ",
                            border: "1px solid #d0d0d08c",
                            left: "230",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === 'Pyxis'}
                            onClick={() => {
                              handleClose();
                              if (option === 'Edit') {
                                handleModelOpen();
                              } else if (option === 'Delete') {
                                handleDeleteCard(index);
                              } else if (option === 'Download PDF') {
                                // Handle download PDF action here
                              }
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Typography>
                    <Box sx={{ marginInline: 'auto', width: 100, height: 100 }}>
                      <CardMedia
                        component="img"
                        alt=""
                        height="100%"
                        width="100%"
                        image={UserImg}
                        sx={{ borderRadius: '50%' }}
                      />

                    </Box>

                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{ mb: 0 }}>
                        {userName}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0 }} color="text.secondary">
                        {Code}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}
                      >
                        <Typography sx={{ fontSize: "14px" }}><span> {UDate}</span></Typography>
                        <Typography sx={{ fontSize: "14px", ml: 1 }}><span> {UTime}</span></Typography>
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1, display: "flex", alignItems: "center", justifyContent: "center" }} color="text.secondary">
                        {/* <PersonOutlineOutlinedIcon sx={{color:"#1173FF"}} /> */}
                        <Typography src={userlogo} alt="" width={15} component="img" sx={{ mr: 1 }} />
                        {AgName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            }
            )}
          </Grid>
          )}


          <Modal
            open={Modelopen}
            onClose={handleModelClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={Modelstyle}>
              <Card sx={{ p: 2 }}>
                <Typography sx={{ textAlign: 'right' }} component="div">
                  <CloseIcon onClick={handleModelClose} />
                </Typography>
                <Box sx={{ marginInline: 'auto', width: 100, height: 100, position: "relative" }}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="100%"
                    width="100%"
                    image="https://avatars.mds.yandex.net/i?id=cff5f3ad103a44cdc976fe0ebf643b3bfc218e4f-9214194-images-thumbs&n=13"
                    sx={{ borderRadius: '50%' }}
                  />
                  <Typography sx={uplodcamerastyle}>
                    <CameraAltIcon sx={{ color: theme.palette.primary.main }} />
                  </Typography>
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="body2" component="div" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                    {/* {userName} */}

                    <b style={{ width: "100px" }}>Name:</b>  <TextField id="outlined-basic" value="Nirav patel" />
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, display: "flex", alignItems: "center" }} color="text.secondary">
                    <b style={{ width: "100px" }}>Code:</b>  <TextField id="outlined-basic" value="4465413464" />
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, display: "flex", alignItems: "center" }} color="text.secondary">
                    <b style={{ width: "100px" }}> Agent Name:</b> <TextField id="outlined-basic" value=" Shivam Patel" />
                  </Typography>
                </CardContent>
                <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button sx={{ width: "130px" }} variant="outlined" onClick={handleModelClose}>Cancel</Button>

                  <Button sx={{ width: "130px" }} variant="contained">Save</Button>
                </Typography>
              </Card>
            </Box>
          </Modal>
        </Box>
      </Box>

  );
}

export default UserList

