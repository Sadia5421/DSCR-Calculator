export default function DscrFormula() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center py-16 px-6">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-serif text-center mb-12">
          The DSCR Formula:
          <span className="italic text-gray-300 ml-2">
            Step-by-Step Breakdown
          </span>
        </h1>

        {/* Step List */}
        <div className="relative border-l border-gray-700 ml-6">
          {/* Step 1 */}
          <div className="mb-16 ml-10">
            <div className="absolute -left-5 bg-gradient-to-r from-[#8E653A] to-[#BF9A68] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
              01
            </div>
            <h2 className="text-2xl font-serif mb-4">
              Calculate Net Operating Income (NOI)
            </h2>

            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monthly Rental Income:</span>
                <span className="text-white">$3,000</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Property Taxes:</span>
                <span className="text-white">-$250</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Insurance:</span>
                <span className="text-white">-$150</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly HOA:</span>
                <span className="text-white">-$100</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-3">
                <span>Net Operating Income (NOI):</span>
                <span className="text-white">$2,500</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-16 ml-10">
            <div className="absolute -left-5 bg-gradient-to-r from-[#8E653A] to-[#BF9A68] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
              02
            </div>

            <h2 className="text-2xl font-serif mb-4">
              Identify Total Debt Service
            </h2>

            <div className="flex justify-between text-gray-300">
              <span>Monthly Loan Payment (P&I)</span>
              <span className="text-white">$2,000</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="ml-10">
            <div className="absolute -left-5 bg-gradient-to-r from-[#8E653A] to-[#BF9A68] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
              03
            </div>

            <h2 className="text-2xl font-serif mb-4">Calculate DSCR</h2>

            <div className="text-gray-300 space-y-2">
              <div className="flex justify-between">
                <span>DSCR =</span>
                <span className="text-white">NOI ÷ Debt Service</span>
              </div>
              <div className="flex justify-between">
                <span>DSCR =</span>
                <span className="text-white">$2,500 ÷ $2,000</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>DSCR =</span>
                <span className="text-white">1.25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm mt-12">
          <span className="font-semibold">Interpretation:</span> A DSCR of 1.25
          means the property generates $1.25 for every $1.00 needed to cover the
          mortgage. This is a 25% cushion, which lenders view favorably.
        </p>
        <p className="text-gray-400 text-sm mt-12">
          <span className="font-semibold">What’s NOT Included in DSCR: </span>Maintenance and repairs, 
          Vacancy costs, Property management fees, CapEx reserves & Utilities (unless tenant-paid)
        </p>
        <p className="text-gray-400 text-sm mt-12">
          <span className="font-semibold">Note: </span>While DSCR only considers taxes, 
          insurance, and HOA as expenses, smart investors account for ALL expenses when analyzing 
          deals. Use our Rental Property Analyzer for comprehensive analysis.
        </p>
      </div>
    </div>
  );
}