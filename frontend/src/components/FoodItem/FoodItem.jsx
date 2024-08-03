import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

    // Log the ID prop to check its value

    const handleAddToCart = () => {
        addToCart(id);
    };

    // Rest of the component code...
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img src={url+"/images/"+image} alt="" className='food-item-img'/>
                {!cartItems[id]
                    ? (<img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt="" />)
                    : (<div className="food-item-counter">
                            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} onClick={handleAddToCart} alt="" />
                        </div>)
                }
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
