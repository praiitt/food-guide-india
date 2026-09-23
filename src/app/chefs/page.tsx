const chefs = [
  { name: "Chef Meera Kapoor", specialty: "Kashmiri & North Indian", verified: true, recipes: 24 },
  { name: "Chef Harpreet Singh", specialty: "Punjabi Classics", verified: true, recipes: 31 },
  { name: "Chef Anjali Shah", specialty: "Gujarati Vegetarian", verified: true, recipes: 18 },
  { name: "Chef Imran Khan", specialty: "Mughlai & Awadhi", verified: true, recipes: 22 },
  { name: "Chef Lakshmi Iyer", specialty: "South Indian", verified: true, recipes: 27 },
];

export default function ChefsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="section-title">Master Chefs</h1>
      <p className="mt-2 text-spice-600">
        Learn from verified and celebrity chefs who preserve India&apos;s culinary heritage.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <article key={chef.name} className="card p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-400 to-saffron-600 text-xl font-bold text-white">
              {chef.name.split(" ")[1]?.[0] || "C"}
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-spice-900">
              {chef.name}
              {chef.verified && <span className="ml-2 text-sm text-leaf-600">✓</span>}
            </h2>
            <p className="mt-1 text-sm text-spice-500">{chef.specialty}</p>
            <p className="mt-3 text-sm font-medium text-saffron-700">{chef.recipes} recipes published</p>
          </article>
        ))}
      </div>
    </div>
  );
}
