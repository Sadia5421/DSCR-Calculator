import React from "react";

export default function ImproveDSCR() {
  const items = [
    {
      icon: "📈",
      title: "Increase Rental Income",
      points: [
        "Raise rents to market rate",
        "Add amenities (washer/dryer, parking, storage)",
        "Improve property to justify higher rent",
        "Add income sources (coin laundry, parking fees)",
        "Consider short-term rental (Airbnb) if higher income",
      ],
    },
    {
      icon: "💲",
      title: "Reduce Property Expenses",
      points: [
        "Shop insurance for better rates",
        "Appeal property tax assessment",
        "Negotiate lower HOA fees (if possible)",
        "Energy-efficient upgrades to reduce utilities",
        "Self-manage to eliminate PM fees (for calculation purposes)",
      ],
    },
    {
      icon: "💳",
      title: "Increase Down Payment",
      points: [
        "Larger down payment = smaller loan = lower payment",
        "20–25% down significantly improves DSCR",
        "Use working capital for additional down payment",
        "Consider using proceeds from another property",
      ],
    },
  ];

  return (
    <div className="text-white bg-black py-20 px-6 md:px-16">
      <h2 className="text-center text-4xl font-light mb-16">
        5 Ways to <span className="italic">Improve</span> Your DSCR
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-neutral-900 p-10 rounded-2xl shadow-lg space-y-4"
          >
            <div className="text-4xl">{item.icon}</div>

            <h3 className="text-2xl italic font-semibold">{item.title}</h3>

            <ul className="space-y-2 text-sm text-neutral-300">
              {item.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span>▶</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}