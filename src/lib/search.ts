import { recipes } from "@/data/recipes";
import { Recipe, RecipeFilters } from "@/types";

function matchesCookingTime(minutes: number, filter: string): boolean {
  switch (filter) {
    case "Under 10 min":
      return minutes < 10;
    case "10–30 min":
      return minutes >= 10 && minutes <= 30;
    case "30–60 min":
      return minutes > 30 && minutes <= 60;
    case "60–120 min":
      return minutes > 60 && minutes <= 120;
    case "Over 120 min":
      return minutes > 120;
    default:
      return true;
  }
}

export function filterRecipes(filters: RecipeFilters): Recipe[] {
  const query = filters.query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    if (query) {
      const haystack = [
        recipe.title,
        recipe.description,
        recipe.state,
        recipe.cuisine,
        ...recipe.ingredients,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    if (filters.ingredients.length > 0) {
      const hasAll = filters.ingredients.every((ing) =>
        recipe.ingredients.some((r) => r.toLowerCase() === ing.toLowerCase())
      );
      if (!hasAll) return false;
    }

    if (filters.state && filters.state !== "All India" && recipe.state !== filters.state) {
      return false;
    }

    if (filters.religion && filters.religion !== "All Religions" && recipe.religion !== filters.religion) {
      return false;
    }

    if (filters.cuisine && filters.cuisine !== "All Traditions" && recipe.cuisine !== filters.cuisine) {
      return false;
    }

    if (filters.cookingTime && filters.cookingTime !== "All Times") {
      if (!matchesCookingTime(recipe.cookingTimeMinutes, filters.cookingTime)) return false;
    }

    if (filters.cookingMethod && filters.cookingMethod !== "All Types" && recipe.cookingMethod !== filters.cookingMethod) {
      return false;
    }

    if (filters.serves && filters.serves !== "Any" && recipe.serves !== Number(filters.serves)) {
      return false;
    }

    if (filters.diet === "veg" && recipe.foodType !== "veg") return false;
    if (filters.diet === "non-veg" && recipe.foodType !== "non-veg") return false;

    return true;
  });
}

export function parseFiltersFromSearchParams(params: URLSearchParams): RecipeFilters {
  return {
    query: params.get("q") || "",
    ingredients: params.get("ingredients")?.split(",").filter(Boolean) || [],
    state: params.get("state") || "All India",
    religion: params.get("religion") || "All Religions",
    cuisine: params.get("cuisine") || "All Traditions",
    cookingTime: params.get("time") || "All Times",
    cookingMethod: params.get("method") || "All Types",
    serves: params.get("serves") || "Any",
    diet: (params.get("diet") as RecipeFilters["diet"]) || "all",
  };
}

export function buildSearchParams(filters: RecipeFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.query) params.set("q", filters.query);
  if (filters.ingredients.length) params.set("ingredients", filters.ingredients.join(","));
  if (filters.state !== "All India") params.set("state", filters.state);
  if (filters.religion !== "All Religions") params.set("religion", filters.religion);
  if (filters.cuisine !== "All Traditions") params.set("cuisine", filters.cuisine);
  if (filters.cookingTime !== "All Times") params.set("time", filters.cookingTime);
  if (filters.cookingMethod !== "All Types") params.set("method", filters.cookingMethod);
  if (filters.serves !== "Any") params.set("serves", filters.serves);
  if (filters.diet !== "all") params.set("diet", filters.diet);
  return params;
}
