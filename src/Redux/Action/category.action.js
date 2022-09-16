import * as ActionTypes from "../ActionTypes";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Category } from "@mui/icons-material";
export const getcategory = () => async (dispatch) => {
  try {

    dispatch(loadingCategory());
    const querySnapshot = await getDocs(collection(db, "category"));
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    });
    dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
    console.log(data);

  } catch (error) {
    dispatch(errorCategory(error.message))
  }
}
export const loadingCategory = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_CATEGORY });
}

export const errorCategory = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_CATEGORY, payload: error });
}
export const addCategory = (data) => async (dispatch) => {
  try {
    const ramdomedoc = Math.floor(Math.random() * 100000).toString();
    const CategoryRef = ref(storage, 'category/' + ramdomedoc);
    uploadBytes(CategoryRef, data.file)
      .then((snapshot) => {
        getDownloadURL(ref(snapshot.ref))
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "category"), data = {
              name: data.name,
              url: url,
              fileName: ramdomedoc
            });
            dispatch({
              type: ActionTypes.POST_CATEGORY,
              payload: {
                id: docRef.id,
                name: data.name,
                url: url,
                fileName: ramdomedoc
              }
            })
          })
      });

    console.log(data);
  } catch (error) {
    dispatch(errorCategory(error.message));
  }
}
export const deleteCategory = (data) => async (dispatch) => {
  try {
    console.log(data);
    const categoryRef = ref(storage, 'category/' + data.fileName);
    deleteObject(categoryRef)
      .then(async () => {
        await deleteDoc(doc(db, "category", data.id));
        dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: data.id })
      })
      .catch((error) => {
        dispatch(errorCategory(error.message))
      });
  }
  catch (error) {
    dispatch(errorCategory(error.message))

  }
}
export const upadateCategory = (data) => async (dispatch) => {
  console.log(data);
  try {

    const categoryRef = doc(db, "category", data.id);
    if (typeof data.file === 'string') {
      await updateDoc(categoryRef, {
        name: data.name,
        fileName: data.fileName,
        url: data.url
      });
      dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data })
    } else {  
    const docRef = ref(storage, 'category/' + data.fileName);
      deleteObject(docRef)
        .then(
          async () => {
            const ramdomedoc = Math.floor(Math.random() * 100000).toString();
            const categoryRefint = ref(storage, 'category/' + ramdomedoc);
            uploadBytes(categoryRefint, data.file)
              .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                  .then(async (url) => {
                    await updateDoc(categoryRef, {
                      name: data.name,
                      fileName: ramdomedoc,
                      url: url
                    });
                    dispatch({
                      type: ActionTypes.UPDATE_CATEGORY,
                      payload: {
                        ...data,
                        url:url,
                        fileName: ramdomedoc
                      }
                    })
                  })
              });
          })
    }
  } catch (error) {
    dispatch(errorCategory(error.message));
  }
}

