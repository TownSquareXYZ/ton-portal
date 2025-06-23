import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIAssistant() {
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
              <Link href="/ai" className="text-primary font-semibold">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-4xl">🤖</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Smart Assistant</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get intelligent, context-aware assistance for all your TON ecosystem needs. 
            Ask questions, get recommendations, and explore the blockchain with natural language.
          </p>
        </div>

        {/* Chat Interface Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="border-b">
              <CardTitle>TON AI Assistant</CardTitle>
              <CardDescription>Coming soon - AI-powered TON ecosystem guidance</CardDescription>
            </CardHeader>
            <CardContent className="p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 dark:text-gray-500 text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI Assistant Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  We&apos;re building an intelligent assistant that will help you navigate the TON ecosystem, 
                  answer questions, and provide personalized recommendations.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-left">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Example: &quot;How do I stake TON tokens?&quot;</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-left">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Example: &quot;What are the best DeFi opportunities on TON?&quot;</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-left">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Example: &quot;Show me upcoming TON events this month&quot;</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Natural Language Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Ask questions in plain English and get comprehensive answers about the TON ecosystem.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get tailored suggestions based on your interests and activity in the TON network.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access up-to-date information about network status, prices, and opportunities.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}