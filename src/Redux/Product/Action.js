import { api, API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const query = `color=${color ? color : ""}&sizes=${sizes ? sizes : "" }&minPrice=${minPrice ? minPrice : "" }&maxPrice=${maxPrice ? maxPrice : "" }&minDiscount=${minDiscount ? minDiscount : "" }&category=${category ? category : "" }&stock=${stock ? stock : "" }&sort${sort ? sort : "" }&pageNumber=${pageNumber ? pageNumber : "" }&pageSize=${pageSize ? pageSize : "" }`
    const queryString = new URLSearchParams(query).toString();
    const { data } = await api.get(`/api/products?${queryString}`);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log(data,'qqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};


export const createProduct = (product) => async(dispatch)=>{
 try {
  dispatch({type:CREATE_PRODUCT_REQUEST})
  const {data} = await api.post(`${API_BASE_URL}/api/admin/products`,product.data);
  dispatch({type:CREATE_PRODUCT_SUCCESS , payload : data})
 } catch (error) {
  dispatch({type:CREATE_PRODUCT_FAILURE , payload : error.message})
 }
}
export const deleteProduct = (productId) => async(dispatch)=>{
  try {
   dispatch({type:DELETE_PRODUCT_REQUEST})
   const {data} = await api.post(`${API_BASE_URL}/api/admin/products/${productId}`);
   console.log(data,'ooooooooooo')
   dispatch({type:DELETE_PRODUCT_SUCCESS , payload : data})
  } catch (error) {
   dispatch({type:DELETE_PRODUCT_FAILURE , payload : error.message})
  }
 }
