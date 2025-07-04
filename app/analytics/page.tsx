import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { generateSEO } from "@/lib/seo";
import { StatsOverview, FeatureCard, StatsCharts } from "./components";

export const metadata = generateSEO({
  title: "Analytics Dashboard",
  description: "Monitor the TON network in real-time with comprehensive analytics, transaction insights, network health metrics, and blockchain data visualization.",
  keywords: ["TON Analytics", "Blockchain Data", "Network Monitoring", "TON Statistics", "Real-time Metrics"],
  path: "/analytics",
});

// 功能介绍数据配置
const featuresData = [
  {
    title: "Real-time Monitoring",
    description: "Track network performance, transaction throughput, and validator activity in real-time."
  },
  {
    title: "Historical Data",
    description: "Access comprehensive historical data and trends for in-depth analysis and research."
  },
  {
    title: "Custom Dashboards",
    description: "Create personalized dashboards with the metrics that matter most to you."
  }
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navbar />

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
        <StatsOverview />

        {/* Charts */}
        <StatsCharts />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}