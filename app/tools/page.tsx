import Link from "next/link";

export default function Tools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">TON Portal</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                AI Assistant
              </Link>
              <Link href="/analytics" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                Analytics
              </Link>
              <Link href="/tools" className="text-primary font-semibold">
                Tools
              </Link>
              <Link href="/events" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/resources" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-4xl">🛠️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tools Suite</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential blockchain utilities for the TON ecosystem. From testing to trading, 
            everything you need to interact with the TON network.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TON Faucet */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">💧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TON Faucet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get free testnet TON tokens for development and testing purposes.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Status: Coming Soon</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Request Testnet TON
            </button>
          </div>

          {/* Staking Services */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Staking Services</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stake your TON tokens and earn rewards while securing the network.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Current APY:</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">~8.5%</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Start Staking
            </button>
          </div>

          {/* Token Swap */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-orange-600 dark:text-orange-400 text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Token Swap</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Swap TON tokens and other assets with the best rates across DEXs.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Best rates aggregated</p>
            </div>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Start Swapping
            </button>
          </div>

          {/* DeFi Lending */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">DeFi Lending</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Lend your assets and earn interest or borrow against your collateral.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Best Lending APY:</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">~12.3%</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Explore DeFi
            </button>
          </div>

          {/* Wallet Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 text-2xl">👛</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Wallet Tools</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive wallet management and transaction analysis tools.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Multi-wallet support</p>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Connect Wallet
            </button>
          </div>

          {/* Developer Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-red-600 dark:text-red-400 text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Developer Tools</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Smart contract deployment, testing, and interaction utilities.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Contract IDE & Debugger</p>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Launch IDE
            </button>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tools Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We&apos;re actively developing these essential tools to make your TON experience seamless. 
            Each tool will integrate with popular wallets and provide the best user experience possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              TON SDK Integration
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              Multi-Wallet Support
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              Real-time Rates
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              Advanced Analytics
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}