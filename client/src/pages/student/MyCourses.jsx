import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Clock, BarChart } from 'lucide-react';


const CourseProgressCard = ({ course }) => {
    return (
        <Card className="overflow-hidden bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-48 object-cover"
                />
                <div className="flex-1">
                    <CardHeader>
                        <CardTitle className="text-[#14213d] dark:text-[#ffffff]">
                            {course.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-[#14213d]/60 dark:text-[#e5e5e5]">
                            <Clock className="h-4 w-4" />
                            Last accessed {course.lastAccessed}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-[#14213d]/60 dark:text-[#e5e5e5]">
                                    Progress
                                </span>
                                <span className="text-[#fca311] font-medium">
                                    {course.progress}%
                                </span>
                            </div>
                            <Progress
                                value={course.progress}
                                className="h-2 bg-[#e5e5e5] dark:bg-[#000000]"
                                indicatorClassName="bg-[#fca311]"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#fca311]" />
                                <span className="text-[#14213d]/60 dark:text-[#e5e5e5]">
                                    {course.timeLeft} left
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart className="h-4 w-4 text-[#fca311]" />
                                <span className="text-[#14213d]/60 dark:text-[#e5e5e5]">
                                    {course.progress}/100 units
                                </span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-[#fca311] hover:bg-[#14213d] text-[#000000] hover:text-[#ffffff]">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Continue Learning
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
};

// Learning Stats Component
const LearningStats = () => {
    const stats = [
        {
            title: "Hours Learned",
            value: "45",
            icon: Clock,
        },
        {
            title: "Completion Rate",
            value: "78%",
            icon: BarChart,
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => (
                <Card key={index} className="bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5]">
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-[#fca311]/10 rounded-lg">
                            <stat.icon className="h-6 w-6 text-[#fca311]" />
                        </div>
                        <div>
                            <p className="text-sm text-[#14213d]/60 dark:text-[#e5e5e5]">
                                {stat.title}
                            </p>
                            <p className="text-2xl font-bold text-[#14213d] dark:text-[#ffffff]">
                                {stat.value}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default function MyCourses() {
    // Sample course data
    // const courses = {
    //     inProgress: [
    //         {
    //             id: 1,
    //             title: "Complete Web Development Bootcamp",
    //             progress: 65,
    //             lastAccessed: "2 days ago",
    //             timeLeft: "5 hours",
    //             nextLesson: "Advanced CSS Layouts",
    //             image: "/api/placeholder/400/250"
    //         },
    //         {
    //             id: 2,
    //             title: "JavaScript Masterclass",
    //             progress: 45,
    //             lastAccessed: "1 day ago",
    //             timeLeft: "8 hours",
    //             nextLesson: "Async/Await",
    //             image: "/api/placeholder/400/250"
    //         }
    //     ],
    //     completed: [
    //         {
    //             id: 3,
    //             title: "HTML & CSS Fundamentals",
    //             progress: 100,
    //             lastAccessed: "1 month ago",
    //             timeLeft: "0 hours",
    //             nextLesson: "Course Completed",
    //             image: "/api/placeholder/400/250"
    //         }
    //     ]
    // };

    const courses = [];

    return (
        <div className="bg-[#ffffff] dark:bg-[#000000] min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#14213d] dark:text-[#ffffff]">
                        My Learning Journey
                    </h1>
                    <Button className="bg-[#fca311] hover:bg-[#14213d] text-[#000000] hover:text-[#ffffff]">
                        Browse More Courses
                    </Button>
                </div>

                <LearningStats />

                <Tabs defaultValue="inProgress" className="space-y-6">
                    <TabsList className="bg-[#e5e5e5] dark:bg-[#14213d] border border-[#fca311]">
                        <TabsTrigger
                            value="inProgress"
                            className="data-[state=active]:bg-[#fca311] data-[state=active]:text-[#000000]"
                        >
                            In Progress
                        </TabsTrigger>
                        <TabsTrigger
                            value="completed"
                            className="data-[state=active]:bg-[#fca311] data-[state=active]:text-[#000000]"
                        >
                            Completed
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="inProgress">
                        <div className="grid grid-cols-1 gap-6">
                            {
                                courses.length === 0 ? (
                                    <div className="text-[#14213d]/60 dark:text-[#e5e5e5] text-center">
                                        You have not started any courses yet
                                    </div>
                                ) : (
                                    courses.inProgress.map((course) => (
                                        <CourseProgressCard key={course.id} course={course} />
                                    ))
                                )
                            }
                        </div>
                    </TabsContent>

                    <TabsContent value="completed">
                        <div className="grid grid-cols-1 gap-6">
                            {
                                courses.length === 0 ? (
                                    <div className="text-[#14213d]/60 dark:text-[#e5e5e5] text-center">
                                        You have not completed any courses yet
                                    </div>
                                ) : (
                                    courses.completed.map((course) => (
                                        <CourseProgressCard key={course.id} course={course} />
                                    ))
                                )
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}