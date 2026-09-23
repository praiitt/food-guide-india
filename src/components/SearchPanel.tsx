"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { QUICK_INGREDIENTS } from "@/data/filters";

export default function SearchPanel() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function toggleIngredient(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ingredients = [...selected];
    if (input.trim() && !ingredients.includes(input.trim())) {
      ingredients.push(input.trim());
    }
    const params = new URLSearchParams();
    if (ingredients.length) params.set("ingredients", ingredients.join(","));
    router.push(`/recipes?${params.toString()}`);
  }

  return (
    <section className="card overflow-hidden">
      <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-5 text-white">
        <h2 className="font-display text-2xl font-bold">Enter Your Kitchen</h2>
        <p className="mt-1 text-sm text-saffron-100">
          Get recipes from the ingredients you already have at home
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        <div>
          <p className="mb-3 text-sm font-medium text-spice-700">Quick pick ingredients</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_INGREDIENTS.map((name) => {
              const active = selected.includes(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleIngredient(name)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    active
                      ? "border-saffron-500 bg-saffron-100 text-saffron-800"
                      : "border-spice-200 bg-white text-spice-700 hover:border-saffron-300"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="ingredient-input" className="mb-2 block text-sm font-medium text-spice-700">
            Or type an ingredient (auto-suggest ready)
          </label>
          <input
            id="ingredient-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Capsicum, Paneer, Chicken..."
            className="w-full rounded-xl border border-spice-200 px-4 py-3 text-sm outline-none ring-saffron-400 focus:border-saffron-400 focus:ring-2"
            list="ingredient-suggestions"
          />
          <datalist id="ingredient-suggestions">
            {QUICK_INGREDIENTS.map((i) => (
              <option key={i} value={i} />
            ))}
          </datalist>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="btn-primary">
            Search Recipes
          </button>
          {selected.length > 0 && (
            <span className="text-sm text-spice-500">
              {selected.length} ingredient{selected.length > 1 ? "s" : ""} selected
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
