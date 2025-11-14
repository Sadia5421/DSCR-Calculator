import React from "react";

export default function DSCRResults() {
  const cards = [
    {
      icon: "✔️",
      title: "DSCR ≥ 1.25",
      subtitle: "(Excellent)",
      description:
        "Your property generates 25% more income than needed to cover the mortgage. This is considered strong cash flow.",
      points: [
        "You'll likely qualify easily",
        "Best rates available",
        "More lender options",
        "Lower down payment possible",
        "Strong investment property",
      ],
    },
    {
      icon: "✔️",
      title: "DSCR 1.0 - 1.24",
      subtitle: "(Good)",
      description:
        "Your property generates enough income to cover the mortgage, with some cushion. This meets most lender minimums.",
      points: [
        "You likely qualify",
        "Rates may be slightly higher",
        "20–25% down may be required",
        "Acceptable cash flow",
        "Room for improvement",
      ],
    },
    {
      icon: "❌",
      title: "DSCR < 1.0",
      subtitle: "(Needs Work)",
      description:
        "Your property doesn't generate enough income to cover the mortgage payment. Most lenders won't approve.",
      points: [
        "Unlikely to qualify currently",
        "Need to improve numbers",
        "Consider larger down payment",
        "Increase rent if possible",
        "May need different property",
      ],
    },
  ];

  return (
    <div className="text-white bg-black py-20 px-6 md:px-16">
      <h2 className="text-center text-4xl font-light mb-16">
        Understanding Your <span className="italic">DSCR Results</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-neutral-900 p-10 rounded-2xl shadow-lg space-y-4"
          >
            <div className="text-4xl">{card.icon}</div>
            <h3 className="text-2xl font-semibold leading-tight">
              {card.title}
              <br />
              <span className="italic text-neutral-300">{card.subtitle}</span>
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {card.description}
            </p>
            <div className="mt-4">
              <p className="font-semibold mb-2">What This Means:</p>
              <ul className="space-y-2 text-sm text-neutral-300">
                {card.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span>▶</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}