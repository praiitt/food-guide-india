import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/types";
import RatingStars from "./RatingStars";

export default function RecipeCard({ recipe, showAdAfter }: { recipe: Recipe; showAdAfter?: boolean }) {
  return (
    <>
      <article className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
        <div className="grid gap-4 p-4 md:grid-cols-[160px_1fr_auto] md:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-spice-100 md:mx-0">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="160px"
            />
            <span
              className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                recipe.foodType === "veg"
                  ? "bg-leaf-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {recipe.foodType}
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-spice-500">
              <span>{recipe.state}</span>
              <span>•</span>
              <span>{recipe.cuisine}</span>
              <span>•</span>
              <span>{recipe.cookingTimeMinutes} min</span>
            </div>
            <h3 className="mt-1 font-display text-xl font-bold text-spice-900">
              <Link href={`/recipes/${recipe.slug}`} className="hover:text-saffron-700">
                {recipe.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-spice-600">
              {recipe.description}
            </p>
            <p className="mt-3 text-xs text-spice-500">
              Submitted by{" "}
              <span className="font-medium text-spice-700">
                {recipe.author}
                {recipe.authorVerified && " ✓"}
              </span>
            </p>
            <Link
              href={`/recipes/${recipe.slug}`}
              className="mt-3 inline-flex text-sm font-semibold text-saffron-700 hover:text-saffron-800"
            >
              View recipe details →
            </Link>
          </div>

          <div className="flex flex-row items-center justify-between gap-4 border-t border-spice-100 pt-3 md:flex-col md:items-end md:border-t-0 md:pt-0">
            <RatingStars rating={recipe.rating} count={recipe.reviewCount} />
            <button
              type="button"
              className="rounded-full border border-spice-200 px-3 py-1 text-xs font-medium text-spice-600 hover:border-saffron-300 hover:text-saffron-700"
              title="Share recipe"
            >
              Share ↗
            </button>
          </div>
        </div>
      </article>

      {showAdAfter && (
        <div className="rounded-xl border border-dashed border-saffron-300 bg-saffron-50 px-4 py-6 text-center text-sm font-medium text-saffron-700">
          Advertisement Space
        </div>
      )}
    </>
  );
}
