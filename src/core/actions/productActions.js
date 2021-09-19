import{
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR
} from "../types/";

export function createNewProduct(p) {
    return(
        dispatch)=>{dispatch(addProduct());

        try{
            dispatch(successfullAddProduct(p));
        }
        catch(error){
            dispatch(errorAddProduct(true));
        }

    }
}

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