import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type) => {
    const inputData = type === 'signup' ? signupInput : loginInput;
    console.log(inputData);
    
  }
  return (
    <div className="w-full flex items-center justify-center">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Singup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Aaditya Gurjar"
                  value={signupInput.name}
                  name="name"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Abc@gmail.com"
                  value={signupInput.email}
                  name="email"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Password"
                  value={signupInput.password}
                  name="password"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("signup")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login by using your Email & password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Abc@gmail.com"
                  type="email"
                  value={loginInput.email}
                  name="email"
                  onChange={(e) => changeInputHandler(e, "login")}
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  value={loginInput.password}
                  name="password"
                  onChange={(e) => changeInputHandler(e, "login")}
                  required="true"
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
  );
};

export default Login;
