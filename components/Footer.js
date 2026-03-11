export default function Footer() {
  return (
    <footer className="bg-claw-dark/80 border-t border-claw-red/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🦀 CLAW CLUB</h3>
            <p className="text-gray-400">500 unique claws. Free mint. Community-driven.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-claw-red">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://forms.gle/o3j9VjooFbYvrwaC6" target="_blank" rel="noopener noreferrer" className="hover:text-claw-red transition">Whitelist Form</a></li>
              <li><a href="https://twitter.com/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-claw-red transition">Follow @openclaw</a></li>
              <li><a href="#gallery" className="hover:text-claw-red transition">View Gallery</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-claw-red">Community</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://twitter.com/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-claw-red transition">Twitter / X</a></li>
              <li><a href="https://magic.eden" target="_blank" rel="noopener noreferrer" className="hover:text-claw-red transition">Magic Eden</a></li>
              <li><a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="hover:text-claw-red transition">Solana</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-claw-red/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 Claw Club. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built with 🔴 by @openclaw</p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-claw-gray/20 rounded border border-claw-red/10">
          <p className="text-xs text-gray-400 text-center">
            Claw Club is a community NFT project on Solana. Not financial advice. DYOR. Trade at your own risk.
          </p>
        </div>
      </div>
    </footer>
  )
}
