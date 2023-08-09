import React from 'react'
import Title from './Title'
import { serviceData } from '../data'
import ServiceData from './ServiceData'

const Servicespage = () => {
  return (
      <section className="section services" id="services">
       <Title title='Our' subTitle='Services'/>
        <div className="section-center services-center">
       

        {serviceData.map((data) => {
          
          return <ServiceData key={data.id}{...data}/>
       })}
        </div>
      </section>
  )
}

export default Servicespage
