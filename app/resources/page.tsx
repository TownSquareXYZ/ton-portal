import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { generateSEO } from "@/lib/seo";
import { 
  QuickAccessSection, 
  FeaturedResourcesSection, 
  LearningPathsSection, 
  CommunityLinksSection 
} from "@/components/ui/resource-sections";
import { 
  quickAccessItems, 
  featuredResourcesItems, 
  learningPathItems, 
  communityItems 
} from "@/lib/resource-data";

export const metadata = generateSEO({
  title: "Resource Hub",
  description: "Comprehensive TON development resources including documentation, tutorials, SDK guides, and learning paths for developers at all skill levels.",
  keywords: ["TON Resources", "Developer Documentation", "Tutorials", "SDK", "Learning Paths", "TON Community"],
  path: "/resources",
});

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
        <QuickAccessSection items={quickAccessItems} />

        {/* Featured Resources */}
        <div id="featured-resources" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Resources</h2>
          <FeaturedResourcesSection items={featuredResourcesItems} />
        </div>

        {/* Learning Paths */}
        <div id="learning-paths" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Learning Paths</h2>
          <LearningPathsSection items={learningPathItems} />
        </div>

        {/* Community Links */}
        <div id="community-links" className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Join the Community</h2>
          <CommunityLinksSection items={communityItems} />
        </div>
      </main>
      <Footer />
    </div>
  );
}