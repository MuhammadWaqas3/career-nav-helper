
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquare,
  ThumbsUp,
  Share2,
  TrendingUp,
  Calendar,
  Users,
  Bookmark,
  Bell,
  Timer,
  Award,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface TestInfo {
  name: string;
  date: string;
  daysLeft: number;
}

const EntryTest = () => {
  const [selectedCategory, setSelectedCategory] = useState("engineering");
  
  const upcomingTests: Record<string, TestInfo[]> = {
    engineering: [
      { name: "NUST NET", date: "July 15, 2024", daysLeft: 92 },
      { name: "UET ECAT", date: "August 1, 2024", daysLeft: 109 },
      { name: "GIKI Test", date: "July 20, 2024", daysLeft: 97 },
    ],
    medical: [
      { name: "MDCAT", date: "September 10, 2024", daysLeft: 149 },
      { name: "NUMS", date: "August 15, 2024", daysLeft: 123 },
      { name: "AKU Test", date: "July 25, 2024", daysLeft: 102 },
    ],
    business: [
      { name: "LUMS SSE", date: "July 5, 2024", daysLeft: 82 },
      { name: "IBA Test", date: "July 30, 2024", daysLeft: 107 },
      { name: "SAT", date: "August 24, 2024", daysLeft: 132 },
    ],
  };

  const posts: Record<string, Post[]> = {
    engineering: [
      {
        id: 1,
        author: "EngineeringStudent",
        title: "NUST NET Preparation Strategy",
        content: "Here's how I managed to score in the top 1% of NET...",
        category: "Test Prep",
        likes: 245,
        comments: 56,
        timestamp: "2 hours ago",
      },
      {
        id: 2,
        author: "ECATMaster",
        title: "Mathematics Tips for ECAT",
        content: "The most important topics you need to focus on...",
        category: "Strategy",
        likes: 189,
        comments: 43,
        timestamp: "5 hours ago",
      },
    ],
    medical: [
      {
        id: 3,
        author: "FutureMedic",
        title: "MDCAT Biology Important Topics",
        content: "Complete breakdown of high-yield biology topics...",
        category: "Test Prep",
        likes: 312,
        comments: 78,
        timestamp: "1 hour ago",
      },
    ],
    business: [
      {
        id: 4,
        author: "BusinessPro",
        title: "LUMS SSE Interview Experience",
        content: "My recent interview experience at LUMS...",
        category: "Success Stories",
        likes: 156,
        comments: 34,
        timestamp: "3 hours ago",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 bg-gradient-to-r from-primary-light to-white p-8 rounded-lg">
            <h1 className="font-heading text-4xl font-bold text-secondary mb-4">
              Join the Entry Test Community
            </h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Prepare, Discuss, and Succeed Together
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Upcoming Tests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" />
                    Upcoming Tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingTests[selectedCategory].map((test) => (
                      <div key={test.name} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{test.name}</p>
                          <p className="text-sm text-muted-foreground">{test.date}</p>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {test.daysLeft} days
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Ask a Question
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Join Study Groups
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Set Reminders
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="engineering" className="space-y-6" onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="medical">Medical</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>

                {Object.entries(posts).map(([category, categoryPosts]) => (
                  <TabsContent key={category} value={category}>
                    <div className="space-y-6">
                      {categoryPosts.map((post) => (
                        <Card key={post.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{post.title}</CardTitle>
                                <CardDescription>
                                  Posted by {post.author} • {post.timestamp}
                                </CardDescription>
                              </div>
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                {post.category}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-secondary/80 mb-4">{post.content}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="mr-2 h-4 w-4" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">#1</span>
                      <span>ECAT Preparation Tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">#2</span>
                      <span>MDCAT Study Schedule</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">#3</span>
                      <span>NET Mathematics</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span>EngineeringPro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-gray-400" />
                      <span>MDCATHelper</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span>BusinessWhiz</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EntryTest;
