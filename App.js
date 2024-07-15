
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import styles from './styles/App.module.css';

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: Date.now().toString() }]);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)));
    setSelectedRecipe(null);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    setSelectedRecipe(null);
  };

  const editRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Recipe Book</h1>
      </header>
      <div className={styles.appContainer}>
        <RecipeList recipes={recipes} editRecipe={editRecipe} deleteRecipe={deleteRecipe} />
        <RecipeForm
          addRecipe={addRecipe}
          updateRecipe={updateRecipe}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      </div>
    </div>
  );
};

export default App;
