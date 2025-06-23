import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-4xl">📅</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Events Calendar</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest TON ecosystem events, conferences, hackathons, 
            AMAs, and community gatherings happening worldwide.
          </p>
        </div>

        {/* Event Types Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
            All Events
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Conferences
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Hackathons
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Workshops
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            AMAs
          </button>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            {/* Sample Event 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                      Conference
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Dec 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TON Dev Summit 2024</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Join leading developers and ecosystem builders for the premier TON development conference.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📍 Dubai, UAE</span>
                    <span>🕐 10:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Sample Event 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      Hackathon
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Jan 20-22, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TON Winter Hackathon</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Build the future of TON with $100k+ in prizes. Open to developers worldwide.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📍 Virtual Event</span>
                    <span>🎁 $100k+ Prizes</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Join Hackathon
                  </button>
                </div>
              </div>
            </div>

            {/* Sample Event 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      AMA
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Dec 28, 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">TON Foundation AMA</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Ask questions about TON&apos;s roadmap, upcoming features, and ecosystem development.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📍 Telegram</span>
                    <span>🕐 3:00 PM UTC</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Join AMA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg opacity-75">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                  Workshop
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Contract Fundamentals</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Introduction to TON smart contract development and deployment.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>📍 Online • Nov 15, 2024</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg opacity-75">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                  Meetup
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">TON Community Meetup</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Local TON community gathering with networking and presentations.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>📍 Singapore • Oct 28, 2024</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg opacity-75">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm">
                  Conference
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">TON Blockchain Week</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Week-long celebration of TON ecosystem achievements and innovations.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>📍 Seoul, Korea • Sep 10-16, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Submission */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Submit Your Event</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Organizing a TON-related event? Let the community know! We&apos;ll help promote your conference, 
            hackathon, workshop, or meetup to the TON ecosystem.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Submit Event
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}