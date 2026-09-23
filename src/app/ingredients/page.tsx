import Image from "next/image";
import Link from "next/link";
import { ingredients } from "@/data/ingredients";

export default function IngredientsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="section-title">Ingredients</h1>
      <p className="mt-2 max-w-2xl text-spice-600">
        Explore the history, regional names, health benefits, and nutritional values of
        ingredients used across Indian kitchens.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ingredients.map((ing) => (
          <Link
            key={ing.id}
            href={`/ingredients/${ing.slug}`}
            className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] bg-spice-100">
              <Image src={ing.image} alt={ing.name} fill className="object-cover transition group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-bold text-spice-900 group-hover:text-saffron-700">
                {ing.name}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm text-spice-600">{ing.history}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
