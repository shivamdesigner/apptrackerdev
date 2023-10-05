import { Box, Button, Card, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Tab, Tabs, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import Loading from '../../layout/Loader/Loading'
import Navbar from '../navbar/topmenu/Navbar'
import styled from 'styled-components';
import BusinessIcon from '@mui/icons-material/Business';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WorkPermit from '../../imgs/icon/workpermit.svg';
import WorkVisa from '../../imgs/icon/workvisa.svg';
import ResidenceCard from '../../imgs/icon/residencecard.svg';
const Nationality = [
    {
        value: 'Romania',
        label: 'Romania',
    },
    {
        value: 'Bulgaria',
        label: 'Bulgaria',
    },
    {
        value: 'India',
        label: 'India',
    },
    {
        value: 'Hungary',
        label: 'Hungary',
    },
    {
        value: 'Moldova',
        label: 'Moldova',
    },
    {
        value: 'Serbia',
        label: 'Serbia',
    },
    {
        value: 'Ukraine',
        label: 'Ukraine',
    },
    {
        value: 'United States',
        label: 'United States',
    },

];
const status = [
    {
        value: 'Pending',
        label: 'Pending',
    },
    {
        value: 'Approved',
        label: 'Approved',
    },
    {
        value: 'In-progress',
        label: 'In-progress',
    },
];
const Education = [
    {
        value: 'Under Graduate',
        label: 'Under Graduate',
    },
    {
        value: 'Graduate',
        label: 'Graduate',
    },
    {
        value: 'Post Graduate',
        label: 'Post Graduate',
    },
    {
        value: 'Professional',
        label: 'Professional',
    },
]
const Customtextarea = styled(TextareaAutosize)`
    padding:10px;
    background-color: #f0f0f082;
    font-size: 18px;
    width:100%;
    height:10px;
    borderRadius:7px;
    &:focus {
    outline: 1px solid #1173FF;
  }
`
const CustomTextField = styled(TextField)`
  padding:0;
  background-color: #f0f0f082;
  font-size: 16px;
  input {
    borderRadius:7px;
    padding:9.5px 14px;
  }
  .css-18iclro-MuiInputBase-root-MuiOutlinedInput-root{
    height:30px;
  } 
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding:9.5px 14px;
  }
  textarea{
    width:100%;
    height:10px;
    borderRadius:7px;
    padding:9.5px 14px;
  }
  select {
    borderRadius: 7px;
    border:1px solid red;
    padding:9.5px 14px;
  }
`;
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const CandidateDetails = ({ loading }) => {

    const [value, setValue] =useState(0);
    const [openDialogbox, setOpenDialogbox] = useState(false);
    const handleCloseDialogbox = () => {
      setOpenDialogbox(false);
    };
    const handleClickOpenDialogbox = () => {
        setOpenDialogbox(true);
      };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [selectedRoles, setSelectedRoles] = useState("");

    const handleRoleClick = (role) => {
        // Toggle the selection of the role
        setSelectedRoles((prevSelectedRoles) => {
            if (prevSelectedRoles.includes(role)) {
                return prevSelectedRoles.filter((selectedRole) => selectedRole !== role);
            } else {
                return [...prevSelectedRoles, role];
            }
        });
    };
    return (
        <Box sx={{ display: "flex", background: "#eef2f6", minHeight: "100vh", overflowX: "auto" }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, my: 10, background: "transparent", height: "100%", }}>
                <Box sx={{ overflowX: 'auto', background: "#ffffff", p: 3, borderRadius: 5, marginInline: 4, my: 2 }}>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
                        <Typography variant='h5'>Candidate Details</Typography>
                        <Box>
                            <Button variant='contained' color='primary' sx={{ mr: 2 }}>Edit</Button>
                            <Button variant='contained' color='error' onClick={handleClickOpenDialogbox}>Delete</Button>
                        </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2 }}>
                        <FormControl fullWidth className='user-from-section'>
                            <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                <Grid xs={12} item><Box sx={{ fontWeight: "600", fontSize: "18px" }}>Personal Details</Box></Grid>

                                <Grid component="form" item xs={4}>
                                    <label htmlFor="cn" className='text-label'>Candidate Surname</label>
                                    <CustomTextField type="text" id="cn" fullWidth value=" Taree" />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="CN" className='text-label'>Candidate Name</label>
                                    <CustomTextField  type="text" id="cn" value="Stacia" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4} >
                                    <label htmlFor="Nationality" className='text-label' >Nationality</label>
                                    <CustomTextField select id="status" fullWidth >
                                        {Nationality.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="passport-number" className='text-label'>Passport Number</label>
                                    <CustomTextField type="text" id="passport-number" value="EC7162382" fullWidth />
                                </Grid>

                                <Grid component="form" item xs={4}>
                                    <label htmlFor="passprt-ex-date" className='text-label'>Passport Expire Date</label>
                                    <CustomTextField type="date" id="passprt-ex-date" fullWidth value="2018-07-22" />
                                </Grid>
                                <Grid component="form" item xs={4} >
                                    <label htmlFor="status" className='text-label' >Status</label>
                                    <CustomTextField select id="status" value="pandding" fullWidth >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>
                                <Grid item xs={12}><Divider /></Grid>
                                <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600", fontSize: "18px" }}>Personal Details</Box></Grid>
                                <Grid component="form" item xs={4} >
                                    <label htmlFor="education" className='text-label' >Education</label>
                                    <CustomTextField select id="education" fullWidth  >
                                        {Education.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="experience" className='text-label'>Experience (Years)</label>
                                    <CustomTextField type="number" id="experience" value="5" fullWidth />
                                </Grid>
                                {/* PCC Details */}
                                <Grid item xs={12}><Divider /></Grid>
                                <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600", fontSize: "18px" }}>PCC Details</Box></Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="pcc-issue-date" className='text-label'>PCC Issue date</label>
                                    <CustomTextField type="date" id="pcc-issue-date" value="2018-06-12" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="pcc-expire-date" className='text-label'>PCC Expire Date</label>
                                    <CustomTextField type="date" id="pcc-expire-date" value="2025-06-12" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4} >
                                    <label htmlFor="status" className='text-label' >Status</label>
                                    <CustomTextField select id="status" value="padding" fullWidth >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>
                                <Grid item xs={12}><Divider /></Grid>

                                <Grid lg={12} xs={12} item><Box sx={{ fontWeight: "600", fontSize: "18px" }}>Work visa details </Box></Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="visa-number" className='text-label'>Visa Application No</label>
                                    <CustomTextField type="text" id="visa-number" value="A122152F21" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="visa-app-date" className='text-label'>Visa Application date</label>
                                    <CustomTextField type="date" id="visa-app-date" value="2019-07-20" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="e-visa-number" className='text-label'>E-visa File No</label>
                                    <CustomTextField type="text" id="e-visa-number" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="visa-issue-date" className='text-label'>Visa Issue Date</label>
                                    <CustomTextField type="date" id="visa-issue-date" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="visa-expiry-date" className='text-label'>Visa Expiry Date</label>
                                    <CustomTextField type="date" id="visa-expiry-date" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4}>
                                    <label htmlFor="visa-date-time" className='text-label'>Date & Time of Entry</label>
                                    <CustomTextField type="datetime-local" id="visa-date-time" fullWidth />
                                </Grid>
                                <Grid component="form" item xs={4} >
                                            <label htmlFor="BackOffice" className='text-label' >Back Office</label>
                                            <CustomTextField select id="BackOffice" fullWidth >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4} >
                                            <label htmlFor="BackOffice" className='text-label' >Manpower </label>
                                            <CustomTextField select id="BackOffice" fullWidth >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4} >
                                            <label htmlFor="BackOffice" className='text-label' >Recruiter</label>
                                            <CustomTextField select id="BackOffice" fullWidth >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </CustomTextField>
                                        </Grid>
                                <Grid item xs={12}>
                                    <FormLabel  sx={{ fontWeight: "600", fontSize: "14px", color: "#364152" }}>Select Roles</FormLabel>
                                    <Grid container spacing={2}>
                                        <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                            <Card
                                                className={selectedRoles.includes("BackOffice") ? "radio-card-box selected-card" : "radio-card-box"}
                                                onClick={() => handleRoleClick("BackOffice")}
                                            >
                                                <Box sx={{ display: "flex", justifyContent: "end" }}>  <Radio checked={selectedRoles.includes("BackOffice")} readOnly /></Box>
                                                <Box className='icon-box'>
                                                    
                                                    <img src={WorkPermit} alt="Work Permit"/>
                                                </Box>
                                                <Typography className='text-main'>Work Permit</Typography>
                                            </Card>
                                        </Grid>
                                        <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                            <Card
                                                className={selectedRoles.includes("Manpower-Company") ? "radio-card-box selected-card" : "radio-card-box"}
                                                onClick={() => handleRoleClick("Manpower-Company")}
                                            >
                                                <Box sx={{ display: "flex", justifyContent: "end" }}><Radio checked={selectedRoles.includes("Manpower-Company")} readOnly /></Box>
                                                <Box className='icon-box'>
                                                <img src={WorkVisa} alt="Work Visa"/>
                                                    
                                                </Box>
                                                <Typography className='text-main'>Work Visa</Typography>
                                            </Card>
                                        </Grid>
                                        <Grid component="form" item lg={3} md={4} sm={12} xs={12}>
                                            <Card
                                                className={selectedRoles.includes("Recruiter") ? "radio-card-box selected-card" : "radio-card-box"}
                                                onClick={() => handleRoleClick("Recruiter")}
                                            >
                                                <Box sx={{ display: "flex", justifyContent: "end" }}> <Radio checked={selectedRoles.includes("Recruiter")} readOnly /></Box>
                                                <Box className='icon-box'>
                                                <img src={ResidenceCard} alt="Residence Card"/>
                                                </Box>
                                                <Typography className='text-main'>Residence Card</Typography>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* <Grid item lg={12} display="flex" justifyContent="end" >
                                <Button variant='contained' type='submit' sx={{ mr: 2 }}>save</Button>
                                <Button variant='outlined'>Cancel</Button>
                            </Grid> */}
                            </Grid>
                        </FormControl>
                    </Box>
                </Box>
                <Box sx={{ overflowX: 'auto', background: "#ffffff", p: 3, borderRadius: 5, marginInline: 4, my: 2 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Work Permit" {...a11yProps(0)} />
                                <Tab label="Work visa" {...a11yProps(1)} />
                                <Tab label="Residence Card " {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Box sx={{ mt: 2 }}>
                                <FormControl fullWidth className='user-from-section'>
                                    <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="employer" className='text-label'>Employer</label>
                                            <CustomTextField type="text" id="employer" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="CN" className='text-label'>Tax Receipt No</label>
                                            <CustomTextField type="Number" id="tax-receipt-no" value="64641" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="tax-receipt-date" className='text-label'>Tax Receipt Date</label>
                                            <CustomTextField type="Date" id="tax-receipt-date" value="Singapore" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="immigratio-file-application-no " className='text-label'>Immigration file application no. </label>
                                            <CustomTextField type="text" id="immigratio-file-application-no" value="EC7162382" fullWidth />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="immigratio-file-application-date" className='text-label'>Immigration file application Date</label>
                                            <CustomTextField type="date" id="immigratio-file-application-date" fullWidth value="2018-07-22" />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="submission-location" className='text-label'>Submission Location</label>
                                            <CustomTextField type="text" id="experience" fullWidth />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="physical-submission-date" className='text-label'>Physical Submission Date</label>
                                            <CustomTextField type="date" id="physical-submission-date" value="2018-06-12" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="work-permit-collection-date" className='text-label'>Work Permit Collection Date</label>
                                            <CustomTextField type="date" id="work-permit-collection-date" value="2025-06-12" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4} >
                                            <label htmlFor="work-permit-no" className='text-label' >Work Permit No.</label>
                                            <CustomTextField type="number" id="work-permit-no" value="12462" fullWidth />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="work-permit-date" className='text-label'>Work Permit Date</label>
                                            <CustomTextField type="date" id="work-permit-date" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="remarks" className='text-label'>Remarks</label>
                                            <CustomTextField type="text" id="remarks" fullWidth />
                                        </Grid>

                                    </Grid>
                                </FormControl>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Box sx={{ mt: 2 }}>
                                <FormControl fullWidth className='user-from-section'>
                                    <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="employer" className='text-label'>Employer</label>
                                            <CustomTextField type="text" id="employer" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="visa-application-no" className='text-label'>Visa Application No</label>
                                            <CustomTextField type="number" id="visa-application-no" value="546564641" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="visa-application-date" className='text-label'>Visa Application Date</label>
                                            <CustomTextField type="Date" id="visa-application-date" value="21-08-2020" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="e-visa-file-no" className='text-label'>E-visa File No. </label>
                                            <CustomTextField type="text" id="e-visa-file-no" value="AC7165372" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="visa-processing" className='text-label'>Visa Processing</label>
                                            <CustomTextField type="text" id="visa-processing" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4} >
                                            <label htmlFor="Agent" className='text-label' >Agent</label>
                                            <CustomTextField select id="Agent" fullWidth >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </CustomTextField>
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="visa-issue-date" className='text-label'>Visa Issue Date</label>
                                            <CustomTextField type="date" id="visa-issue-date" fullWidth />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="visa-expiry-date" className='text-label'>Visa Expiry Date</label>
                                            <CustomTextField type="date" id="visa-expiry-date" value="2030-06-12" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Date & Time of Entry in Romania (Arrival)" className='text-label'>Date & time of entry</label>
                                            <CustomTextField type="datetime-local" id="Date & Time of Entry in Romania (Arrival)" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4} >
                                            <label htmlFor="work-permit-no" className='text-label' >Pick up Details</label>
                                            <CustomTextField type="text" id="work-permit-no" value="12462" fullWidth />
                                        </Grid>

                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="payment-account" className='text-label'>Payment Account</label>
                                            <CustomTextField type="number" id="payment-account" fullWidth />
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="remarks" className='text-label'>Remarks</label>
                                            <CustomTextField type="textarea" id="remarks" fullWidth ></CustomTextField>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Box sx={{ mt: 2 }}>
                                <FormControl fullWidth className='user-from-section'>
                                    <Grid container direction={{ xs: 'column', md: 'row' }} columnSpacing={5} rowSpacing={3}>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="passport-no" className='text-label'>Passport No.</label>
                                            <CustomTextField type="textarea" id="passport-no" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="portal-file-number" className='text-label'>Portal File Number	</label>
                                            <CustomTextField type="textarea" id="portal-file-number	" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="portal-file-ud" className='text-label'>Portal File Uploading Date	</label>
                                            <CustomTextField type="Date" id="portal-file-ud" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="portal-app-ud" className='text-label'>Portal Appointment Date</label>
                                            <CustomTextField type="Date" id="portal-app-ud" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="arrival-date" className='text-label'>Add 90 Days from Arrival Date</label>
                                            <CustomTextField type="Date" id="arrival-date" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="submission-date" className='text-label'>Submission Deadline Date</label>
                                            <CustomTextField type="Date" id="submission-date" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid item xs={12}><Divider /></Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Taxa-259-lei" className='text-label'>Taxa - 259 lei</label>
                                            <CustomTextField type="File" id="Taxa-259-lei" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Tax-120-euro" className='text-label'>Tax - 120 Euro</label>
                                            <CustomTextField type="File" id="Tax-120-euro" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Extras de Cont" className='text-label'>Extras de Cont</label>
                                            <CustomTextField type="File" id="Extras de Cont" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Aviz" className='text-label'>Adeverinta Medical	Aviz de Munca (Original & Copy - Employer)</label>
                                            <CustomTextField type="File" id="Aviz" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="CIM" className='text-label'>CIM (Original & Copy - Employer)</label>
                                            <CustomTextField type="File" id="CIM" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Raport" className='text-label'>Raport Salariat (Original - Employer)</label>
                                            <CustomTextField type="File" id="Raport" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Taxa-259-lei" className='text-label'>Print Screen Rages (Employer)</label>
                                            <CustomTextField type="File" id="Taxa-259-lei" fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Adresa de Cazare " className='text-label'>Adresa de Cazare </label>
                                            <CustomTextField type="File" id="Adresa de Cazare " fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid item xs={12}><Divider /></Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Proof of Residence " className='text-label'>Dovada Spatiului de Locuit (Original & Copy) Proof of Residence</label>
                                            <CustomTextField type="File" id="Proof of Residence " fullWidth ></CustomTextField>
                                        </Grid>
                                        <Grid component="form" item xs={4}>
                                            <label htmlFor="Contract de Inchiriere" className='text-label'>Contract de Inchiriere (Original & Copy) Lease</label>
                                            <CustomTextField type="File" id="Contract de Inchiriere " fullWidth ></CustomTextField>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Box>
                        </CustomTabPanel>
                    </Box>
                </Box>
                <Dialog
          open={openDialogbox}
          onClose={handleCloseDialogbox}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {""}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete candidate?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogbox}>No</Button>
            <Button  to="/candidates" component={Link}  autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
            </Box>
        </Box>
    )
}

export default CandidateDetails
