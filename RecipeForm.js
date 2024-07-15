
import React, { useState, useEffect } from 'react';
import styles from './styles/RecipeForm.module.css';

const RecipeForm = ({ addRecipe, updateRecipe, selectedRecipe, setSelectedRecipe }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  useEffect(() => {
    if (selectedRecipe) {
      setFormData({
        title: selectedRecipe.title,
        ingredients: selectedRecipe.ingredients,
        instructions: selectedRecipe.instructions
      });
    } else {
      setFormData({
        title: '',
        ingredients: '',
        instructions: ''
      });
    }
  }, [selectedRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.ingredients && formData.instructions) {
      if (selectedRecipe) {
        updateRecipe({ ...selectedRecipe, ...formData });
      } else {
        addRecipe(formData);
      }
      setFormData({ title: '', ingredients: '', instructions: '' });
      setSelectedRecipe(null);
    }
  };

  return (
    <div className={styles.recipeForm}>
      <h2>{selectedRecipe ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <label>Ingredients:</label>
        <textarea
          value={formData.ingredients}
          onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
          required
        ></textarea>
        <label>Instructions:</label>
        <textarea
          value={formData.instructions}
          onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
          required
        ></textarea>
        <button type="submit">{selectedRecipe ? 'Update Recipe' : 'Add Recipe'}</button>
      </form>
    </div>
  );
};

export default RecipeForm;
