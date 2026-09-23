import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-spice-200 bg-spice-900 text-spice-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-bold text-white">Food Guide India</p>
          <p className="mt-3 text-sm leading-relaxed text-spice-200">
            Your gateway to India&apos;s regional recipes, ingredients, and culinary heritage—
            from Kashmiri Dum Aloo to Gujarati Dhokla.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-spice-200">
            <li><Link href="/recipes" className="hover:text-saffron-300">All Recipes</Link></li>
            <li><Link href="/ingredients" className="hover:text-saffron-300">Ingredients</Link></li>
            <li><Link href="/chefs" className="hover:text-saffron-300">Master Chefs</Link></li>
            <li><Link href="/add-recipe" className="hover:text-saffron-300">Submit a Recipe</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Coming Soon</p>
          <ul className="mt-3 space-y-2 text-sm text-spice-200">
            <li>Hotels & Restaurants</li>
            <li>Nutritional Database (USDA)</li>
            <li>Recipe Video Library</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-spice-800 py-4 text-center text-xs text-spice-400">
        © {new Date().getFullYear()} Food Guide India (FGI). All rights reserved.
      </div>
    </footer>
  );
}
