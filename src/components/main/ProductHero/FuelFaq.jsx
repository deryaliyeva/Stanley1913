import { useState } from "react";

function FuelFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="space-y-4">

        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <button
            className="flex justify-between w-full text-left font-medium text-gray-800"
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            HOW SHOULD I CLEAN STANLEY QUENCHERS?
            <span>{openIndex === 0 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 0 && (
            <p className="mt-2 text-gray-600 text-sm">
              Our stainless-steel metal Adventure Quencher Travel Tumblers are dishwasher safe. 
              If you prefer, you can hand wash your travel tumbler with mild dish soap and warm water. 
              To learn more, see our complete cleaning instructions.
            </p>
          )}
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <button
            className="flex justify-between w-full text-left font-medium text-gray-800"
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
          >
            WHAT ARE THE FEATURES OF THE FLOWSTATE™ QUENCHER H2.0 TUMBLERS?
            <span>{openIndex === 1 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 1 && (
            <p className="mt-2 text-gray-600 text-sm">
              Our newest FlowState™ Quencher H2.0 Tumbler collection is constructed of 90% recycled stainless-steel metal. 
              The advanced FlowState™ lid includes silicone gaskets that help prevent leaks. 
              However, these travel tumblers are not fully leakproof. 
              The 30-oz and 40-oz sizes feature an ergonomic handle and fit car cup holders.
            </p>
          )}
        </div>

        <div className="border rounded-lg p-4 bg-white shadow-sm">
          <button
            className="flex justify-between w-full text-left font-medium text-gray-800"
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
          >
            MY QUENCHER HAS A HANDLE. HOW DO I ADJUST THE LID FOR LEFT- OR RIGHT-HANDED USE?
            <span>{openIndex === 2 ? "▲" : "▼"}</span>
          </button>
          {openIndex === 2 && (
            <p className="mt-2 text-gray-600 text-sm">
              Place the lid on your travel tumbler with the drink opening opposite from the desired position, then twist the lid. 
              You can rotate the cover to sip from the straw or drink opening, or close the cover.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FuelFaq;
