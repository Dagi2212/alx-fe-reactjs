import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ ALX requires this exact syntax
    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
