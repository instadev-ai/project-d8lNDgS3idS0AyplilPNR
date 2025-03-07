
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Users, Plus } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-emerald-400">
      {/* Header Text */}
      <div className="pt-12 px-6 pb-6">
        <h1 className="text-4xl font-bold text-black">Get in.</h1>
        <h1 className="text-4xl font-bold text-black">Get fit.</h1>
      </div>

      {/* Community Card */}
      <div className="mx-4 bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* Navigation Icons */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="w-6">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L4 12L9 19M16 5L21 12L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="font-medium text-base">Community</div>
          <div className="flex gap-4">
            <Bell className="w-5 h-5 text-gray-800" />
            <Users className="w-5 h-5 text-gray-800" />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-transparent h-auto p-0 border-b border-gray-200">
            <TabsTrigger 
              value="feed" 
              className={`py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none ${activeTab === 'feed' ? 'font-medium' : 'text-gray-500'}`}
            >
              Feed
            </TabsTrigger>
            <TabsTrigger 
              value="challenges" 
              className={`py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none ${activeTab === 'challenges' ? 'font-medium' : 'text-gray-500'}`}
            >
              Challenges
            </TabsTrigger>
          </TabsList>

          {/* Feed Content */}
          <TabsContent value="feed" className="mt-0 p-0">
            <div className="divide-y divide-gray-100">
              {/* Post 1 */}
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L5 12L12 22L19 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Freeletics</div>
                      <div className="text-xs text-gray-500">11 w</div>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/>
                      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>

                {/* Post Image */}
                <div className="mb-3">
                  <img 
                    src="/superdev-project-images/66765c88-9ffe-433e-b88a-37d269532bc8/d8lNDgS3idS0AyplilPNR/1741349022093-pasted-image-1741349011308.png" 
                    alt="Fitness post" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Post Text */}
                <div className="mb-3">
                  <p className="text-sm">
                    <span className="inline-flex items-center">
                      🔥 Are You Unstoppable? 🔥
                    </span> We want to hear how Freeletics has impacted on your life!
                  </p>
                </div>

                {/* Post Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11M7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11H17M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    837
                  </div>
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    72
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L5 12L12 22L19 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Freeletics</div>
                      <div className="text-xs text-gray-500">15 w</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Challenges Content */}
          <TabsContent value="challenges" className="mt-0 p-4">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium">Challenges</h3>
              <p className="text-gray-500 text-sm mt-2">Join fitness challenges with the community</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Community;
