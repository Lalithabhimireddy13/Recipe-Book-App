// src/RecipeList.js
import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, editRecipe, deleteRecipe }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? <p>No recipes yet. Add one!</p> : null}
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          editRecipe={editRecipe}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
