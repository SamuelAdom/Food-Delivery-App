import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list = [] } = useContext(StoreContext); 


    // Filter food items based on category
    const filteredFoodList = category === 'All' 
        ? food_list 
        : food_list.filter(item => item.category === category);

    // Debugging: Log the filtered food list
    console.log('filteredFoodList:', filteredFoodList);

    return (
        <div className='food-display' id='food-display'>
            <h2>Discover Delicious Meals Nearby</h2>
            <div className="food-display-list">
                {filteredFoodList.length > 0 ? (
                    filteredFoodList.map((item) => (
                        <FoodItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                ) : (
                    <p>No food items available</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;