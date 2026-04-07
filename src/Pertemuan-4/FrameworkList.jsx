import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-[#222] p-8 font-mono text-white">
      {/* Title dengan efek bayangan pixel */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold uppercase tracking-widest inline-block border-b-4 border-yellow-400 pb-2 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] bg-black px-4 py-2">
          Framework Selection
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Header: Name & Year */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-black text-black bg-yellow-300 px-3 py-1 border-2 border-black inline-block uppercase">
                {item.name}
              </h2>
              <span className="text-sm font-bold text-white bg-red-500 px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {item.details.releaseYear}
              </span>
            </div>

            {/* Description */}
            <div className="bg-gray-100 border-2 border-black p-3 mb-4">
              <p className="text-gray-800 text-sm leading-relaxed">
                {">"} {item.description}
              </p>
            </div>

            {/* Developer Info */}
            <p className="text-black font-bold text-xs mb-4 uppercase tracking-tighter">
              Dev: <span className="text-blue-600">{item.details.developer}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-400 text-black px-2 py-1 text-[10px] font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Link (Dibuat seperti Button Arcade) */}
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-500 text-white font-bold py-3 px-4 border-b-8 border-r-8 border-black hover:bg-blue-400 hover:border-b-4 hover:border-r-4 hover:mt-1 hover:ml-1 active:border-b-0 active:border-r-0 transition-all uppercase text-sm"
            >
              [ Enter Website ]
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}