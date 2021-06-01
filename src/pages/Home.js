import React from 'react'
import Navbar from '../components/Navbar'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Image1 from './hero.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>

            <Fade top>
                <div>
                <Navbar />
                </div>
            </Fade>

            <div className="container">

                <div className="row">
                    <div className="col-md-6">

                        <Slide left>

                            <div style={{marginTop:'12rem'}}>
                                <h1 style={{textAlign:'center', color:'#147EFB', fontSize:'50px'}}>A Heathy Friend in<br/> your pocket</h1>
                                <p style={{textAlign:'center', color:'grey', marginTop:'1rem'}}>Share your thoughts freely with your friend</p>
                            </div>

                            <div className="d-flex justify-content-center my-5">
                                <button type="button large" style={{width:'70%'}} className="btn btn-primary">
                                <a href='https://cutt.ly/mngLiE2' style={{color:'white', textDecoration:'none'}}>
                                     Download App
                                     </a>
                                </button>
                            </div>

                        </Slide>

                    </div>
                    <div className="col-md-6">

                        <Slide right>
                        <div className="image my-5">
                            <img src={Image1} alt='' height='604px' width='571px' style={{borderRadius:'20px', filter:'drop-shadow(-20px 10px 30px rgba(0, 0, 0, 0.25))'}}></img>
                        </div>
                        </Slide>

                    </div>
                </div>

                <div className="features" style={{marginBottom:'5rem'}}>

                    <div className="d-flex justify-content-center my-3">
                        <Slide bottom>
                        <h3 style={{color:'#1890FF'}}>Features of our app</h3>
                        </Slide>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-6">
                            <Slide left>
                                <div className="card" style={{borderWidth:'2px', marginTop:'2rem'}}>
                                    <div className="card-body">
                                        <h4 style={{textAlign:'left'}}>Anonymous Chatting</h4>
                                        <p style={{color:'grey'}}>Everything You share will be anonymous</p>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-md-6">
                            <Slide right>
                                <div className="card" style={{borderWidth:'2px', marginTop:'2rem'}}>
                                    <div className="card-body">
                                        <h4 style={{textAlign:'left'}}>Real Time Chat</h4>
                                        <p style={{color:'grey'}}>Everything You share will be anonymous</p>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-6">
                            <Slide left>
                                <div className="card" style={{borderWidth:'2px', marginTop:'1rem'}}>
                                    <div className="card-body">
                                        <h4 style={{textAlign:'left'}}>Ai Posts Sorting</h4>
                                        <p style={{color:'grey'}}>Everything You share will be anonymous</p>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-md-6">
                            <Slide right>
                                <div className="card" style={{borderWidth:'2px', marginTop:'1rem'}}>
                                    <div className="card-body">
                                        <h4 style={{textAlign:'left'}}>Safe and secure</h4>
                                        <p style={{color:'grey'}}>Everything You share will be anonymous</p>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>

                </div>

            </div>

            

        </div>
    )
}

export default Home
