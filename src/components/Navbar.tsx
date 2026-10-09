import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white px-3">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          <Link href={"/sign-in"}>
            <Button
              variant={"ghost"}
              className="text-gray-700 hover:text-black"
            >
              Log in
            </Button>
          </Link>

          <Link href={"/sign-up"} className="">
            <Button className={"bg-primary hover:bg-primary/90"}>
              Sign up free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
