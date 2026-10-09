"use client";

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
import { signUp } from "@/lib/auth/auth-client";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signUp.email(formData);

      if (result.error) {
        setError(result.error.message || "sign up failed");
      } else {
        router.push("/dashboard");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>

          <CardDescription className="text-gray-600">
            create an accoutn to start tracking your job applications
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleOnSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="">
              <Label
                className="text-gray-800 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                value={formData.name}
                name="name"
                id="name"
                type="text"
                placeholder="Jhone Doe"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div className="">
              <Label
                htmlFor="email"
                className="text-gray-800 font-semibold mb-2"
              >
                Email
              </Label>
              <Input
                value={formData.email}
                name="email"
                onChange={(e) => handleChangeInput(e)}
                id="email"
                type="text"
                placeholder="example@gmail.com"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="">
              <Label
                htmlFor="password"
                className="text-gray-800 font-semibold mb-2"
              >
                Pasword
              </Label>
              <Input
                value={formData.password}
                name="password"
                onChange={(e) => handleChangeInput(e)}
                id="password"
                type="password"
                placeholder="password"
                required
                minLength={8}
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Sign Up"}
            </Button>
            <p className="text-center text-sm text-gray-600">
              Already have an account ?{" "}
              <Link
                href={"sign-in"}
                className="font-medium text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
