import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {

    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            seller: data.seller,
            qty
        },
    });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    )

}
const removeFromCart = (data) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: data });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export { addToCart, removeFromCart }