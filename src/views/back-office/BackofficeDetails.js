import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../navbar/topmenu/Navbar";
import Loading from "../../layout/Loader/Loading";
import { Link } from "react-router-dom";
import { CustomTextField } from "../../layout/TextFild";
import { useState } from "react";
const BackofficeDetails = ({ loading }) => {
  const [openDialogbox, setOpenDialogbox] = useState(false);
  const handleCloseDialogbox = () => {
    setOpenDialogbox(false);
  };
  const handleClickOpenDialogbox = () => {
    setOpenDialogbox(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        background: "#eef2f6",
        minHeight: "100vh",
        overflowX: "auto",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%" }}
      >
        {loading ? (
          <Loading />
        ) : (
          <Box
            sx={{
              overflowX: "auto",
              background: "#ffffff",
              p: 3,
              borderRadius: 5,
              marginInline: 4,
              my: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: "10px",
              }}
            >
              <Typography variant="h5">Users Details</Typography>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClickOpenDialogbox}
                >
                  Delete
                </Button>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <FormControl fullWidth className="user-from-section">
                <Grid
                  container
                  direction={{ xs: "column", md: "row" }}
                  columnSpacing={5}
                  rowSpacing={3}
                >
                  <Grid component="form" item xs={4}>
                    <label htmlFor="idno" className="text-label">
                      ID No
                    </label>
                    <CustomTextField
                      type="text"
                      id="idno"
                      value="CF1648T3"
                      fullWidth
                    />
                  </Grid>
                  <Grid component="form" item xs={4}>
                    <label htmlFor="name" className="text-label">
                      Name
                    </label>
                    <CustomTextField
                      type="text"
                      id="name"
                      value="Sattar Patel"
                      fullWidth
                    />
                  </Grid>
                  <Grid component="form" item xs={4}>
                    <label htmlFor="Mobile" className="text-label">
                      Mobile
                    </label>
                    <CustomTextField
                      InputLabelProps={{ shrink: true }}
                      type="number"
                      value="97782628328"
                      id="Mobile"
                      fullWidth
                      tel="true"
                    />
                  </Grid>
                  <Grid component="form" item xs={4}>
                    <label htmlFor="Email" className="text-label">
                      Email
                    </label>
                    <CustomTextField
                      type="email"
                      id="Email"
                      value="sattatp0@gmail.com"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} display="flex" justifyContent="end">
                    <Button variant="contained" type="submit" sx={{ mr: 2 }}>
                      save
                    </Button>
                    <Button variant="outlined" component={Link} to="/backoffice">
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </FormControl>
            </Box>
            <Dialog
              open={openDialogbox}
              onClose={handleCloseDialogbox}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure want to delete user details?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialogbox}>No</Button>
                <Button to="/backoffice" component={Link} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BackofficeDetails;
