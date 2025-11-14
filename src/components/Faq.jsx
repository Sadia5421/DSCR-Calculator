import { useState } from "react";

export default function DscrFaq() {
  const leftFaq = [
    "Is this calculator accurate?",
    "How do lenders determine rental income for DSCR?",
    "What if my DSCR is below 1.0?"
  ];

  const rightFaq = [
    "Why doesn't the calculator include maintenance, ...",
    "Can I use this for a property I don’t own yet?",
    "Does a higher DSCR always mean a better investment?"
  ];

  const [open, setOpen] = useState(null);

  const toggle = (index, side) => {
    const key = `${side}-${index}`;
    setOpen(open === key ? null : key);
  };

  return (
    <div className="bg-black text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-serif text-center mb-16">
          DSCR Calculator{" "}
          <span className="italic text-gray-400">FAQ</span>
        </h1>
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-10">
            {leftFaq.map((q, idx) => {
              const id = `left-${idx}`;
              const isOpen = open === id;
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx, "left")}
                  className="cursor-pointer border-b border-neutral-800 pb-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{q}</span>
                    <span className="text-xl text-gray-300 transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ▼
                    </span>
                  </div>

                  {isOpen && (
                    <p className="text-gray-400 text-sm mt-3">
                      Lorem ipsum placeholder answer. Replace with actual FAQ content.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {/* Right Column */}
          <div className="space-y-10">
            {rightFaq.map((q, idx) => {
              const id = `right-${idx}`;
              const isOpen = open === id;
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx, "right")}
                  className="cursor-pointer border-b border-neutral-800 pb-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{q}</span>
                    <span className="text-xl text-gray-300 transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ▼
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-gray-400 text-sm mt-3">
                      Lorem ipsum placeholder answer. Replace with actual FAQ content.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}