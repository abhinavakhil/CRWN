// lect-16 

export const addItemsTocart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
            )
    }

    return [...cartItems,{...cartItemToAdd, quantity: 1}]

}

export const removeItemsFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        // if 1 item remove it 
       return cartItems.filetr(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    // else decrease 1 
    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id?
        {...cartItem, quantity: cartItem.quantity -1} :
        cartItem

    )
}