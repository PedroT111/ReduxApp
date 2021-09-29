import{
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESSFUL,
    ADD_PRODUCT_ERROR,
    LOADING_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_ERROR,
    PRODUCT_DELETED_SUCCESSFUL
} from "../types/"

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: false,
};



// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type){
        case LOADING_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:{
            return{
                ...state,
                loading: action.payload
            }
        }
        case ADD_PRODUCT_SUCCESSFUL:{
            return{
                ...state,
                loading: false,
                products:[state.products, action.payload]
            }
        }
        case ADD_PRODUCT_ERROR:{
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        }
        case DOWNLOAD_PRODUCTS_SUCCESSFUL:{
          return{
            ...state,
            loading: false,
            error: false,
            products: action.payload
          }
        }
        case DOWNLOAD_PRODUCTS_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_PRODUCT_DELETE:{
            return{
                ...state,
                deleteProduct: action.payload
            }     
        }
        default:
            return state;
    }
    
}