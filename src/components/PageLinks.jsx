import React from 'react'
import { pageLinks } from '../data';
import PageL from './PageL';
const PageLinks = ({parentClass,itemClass}) => {
  
    return (
        <ul className={parentClass} id={parentClass}>
        {pageLinks.map((link) => {
      
          return <PageL key={link.id} link={link} itemClass={itemClass}/>
        })}
         
        
        </ul>
   )
  
}

export default PageLinks
