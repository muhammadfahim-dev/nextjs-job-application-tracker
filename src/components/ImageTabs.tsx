"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 items-center justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`cursor-pointer text-sm px-6 rounded-xl font-medium transition-colors duration-300 ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Organize Applications
            </Button>

            <Button
              className={`cursor-pointer text-sm px-6 rounded-xl font-medium transition-colors duration-300 ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setActiveTab("hired")}
            >
              Get Hired
            </Button>

            <Button
              className={`cursor-pointer text-sm px-6 rounded-xl font-medium transition-colors duration-300 ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setActiveTab("boards")}
            >
              Manage Boards
            </Button>
          </div>

          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src={"/hero-images/hero1.png"}
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "hired" && (
              <Image
                src={"/hero-images/hero2.png"}
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "boards" && (
              <Image
                src={"/hero-images/hero3.png"}
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageTabs;
