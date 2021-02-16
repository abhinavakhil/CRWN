import { shop_Data } from "./shop.data";


const INITIAL_STATE = {
 collections: shop_Data
}

const shopReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        default:
            return state;
    }
}

export default shopReducer;
// since there is no modification to the shop 
// data so no actions required and just return by default state