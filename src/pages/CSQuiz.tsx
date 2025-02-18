
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  ChevronRight,
  Computer,
  Cpu,
  LineChart,
  MessagesSquare,
  Rocket,
  Terminal,
  BookOpen,
  Award,
  Bot,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Question {
  id: number;
  text: string;
  options: string[];
  category: string;
  weight: number;
}

const CSQuiz = () => {
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "results">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      text: "How many hours do you spend on a computer daily?",
      options: ["Less than 2 hours", "2-4 hours", "4-6 hours", "More than 6 hours"],
      category: "Tech Affinity",
      weight: 1,
    },
    {
      id: 2,
      text: "Do you enjoy solving puzzles and brain teasers?",
      options: ["Not at all", "Sometimes", "Often", "Very much"],
      category: "Problem Solving",
      weight: 1.5,
    },
    {
      id: 3,
      text: "How comfortable are you with mathematics?",
      options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
      category: "Mathematical Thinking",
      weight: 1.2,
    },
    {
      id: 4,
      text: "Do you enjoy learning new technologies on your own?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
      category: "Self Learning",
      weight: 1.3,
    },
    {
      id: 5,
      text: "Can you focus on a task for long periods without getting distracted?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
      category: "Focus",
      weight: 1,
    },
  ];

  const calculateScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    questions.forEach((question) => {
      const answer = answers[question.id] || 0;
      totalScore += answer * question.weight;
      maxPossibleScore += 3 * question.weight; // 3 is max answer value (0-3)
    });

    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) {
      return {
        title: "You're a Natural Fit for CS! 🚀",
        description: "Your responses show strong aptitude for computer science. You have the right mix of logical thinking, technical interest, and problem-solving skills.",
        steps: [
          "Start with Python or JavaScript as your first programming language",
          "Take Harvard's CS50 course for a solid foundation",
          "Join coding communities on Discord and GitHub",
          "Practice coding on platforms like LeetCode and HackerRank",
        ],
      };
    } else if (score >= 50) {
      return {
        title: "You Have Good Potential! 💡",
        description: "You show promise in CS, but might need to strengthen some areas. With dedication and practice, you can excel in this field.",
        steps: [
          "Start with basic programming concepts through interactive platforms",
          "Focus on improving your problem-solving skills",
          "Take online courses at your own pace",
          "Join study groups for peer support",
        ],
      };
    } else {
      return {
        title: "Consider Exploring Related Fields ⚡",
        description: "Your interests might align better with other tech-related fields. Here are some alternatives you might enjoy:",
        steps: [
          "UI/UX Design - Creative tech work without heavy coding",
          "Digital Marketing - Tech-savvy role with focus on business",
          "IT Support - Hands-on tech work with less programming",
          "Data Analytics - Work with data using tools rather than coding",
        ],
      };
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: parseInt(value),
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = calculateScore();
      setScore(finalScore);
      setCurrentStep("results");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {currentStep === "intro" && (
            <div className="text-center space-y-8 animate-fadeIn">
              <Bot className="w-16 h-16 text-primary mx-auto" />
              <h1 className="font-heading text-4xl font-bold text-secondary">
                Is CS Right for You?
              </h1>
              <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
                Take our AI-powered assessment to discover if Computer Science aligns with your interests and abilities.
              </p>
              <Button
                size="lg"
                onClick={() => setCurrentStep("quiz")}
                className="animate-pulse"
              >
                Start Assessment
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          )}

          {currentStep === "quiz" && (
            <div className="space-y-8 animate-fadeIn">
              <Progress 
                value={(currentQuestionIndex / questions.length) * 100} 
                className="w-full h-2"
              />
              
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>{questions[currentQuestionIndex].text}</CardTitle>
                  <CardDescription>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <label
                          htmlFor={`option-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === "results" && score !== null && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold text-secondary mb-4">
                  Your CS Compatibility Score
                </h2>
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{score}%</span>
                  </div>
                  <Progress value={score} className="w-full h-2" />
                </div>
              </div>

              {/* Recommendation Section */}
              <Card>
                <CardHeader>
                  <CardTitle>{getRecommendation(score).title}</CardTitle>
                  <CardDescription>
                    {getRecommendation(score).description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Next Steps:</h3>
                    <ul className="space-y-2">
                      {getRecommendation(score).steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Resources Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Learning Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Harvard CS50</li>
                      <li>freeCodeCamp</li>
                      <li>The Odin Project</li>
                      <li>Codecademy</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Success Stories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-secondary/80">
                      "I started with zero coding knowledge and now work at Google. It's all about persistence and continuous learning."
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentStep("intro");
                    setCurrentQuestionIndex(0);
                    setAnswers({});
                    setScore(null);
                  }}
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CSQuiz;
