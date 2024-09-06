import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_REQUEST } from "./ActionType"


export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });  // Dispatching an action object
    try {
        const { data } = await api.post("/api/orders", reqData.address);
        console.log(data._id, 'Order data response');
        
        // Navigate to the next step if the order is created
        if (data._id) {
            reqData.navigate({ search: `step=2&order_id=${data._id}` });
        }

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });  // Success action
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });  // Failure action
    }
};


export const getOrderById = ()=> async (dispatch)=>{
    dispatch(GET_ORDER_BY_ID_REQUEST)
    try {
        const {data} = await api.post(`/api/orders/${orderId}`);
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}
