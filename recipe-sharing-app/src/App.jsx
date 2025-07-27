import React from 'react';
import { useRecipeStore } from './store/recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div style={{ padding: '20px', maxWidth: 600, margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>

      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {isFavorite(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}

      <hr style={{ margin: '40px 0' }} />

      <FavoritesList />
      <hr />
      <RecommendationsList />
    </div>
  );
}

export default App;
