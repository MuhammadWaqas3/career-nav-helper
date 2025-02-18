
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Brain, Bot, Star } from "lucide-react";

const commonDoubts = [
  "What if I don't get good grades in my CS degree?",
  "What if I don't enjoy coding after a few months?",
  "Is AI replacing programmers in the future?",
  "What if I fail at programming?",
  "Can I become a software engineer if I am bad at math?",
  "Does CS really guarantee a high-paying job?",
  "What if I start late? Am I too old to learn coding?",
  "Will IT jobs disappear due to automation?"
];

const NotFound = () => {
  const [userDoubt, setUserDoubt] = useState("");

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
            AI-Powered Career Guidance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Your Personal AI Mentor
          </h1>
          <p className="text-gray-400 max-w-2xl">
            End overthinking and get evidence-based guidance for your future in tech
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Doubt Input */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Ask Your Doubts</h2>
            </div>
            <Textarea
              placeholder="Type your doubts here..."
              className="min-h-[200px] mb-4 bg-gray-900/50 border-gray-700 text-white"
              value={userDoubt}
              onChange={(e) => setUserDoubt(e.target.value)}
            />
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              size="lg"
            >
              Get AI Guidance
            </Button>
            
            {/* Example Doubts */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Common Doubts:</h3>
              <div className="space-y-2">
                {commonDoubts.map((doubt, index) => (
                  <button
                    key={index}
                    onClick={() => setUserDoubt(doubt)}
                    className="text-sm text-gray-300 hover:text-blue-400 text-left block transition-colors"
                  >
                    • {doubt}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">AI-Powered Analysis</h2>
              </div>
              <p className="text-gray-400">
                Get evidence-based answers using real-world data, market trends, and expert insights.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-semibold">Personalized Guidance</h2>
              </div>
              <p className="text-gray-400">
                Receive tailored advice based on your experience level and specific concerns.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-semibold">Success Stories</h2>
              </div>
              <p className="text-gray-400">
                Learn from others who overcame similar doubts and built successful careers in tech.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;