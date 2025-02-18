
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
  Download,
  PlayCircle,
  MessageSquare,
  Bookmark,
  Star,
  Calendar,
  Trophy,
  Clock,
  BookOpen,
  Brain,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PastPaper {
  id: number;
  university: string;
  testType: string;
  year: number;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  downloads: number;
}

const PastPapers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pastPapers: PastPaper[] = [
    {
      id: 1,
      university: "NUST",
      testType: "NET",
      year: 2023,
      subject: "Mathematics",
      difficulty: "Medium",
      downloads: 1234,
    },
    {
      id: 2,
      university: "UET",
      testType: "ECAT",
      year: 2023,
      subject: "Physics",
      difficulty: "Hard",
      downloads: 987,
    },
    {
      id: 3,
      university: "FAST",
      testType: "Entry Test",
      year: 2023,
      subject: "Computer Science",
      difficulty: "Medium",
      downloads: 756,
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Mathematics Shortcuts for Entry Tests",
      channel: "EntryTestPro",
      views: "45K",
      duration: "15:30",
      thumbnail: "https://img.youtube.com/vi/placeholder1/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Physics Problem Solving Techniques",
      channel: "ScienceGuide",
      views: "32K",
      duration: "20:45",
      thumbnail: "https://img.youtube.com/vi/placeholder2/maxresdefault.jpg",
    },
  ];

  const studyTips = [
    {
      id: 1,
      title: "How to Stay Focused During Long Study Sessions",
      author: "Dr. Sarah Khan",
      readTime: "5 min read",
      likes: 234,
    },
    {
      id: 2,
      title: "Time Management Techniques for Entry Tests",
      author: "Prof. Ali Ahmed",
      readTime: "7 min read",
      likes: 189,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 bg-gradient-to-r from-primary-light to-white p-8 rounded-lg">
            <h1 className="font-heading text-3xl font-bold text-secondary mb-4">
              📜 Master Your Entry Test
            </h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Access Past Papers & Study Smart!
            </p>
          </div>

          <Tabs defaultValue="papers" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
              <TabsTrigger value="papers" className="text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Past Papers Archive
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg">
                <Youtube className="mr-2 h-5 w-5" />
                Video Tutorials
              </TabsTrigger>
              <TabsTrigger value="tips" className="text-lg">
                <Brain className="mr-2 h-5 w-5" />
                Study Tips
              </TabsTrigger>
            </TabsList>

            {/* Past Papers Section */}
            <TabsContent value="papers">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <Input
                    placeholder="Search past papers..."
                    className="max-w-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Create Study Plan
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>University</TableHead>
                        <TableHead>Test Type</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastPapers.map((paper) => (
                        <TableRow key={paper.id}>
                          <TableCell className="font-medium">{paper.university}</TableCell>
                          <TableCell>{paper.testType}</TableCell>
                          <TableCell>{paper.year}</TableCell>
                          <TableCell>{paper.subject}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              paper.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                              paper.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                              "bg-red-100 text-red-700"
                            }`}>
                              {paper.difficulty}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            {/* Video Tutorials Section */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="relative pb-0">
                      <div className="aspect-video bg-gray-100 rounded-lg relative">
                        <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{video.channel}</span>
                        <div className="flex items-center gap-2">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Study Tips Section */}
            <TabsContent value="tips">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studyTips.map((tip) => (
                  <Card key={tip.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{tip.title}</CardTitle>
                      <CardDescription>By {tip.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{tip.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          <span>{tip.likes} likes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Leaderboard Section */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-xl font-semibold">Top Learners This Month</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((position) => (
                <Card key={position}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Trophy className={`h-6 w-6 ${
                          position === 1 ? "text-yellow-500" :
                          position === 2 ? "text-gray-400" :
                          "text-amber-600"
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold">Student {position}</p>
                        <p className="text-sm text-muted-foreground">
                          {1000 - position * 100} points
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PastPapers;
