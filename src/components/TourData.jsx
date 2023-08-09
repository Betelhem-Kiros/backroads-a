import React from 'react'

const TourData = ({  source, date, text, country, paragraph, duration, mny } ) => {
  return (
       <article className="tour-card" >
            <div className="tour-img-container">
              <img src={source} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <h4>{text}</h4>
              <p>
                {paragraph}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {country}
                </p>
                  <p>{duration} days</p>
                  <p>{ mny}</p>
              </div>
            </div>
          </article>
  )
}

export default TourData
