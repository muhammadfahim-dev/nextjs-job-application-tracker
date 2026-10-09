import { Briefcase } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import NavbarTabs from "./NavbarTabs";

async function Navbar() {
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

        <Suspense fallback={<p>loading...</p>}>
          <NavbarTabs />
        </Suspense>
      </div>
    </nav>
  );
}

export default Navbar;
