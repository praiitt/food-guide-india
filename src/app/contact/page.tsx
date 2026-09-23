export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="section-title">Contact Us</h1>
      <p className="mt-4 text-spice-600">
        Have a recipe to share, feedback, or a partnership inquiry? We&apos;d love to hear from you.
      </p>
      <form className="mt-8 space-y-4 card p-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-spice-700">Name</label>
          <input id="name" type="text" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-spice-700">Email</label>
          <input id="email" type="email" className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-spice-700">Message</label>
          <textarea id="message" rows={5} className="mt-1 w-full rounded-lg border border-spice-200 px-4 py-2.5 text-sm outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200" />
        </div>
        <button type="submit" className="btn-primary w-full">Send Message</button>
      </form>
    </div>
  );
}
