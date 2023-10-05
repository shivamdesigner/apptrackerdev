import { Box, Button, Divider, FormControl, Grid,  Typography } from '@mui/material'
import Navbar from '../navbar/topmenu/Navbar'
import Loading from '../../layout/Loader/Loading'
import { Link } from 'react-router-dom';
import { CustomTextField } from '../../layout/TextFild';
const AddBackofficeuser = ({loading}) => {
  return (
    <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", overflowX: "auto" }}>
    <Navbar />
    <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
        {loading ? (
            <Loading />
        ) : (
            <Box sx={{ overflowX: 'auto', background: "#ffffff", p: 3, borderRadius: 5, marginInline: 4, my: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" , py:"10px" }}>
                    <Typography variant='h5'>Add Users</Typography>
                </Box>
                 <Divider />
                 <Box sx={{mt:2}}>
                <FormControl fullWidth className='user-from-section'>
                    <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                        <Grid component="form" item xs={4}>
                            <label htmlFor="idno" className='text-label'>ID No</label>
                            <CustomTextField type="text" id="idno"  fullWidth  />
                        </Grid>
                        <Grid component="form" item xs={4}>
                                    <label htmlFor="name" className='text-label'>Name</label>
                                    <CustomTextField type="text" id="name"  fullWidth  />
                        </Grid>
                        <Grid component="form" item xs={4}>
                            <label htmlFor="Mobile" className='text-label'>Mobile</label>
                            <CustomTextField InputLabelProps={{ shrink: true }} type="number" id="Mobile" fullWidth tel="true" />
                        </Grid>
                        <Grid component="form" item xs={4}>
                            <label htmlFor="Email" className='text-label'>Email</label>
                            <CustomTextField type="email" id="Email" fullWidth />
                        </Grid>
                            <Grid item lg={12} display="flex" justifyContent="end" >
                                <Button variant='contained' type='submit' sx={{mr:2}}>save</Button>
                                <Button variant='outlined' component={Link} to="/backoffice" >Cancel</Button>
                            </Grid>
                    </Grid>
                </FormControl>
            </Box>
            </Box>
        )}
    </Box>
</Box>
  )
}

export default AddBackofficeuser
