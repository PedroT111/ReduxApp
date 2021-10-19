import{
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    LOADING_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_ERROR,
    PRODUCT_DELETED_SUCCESSFUL,
    GET_PRODUCT_EDIT,
    PRODUCT_EDIT_ERROR,
    PRODUCT_EDIT_SUCCESSFUL,
    NEW_PRODUCT_EDIT,
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

export function deleteProductAction(id){
    return async (dispatch) => {
        dispatch(getProductDelete(id));
        
        try{
            const res = await clientAxios.delete(`productos/${id}`);
            dispatch(deleteProductSuccessful(id));
            Swal.fire(
                "Deleted",
                "Your file has been deleted.",
                "success"
            )
        }
        catch{
            dispatch(deleteProductError());
            Swal.fire(
                "Error",
                "Your product couldn`t be deleted",
                "error"
            )
        }
    }
};

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccessful = () => ({
    type: PRODUCT_DELETED_SUCCESSFUL,
});

const deleteProductError = () => ({
    type: PRODUCT_DELETED_ERROR,
    payload: true
});


export function getProductEditAction(product){
    return (dispatch) => {dispatch(getProductEdit(product))};
};

const getProductEdit = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

export function editProductAction(product){
    return async (dispatch) => {
        dispatch(editProduct(product));
        try{
            await clientAxios.put(`/productos/${product.id}`, product);
            dispatch(editProductSuccessful(product));
            Swal.fire(
                "Ok",
                "Your product has been edited",
                "ok"
            );

        }
        catch{
            dispatch(editProductError());
            Swal.fire(
                "Error",
                "Your product couldn`t be edited",
                "error"
            );
        }
    }
};

const editProduct = () => ({
    type: NEW_PRODUCT_EDIT
});

const editProductError = () => ({
    type: PRODUCT_EDIT_ERROR,
});

const editProductSuccessful = product => ({
    type: PRODUCT_EDIT_SUCCESSFUL,
    payload: product
})