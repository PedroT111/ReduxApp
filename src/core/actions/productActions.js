import{
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR
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