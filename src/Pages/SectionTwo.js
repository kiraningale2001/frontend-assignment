import React from 'react'
import scroll from '../scroll'

function SectionTwo() {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <div className="navbar my-5">
            <h3 ><b>New this week</b></h3>
            <div className="d-flex">
           
            <button className='btn btn-light nav-button mx-1' onClick={() => document.querySelector(".cards").scrollBy(-450,0)}>&lt;</button>
            <button className=' btn btn-light nav-button mx-1' onClick={() => document.querySelector(".cards").scrollBy(450,0)}> &gt;</button>
            </div>
            </div>
            



            <div className="cards">
            
           

                <div className="mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./image.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Most popular around the world</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./sectiontwo/img2.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Most popular around the world</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./sectiontwo/img3.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Most popular around the world</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./image.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Great for team building</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./image.png" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Fun for the family</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./sectiontwo/img2.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Most popular around the world</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mx-1">
                    <div className="card bg-dark text-white">
                        <img src="./sectiontwo/img3.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <p className="float-sm-start"><span className="float-sm-start title">collection</span> <br/><span className="body-text">Most popular around the world</span></p>
                            <div className="col-sm-6 button-card">
                            <button className=" btn btn-light float-sm-start my-4 button-card">Show all</button>
                            </div>
                        </div>
                    </div>
                </div>


                </div>



        </div>

    )
}

export default SectionTwo
