import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Zap, Shield, Rocket, Users, BarChart3 } from "lucide-react";
import { useAuthContext } from "@/contexts/auth-context";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, isLoading } = useAuthContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            Pitang
          </div>
          <div className="flex items-center gap-4">
            {isLoading ? null : isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-slate-700">
                    Login
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm font-medium">
                🚀 Welcome to Pitang
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Manage Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Products</span> with Ease
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              A modern dashboard to showcase, manage, and analyze your products. Built with cutting-edge technology to provide the best user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8">
                  Start Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>

          {/* Demo Image/Placeholder */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Everything you need to manage your products efficiently
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with instantaneous load times and smooth interactions."
              },
              {
                icon: Shield,
                title: "Secure",
                description: "Enterprise-grade security with encryption and authentication protocols."
              },
              {
                icon: Rocket,
                title: "Scalable",
                description: "Grow your business without worrying about infrastructure limitations."
              },
              {
                icon: Users,
                title: "Collaborative",
                description: "Invite your team and work together in real-time on projects."
              },
              {
                icon: BarChart3,
                title: "Analytics",
                description: "Detailed insights and metrics to help you make informed decisions."
              },
              {
                icon: Zap,
                title: "Easy to Use",
                description: "Intuitive interface designed for everyone, no technical skills required."
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Join thousands of users who are already managing their products with Pitang.
            Sign in with the demo account to explore all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8">
                Sign In Now
              </Button>
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Demo credentials: <span className="text-slate-300 font-mono">emilys</span> / <span className="text-slate-300 font-mono">emilyspass</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400">
          <p>&copy; 2026 Pitang. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
