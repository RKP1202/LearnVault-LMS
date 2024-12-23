import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import React from "react"
export default function Login() {

  const [signupInput, setSignupInput] = useState({ email: "", password: "", name: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const handleInputChange = (e, type) => {
    const { name, value } = e.target
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value })
    }
    else {
      setLoginInput({ ...loginInput, [name]: value })
    }
  }

  // data get karne ke liye
  const handleRegistration = (type) => {
    if (type === "signup") {
      console.log(signupInput);
      
    }
    else {
      console.log(loginInput);
    }
  }


  return (
    <div className="flex justify-center items-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Create Your account here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Eg. Pranav"
                  required={true}
                  onChange={(e) => handleInputChange(e, "signup")}
                  name="name"
                  value={signupInput.name}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="abc@gmail.com"
                  required={true}
                  onChange={(e) => handleInputChange(e, "signup")}
                  name="email"
                  value={signupInput.email}
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => handleInputChange(e, "signup")}
                  name="password"
                  value={signupInput.password}
                  type="password"
                  id="password"
                  required={true}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("signup")}>SignUp</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Welcome back!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  required={true}
                  onChange={(e) => handleInputChange(e, "login")}
                  name="email"
                  value={loginInput.email}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  type="password"
                  required={true}
                  onChange={(e) => handleInputChange(e, "login")}
                  name="password"
                  value={loginInput.password}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
