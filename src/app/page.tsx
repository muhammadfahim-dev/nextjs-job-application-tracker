import { Button } from "@/components/ui/button";
import Image from "next/image";
import {ArrowRight} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <main className="flex-1 ">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A batter way to track your job application.
            </h1>

            <p className="text-gray-400 mb-10 text-xl">
              capture, organize and manage your job in one place.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button size={"lg"}>
                Start for free
                <ArrowRight className="ml-2" />
                </Button>
              <p>Free forever.No credit card required.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
