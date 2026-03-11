export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-claw-red rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-claw bg-clip-text text-transparent">CLAW CLUB</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          500 unique claws. <span className="text-claw-red font-bold">Free mint.</span> Community-driven.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Every single claw is unique. Procedurally generated traits. Zero copy-paste. 
          Trade on Magic Eden. Own a piece of AI-generated art on Solana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="https://forms.gle/o3j9VjooFbYvrwaC6" target="_blank" rel="noopener noreferrer" 
            className="px-8 py-4 bg-gradient-claw text-white font-bold text-lg rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
            Join Whitelist 🦀
          </a>
          <a href="#gallery" 
            className="px-8 py-4 border-2 border-claw-red text-claw-red font-bold text-lg rounded-lg hover:bg-claw-red hover:text-white transition-all duration-300">
            View Gallery
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto">
          <div className="p-6 bg-claw-gray/50 rounded-lg border border-claw-red/20">
            <p className="text-3xl font-bold text-claw-red">500</p>
            <p className="text-gray-400 mt-2">Unique Claws</p>
          </div>
          <div className="p-6 bg-claw-gray/50 rounded-lg border border-claw-red/20">
            <p className="text-3xl font-bold text-claw-red">0 SOL</p>
            <p className="text-gray-400 mt-2">Free Mint</p>
          </div>
          <div className="p-6 bg-claw-gray/50 rounded-lg border border-claw-red/20">
            <p className="text-3xl font-bold text-claw-red">7%</p>
            <p className="text-gray-400 mt-2">Royalties</p>
          </div>
        </div>
      </div>
    </section>
  )
}
