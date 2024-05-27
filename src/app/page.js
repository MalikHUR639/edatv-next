"use client"

import CardModule from '@/components/cardModule/page';
import CoverModule from '@/components/coverModule/page';
import Divider from '@/components/divider/page';

export default function Home() {

  return (
    <div
      className='max-w-full xl:max-w-[1100px] mx-auto overflow-x-hidden'
    >
      <div className='flex flex-col'>
        <CoverModule order={1} />
        <Divider title={'Policy'} />
        <CoverModule order={2} />
        <Divider title={'Actualidad'} />
        <CoverModule order={2} />
        <Divider title={'Actualidad'} />
        <CoverModule order={4} />
        <Divider title={'Actualidad'} />
        <CoverModule order={3} />
        <Divider title={'Política'} />
        <CoverModule order={5} />
      </div>
      <Divider title={'Policy'} />
      <CardModule />
      <Divider title={'Sociedad'} />
      <CardModule />
      <Divider title={'Sucesos'} />
      <CardModule />
    </div>
  );
}
