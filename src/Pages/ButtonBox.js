import React from 'react'

function buttonBox() {
  return (
    <div>
      <div className="cards my-5 container">

        <div className="cards" id="buttons">

          <button type="button" className="btn  btn-sm nav-button mx-1">Dates</button>
          <button type="button" className="btn  btn-sm nav-button mx-1">Group Size</button>
          <button type="button" className="btn  btn-sm nav-button mx-1">More filters</button>
          <span>|</span>
          <button className='btn btn-light nav-button mx-1' onClick={() => document.querySelector(".button").scrollBy(-10, 0)}>&lt;</button>
          
          <div className="button">
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">A</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">B</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">C</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">D</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">E</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">F</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">G</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">H</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">I</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">J</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">K</button>
            <button type="button" className="btn btn-light btn-sm nav-button mx-1">L</button>

          </div>
          <button className=' btn btn-light nav-button mx-1' onClick={() => document.querySelector(".button").scrollBy(10, 0)}> &gt;</button>

        </div>

      </div>

    </div>
  )
}

export default buttonBox
