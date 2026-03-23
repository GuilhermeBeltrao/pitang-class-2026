import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Rocket, Users, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { useAuthContext } from "@/contexts/auth-context";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { loggedUser } = useAuthContext();

  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Welcome Section */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{loggedUser?.firstName}</span>! 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here's what's happening with your products today
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Products", value: "24", icon: BarChart3, color: "from-blue-500 to-blue-600" },
          { label: "Total Revenue", value: "$45.2K", icon: Sparkles, color: "from-purple-500 to-purple-600" },
          { label: "Active Users", value: "1,234", icon: Users, color: "from-green-500 to-green-600" },
          { label: "Growth Rate", value: "+12.5%", icon: ArrowRight, color: "from-orange-500 to-orange-600" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-slate-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
              </div>
              <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Features Overview */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Features</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Manage everything from your dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Analytics",
              description: "Track your product performance with detailed metrics and insights",
            },
            {
              icon: Shield,
              title: "Secure",
              description: "Enterprise-grade security with encryption and authentication",
            },
            {
              icon: Rocket,
              title: "Fast",
              description: "Lightning-fast performance optimized for your workflow",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/dashboard/products" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800/50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Browse Products</h3>
                  <p className="text-gray-600 dark:text-gray-400">View and manage all your products</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/dashboard/products" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800/50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Add New Product</h3>
                  <p className="text-gray-600 dark:text-gray-400">Create and launch your next product</p>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg p-8 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Take a quick tour of your dashboard and learn how to maximize productivity with our powerful tools and features.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 w-fit">
          Start Tour
        </Button>
      </section>
    </div>
  );
}
