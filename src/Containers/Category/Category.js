import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getcategory, getCategory, upadateCategory } from '../../Redux/Action/category.action';


function Category(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [did, setDid] = useState();
    const [update, setUpdate] = useState(false);
    const [uid, setUid] = useState();
    const Category = useSelector (state=>state.category)

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
    };

    const getData = () => {

        let localData = JSON.parse(localStorage.getItem('Category'));
        if (localData !== null) {
            setData(localData);
        }
    }
    const handleEdit=(params)=>{
        console.log(params);
        setUid(params.id);
        setOpen(true);
        formik.setValues({
        id:params.id,
        name:params.name,
        file:params.url,
        ...params
        });
        setUpdate(true);
    }
    const handleUpdate=(values)=>{
     
        dispatch(upadateCategory(values))
        setOpen(false);
        setUpdate(false);
        setUid();
        getData();
    }
    const handleDelete = () => {
     dispatch(deleteCategory(did))
     
        getData();
        setDid('');
        handleClose('');

    }
    useEffect(
        () => {
            getData();
            dispatch(getcategory())
        },
        [])

    let handleSubmit = (values) => {
      
        dispatch(addCategory(values));

        let localData = JSON.parse(localStorage.getItem('Category'));

     
        handleClose();
        setName('');
        getData();

    }

    let schema = yup.object().shape({
        name: yup.string().required('Plese Enter Your Name'),
        file:yup.mixed().required('pls select file')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
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
        { field: 'url', headerName: 'img', width: 130,
        renderCell:(params)=>(
            <img src = {params.row.url} width={50} height={50}/>
          )
        },
        
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                    <IconButton aria-label="delete" onClick={() => {setDid(params.row); handledClickOpen(params)}}>
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
                Add Category
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Category.category}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Category Data</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="name"
                                value={formik.values.name}
                                label="Category Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
                           
                           

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

export default Category;