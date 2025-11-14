export default function OtherCalculators() {
  const calculators = [
    {
      title: "Cash-on-Cash Return Calculator",
      desc: "Calculate your annual return on actual cash invested in the property.",
      icon: "％",
    },
    {
      title: "Cap Rate Calculator",
      desc: "Determine the capitalization rate and property value for investment analysis.",
      icon: "⭐",
    },
    {
      title: "BRRRR Calculator",
      desc: "Calculate capital recycling and returns for the Buy-Rehab-Rent-Refinance-Repeat strategy.",
      icon: "🔄",
    },
    {
      title: "Rental Property Analyzer",
      desc: "Comprehensive analysis tool with all metrics: DSCR, Cap Rate, Cash-on-Cash, IRR, and more.",
      icon: "🔍",
    },
    {
      title: "Fix & Flip Calculator",
      desc: "Calculate profitability for house flipping projects including purchase, rehab, and sale costs.",
      icon: "🏚️",
    },
    {
      title: "ARV Calculator",
      desc: "Estimate After Repair Value using comparable sales data for fix and flip analysis.",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-serif text-center mb-12">
          Other Investment{" "}
          <span className="italic text-gray-300">Property Calculators</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-amber-600 transition"
            >
              <div className="text-5xl mb-6 text-amber-400">{item.icon}</div>

              <h2 className="text-2xl font-serif mb-4">{item.title}</h2>

              <p className="text-gray-300 text-sm mb-8">{item.desc}</p>

              <button className="bg-gradient-to-r from-[#8E653A] to-[#BF9A68] bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-lg text-sm">
                USE CALCULATOR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}