import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <div className="pt-16 bg-gradient-to-b from-[#14213d] to-[#000000] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold text-[#ffffff]">
                            Unlock Your Potential with{' '}
                            <span className="text-[#fca311]">LearnVault</span>
                        </h1>
                        <p className="text-[#e5e5e5] text-lg">
                            Transform your learning journey with our comprehensive online learning platform.
                            Access high-quality courses, expert instructors, and interactive content designed
                            to help you succeed.
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000] font-semibold px-6 py-6">
                                Get Started
                                <ArrowRight className="ml-2" size={20} />
                            </Button>
                            <Button variant="outline" className="border-[#fca311] text-[#ffffff] hover:bg-[#fca311] px-6 py-6">
                                Browse Courses
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-[#fca311] text-3xl font-bold">500+</div>
                                <div className="text-[#e5e5e5] text-sm">Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-[#fca311] text-3xl font-bold">50k+</div>
                                <div className="text-[#e5e5e5] text-sm">Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-[#fca311] text-3xl font-bold">100+</div>
                                <div className="text-[#e5e5e5] text-sm">Instructors</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Features */}
                    <div className="grid gap-6">
                        <div className="bg-[#14213d]/50 p-6 rounded-xl border border-[#fca311]/20 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#fca311]/10 rounded-lg">
                                    <BookOpen className="text-[#fca311]" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#ffffff]">Interactive Learning</h3>
                            </div>
                            <p className="text-[#e5e5e5]">
                                Engage with interactive content, quizzes, and hands-on projects
                                designed to reinforce your learning.
                            </p>
                        </div>

                        <div className="bg-[#14213d]/50 p-6 rounded-xl border border-[#fca311]/20 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#fca311]/10 rounded-lg">
                                    <Users className="text-[#fca311]" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#ffffff]">Expert Instructors</h3>
                            </div>
                            <p className="text-[#e5e5e5]">
                                Learn from industry professionals and subject matter experts
                                who bring real-world experience to your education.
                            </p>
                        </div>

                        <div className="bg-[#14213d]/50 p-6 rounded-xl border border-[#fca311]/20 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#fca311]/10 rounded-lg">
                                    <Award className="text-[#fca311]" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#ffffff]">Certified Learning</h3>
                            </div>
                            <p className="text-[#e5e5e5]">
                                Earn recognized certificates upon completion to showcase your
                                newly acquired skills to employers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;