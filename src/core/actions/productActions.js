import{
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    LOADING_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
    DOWNLOAD_PRODUCTS_ERROR,
} from "../types/";
import clientAxios from "../../config/axios";
import Swal from "sweetalert2";

export function createNewProduct(p) {
    return async (dispatch)=>{dispatch(addProduct());
        try{
            await clientAxios.post('/productos', p);
            // ok ? act state : error
            dispatch(successfullAddProduct(p));

            Swal.fire({
                title: "Successful",
                text:"Product add",
                icon: "succes"
            })
        }
        catch(error){
            dispatch(errorAddProduct(true));
        }
    }
};

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const successfullAddProduct = p => ({
    type: ADD_PRODUCT_SUCCESSFUL,
    payload: p
});

const errorAddProduct = err => ({
    type: ADD_PRODUCT_ERROR,
    payload: err
});

export function getProductsAction(){
    return async (dispatch) => {
        dispatch(downloadProducts());

        try{
            setTimeout(async () => {
                const res = await clientAxios.get('/productos');
                dispatch(downloadProductsSuccessful(res.data));
            }, 3000);       
        }
        catch{
            dispatch(downloadProductsError());
        }
    }
};

const downloadProducts = () =>({
    type: LOADING_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccessful = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESSFUL,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});