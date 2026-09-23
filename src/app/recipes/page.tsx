"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FilterBar from "@/components/FilterBar";
import RecipeCard from "@/components/RecipeCard";
import { buildSearchParams, filterRecipes, parseFiltersFromSearchParams } from "@/lib/search";
import { RecipeFilters } from "@/types";

function RecipesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = parseFiltersFromSearchParams(searchParams);
  const [filters, setFilters] = useState<RecipeFilters>(initial);

  const results = useMemo(() => filterRecipes(filters), [filters]);

  function applyFilters(next: RecipeFilters) {
    setFilters(next);
    const params = buildSearchParams(next);
    router.replace(`/recipes?${params.toString()}`, { scroll: false });
  }

  const title = filters.state !== "All India"
    ? `Recipes of ${filters.state}`
    : "All Recipes";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="section-title">{title}</h1>
        <p className="mt-2 text-spice-600">
          {results.length} recipe{results.length !== 1 ? "s" : ""} found
          {filters.ingredients.length > 0 && (
            <> matching {filters.ingredients.join(", ")}</>
          )}
        </p>
      </div>

      <div className="space-y-6">
        <FilterBar filters={filters} onChange={applyFilters} />

        <div className="space-y-4">
          {results.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="font-display text-xl font-bold text-spice-900">No recipes found</p>
              <p className="mt-2 text-spice-600">Try adjusting your filters or search with fewer ingredients.</p>
            </div>
          ) : (
            results.map((recipe, index) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                showAdAfter={index === 1 || index === 7}
              />
            ))
          )}
        </div>

        {results.length > 0 && (
          <p className="text-center text-sm text-spice-500">
            Showing top results ranked by chef verification and ratings · Show more coming soon
          </p>
        )}
      </div>
    </div>
  );
}

export default function RecipesPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-spice-600">Loading recipes...</div>}>
      <RecipesContent />
    </Suspense>
  );
}
