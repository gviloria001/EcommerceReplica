import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

export default function CartScreen() {
    const params = useParams();
    const { id: productId } = params;
    const navigate = useNavigate();

    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const checkoutHandler = () => {
        navigate(`/signin?redirect=shipping`)
    }

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                        <div>
                            Cart is empty
                        </div>
                        :
                        cartItems.map((item) =>
                            <li>
                                <div className="cart-image">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={`/product/${productId}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                        Qty:
                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option key={x + 1}>{x + 1}</option>)}
                                        </select>
                                        <button type="button"
                                            className="button"
                                            onClick={() => removeFromCartHandler(item.product)} >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    ${item.price}
                                </div>
                            </li>
                        )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>
    </div>
}