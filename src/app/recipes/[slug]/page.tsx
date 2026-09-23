import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RatingStars from "@/components/RatingStars";
import RecipeCard from "@/components/RecipeCard";
import { getIngredientBySlug } from "@/data/ingredients";
import { getRecipeBySlug, getRelatedRecipes, getTopRecipes } from "@/data/recipes";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const related = getRelatedRecipes(recipe);
  const topRecipes = getTopRecipes(4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <article>
          <div className="card overflow-hidden">
            <div className="grid gap-6 p-6 md:grid-cols-[280px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-spice-100">
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-spice-500">
                  <span>{recipe.state}</span>
                  <span>•</span>
                  <span>{recipe.cuisine}</span>
                  <span>•</span>
                  <span className={recipe.foodType === "veg" ? "text-leaf-600" : "text-red-600"}>
                    {recipe.foodType}
                  </span>
                </div>
                <h1 className="mt-2 font-display text-3xl font-bold text-spice-900 md:text-4xl">
                  {recipe.title}
                </h1>
                <p className="mt-4 leading-relaxed text-spice-600">{recipe.description}</p>
                <p className="mt-4 text-sm text-spice-500">
                  Submitted by{" "}
                  <span className="font-semibold text-spice-800">
                    {recipe.author}
                    {recipe.authorVerified && " ✓ Verified Chef"}
                  </span>
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <RatingStars rating={recipe.rating} count={recipe.reviewCount} />
                  <button type="button" className="btn-secondary text-xs">
                    Share · Want this recipe? Come to my place!
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-spice-100 bg-spice-50 px-6 py-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase text-spice-500">Prep Time</p>
                <p className="font-semibold text-spice-900">{recipe.prepTimeMinutes} min</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-spice-500">Cook Time</p>
                <p className="font-semibold text-spice-900">{recipe.cookingTimeMinutes} min</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-spice-500">Serves</p>
                <p className="font-semibold text-spice-900">{recipe.serves} portions</p>
              </div>
            </div>
          </div>

          <section className="mt-8 card p-6">
            <h2 className="font-display text-xl font-bold text-spice-900">Ingredients</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {recipe.ingredients.map((ing) => {
                const slug = ing.toLowerCase().replace(/\s+/g, "-");
                const known = getIngredientBySlug(slug);
                return (
                  <li key={ing}>
                    {known ? (
                      <Link href={`/ingredients/${known.slug}`} className="text-saffron-700 hover:underline">
                        {ing}
                      </Link>
                    ) : (
                      <span className="text-spice-700">{ing}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="font-display text-xl font-bold text-spice-900">Steps</h2>
            <ol className="mt-4 space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-sm font-bold text-saffron-800">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-spice-700">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="font-display text-xl font-bold text-spice-900">Reviews & Comments</h2>
            <p className="mt-2 text-sm text-spice-500">Community reviews coming soon. Be the first to share your experience!</p>
          </section>
        </article>

        <aside className="space-y-6">
          <div className="card p-5">
            <h3 className="font-display font-bold text-spice-900">Top Recipes</h3>
            <ul className="mt-4 space-y-3">
              {topRecipes.map((r) => (
                <li key={r.id}>
                  <Link href={`/recipes/${r.slug}`} className="text-sm font-medium text-spice-700 hover:text-saffron-700">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-dashed border-saffron-300 bg-saffron-50 p-6 text-center text-sm font-medium text-saffron-700">
            Advertisement Space
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-spice-900">Related Recipes</h2>
          <div className="mt-6 space-y-4">
            {related.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
