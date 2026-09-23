"use client";

import {
  COOKING_METHODS,
  COOKING_TIMES,
  CUISINES,
  RELIGIONS,
  SERVES,
  STATES,
} from "@/data/filters";
import { RecipeFilters } from "@/types";

interface FilterBarProps {
  filters: RecipeFilters;
  onChange: (filters: RecipeFilters) => void;
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-spice-500">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-spice-200 bg-white px-3 py-2 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="card p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-spice-900">Refine Your Search</h3>
        <div className="flex rounded-full border border-spice-200 bg-spice-50 p-1">
          {(["all", "veg", "non-veg"] as const).map((diet) => (
            <button
              key={diet}
              type="button"
              onClick={() => onChange({ ...filters, diet })}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition ${
                filters.diet === diet
                  ? "bg-white text-saffron-700 shadow-sm"
                  : "text-spice-600 hover:text-spice-800"
              }`}
            >
              {diet === "all" ? "Both" : diet}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <SelectField
          label="State Recipe"
          value={filters.state}
          options={STATES}
          onChange={(state) => onChange({ ...filters, state })}
        />
        <SelectField
          label="Religion Specialty"
          value={filters.religion}
          options={RELIGIONS}
          onChange={(religion) => onChange({ ...filters, religion })}
        />
        <SelectField
          label="Traditional Cuisine"
          value={filters.cuisine}
          options={CUISINES}
          onChange={(cuisine) => onChange({ ...filters, cuisine })}
        />
        <SelectField
          label="Cooking Time"
          value={filters.cookingTime}
          options={COOKING_TIMES}
          onChange={(cookingTime) => onChange({ ...filters, cookingTime })}
        />
        <SelectField
          label="Cooking Method"
          value={filters.cookingMethod}
          options={COOKING_METHODS}
          onChange={(cookingMethod) => onChange({ ...filters, cookingMethod })}
        />
        <SelectField
          label="Serves Persons"
          value={filters.serves}
          options={SERVES}
          onChange={(serves) => onChange({ ...filters, serves })}
        />
      </div>
    </div>
  );
}
