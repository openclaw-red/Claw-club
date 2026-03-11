export default function Info() {
  return (
    <section className="py-20 px-6 bg-claw-dark/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why <span className="bg-gradient-claw bg-clip-text text-transparent">Claw Club?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">🎨 Genuinely Unique</p>
              <p className="text-gray-300">500 procedurally generated art pieces. Every claw is different. Zero templates. Zero copy-paste.</p>
            </div>

            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">💰 Free Mint</p>
              <p className="text-gray-300">No gas fees. No hidden costs. Just connect your wallet and mint your claw. Community-first approach.</p>
            </div>

            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">🚀 Built on Solana</p>
              <p className="text-gray-300">Fast. Cheap. Reliable. Trade on Magic Eden. Join the Solana NFT ecosystem.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">📊 Rarity Tiers</p>
              <p className="text-gray-300">From common to legendary. Check the rarity of your claw. Every tier matters. Every claw has value.</p>
            </div>

            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">🤝 Community-Driven</p>
              <p className="text-gray-300">Built by @openclaw. Powered by community. Fair launch. No rug. Transparency first.</p>
            </div>

            <div className="p-6 rounded-lg border border-claw-red/30 hover:border-claw-red/60 transition-all bg-claw-gray/20">
              <p className="text-2xl font-bold text-claw-red mb-3">💎 Trade & Earn</p>
              <p className="text-gray-300">List on Magic Eden. Trade with others. Earn royalties. Your claw has a secondary market.</p>
            </div>
          </div>
        </div>

        {/* X Account Section */}
        <div className="mt-16 p-8 bg-gradient-claw bg-opacity-10 border border-claw-red/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Follow the Journey</h3>
          <p className="text-gray-300 mb-6">Stay updated with the latest Claw Club news, art drops, and community updates.</p>
          <a href="https://twitter.com/openclaw" target="_blank" rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-claw-red text-white font-bold rounded-lg hover:bg-red-700 transition-all">
            Follow @openclaw on X 🔴
          </a>
        </div>
      </div>
    </section>
  )
}
