import *as ActionTypes from "../ActionTypes";
import { base_url } from "../../Sharad/baseurl";
import { getDoctorsData, addDoctorsData ,deleteDoctorsData, upadateDoctors} from "../../common/apis/doctors.api";

export const getdoctors = () => (dispatch) => {
  try {
    dispatch(loadingDoctors());
    getDoctorsData()
      .then(data => dispatch(({ type: ActionTypes.GET_DOCTORES, payload: data.data })))
    //  setTimeout(function () {
    //   return fetch (base_url + 'medisin')
    //   .then(response => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     var error = new Error('Error' + response.status + ': ' + response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
    // error => {
    //   var errmess = new Error(error.message);
    //   throw errmess;
    // })
    // .then((response) => response.json())
    // .then(medisine => dispatch(({ type: ActionTypes.GET_MEDISION, payload: medisine })))
    // .catch((error)=>dispatch(errorMedicine(error.message)))
    // },2000)
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
export const addDoctors = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function(){
      addDoctorsData(data)
      .then(data => dispatch(({ type: ActionTypes.POST_DOCTORES, payload: data.data })))
      .catch((error) => dispatch(errorDoctors(error.message)))
    }, 2000)

    // setTimeout(function () {
    //   return fetch(base_url + 'medisin', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //       error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //       })
    //     .then((response) => response.json())
    //     .then(medisine => dispatch(({ type: ActionTypes.POST_MEDICINES, payload: medisine })))
    //     .catch((error) => dispatch(errorMedicine(error.message)))

    // }, 2000)

  } catch (error) {
    dispatch(errorDoctors(error.message));
  }
}

export const deleteDoctors = (id) => (dispatch) => {
  try {
      
        deleteDoctorsData(id)
        .then(dispatch(({ type: ActionTypes.DELETE_DOCTORES, payload: id })))
        .catch((error) => dispatch(errorDoctors(error.message)))
        
    // return fetch(base_url + 'medisin/' + id, {
    //   method: 'DELETE'
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then((response) => response.json())
    //   .then(medisine => dispatch(({ type: ActionTypes.DELETE_MEDICINES, payload: id })))
    //   .catch((error) => dispatch(errorMedicine(error.message)))
  }
  catch (error) {
    dispatch(errorDoctors(error.message))
  }
}
export const upadateDoctors = (data) => (dispatch) => {
  try {

     upadateDoctorsData(data)
    .then((data)=>dispatch(({ type: ActionTypes.UPDATE_DOCTORES, payload: data.data })))
    .catch((error) => dispatch(errorDoctors(error.message)))

    // return fetch(base_url + 'medisin/' + data.id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then((response) => response.json())
    //   .then(medisine => dispatch(({ type: ActionTypes.UPDATE_MEDICINES, payload: data })))
    //   .catch((error) => dispatch(errorMedicine(error.message)))

  } catch (error) {
    dispatch(errorDoctors(error.message));
  }
} 