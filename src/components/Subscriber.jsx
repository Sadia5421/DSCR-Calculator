export default function PreQualifiedSection() {
  return (
    <div className="bg-black text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full">

        <div className="rounded-[40px] bg-gradient-to-r from-[#b88a54] to-[#8d6232] text-center py-20 px-6">
          
          {/* Main Heading */}
          <h1 className="text-4xl font-serif mb-4">
            Ready to Get{" "}
            <span className="italic">Pre-Qualified?</span>
          </h1>

          {/* Subheading */}
          <p className="text-black/80 mb-10">
            Use your DSCR calculation to get pre-qualified for investment property financing.
          </p>

          {/* Primary Button */}
          <button className="bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-neutral-900 transition">
            GET PRE-QUALIFIED NOW
          </button>

          {/* Secondary Button */}
          <div className="mt-8">
            <button className="border border-black text-black font-semibold px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 transition">
              DOWNLOAD DEAL ANALYSIS SPREADSHEET
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-black/80 mt-8 text-sm">
            Questions? Call Phone +1 917-938-7126 or{" "}
            <span className="underline cursor-pointer">
              Book a Strategy Call
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}