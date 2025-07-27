import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    // Example recipes, replace or load dynamically as needed
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta.' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy and savory.' },
    { id: 3, title: 'Avocado Toast', description: 'Simple and healthy.' },
  ],
  favorites: [],

  // Add a recipe ID to favorites if not already there
  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return {};
      return { favorites: [...state.favorites, recipeId] };
    }),

  // Remove a recipe ID from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  // Mock recommendation generator based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // For demo: Recommend recipes not favorited but similar in some way
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
