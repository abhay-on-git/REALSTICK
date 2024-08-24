import { api } from "../../config/apiConfig";
import axios from "axios";
import {
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
