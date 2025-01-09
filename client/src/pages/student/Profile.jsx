import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"

import {
    User, Mail, Phone, MapPin, Book,
    Calendar, Award, Edit3
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
    const profile = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 8900",
        location: "New York, USA",
        bio: "Passionate learner and tech enthusiast. Always eager to learn new skills and technologies.",
        joinDate: "January 2024",
        completedCourses: 12,
        certificates: 8,
        avatar: "https://github.com/shadcn.png"
    };

    return (
        <div className="bg-[#ffffff] dark:bg-[#000000] min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Profile Info */}
                    <Card className="md:col-span-1 bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5]">
                        <CardHeader className="text-center">
                            <Avatar className="w-32 h-32 mx-auto border-4 border-[#fca311]">
                                <AvatarImage src={profile.avatar} />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <CardTitle className="mt-4 text-[#14213d] dark:text-[#ffffff]">
                                {profile.name}
                            </CardTitle>
                            <DialogDemo/>

                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <ProfileItem icon={Mail} label="Email" value={profile.email} />
                                <ProfileItem icon={Calendar} label="Joined" value={profile.joinDate} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Column - Details and Stats */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Bio Section */}
                        <Card className="bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5]">
                            <CardHeader>
                                <CardTitle className="text-[#14213d] dark:text-[#ffffff]">About Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#14213d]/60 dark:text-[#e5e5e5]">{profile.bio}</p>
                            </CardContent>
                        </Card>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatsCard
                                icon={Book}
                                title="Completed Courses"
                                value={profile.completedCourses}
                            />
                            <StatsCard
                                icon={Award}
                                title="Certificates Earned"
                                value={profile.certificates}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileItem = ({ icon: Icon, label, value }) => {
    return (
        <div className="flex items-center gap-3 text-[#14213d] dark:text-[#e5e5e5]">
            <Icon className="h-5 w-5 text-[#fca311]" />
            <div>
                <p className="text-sm opacity-70">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
};

const StatsCard = ({ icon: Icon, title, value }) => {
    return (
        <Card className="bg-[#ffffff] dark:bg-[#14213d] border-[#e5e5e5]">
            <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 bg-[#fca311]/10 rounded-lg">
                    <Icon className="h-6 w-6 text-[#fca311]" />
                </div>
                <div>
                    <p className="text-sm text-[#14213d]/60 dark:text-[#e5e5e5]">{title}</p>
                    <p className="text-2xl font-bold text-[#14213d] dark:text-[#ffffff]">{value}</p>
                </div>
            </CardContent>
        </Card>
    );
};


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"
                    className="mt-4 border-[#fca311] hover:bg-[#fca311] hover:text-[#000000]">
                    <Edit3 className="mr-2 h-4 w-4" />
                    Edit Profile
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" placeholder="" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ProfileImg" className="text-right">
                            Profile Photo
                        </Label>
                        <Input type="file" id="ProfileImg" accept="image/*" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ProfilePage;