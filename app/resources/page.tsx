import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-4xl">📚</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resource Hub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, learn, and succeed in the TON ecosystem. 
            From beginner guides to advanced development resources.
          </p>
        </div>

        {/* Quick Access Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">📖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Official TON documentation and API references</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-2xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tutorials</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Step-by-step guides for all skill levels</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Start</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Get started with TON development in minutes</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-orange-600 dark:text-orange-400 text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Join developer communities and forums</p>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Resources</h2>
          <div className="space-y-6">
            {/* Resource 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TON Developer Documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Comprehensive documentation covering smart contracts, dApps, and blockchain fundamentals. 
                    Everything from basic concepts to advanced implementation patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                      Smart Contracts
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                      API Reference
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                      Best Practices
                    </span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Start Guide</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Get up and running with TON development in under 30 minutes. Includes wallet setup, 
                    first smart contract deployment, and basic dApp interaction examples.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                      Beginner Friendly
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm">
                      30 Minutes
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                      Hands-on
                    </span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Start Tutorial
                  </button>
                </div>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Developer Tools & SDKs</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Complete toolkit for TON development including SDKs for multiple languages, 
                    testing frameworks, deployment tools, and development environment setup guides.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                      Python
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm">
                      Rust
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm">
                      CLI Tools
                    </span>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Explore Tools
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 dark:text-green-400 text-xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Beginner</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• TON Blockchain Basics</li>
                <li>• Wallet Setup & Usage</li>
                <li>• Understanding Smart Contracts</li>
                <li>• First dApp Interaction</li>
                <li>• Community Resources</li>
              </ul>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                Start Learning
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Intermediate</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Smart Contract Development</li>
                <li>• dApp Architecture</li>
                <li>• TON SDK Integration</li>
                <li>• Testing & Deployment</li>
                <li>• Security Best Practices</li>
              </ul>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                Continue Journey
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Advanced Smart Contracts</li>
                <li>• DeFi Protocol Development</li>
                <li>• Optimization Techniques</li>
                <li>• Ecosystem Integration</li>
                <li>• Contributing to TON</li>
              </ul>
              <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors">
                Master TON
              </button>
            </div>
          </div>
        </div>

        {/* Community Links */}
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Join the Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a href="#" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 dark:text-blue-400 text-lg">💬</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Telegram</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Official TON Chat</p>
            </a>

            <a href="#" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 dark:text-purple-400 text-lg">💾</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">GitHub</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Open Source Code</p>
            </a>

            <a href="#" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-600 dark:text-orange-400 text-lg">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Discord</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Developer Chat</p>
            </a>

            <a href="#" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-red-600 dark:text-red-400 text-lg">🎥</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">YouTube</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Video Tutorials</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}