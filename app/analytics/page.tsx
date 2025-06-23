import Link from "next/link";

export default function Analytics() {
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
              <Link href="/analytics" className="text-primary font-semibold">
                Analytics
              </Link>
              <Link href="/tools" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
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
            <span className="text-primary text-4xl">📊</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Analytics Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Monitor the TON network in real-time with comprehensive analytics, 
            transaction insights, and network health metrics.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Network Status</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">Online</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">24h Transactions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2M</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-xl">📈</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Wallets</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">45.7K</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 text-xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Staked</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2.8B TON</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 text-xl">🔒</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transaction Volume (24h)</h3>
            <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-gray-400 dark:text-gray-500 text-2xl mb-2 block">📊</span>
                <p className="text-gray-600 dark:text-gray-400">Chart visualization coming soon</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Network Activity</h3>
            <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-gray-400 dark:text-gray-500 text-2xl mb-2 block">📈</span>
                <p className="text-gray-600 dark:text-gray-400">Real-time data visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-400">Track network performance, transaction throughput, and validator activity in real-time.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Historical Data</h3>
            <p className="text-gray-600 dark:text-gray-400">Access comprehensive historical data and trends for in-depth analysis and research.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Custom Dashboards</h3>
            <p className="text-gray-600 dark:text-gray-400">Create personalized dashboards with the metrics that matter most to you.</p>
          </div>
        </div>
      </main>
    </div>
  );
}