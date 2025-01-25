// import React from 'react';
// import './DishPage.css'; // Make sure to create the corresponding CSS file for styling

// const DishPage = ({ dish }) => {
//   return (
//     <div className="dish-page">
//       <div className="dish-container">
//         <h1 className="dish-title">{dish.name}</h1>
//         <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
//         <div className="dish-details">
//           <p className="dish-description">{dish.description}</p>
//           <p className="dish-price">Price: ${dish.price}</p>
//           <p className="dish-ingredients">Ingredients: {dish.ingredients}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishPage;


import React from 'react';
import './SinglePage.css'; // Ensure this CSS file exists


const DishPage = () => {
  // Dummy data for a single dish
  const dish = {
    name: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with a rich and savory meat sauce, made with beef, tomatoes, garlic, and a blend of herbs.",
    price: 12.99,
    ingredients: "Pasta, Beef, Tomatoes, Garlic, Herbs, Olive Oil, Parmesan Cheese",
    calories: 600,
    prepTime: "30 minutes",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  };

  const handleAddToCart = () => {
    // This will be where we handle adding the dish to the cart (you can later link it to a global state or context)
    console.log(`${dish.name} added to cart!`);
  };

  return (
    <div className="dish-page">
      <div className="dish-container">
        <h1 className="dish-title">{dish.name}</h1>
        <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
        <div className="dish-details">
          <p className="dish-description">{dish.description}</p>
          <p className="dish-price">Price: ${dish.price}</p>
          <p className="dish-ingredients"><strong>Ingredients:</strong> {dish.ingredients}</p>
          <p className="dish-calories"><strong>Calories:</strong> {dish.calories} kcal</p>
          <p className="dish-prepTime"><strong>Preparation Time:</strong> {dish.prepTime}</p>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishPage;



