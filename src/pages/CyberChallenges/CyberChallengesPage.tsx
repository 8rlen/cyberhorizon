
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BookOpen, BrainCircuit, GameController2, AlertCircle, CheckCircle } from "lucide-react";
import CodeBreaker from "@/components/interactive/CodeBreaker";
import { useToast } from "@/components/ui/use-toast";

// Define question types
interface BaseQuestion {
  id: number;
  question: string;
  explanation: string;
}

interface MCQuestion extends BaseQuestion {
  type: 'mcq';
  options: string[];
  correctAnswer: number;
}

interface TFQuestion extends BaseQuestion {
  type: 'tf';
  correctAnswer: boolean;
}

type Question = MCQuestion | TFQuestion;

const CyberChallengesPage = () => {
  const [activeTab, setActiveTab] = useState("codebreaker");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  // Sample questions for the quiz
  const questions: Question[] = [
    {
      id: 1,
      type: 'mcq',
      question: "What is the primary purpose of a firewall in network security?",
      options: [
        "To detect viruses on the network",
        "To monitor network performance",
        "To control access between networks based on rules",
        "To encrypt data during transmission"
      ],
      correctAnswer: 2,
      explanation: "A firewall's primary purpose is to control access between networks by enforcing security rules, allowing or blocking traffic based on predefined policies."
    },
    {
      id: 2,
      type: 'tf',
      question: "Using the same password across multiple accounts is considered a good security practice.",
      correctAnswer: false,
      explanation: "Using the same password across multiple accounts is a poor security practice because if one account is compromised, all other accounts become vulnerable."
    },
    {
      id: 3,
      type: 'mcq',
      question: "What is a 'zero-day vulnerability'?",
      options: [
        "A vulnerability discovered after a system has been running for zero days",
        "A weakness that is exploited the same day it is discovered",
        "A vulnerability unknown to the software vendor that hackers can exploit",
        "A security threat that poses zero risk to the system"
      ],
      correctAnswer: 2,
      explanation: "A zero-day vulnerability is a software security flaw that is unknown to the vendor and hasn't been patched, giving attackers the opportunity to exploit it before a fix becomes available."
    },
    {
      id: 4,
      type: 'tf',
      question: "Multi-factor authentication (MFA) provides stronger security than just using a password alone.",
      correctAnswer: true,
      explanation: "Multi-factor authentication requires two or more verification methods, making it significantly more secure than single-factor authentication like a password alone."
    },
    {
      id: 5,
      type: 'mcq',
      question: "Which of the following best describes a 'phishing' attack?",
      options: [
        "Using specialized equipment to intercept wireless communications",
        "Sending deceptive messages to trick users into revealing sensitive information",
        "Exploiting software vulnerabilities to gain unauthorized access",
        "Using brute force to crack passwords"
      ],
      correctAnswer: 1,
      explanation: "Phishing is a cybercrime where attackers disguise themselves as trustworthy entities in emails, messages, or websites to trick users into revealing sensitive information like passwords and credit card details."
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: number | boolean) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "No answer selected",
        description: "Please select an answer before submitting.",
        variant: "destructive"
      });
      return;
    }

    setShowResult(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      toast({
        title: "Quiz Completed!",
        description: `Your final score: ${score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)}/${questions.length}`,
        variant: "default"
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Cyber Challenges</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your cybersecurity knowledge and skills with our interactive challenges.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="codebreaker" className="flex items-center gap-2">
              <GameController2 className="h-4 w-4" />
              CodeBreaker Challenge
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <BrainCircuit className="h-4 w-4" />
              Knowledge Quiz
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="codebreaker" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CodeBreaker Challenge</CardTitle>
                <CardDescription>
                  Test your pattern recognition and memory skills with our cyber-themed sequence challenge.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBreaker />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quiz" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Knowledge Quiz</CardTitle>
                <CardDescription>
                  Test your understanding of cybersecurity concepts and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!quizCompleted ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </div>
                      <div className="text-sm font-medium">
                        Score: {score}/{currentQuestionIndex + (showResult ? 1 : 0)}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card border rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
                      
                      {currentQuestion.type === 'mcq' && (
                        <RadioGroup value={selectedAnswer as string} onValueChange={(value) => handleAnswerSelect(parseInt(value))} className="space-y-3" disabled={showResult}>
                          {currentQuestion.options.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                              <Label htmlFor={`option-${index}`} className="flex-1">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                      
                      {currentQuestion.type === 'tf' && (
                        <RadioGroup value={selectedAnswer as string} onValueChange={(value) => handleAnswerSelect(value === 'true')} className="space-y-3" disabled={showResult}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id="true" />
                            <Label htmlFor="true">True</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id="false" />
                            <Label htmlFor="false">False</Label>
                          </div>
                        </RadioGroup>
                      )}
                      
                      {showResult && (
                        <Alert className="mt-4" variant={selectedAnswer === currentQuestion.correctAnswer ? "default" : "destructive"}>
                          <div className="flex items-start">
                            {selectedAnswer === currentQuestion.correctAnswer ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                            )}
                            <div>
                              <AlertTitle>
                                {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect!"}
                              </AlertTitle>
                              <AlertDescription className="mt-2">
                                {currentQuestion.explanation}
                              </AlertDescription>
                            </div>
                          </div>
                        </Alert>
                      )}
                      
                      <div className="mt-6 flex justify-end">
                        {!showResult ? (
                          <Button onClick={checkAnswer} disabled={selectedAnswer === null}>
                            Submit Answer
                          </Button>
                        ) : (
                          <Button onClick={nextQuestion}>
                            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-6 space-y-6">
                    <div className="text-5xl font-bold gradient-text mb-6">Quiz Completed!</div>
                    <p className="text-xl mb-4">
                      Your final score: <span className="font-bold">{score}/{questions.length}</span>
                    </p>
                    {score === questions.length ? (
                      <p className="text-green-500 font-medium">Perfect score! You're a cybersecurity expert!</p>
                    ) : score >= questions.length * 0.7 ? (
                      <p className="text-primary font-medium">Great job! You have solid cybersecurity knowledge.</p>
                    ) : (
                      <p className="text-amber-500 font-medium">Keep learning! Cybersecurity is a continuous journey.</p>
                    )}
                    <Button onClick={resetQuiz} className="mt-4">
                      Restart Quiz
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CyberChallengesPage;
