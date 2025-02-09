import React, { useEffect, useState } from 'react';
import './SinglePage.css'; 
import apiRequest from '../../utils/apiRequest';
import { useParams } from 'react-router-dom';

const DishPage = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null); 

  useEffect(() => {
    const fetchDish = async () => {
      try {

        const res = await apiRequest.get(`/dish/${id}`);
        console.log(res.data);
        setDish(res.data);
      } catch (error) {
        console.error('Error fetching dish:', error);
      }
    };

    if (id) {
      fetchDish();
    }
  }, [id]);

  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dish-page">
      <div className="dish-container">
        <h1 className="dish-title">{dish.dishname}</h1>
        <img src={dish.imageUrl} alt={dish.dishname} className="dish-image" />
        <div className="dish-details">
          <p className="dish-description">{dish.desc}</p>
          <p className="dish-price">Price: Rs {dish.price}</p>
          <p className="dish-ingredients">Ingredients: {dish.ingredients}</p>
          
          <p className="dish-calories"><strong>Calories:</strong> {dish.calories} kcal</p>
          <p className="dish-prepTime"><strong>Preparation Time:</strong> {dish.prepTime}</p>
        </div>
      </div>
    </div>
  );
};

export default DishPage;
