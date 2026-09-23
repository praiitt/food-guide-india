import Image from "next/image";
import Link from "next/link";
import SearchPanel from "@/components/SearchPanel";
import RecipeCard from "@/components/RecipeCard";
import { getTopRecipes } from "@/data/recipes";
import { STATES } from "@/data/filters";

export default function HomePage() {
  const topRecipes = getTopRecipes(3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-spice-900 via-spice-800 to-saffron-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">
              Welcome to FGI
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              India&apos;s flavours,
              <span className="block text-saffron-300">one recipe at a time</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-spice-100">
              Food Guide India is your companion for regional recipes, ingredient wisdom,
              and culinary traditions—from Kashmiri Dum Aloo to Gujarati Dhokla.
              Search by what&apos;s in your kitchen, filter by state or cuisine, and cook with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/recipes" className="btn-primary">
                Browse All Recipes
              </Link>
              <Link href="/add-recipe" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Share Your Recipe
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Regional Recipes", value: "500+" },
              { label: "Indian States", value: "28+" },
              { label: "Ingredients", value: "200+" },
              { label: "Master Chefs", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-bold text-saffron-300">{stat.value}</p>
                <p className="mt-1 text-sm text-spice-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-4">
            <h2 className="font-display text-xl font-bold text-spice-900">Recipe Menu</h2>
            <nav className="card divide-y divide-spice-100">
              {[
                { href: "/recipes", label: "All Recipes" },
                { href: "/recipes?state=Punjab", label: "State Recipes" },
                { href: "/recipes?religion=Hindu", label: "Religion Specialty" },
                { href: "/recipes?cuisine=Mughlai", label: "Traditional Cuisine" },
                { href: "/recipes?time=30%E2%80%9360+min", label: "Cooking Time" },
                { href: "/recipes?method=Steaming", label: "Cooking Method" },
                { href: "/recipes?serves=4", label: "Serves Persons" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-spice-700 transition hover:bg-saffron-50 hover:text-saffron-800"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <SearchPanel />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Explore by State</h2>
              <p className="mt-2 text-spice-600">Same recipe, many homes—discover regional variations</p>
            </div>
            <Link href="/recipes" className="hidden text-sm font-semibold text-saffron-700 sm:block">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {STATES.filter((s) => s !== "All India").slice(0, 8).map((state) => (
              <Link
                key={state}
                href={`/recipes?state=${encodeURIComponent(state)}`}
                className="group card p-5 transition hover:-translate-y-1 hover:border-saffron-300 hover:shadow-md"
              >
                <p className="font-display text-lg font-bold text-spice-900 group-hover:text-saffron-700">
                  {state}
                </p>
                <p className="mt-1 text-sm text-spice-500">Regional specialities →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="section-title">Top Rated Recipes</h2>
        <p className="mt-2 text-spice-600">Curated by celebrity chefs and community ratings</p>
        <div className="mt-8 space-y-4">
          {topRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} showAdAfter={index === 1} />
          ))}
        </div>
      </section>
    </>
  );
}
