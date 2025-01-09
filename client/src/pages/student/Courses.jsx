import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CourseSection = () => {
    // Sample course data - in real app, this would come from an API
    const courses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "John Doe",
            level: "Intermediate",
            duration: "12 weeks",
            rating: 4.8,
            students: 1234,
            price: 99.99,
            category: "Web Development",
            image: "/api/placeholder/400/250"
        },
        // Add more course objects here
    ];

    return (
        <div className="bg-[#ffffff] dark:bg-[#000000] py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Search and Filter Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-3 text-[#14213d] dark:text-[#e5e5e5]" />
                            <Input 
                                placeholder="Search courses..." 
                                className="pl-10 bg-[#e5e5e5] dark:bg-[#14213d] border-[#fca311]"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="border-[#fca311] hover:bg-[#fca311] hover:text-[#000000]">
                                Filter
                            </Button>
                            <Button variant="outline" className="border-[#fca311] hover:bg-[#fca311] hover:text-[#000000]">
                                Sort
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CourseCard = ({ course }) => {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5]">
            <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <div className="flex justify-between items-start">
                    <Badge className="bg-[#fca311] text-[#000000] hover:bg-[#fca311]/80">
                        {course.category}
                    </Badge>
                    <Badge variant="outline" className="border-[#fca311] text-[#fca311]">
                        {course.level}
                    </Badge>
                </div>
                <CardTitle className="text-[#14213d] dark:text-[#ffffff]">{course.title}</CardTitle>
                <CardDescription className="text-[#14213d]/60 dark:text-[#e5e5e5]">
                    by {course.instructor}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between text-sm text-[#14213d]/60 dark:text-[#e5e5e5]">
                    <span>⭐ {course.rating}</span>
                    <span>{course.students} students</span>
                    <span>{course.duration}</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#14213d] dark:text-[#ffffff]">
                    ${course.price}
                </span>
                <Button className="bg-[#fca311] hover:bg-[#14213d] text-[#000000] hover:text-[#ffffff]">
                    Enroll Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseSection;