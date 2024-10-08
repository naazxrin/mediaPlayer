import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import LandingImg from '../assets/assetss.jpg'
import arrangeImg from '../assets/media.jpg'
import categoriseImg from '../assets/vedio.jpg'
import settingImg from '../assets/settings.jpg'
const Landing = () => {
  return (
  <div style={{padding:'80px'}} className='container'>
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h1>Welcome to <span className='text-warning'> Media Player</span></h1>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from Youtube and also allow them to arrange it in different categories by drag and drop. User can also have the provision manage their watch history as well. what are you waiting for, lets start exploring our site!!.</p>
          <Link className='btn btn-info' to = {'/home'}>Get Started!!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={LandingImg} alt="" />
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src={arrangeImg} />
      <Card.Body>
        <Card.Title>Arrange Musics</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src={categoriseImg} />
      <Card.Body>
        <Card.Title>categorise Musics</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src={settingImg} />
      <Card.Body>
        <Card.Title>settings</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
          </div>
        </div>
      </div>
 <div className="my-5 row align-items-center border rounded p-5">
  <div className="col-lg-5">
    <h3 className="text-warning">Simple,Fast and Powerful</h3>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span> <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo libero ut? Illo, labore? Dolor adipisci architecto et odio, laudantium necessitatibus unde reprehenderit ea hic sequi perferendis magni aut qui!
    </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span> <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo libero ut? Illo, labore? Dolor adipisci architecto et odio, laudantium necessitatibus unde reprehenderit ea hic sequi perferendis magni aut qui!
    </p>
    <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything</span> <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo libero ut? Illo, labore? Dolor adipisci architecto et odio, laudantium necessitatibus unde reprehenderit ea hic sequi perferendis magni aut qui!
    </p>
  </div>
  <div className="col"></div>
  <div className="col-lg-6">
  <iframe width="500" height="400" src="https://www.youtube.com/embed/a9cyG_yfh1k" title="Dua Lipa - Illusion (Official Music Video)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
  </div>
 </div>
    </div>
 

    
  )
}

export default Landing