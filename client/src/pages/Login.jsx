import { Button } from "@/components/ui/button"
import { toast } from "sonner"

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
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { useEffect, useState } from "react"
import React from "react"
import { Loader2 } from "lucide-react"
export default function Login() {

  const [signupInput, setSignupInput] = useState({ email: "", password: "", name: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  //redux  integ
  const [registerUser, { data: registerData, isLoading: registerIsLoading, error: registerError }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, isLoading: loginIsloading, error: loginError }] = useLoginUserMutation();

  useEffect(() => {
    if (registerError) {
      toast.error("An error occurred while registering. Please try again later.");
    }

    else if (loginError) {
      toast.error("An error occurred while logging in. Please try again later.");
    }

    else if (registerData) {
      toast.success("Registration successful!");
    }

    else if (loginData) {
      toast.success("Login successful!");
    }


  }
    , [registerError, loginError, loginData, registerData, loginIsloading, registerIsLoading, loginUser, registerUser])

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
  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;

    try {
      const result = await action(inputData);
      if (type === "signup" && result?.data) {
        // Clear the signup fields only after a successful registration
        setSignupInput({ email: "", password: "", name: "" });
      }
      else if (type === "login" && result?.data) {
        // Optionally clear login fields after a successful login
        setLoginInput({ email: "", password: "" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }



  return (
    <div className="flex justify-center items-center mt-20 py-4">
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
              <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
                {
                  registerIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </>
                  ) : "SignUp"
                }
              </Button>
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
              <Button disabled={loginIsloading} onClick={() => handleRegistration("login")}>
                {
                  loginIsloading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </>
                  ) : "Login"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
