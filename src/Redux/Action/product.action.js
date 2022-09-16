import * as ActionTypes from "../ActionTypes";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getproduct = () => async (dispatch) => {
    try {

        dispatch(loadingProduct());
        const querySnapshot = await getDocs(collection(db, "product"));
        let data = []
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_PRODUCT, payload: data })
        console.log(data);

    } catch (error) {
        dispatch(errorProduct(error.message))
    }
}
export const loadingProduct = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOADING_PRODUCT });
}

export const errorProduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_PRODUCT, payload: error });
}
export const addProduct = (data) => async (dispatch) => {
    try {
        const ramdomedoc = Math.floor(Math.random() * 100000).toString();
        const ProductRef = ref(storage, 'product/' + ramdomedoc);
        uploadBytes(ProductRef, data.file)
            .then((snapshot) => {
                getDownloadURL(ref(snapshot.ref))
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "product"), data = {
                            name: data.name,
                            price: data.price,
                            discripation: data.discripation,
                            category_id:data.category_id,
                            url: url,
                            fileName: ramdomedoc
                        });
                        dispatch({
                            type: ActionTypes.POST_PRODUCT,
                            payload: {
                                id: docRef.id,
                                name: data.name,
                                price: data.price,
                                discripation: data.discripation,
                                category_id:data.category_id,
                                url: url,
                                fileName: ramdomedoc
                            }
                        })
                    })
            });

        console.log(data);
    } catch (error) {
        dispatch(errorProduct(error.message));
    }
}
export const deleteProduct = (data) => async (dispatch) => {
    try {
        console.log(data);
        const productRef = ref(storage, 'product/' + data.fileName);
        deleteObject(productRef)
            .then(async () => {
                await deleteDoc(doc(db, "product", data.id));
                dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorProduct(error.message))
            });
    }
    catch (error) {
        dispatch(errorProduct(error.message))

    }
}
export const upadateProduct = (data) => async (dispatch) => {
    console.log(data);
    try {

        const productRef = doc(db, "product", data.id);
        if (typeof data.file === 'string') {
            await updateDoc(productRef, {
                name: data.name,
                price: data.price,
                discripation: data.discripation,
                category_id:data.category_id,
                fileName: data.fileName,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data })
        } else {
            const docRef = ref(storage, 'product/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const ramdomedoc = Math.floor(Math.random() * 100000).toString();
                        const productRefint = ref(storage, 'product/' + ramdomedoc);
                        uploadBytes(productRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(productRef, {
                                            name: data.name,
                                            price: data.price,
                                            discripation: data.discripation,
                                            category_id:data.category_id,
                                            fileName: ramdomedoc,
                                            url: url
                                        });
                                        dispatch({
                                            type: ActionTypes.UPDATE_PRODUCT,
                                            payload: {
                                                ...data,
                                                price: data.price,
                                                discripation: data.discripation,
                                                category_id:data.category_id,
                                                url: url,
                                                fileName: ramdomedoc
                                            }
                                        })
                                    })
                            });
                    })
        }
    } catch (error) {
        dispatch(errorProduct(error.message));
    }
}

