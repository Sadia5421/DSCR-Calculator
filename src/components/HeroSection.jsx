import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="relative w-full bg-black text-white py-32 flex flex-col items-center justify-center text-center"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          Free <span className="italic font-light">DSCR</span> Calculator
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Calculate Your Debt Service Coverage Ratio
        </p>
        <p className="text-gray-400 mt-2 max-w-xl">
          See if your investment property qualifies for DSCR financing in 60 seconds. No signup required.
        </p>
      </section>
      <div className="min-h-screen bg-black text-white p-8 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Left Panel */}
            <div className="space-y-10">
              {/* Property Income */}
              <section>
                <h2 className="text-lg font-semibold mb-4">PROPERTY INCOME</h2>
                <label className="block text-sm mb-1">Monthly Rental Income</label>
                <input
                type="number"
                placeholder="$ 000"
                className="w-full bg-neutral-900 p-3 rounded-lg border border-neutral-700"
                />
              </section>
              {/* Property Expenses */}
              <section>
                <h2 className="text-lg font-semibold mb-4">PROPERTY EXPENSES</h2>
                {["Monthly Property Taxes", "Monthly Insurance", "Monthly HOA Fees (Optional)"]
                  .map((label) => (
                    <div key={label} className="mb-4">
                      <label className="block text-sm mb-1">{label}</label>
                      <input
                      type="number"
                      placeholder="$ 000"
                      className="w-full bg-neutral-900 p-3 rounded-lg border border-neutral-700"
                      />
                    </div>
                  ))
                }
              </section>
              {/* Debt Service */}
              <section>
                <h2 className="text-lg font-semibold mb-4">DEBT SERVICE</h2>
                <label className="block text-sm mb-1">Monthly Loan Payment (P&I)</label>
                <input
                type="number"
                placeholder="$ 000"
                className="w-full bg-neutral-900 p-3 rounded-lg border border-neutral-700"
                />
              </section>
              <button className="w-full px-6 py-2 rounded-md text-sm font-semibold text-white 
  bg-gradient-to-r from-[#8E653A] to-[#BF9A68] shadow-md tracking-wide">
              CALCULATE MY DSCR
              </button>
              <p className="text-gray-400 mt-2 max-w-xl">
                Clear & Start Over
              </p>
            </div>
            {/* Right Panel */}
            <div className="lg:col-span-2 space-y-10">
              <p className="text-gray-400 mt-2 max-w-xl">
                Enter your property details to calculate your DSCR ratio and see if you qualify your DSCR financing.
              </p>
              {/* DSCR Box */}
              <div className="bg-neutral-900 p-10 rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-5xl font-bold">1.XX</p>
                  <p className="text-sm mt-2 tracking-wide text-neutral-400">Your DSCR Score</p>
                </div>
                <div className="text-6xl">📄</div>
              </div>
              {/* Breakdown Display */}
              <div className="bg-neutral-900 p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-8">Breakdown Display</h2>
                <div className="space-y-8">
                  {/* Row */}
                  {[
                  { label: "Net Operating Income (NOI)", desc: "Rental Income - Expenses" },
                  { label: "Debt Service", desc: "Monthly Loan Payment" },
                  { label: "Monthly Cash Flow", desc: "NOI - Debt Service" },
                  { label: "Annual Cash Flow", desc: "Monthly × 12" },
                  { label: "Estimated Maximum Loan Amount", desc: "Based on your income and a 1.25 DSCR" },
                  ].map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 md:grid-cols-3 items-center border-b border-neutral-700 pb-4"
                  >
                  <p className="font-medium">{item.label}</p>
                  <p className="text-neutral-400">{item.desc}</p>
                  <p className="text-right text-xl">$</p>
                </div>
                ))}
                <button className="px-6 py-2 rounded-md text-sm font-semibold text-white 
  bg-gradient-to-r from-[#8E653A] to-[#BF9A68] shadow-md tracking-wide">
                  GET PRE-QUALIFIED WITH THIS PROPERTY
                </button>
                <button className="px-6 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#8E653A] to-[#BF9A68] shadow-md tracking-wide">
                  EMAIL MY RESULTS
                </button>
                <p className="text-gray-400 mt-2 max-w-xl">
                  Save & Compare Another Property
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;