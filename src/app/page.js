"use client"

import AdContainer from '@/components/adContainer/page';
import CardModule from '@/components/cardModule/page';
import CoverModule from '@/components/coverModule/page';
import Divider from '@/components/divider/page';
import HighlightsList from '@/components/hightlight/page';

export default function Home() {

  return (
    <div
      className='max-w-[1100px] overflow-x-hidden m-auto md:p-5'
    >
      <div className='flex flex-col'>
        <CoverModule order={1} />
        <Divider title={'Política'} />
        <CoverModule order={2} />
        <AdContainer />
        <Divider title={'Actualidad'} />
        <CoverModule order={2} />
        <HighlightsList />
        <AdContainer />
      </div>
      <Divider title={'Política'} />
      <CardModule />
      <Divider title={'Sociedad'} />
      <CardModule />
      <Divider title={'Sucesos'} />
      <CardModule />
      <AdContainer />
      <Divider title={'Corazón'} />
      <CardModule />
      <div className='flex flex-col'>
        <Divider title={'Política'} />
        <CoverModule order={5} />
        <Divider title={'Actualidad'} />
        <CoverModule order={3} />
      </div>
      <Divider title={'Corazón'} />
      <CardModule />
      <div className='flex flex-col'>
        <Divider title={'Deportes'} />
        <CoverModule order={5} />
      </div>
      <Divider title={'Sociedad'} />
      <CardModule />
      <div className='flex flex-col'>
        <Divider title={'Política'} />
        <CoverModule order={4} />
      </div>
      <Divider title={'Actualidad'} />
      <CardModule />
      <div className='flex flex-col'>
        <Divider title={'Sucesos'} />
        <CoverModule order={5} />
        <Divider title={'Noticias'} />
        <CoverModule order={4} />
      </div>
      <CardModule />
      <CardModule />
      <div className='flex flex-col'>
        {/* <Divider title={'Política'} /> */}
        <CoverModule order={2} />
        <CoverModule order={1} />
      </div>
      <CardModule />
      <CardModule />
      <div className='flex flex-col'>
        {/* <Divider title={'Sucesos'} /> */}
        <CoverModule order={5} />
        {/* <Divider title={'Noticias'} /> */}
        <CoverModule order={4} />
      </div>
    </div>
  );
}
