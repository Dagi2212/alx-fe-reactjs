import { create } from 'zustand';

<<<<<<< HEAD
export const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
=======
import create from 'zustand';


export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));


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

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)),
    })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
>>>>>>> ec6f330368adcff56bfb003bf44a388edd995cd8
      ),
    })),
}));
