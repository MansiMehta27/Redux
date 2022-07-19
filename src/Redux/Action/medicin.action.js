import *as ActionTypes from "../ActionTypes";
import { base_url } from "../../Sharad/baseurl";
import { getMedicinesData, addMedicinesData ,deleteMedicinesData, upadateMedicinsData} from "../../common/apis/medicine.api";

export const getmedicines = () => (dispatch) => {
  try {
    dispatch(loadingMedicine());
    getMedicinesData()
      .then(data => dispatch(({ type: ActionTypes.GET_MEDISION, payload: data.data })))
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
    dispatch(errorMedicine(error.message))
  }
}

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINES });
}
export const errorMedicine = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINES, payload: error });
}
export const addMedicines = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function(){
      addMedicinesData(data)
      .then(data => dispatch(({ type: ActionTypes.POST_MEDICINES, payload: data.data })))
      .catch((error) => dispatch(errorMedicine(error.message)))
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
    dispatch(errorMedicine(error.message));
  }
}

export const deleteMedicines = (id) => (dispatch) => {
  try {
      
        deleteMedicinesData(id)
        .then(dispatch(({ type: ActionTypes.DELETE_MEDICINES, payload: id })))
        .catch((error) => dispatch(errorMedicine(error.message)))
        
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
    dispatch(errorMedicine(error.message))
  }
}
export const upadateMedicins = (data) => (dispatch) => {
  try {

     upadateMedicinsData(data)
    .then((data)=>dispatch(({ type: ActionTypes.UPDATE_MEDICINES, payload: data.data })))
    .catch((error) => dispatch(errorMedicine(error.message)))

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
    dispatch(errorMedicine(error.message));
  }
} 