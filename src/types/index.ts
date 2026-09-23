export type FoodType = "veg" | "non-veg" | "vegan";

export type CookingMethod =
  | "Traditional"
  | "Baking"
  | "Steaming"
  | "Grill"
  | "Pressure Cook"
  | "Slow Cook";

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  state: string;
  religion: string;
  cuisine: string;
  cookingTimeMinutes: number;
  cookingMethod: CookingMethod;
  serves: number;
  foodType: FoodType;
  ingredients: string[];
  steps: string[];
  author: string;
  authorVerified: boolean;
  rating: number;
  reviewCount: number;
  prepTimeMinutes: number;
  videoUrl?: string;
}

export interface Ingredient {
  id: string;
  slug: string;
  name: string;
  image: string;
  history: string;
  namesInLanguages: Record<string, string>;
  medicinalProperties: string[];
  healthBenefits: string[];
  nutrition: { label: string; value: string; rda?: string }[];
}

export type DietFilter = "all" | "veg" | "non-veg";

export interface RecipeFilters {
  query: string;
  ingredients: string[];
  state: string;
  religion: string;
  cuisine: string;
  cookingTime: string;
  cookingMethod: string;
  serves: string;
  diet: DietFilter;
}
