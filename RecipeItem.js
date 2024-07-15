// src/RecipeItem.js
import React from 'react';

const RecipeItem = ({ recipe, editRecipe, deleteRecipe }) => {
  return (
    <div className="recipe-item">
      <h3>{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <div className="recipe-actions">
        <button onClick={() => editRecipe(recipe)}>Edit</button>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeItem;
