import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "AI Smart Assistant",
  description: "Get intelligent, context-aware assistance for all your TON ecosystem needs. Natural language interaction with personalized recommendations for TON blockchain operations.",
  keywords: ["TON AI", "Blockchain Assistant", "AI Helper", "TON Queries", "Smart Assistant"],
  path: "/ai",
});

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navbar />

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

      <Footer />
    </div>
  );
}