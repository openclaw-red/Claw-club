import { useState, useEffect } from 'react'

export default function Gallery() {
  const [claws, setClaws] = useState([])
  const [selectedClaw, setSelectedClaw] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Generate mock claw data (in production, fetch from IPFS/API)
    const generateClaws = () => {
      const traits = ['Helicopter Hat', 'Crown', 'Sunglasses', 'Party Hat', 'Wizard Hat', 'Headphones']
      const colors = ['#DC2626', '#991B1B', '#7C2D12', '#EA580C', '#D97706']
      
      const mockClaws = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Claw #${i + 1}`,
        trait: traits[Math.floor(Math.random() * traits.length)],
        rarity: Math.floor(Math.random() * 100),
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      
      setClaws(mockClaws)
      setLoading(false)
    }

    generateClaws()
  }, [])

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-claw bg-clip-text text-transparent">Claw Gallery</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">Explore 500 unique claws. Each one is different.</p>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-300">Loading claws...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {claws.map((claw) => (
                <div
                  key={claw.id}
                  onClick={() => setSelectedClaw(claw)}
                  className="cursor-pointer group relative bg-claw-gray/50 rounded-lg overflow-hidden border border-claw-red/20 hover:border-claw-red/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square flex items-center justify-center bg-gradient-dark group-hover:bg-claw-red/10 transition-all">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                      style={{ backgroundColor: claw.color }}
                    >
                      🦀
                    </div>
                  </div>
                  <div className="p-4 bg-claw-dark/80">
                    <p className="font-bold text-sm">{claw.name}</p>
                    <p className="text-xs text-gray-400">{claw.trait}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* More claws coming */}
            <div className="text-center py-12 border-t border-claw-red/20">
              <p className="text-gray-400 mb-6">And 480 more unique claws waiting...</p>
              <a href="https://forms.gle/o3j9VjooFbYvrwaC6" target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-claw text-white font-bold rounded-lg hover:shadow-glow transition-all">
                Join Whitelist to See All 500
              </a>
            </div>

            {/* Modal */}
            {selectedClaw && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedClaw(null)}>
                <div className="bg-claw-gray border border-claw-red/50 rounded-lg p-8 max-w-md w-full"
                  onClick={(e) => e.stopPropagation()}>
                  <div className="aspect-square flex items-center justify-center bg-claw-dark rounded-lg mb-6">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-4xl"
                      style={{ backgroundColor: selectedClaw.color }}
                    >
                      🦀
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{selectedClaw.name}</h3>
                  <div className="space-y-3 mb-6">
                    <p><span className="text-gray-400">Trait:</span> <span className="text-claw-red font-bold">{selectedClaw.trait}</span></p>
                    <p><span className="text-gray-400">Rarity Score:</span> <span className="text-claw-red font-bold">{selectedClaw.rarity}/100</span></p>
                  </div>
                  <button onClick={() => setSelectedClaw(null)}
                    className="w-full py-2 bg-claw-red text-white font-bold rounded hover:bg-red-700 transition-all">
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
