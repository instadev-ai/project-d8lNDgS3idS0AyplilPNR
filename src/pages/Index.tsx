
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Trophy, Activity, Dumbbell } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";
import PersonalRecordCard from "@/components/PersonalRecordCard";
import StatsCard from "@/components/StatsCard";
import ChartPlaceholder from "@/components/ChartPlaceholder";
import AppLayout from "@/components/layout/AppLayout";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <AppLayout>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatsCard 
          title="This Week" 
          value="5 Workouts" 
          icon={Activity} 
          color="blue" 
        />
        <StatsCard 
          title="Total" 
          value="128 Workouts" 
          icon={Dumbbell} 
          color="green" 
        />
        <StatsCard 
          title="Personal Records" 
          value="12 PRs" 
          icon={Trophy} 
          color="purple" 
        />
        <StatsCard 
          title="Streak" 
          value="8 Days" 
          icon={CalendarDays} 
          color="orange" 
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="history">Workout History</TabsTrigger>
          <TabsTrigger value="records">Personal Records</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Progress Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Workout Progress</CardTitle>
                <CardDescription>Your workout volume over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder message="Progress chart will appear here" />
              </CardContent>
            </Card>

            {/* Recent Workouts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>Your last 5 workouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Today", name: "Upper Body", duration: "45 min" },
                    { date: "Yesterday", name: "Cardio", duration: "30 min" },
                    { date: "3 days ago", name: "Lower Body", duration: "60 min" },
                    { date: "5 days ago", name: "Full Body", duration: "75 min" },
                    { date: "1 week ago", name: "HIIT", duration: "25 min" }
                  ].map((workout, index) => (
                    <WorkoutCard 
                      key={index}
                      date={workout.date}
                      name={workout.name}
                      duration={workout.duration}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent PRs */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Personal Records</CardTitle>
                <CardDescription>Your latest achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { exercise: "Bench Press", weight: "185 lbs", date: "2 days ago" },
                    { exercise: "Squat", weight: "225 lbs", date: "1 week ago" },
                    { exercise: "Deadlift", weight: "275 lbs", date: "2 weeks ago" }
                  ].map((pr, index) => (
                    <PersonalRecordCard 
                      key={index}
                      exercise={pr.exercise}
                      weight={pr.weight}
                      date={pr.date}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Workout History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Workout History</CardTitle>
              <CardDescription>All your recorded workouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "June 10, 2023", name: "Upper Body", duration: "45 min", exercises: "Bench Press, Pull-ups, Shoulder Press" },
                  { date: "June 9, 2023", name: "Cardio", duration: "30 min", exercises: "Running, Jump Rope" },
                  { date: "June 7, 2023", name: "Lower Body", duration: "60 min", exercises: "Squats, Deadlifts, Lunges" },
                  { date: "June 5, 2023", name: "Full Body", duration: "75 min", exercises: "Bench Press, Squats, Pull-ups, Lunges" },
                  { date: "June 3, 2023", name: "HIIT", duration: "25 min", exercises: "Burpees, Mountain Climbers, Jump Squats" },
                  { date: "June 1, 2023", name: "Upper Body", duration: "50 min", exercises: "Bench Press, Rows, Tricep Extensions" },
                  { date: "May 30, 2023", name: "Lower Body", duration: "55 min", exercises: "Squats, Romanian Deadlifts, Calf Raises" }
                ].map((workout, index) => (
                  <WorkoutCard 
                    key={index}
                    date={workout.date}
                    name={workout.name}
                    duration={workout.duration}
                    exercises={workout.exercises}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Personal Records Tab */}
        <TabsContent value="records">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Personal Records</CardTitle>
                <CardDescription>Your best performances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { category: "Upper Body", exercises: [
                      { name: "Bench Press", weight: "185 lbs", date: "June 8, 2023" },
                      { name: "Shoulder Press", weight: "135 lbs", date: "May 15, 2023" },
                      { name: "Pull-ups", weight: "15 reps", date: "June 1, 2023" }
                    ]},
                    { category: "Lower Body", exercises: [
                      { name: "Squat", weight: "225 lbs", date: "June 3, 2023" },
                      { name: "Deadlift", weight: "275 lbs", date: "May 27, 2023" },
                      { name: "Leg Press", weight: "350 lbs", date: "May 20, 2023" }
                    ]},
                    { category: "Cardio", exercises: [
                      { name: "5K Run", weight: "22:30 min", date: "June 9, 2023" },
                      { name: "1 Mile", weight: "6:45 min", date: "May 30, 2023" }
                    ]},
                    { category: "Other", exercises: [
                      { name: "Plank", weight: "3:30 min", date: "June 5, 2023" },
                      { name: "Push-ups", weight: "50 reps", date: "May 25, 2023" }
                    ]}
                  ].map((category, categoryIndex) => (
                    <div key={categoryIndex} className="p-4 bg-gray-50 rounded-md">
                      <h3 className="font-medium text-lg mb-3">{category.category}</h3>
                      <div className="space-y-3">
                        {category.exercises.map((exercise, exerciseIndex) => (
                          <div key={exerciseIndex} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{exercise.name}</p>
                              <p className="text-xs text-gray-500">{exercise.date}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Trophy className="h-4 w-4 text-yellow-500" />
                              <span className="font-medium">{exercise.weight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Chart</CardTitle>
                <CardDescription>Track your improvement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder message="Select an exercise to view progress" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest personal records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { exercise: "Bench Press", previous: "175 lbs", current: "185 lbs", improvement: "+10 lbs", date: "June 8, 2023" },
                    { exercise: "5K Run", previous: "23:15 min", current: "22:30 min", improvement: "-45 sec", date: "June 9, 2023" },
                    { exercise: "Pull-ups", previous: "12 reps", current: "15 reps", improvement: "+3 reps", date: "June 1, 2023" }
                  ].map((achievement, index) => (
                    <PersonalRecordCard 
                      key={index}
                      exercise={achievement.exercise}
                      weight={achievement.current}
                      date={achievement.date}
                      previous={achievement.previous}
                      improvement={achievement.improvement}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Index;
