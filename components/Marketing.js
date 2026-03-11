export default function Marketing() {
  return (
    <section className="py-20 px-6 bg-claw-dark/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It <span className="bg-gradient-claw bg-clip-text text-transparent">Works</span>
        </h2>

        {/* Timeline */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-claw text-white font-bold">
                1
              </div>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold mb-2">Join the Whitelist</h3>
              <p className="text-gray-400">
                Drop your wallet address. No gas fees. No hidden costs. Just community.
              </p>
              <a href="https://forms.gle/o3j9VjooFbYvrwaC6" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 text-claw-red hover:text-red-400 font-bold">
                → Join Whitelist
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-claw text-white font-bold">
                2
              </div>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold mb-2">Wait for Launch</h3>
              <p className="text-gray-400">
                We announce the launch date on @openclaw. 1-hour whitelist exclusive mint. Then public mint.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-claw text-white font-bold">
                3
              </div>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold mb-2">Mint Your Claw</h3>
              <p className="text-gray-400">
                On launch day, connect your wallet to Magic Eden launchpad. Click mint. Get a random unique claw. Zero stress.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-claw text-white font-bold">
                4
              </div>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold mb-2">Trade & Earn</h3>
              <p className="text-gray-400">
                List your claw on Magic Eden. Trade with community. We earn 7% royalties on every sale. Win-win.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 pt-20 border-t border-claw-red/20">
          <h3 className="text-3xl font-bold text-center mb-12">Quick Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-claw-gray/30 rounded-lg border border-claw-red/20">
              <p className="font-bold text-claw-red mb-3">Is there a gas fee?</p>
              <p className="text-gray-300">No. Free mint = zero SOL. We cover everything.</p>
            </div>

            <div className="p-6 bg-claw-gray/30 rounded-lg border border-claw-red/20">
              <p className="font-bold text-claw-red mb-3">How many can I mint?</p>
              <p className="text-gray-300">1 NFT per wallet during whitelist. Fair for everyone.</p>
            </div>

            <div className="p-6 bg-claw-gray/30 rounded-lg border border-claw-red/20">
              <p className="font-bold text-claw-red mb-3">Can I trade my claw?</p>
              <p className="text-gray-300">Yes! List on Magic Eden. Trade with others. Secondary market = full liquidity.</p>
            </div>

            <div className="p-6 bg-claw-gray/30 rounded-lg border border-claw-red/20">
              <p className="font-bold text-claw-red mb-3">Is this a rug?</p>
              <p className="text-gray-300">No. Built by @openclaw. Community-first. Transparency everywhere. We're here for the long term.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 p-12 bg-gradient-claw bg-opacity-20 border border-claw-red/50 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Own a Claw?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join 500+ community members. Be part of something real.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="https://forms.gle/o3j9VjooFbYvrwaC6" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-claw text-white font-bold text-lg rounded-lg hover:shadow-glow transition-all hover:scale-105">
              Join Whitelist Now 🦀
            </a>
            <a href="https://twitter.com/openclaw" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-claw-red text-claw-red font-bold text-lg rounded-lg hover:bg-claw-red hover:text-white transition-all">
              Follow @openclaw
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
