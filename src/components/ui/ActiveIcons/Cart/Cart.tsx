import React, { useContext } from 'react';
import './CartStyle.scss';
import { StateContext } from 'src/store';

const Cart = () => {
  const { cart } = useContext(StateContext);
  const ItemsInCart = cart.reduce((a, b) => a + b.amount, 0);
  const isCart = ItemsInCart > 0;

  return (
    <div className="cart">
      <div className="cart__icon">
        <img src="icons/Cart.png" alt="cart" className="cart__icon--img" />
        {isCart && <div className="cart__icon--counter">{ItemsInCart}</div>}
      </div>
    </div>
  );
};

export default Cart;
