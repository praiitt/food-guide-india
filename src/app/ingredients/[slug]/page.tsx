import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIngredientBySlug } from "@/data/ingredients";

export default async function IngredientDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);
  if (!ingredient) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/ingredients" className="text-sm font-medium text-saffron-700 hover:underline">
        ← All Ingredients
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[360px_1fr]">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-spice-100">
          <Image src={ingredient.image} alt={ingredient.name} fill className="object-cover" priority />
        </div>

        <div>
          <h1 className="font-display text-4xl font-bold text-spice-900">{ingredient.name}</h1>
          <p className="mt-4 leading-relaxed text-spice-600">{ingredient.history}</p>

          <section className="mt-8 card p-6">
            <h2 className="font-display text-lg font-bold">Names in Different Languages</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {Object.entries(ingredient.namesInLanguages).map(([lang, name]) => (
                <div key={lang} className="rounded-lg bg-spice-50 px-4 py-3">
                  <dt className="text-xs font-semibold uppercase text-spice-500">{lang}</dt>
                  <dd className="font-medium text-spice-900">{name}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="font-display text-lg font-bold">Medicinal Properties</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-spice-700">
            {ingredient.medicinalProperties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="font-display text-lg font-bold">Health Benefits</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-spice-700">
            {ingredient.healthBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 card overflow-hidden">
        <div className="border-b border-spice-100 bg-spice-50 px-6 py-4">
          <h2 className="font-display text-lg font-bold">Nutritional Values (USDA-based)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-spice-100 text-left text-spice-500">
                <th className="px-6 py-3 font-semibold">Nutrient</th>
                <th className="px-6 py-3 font-semibold">Value</th>
                <th className="px-6 py-3 font-semibold">% RDA</th>
              </tr>
            </thead>
            <tbody>
              {ingredient.nutrition.map((row) => (
                <tr key={row.label} className="border-b border-spice-50">
                  <td className="px-6 py-3 text-spice-800">{row.label}</td>
                  <td className="px-6 py-3 text-spice-700">{row.value}</td>
                  <td className="px-6 py-3 text-spice-600">{row.rda || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
