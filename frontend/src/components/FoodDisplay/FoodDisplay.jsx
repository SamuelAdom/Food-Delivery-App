import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list = [] } = useContext(StoreContext); // Ensure default value

    // Debugging: Log the food_list and category
    console.log('food_list:', food_list);
    console.log('category:', category);

    // Filter food items based on category
    const filteredFoodList = category === 'All' 
        ? food_list 
        : food_list.filter(item => item.category === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filteredFoodList.map((item) => (
                    <FoodItem 
                        key={item._id} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
