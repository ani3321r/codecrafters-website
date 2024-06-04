'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

import products from '@/data/ourTeam.json';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/Footer';

function Page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <Navbar />
      <h1 className='mb-8 text-center font-sans text-lg font-bold text-white md:text-7xl'>
        Our Team
      </h1>
      <div className='flex flex-wrap justify-center'>
        {products.products.map((Product) => (
          <CardContainer className='inter-var m-4'>
            <CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                {Product.title}
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'
              >
                {Product.description}
              </CardItem>
              <CardItem translateZ='100' className='mt-4 w-full'>
                <Image
                  src={Product.image}
                  height='1000'
                  width='1000'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  alt={Product.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <FooterNew />
    </div>
  );
}

export default Page;
