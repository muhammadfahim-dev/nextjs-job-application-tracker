"use client";

import React from "react";
import { getSession } from "@/lib/auth/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { signOut, useSession } from "@/lib/auth/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
function NavbarTabs() {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? (
        <>
          <Link href={"/dashboard"}>
            <Button
              variant={"ghost"}
              className="text-gray-700 hover:text-black"
            >
              Dashboard
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarFallback className={"bg-primary text-white text-lg"}>
                  {session.user.name[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-black">
                      {session.user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                    router.push("/sign-in");
                  }}
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default NavbarTabs;
