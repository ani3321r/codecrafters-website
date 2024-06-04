'use client';
import FooterNew from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/moving-border';

export function Membership() {
  return (
    <div className='relative flex h-[70rem] w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased'>
      <Navbar />
      <div className='mx-auto max-w-2xl p-4'>
        <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl'>
          Join Code crafters
        </h1>
        <p></p>
        <p className='relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam
          commodi similique doloribus, culpa temporibus officiis accusamus
          excepturi ratione laudantium, qui dolores facilis sit ea. Ab nisi
          nihil quidem iste.
        </p>
        <div className='relative flex flex-col items-center justify-center'>
          <Button>Join</Button>
        </div>
      </div>
      <BackgroundBeams />
      <FooterNew />
    </div>
  );
}

export default Membership;
