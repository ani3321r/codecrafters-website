'use client'
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

export function Membership() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Navbar/>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join Code crafters
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam commodi similique doloribus, culpa temporibus officiis accusamus excepturi ratione laudantium, qui dolores facilis sit ea. Ab nisi nihil quidem iste.
        </p>
        <div className="relative flex flex-col items-center justify-center">
        <Button >
            Join
        </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Membership
