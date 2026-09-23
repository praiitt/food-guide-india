import { Ingredient } from "@/types";

export const ingredients: Ingredient[] = [
  {
    id: "1",
    slug: "capsicum",
    name: "Capsicum",
    image: "https://images.unsplash.com/photo-1563565375-3cee081345a0?w=800&q=80",
    history:
      "Capsicum arrived in India through Portuguese trade routes in the 16th century and quickly became a staple in regional kitchens from Kashmir to Kerala.",
    namesInLanguages: {
      Hindi: "Shimla Mirch",
      Bengali: "Kashmiri Lanka",
      Gujarati: "Simla Marchan",
      Telugu: "Mirapakaya",
      Tamil: "Kudaimilagai",
      Punjabi: "Shimla Mirch",
    },
    medicinalProperties: [
      "Rich in capsaicin with anti-inflammatory properties",
      "High in vitamin C and antioxidants",
    ],
    healthBenefits: [
      "Supports immune function",
      "May aid metabolism and digestion",
      "Low-calorie vegetable for balanced diets",
    ],
    nutrition: [
      { label: "Calories", value: "31 kcal" },
      { label: "Total Fat (g)", value: "0.3", rda: "0.5%" },
      { label: "Protein (g)", value: "1.0", rda: "2%" },
      { label: "Vitamin C (mg)", value: "127.7", rda: "142%" },
      { label: "Fiber (g)", value: "2.1", rda: "8%" },
    ],
  },
  {
    id: "2",
    slug: "potato",
    name: "Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    history:
      "Introduced to India by the Portuguese, the potato is now central to dishes across every state—from Kashmiri Dum Aloo to Bengali Aloo Posto.",
    namesInLanguages: {
      Hindi: "Aloo",
      Bengali: "Alu",
      Gujarati: "Bateta",
      Telugu: "Bangaladumpa",
      Tamil: "Urulai Kizhangu",
      Punjabi: "Aloo",
    },
    medicinalProperties: [
      "Good source of potassium and vitamin B6",
      "Provides resistant starch when cooled",
    ],
    healthBenefits: [
      "Energy-dense staple carbohydrate",
      "Supports muscle and nerve function",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Calories", value: "77 kcal" },
      { label: "Total Fat (g)", value: "0.1", rda: "0.2%" },
      { label: "Protein (g)", value: "2.0", rda: "4%" },
      { label: "Potassium (mg)", value: "421", rda: "9%" },
      { label: "Vitamin C (mg)", value: "19.7", rda: "22%" },
    ],
  },
  {
    id: "3",
    slug: "tomato",
    name: "Tomato",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
    history:
      "Tomatoes came to India via Portuguese traders and transformed gravies, chutneys, and everyday home cooking across the subcontinent.",
    namesInLanguages: {
      Hindi: "Tamatar",
      Bengali: "Tomato",
      Gujarati: "Tameta",
      Telugu: "Tamata",
      Tamil: "Thakkali",
      Punjabi: "Tamatar",
    },
    medicinalProperties: [
      "Contains lycopene, a powerful antioxidant",
      "Supports heart health",
    ],
    healthBenefits: [
      "May reduce oxidative stress",
      "Hydrating and low in calories",
      "Base for nutrient-rich curries",
    ],
    nutrition: [
      { label: "Calories", value: "18 kcal" },
      { label: "Total Fat (g)", value: "0.2", rda: "0.3%" },
      { label: "Protein (g)", value: "0.9", rda: "2%" },
      { label: "Vitamin C (mg)", value: "13.7", rda: "15%" },
      { label: "Lycopene", value: "High" },
    ],
  },
];

export function getIngredientBySlug(slug: string) {
  return ingredients.find((i) => i.slug === slug);
}
