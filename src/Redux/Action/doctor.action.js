import * as ActionTypes from "../ActionTypes";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getdoctors = () => async (dispatch) => {
  try {
    dispatch(loadingDoctors());
    const querySnapshot = await getDocs(collection(db, "doctors"));
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    });
    dispatch({ type: ActionTypes.GET_DOCTORES, payload: data })
    console.log(data);

  } catch (error) {
    dispatch(errorDoctors(error.message))
  }
}
export const loadingDoctors = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_DOCTORES });
}
export const errorDoctors = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_DOCTORES, payload: error });
}


export const addDoctors = (data) => async (dispatch) => {
  try {
    // dispatch(loadingDoctors());

    const doctorRef = ref(storage, 'doctors/' + data.file.name);
    uploadBytes(doctorRef, data.file)
      .then((snapshot) => {
        getDownloadURL(ref(snapshot.ref))
          .then(async(url) => {
            const docRef = await addDoc(collection(db, "doctors"), data = {
              name: data.name,
              age: data.age,
              city: data.city,
              department: data.department,
              url:url
            });
            dispatch({ 
              type: ActionTypes.POST_DOCTORES, 
              payload: { 
                id: docRef.id,
                name: data.name,
                age: data.age,
                city: data.city,
                department: data.department,
                url:url
              } 
            })
          })
      });

 
    console.log(data);


  } catch (error) {
    dispatch(errorDoctors(error.message));
  }
}


export const deleteDoctors = (id) => async (dispatch) => {
  try {
    console.log(id);
    await deleteDoc(doc(db, "doctors", id));
    dispatch({ type: ActionTypes.DELETE_DOCTORES, payload: id })
  }
  catch (error) {
    dispatch(errorDoctors(error.message))
  }
}
export const upadateDoctors = (data) => async (dispatch) => {
  try {

    const doctorRef = doc(db, "doctors", data.id)
    await updateDoc(doctorRef, {
      name: data.name,
      age: data.age,
      city: data.city,
      department: data.department
    });
    dispatch({ type: ActionTypes.UPDATE_DOCTORES, payload: data })

  } catch (error) {
    dispatch(errorDoctors(error.message));
  }
}

