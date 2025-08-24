import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Play, Star, CheckCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lessonId = searchParams.get('id') || "1-1";

  return (
    <>
      <SEO 
        title="Proper Lane Use - Chapter 1"
        description="Learn about proper lane usage, lane markings, and safe driving practices"
      />
      
      <div className="space-y-6">
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <div className="text-sm text-muted-foreground">
            Chapter 1 • Lesson 3
          </div>
        </div>

        {/* Progress Bar */}
        <Card className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Course Progress</span>
              <span className="text-muted-foreground">25%</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>
        </Card>

        {/* Lesson Header */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4" />
              <span>Chapter 1 of 18</span>
              <span>•</span>
              <span>Lesson 3</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground">PROPER LANE USE</h1>
          </div>
        </Card>

        {/* Main Content */}
        <Card className="p-6">
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-sky-200 to-sky-100">
              <div className="h-80 bg-gradient-to-b from-sky-300 to-green-200 relative overflow-hidden">
                {/* City skyline silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-500"></div>
                {/* Road */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-600">
                  <div className="h-full relative">
                    {/* Lane markings */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
                    <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-yellow-300 transform -translate-y-2"></div>
                    <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-yellow-300 transform translate-y-2"></div>
                  </div>
                </div>
                {/* Car */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-white rounded-sm shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong>Staying in your lane</strong> doesn't just help you be a better driver. You'll feel much safer, more confident, and in control when you stay in your lane. Experienced drivers know that the key to safe driving is keeping your vehicle where it should be on the road.
              </p>
              <p className="text-foreground leading-relaxed">
                Whether you're driving on a highway with several lanes or a country road, the techniques for staying in your lane are the same. The secret is understanding these techniques and using them every time you drive.
              </p>
            </div>

            {/* Video Section */}
            <Card className="border-2 border-primary/20 bg-primary/5 p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">VIDEO CONTENT | LANE USE BASICS</h3>
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-green-300 to-green-100 h-48">
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gray-600">
                    <div className="h-full relative">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Lane Markings Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Lane Markings</h2>
              <p className="text-foreground leading-relaxed">
                Understanding lane markings is essential for safe driving. Different types of lines tell you what you can and cannot do on the road.
              </p>

              {/* White Lines */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">White Lines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-24 bg-gray-600 rounded-lg relative mb-4">
                      <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-white transform -translate-y-0.5"></div>
                      <div className="absolute top-1/2 left-1/4 w-8 h-1 bg-white transform translate-y-2"></div>
                      <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-white transform translate-y-2"></div>
                      <div className="absolute top-1/2 right-1/4 w-8 h-1 bg-white transform translate-y-2"></div>
                    </div>
                    <p className="text-sm text-foreground">
                      White lines separate lanes of traffic moving in the same direction. You may cross broken white lines to change lanes, but you should not cross solid white lines.
                    </p>
                  </div>
                  <div>
                    <div className="h-24 bg-gray-600 rounded-lg relative mb-4">
                      <div className="absolute top-1/2 left-1/4 right-1/4 h-2 bg-white transform -translate-y-1"></div>
                    </div>
                    <p className="text-sm text-foreground">
                      Solid white lines indicate that lane changes are discouraged or prohibited in that area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Yellow Lines */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Yellow Lines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-24 bg-gray-600 rounded-lg relative mb-4">
                      <div className="absolute top-1/2 left-1/2 w-px h-16 bg-yellow-400 transform -translate-x-0.5 -translate-y-8"></div>
                      <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-yellow-400 transform -translate-x-4 -translate-y-2"></div>
                      <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-yellow-400 transform -translate-x-4 translate-y-2"></div>
                    </div>
                    <p className="text-sm text-foreground">
                      Broken yellow lines separate traffic moving in opposite directions. You may pass when it's safe to do so.
                    </p>
                  </div>
                  <div>
                    <div className="h-24 bg-gray-600 rounded-lg relative mb-4">
                      <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-yellow-400 transform -translate-x-0.5 -translate-y-8"></div>
                    </div>
                    <p className="text-sm text-foreground">
                      Solid yellow lines mean no passing. Stay in your lane and do not cross the line.
                    </p>
                  </div>
                </div>
              </div>

              {/* Double Yellow Lines */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Double Yellow Lines</h3>
                <div>
                  <div className="h-24 bg-gray-600 rounded-lg relative mb-4">
                    <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-yellow-400 transform -translate-x-2 -translate-y-8"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-yellow-400 transform translate-x-1 -translate-y-8"></div>
                  </div>
                  <p className="text-sm text-foreground">
                    Double yellow lines indicate a no-passing zone. These lines separate traffic moving in opposite directions. Crossing these lines is illegal and dangerous.
                  </p>
                </div>
              </div>
            </div>

            {/* Positioning Your Vehicle Section */}
            <Card className="border-2 border-primary/20 bg-primary/5 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">POSITIONING YOUR VEHICLE IN THE LANE</h2>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  <strong>Center yourself in the lane.</strong> Your vehicle should be positioned in the center of your lane with equal space on both sides. This gives you the maximum safety margin.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-32 bg-gradient-to-b from-sky-200 to-green-100 rounded-lg relative mb-4">
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-600">
                        <div className="absolute top-0 left-1/4 bottom-0 w-0.5 bg-white"></div>
                        <div className="absolute top-0 right-1/4 bottom-0 w-0.5 bg-white"></div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-4 bg-blue-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-green-600">✓ Correct: Vehicle centered in lane</p>
                  </div>
                  <div>
                    <div className="h-32 bg-gradient-to-b from-sky-200 to-green-100 rounded-lg relative mb-4">
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-600">
                        <div className="absolute top-0 left-1/4 bottom-0 w-0.5 bg-white"></div>
                        <div className="absolute top-0 right-1/4 bottom-0 w-0.5 bg-white"></div>
                        <div className="absolute bottom-2 left-1/3 transform -translate-x-1/2">
                          <div className="w-8 h-4 bg-red-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-red-600">✗ Incorrect: Vehicle too close to left line</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Special Cases Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">SPECIAL CASES REGARDING LANE USE AND USE OF AUTOMOTIVE EQUIPMENT</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Slow Moving Vehicles</h3>
                  <div className="h-32 bg-gradient-to-b from-sky-200 to-green-100 rounded-lg relative mb-4">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-600">
                      <div className="absolute bottom-2 left-1/4">
                        <div className="w-6 h-3 bg-orange-500 rounded-sm"></div>
                      </div>
                      <div className="absolute bottom-2 left-1/2">
                        <div className="w-8 h-4 bg-blue-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    When you encounter slow-moving vehicles such as farm equipment, construction vehicles, or cyclists, maintain a safe following distance and only pass when it's legal and safe to do so.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Emergency Vehicles</h3>
                  <div className="h-32 bg-gradient-to-b from-sky-200 to-green-100 rounded-lg relative mb-4">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-600">
                      <div className="absolute bottom-2 right-1/4">
                        <div className="w-6 h-3 bg-red-500 rounded-sm animate-pulse"></div>
                      </div>
                      <div className="absolute bottom-2 left-1/4">
                        <div className="w-8 h-4 bg-blue-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    When you see or hear an emergency vehicle approaching, safely move to the right and stop to allow the emergency vehicle to pass. Return to normal driving only when the emergency vehicle has completely passed.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <Card className="border-2 border-dashed border-muted p-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">PREPARE LANE USE</h3>
                  <p className="text-muted-foreground mb-4">
                    Practice proper lane positioning with our interactive simulator
                  </p>
                  <Button variant="default">
                    <Play className="h-4 w-4 mr-2" />
                    Start Simulator
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Navigation Footer */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => navigate('/lesson?id=1-2')}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              <Button variant="secondary">Take Quiz</Button>
              <Button variant="default">Mark Complete</Button>
            </div>
            
            <Button 
              onClick={() => navigate('/lesson?id=1-4')}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}