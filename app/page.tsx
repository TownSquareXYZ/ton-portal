import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">TON Portal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/ai" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                AI Assistant
              </Link>
              <Link href="/analytics" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Gateway to the
            <span className="text-primary block">TON Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of intelligent blockchain interaction. AI-powered assistance, 
            real-time analytics, essential tools, and community resources - all in one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/ai">
                Start with AI Assistant
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/analytics">
                Explore Analytics
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">🤖</span>
              </div>
              <CardTitle>AI Smart Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Natural language interaction for TON ecosystem queries with personalized recommendations.</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">📊</span>
              </div>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Real-time TON network monitoring with transaction volume, staking data, and health metrics.</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">🛠️</span>
              </div>
              <CardTitle>Tools Suite</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Essential blockchain utilities including faucet, staking, token swap, and lending services.</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">📅</span>
              </div>
              <CardTitle>Events & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>TON ecosystem events, documentation, tutorials, and community content aggregation.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 TON Portal. Built for the TON ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
