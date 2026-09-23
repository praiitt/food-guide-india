export default function AddRecipePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="section-title">Add Your Recipe</h1>
      <p className="mt-4 text-spice-600">
        Share your family recipe with the Food Guide India community. Verified chefs get featured placement.
      </p>
      <form className="mt-8 space-y-4 card p-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-spice-700">Recipe Title</label>
          <input id="title" type="text" placeholder="e.g. Potato Kashmiri Dum" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-spice-700">Description</label>
          <textarea id="desc" rows={4} placeholder="Brief description (~100 words)" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-spice-700">State</label>
            <input id="state" type="text" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
          </div>
          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-spice-700">Cuisine</label>
            <input id="cuisine" type="text" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
          </div>
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-spice-700">Ingredients (comma-separated)</label>
          <input id="ingredients" type="text" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-spice-700">Cooking Steps</label>
          <textarea id="steps" rows={6} className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <button type="submit" className="btn-primary w-full">Submit Recipe</button>
      </form>
    </div>
  );
}
