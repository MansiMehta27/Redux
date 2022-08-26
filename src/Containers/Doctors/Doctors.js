import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctors, deleteDoctors, getdoctors, upadateDoctors } from '../../Redux/Action/doctor.action';

function Fmedisin(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [department, setDepartment] = useState('');
    const [data, setData] = useState([]);
    const [did, setDid] = useState();
    const [update, setUpdate] = useState(false);
    const [uid, setUid] = useState();
    const Doctors = useSelector (state=>state.doctors)

    const dispatch = useDispatch()

   const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
    };

    const handledClickOpen = (params) => {
        setDOpen(true);
        setDid(params.id);
    };

    const getData = () => {

        let localData = JSON.parse(localStorage.getItem('Doctors'));
        if (localData !== null) {
            setData(localData);
        }
    }
    const handleEdit=(params)=>{
        setUid(params.id);
        setOpen(true);
        formik.setValues({
        id:params.id,
        name:params.name,
        age:params.age,
        city:params.city,
        department:params.department
        });
        setUpdate(true);
    }
    const handleUpdate=(values)=>{
        // console.log(values, uid);
        // let localData=JSON.parse(localStorage.getItem('Doctors'));
        // let vData=localData.map((l)=>{
        //     if(l.id===uid){
        //         return{id: uid, ...values};
        //     }
        //     else
        //     {
        //         return l;
        //     }
        // })
        // console.log(vData);
        // localStorage.setItem("Doctors", JSON.stringify(vData));
        dispatch(upadateDoctors(values))
        setOpen(false);
        setUpdate(false);
        setUid();
        getData();
    }
    const handleDelete = () => {
     dispatch(deleteDoctors(did))
        // let localData1 = JSON.parse(localStorage.getItem("Doctors"));
        // let appData = localData1.filter((l, i) => l.id !== did);
        // localStorage.setItem("Doctors", JSON.stringify(appData));
        getData();
        setDid('');
        handleClose('');

    }
    useEffect(
        () => {
            getData();
            dispatch(getdoctors())
        },
        [])

    let handleSubmit = (values) => {
        //         let data = {
        //     id: Math.floor(Math.random() * 1000),
        //     ...values
        // };
        dispatch(addDoctors(values));

        let localData = JSON.parse(localStorage.getItem('Doctors'));

        // if (localData === null) {
        //     localStorage.setItem('Doctors', JSON.stringify([data]));
        // }
        // else {
        //     localData.push(data);
        //     localStorage.setItem('Doctors', JSON.stringify(localData));
        // }
        handleClose();
        setName('');
        setAge('');
        setCity('');
        setDepartment('');
        getData();

    }

    let schema = yup.object().shape({
        name: yup.string().required('Plese Enter Your Name'),
        age: yup.string().required('Plese Enter Your Age'),
        city: yup.string().required('Plese Enter Your City'),
        department: yup.string().required('Plese Enter Your Department'),
        file:yup.mixed().required('pls select file')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            city: '',
            department: '',
            file:''
        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdate(values);
            }
            else{
                handleSubmit(values);
            }
            handleClose();
        },
    });

    // console.log(formik.errors);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                    <IconButton aria-label="delete" onClick={() => handledClickOpen(params)}>
                        <DeleteIcon />
                    </IconButton>

                        <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Doctors.doctors}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine Data</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="name"
                                value={formik.values.name}
                                label="Doctor Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="age"
                                value={formik.values.age}
                                label="Doctor Age"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.age ? <p>{formik.errors.age}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="city"
                                value={formik.values.city}
                                label="Doctor City"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {formik.errors.city ? <p>{formik.errors.city}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="department"
                                value={formik.values.department}
                                label="Doctor Department"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.department ? <p>{formik.errors.department}</p> : null}
                            <input
                                    type='file'
                                    name='file'
                                    id='file'
                                    onChange={(event)=>formik.setFieldValue("file",event.target.files[0])}
                            />
                            {formik.errors.file ? <p>{formik.errors.file}</p> : null}

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Form>
                </Formik>
            </Dialog>

            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>NO</Button>
                    <Button onClick={handleDelete} autoFocus>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Fmedisin;