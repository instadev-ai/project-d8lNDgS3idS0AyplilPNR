
import { ReactNode } from "react";
import { Dumbbell, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-purple-600" />
              <h1 className="text-xl font-bold text-gray-900">FitTrack</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/community" className="text-sm text-gray-600 hover:text-purple-600 flex items-center gap-1">
                <Users className="h-4 w-4" />
                Community
              </Link>
              <button className="text-sm text-gray-600 hover:text-purple-600">
                Settings
              </button>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-600">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
