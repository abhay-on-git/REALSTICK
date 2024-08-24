import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_REQUEST } from "./ActionType"


export const createOrder = (reqData)=> async (dispatch)=>{
    dispatch(CREATE_ORDER_REQUEST)
    try {
        const {data} = await api.post("/api/orders",reqData.address);
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`})
        }
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

export const getOrderById = ()=> async (dispatch)=>{
    dispatch(GET_ORDER_BY_ID_REQUEST)
    try {
        const {data} = await api.post(`/api/orders/${orderId}`);
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}
