import React from 'react';
import Title from './Title';
import { tourData } from '../data';
import TourData from './TourData';

const Tours = () => {
  return (
   <section className="section" id="tours">
         <Title title='Featured' subTitle='tours'/>
      <div className="section-center featured-center">
        {tourData.map((tours) => {
       
          return <TourData key={tours.id} {...tours}/>
         })}
        </div>
      </section>
  )
}

export default Tours
