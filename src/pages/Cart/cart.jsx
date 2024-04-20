import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const deliveryFee = 2
  const navigate = useNavigate()
  const total = getTotalCartAmount() + Number(deliveryFee)
  

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p> ${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            
              {getTotalCartAmount()=== 0 ? <></> :
              <>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount()===0 ? 0 : deliveryFee}</p>
            </div>
              </>
              }
              
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0 ? 0 :total} </p>
            </div>
          </div>
          <button onClick={() =>navigate('/order') }>PROCEED TO CHECKOUT</button>
        </div>
      

      <div className="cart-promocode"></div>
      <div>
        <p>If you have a promo code, Enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="Promo Code Here" />
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default cart;
