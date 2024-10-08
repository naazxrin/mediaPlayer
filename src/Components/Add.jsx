import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../services/allApi'
const Add = ({setvideoUploadResponse}) => {
  const [isInvalidLink,setInvalidLink] = useState(false)
  const [VideoDetails, setVideoDetails] = useState({
    caption: "", url: "", link: ""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(VideoDetails);
  const getEmbededLink = (youtubeLink) => {
    if (youtubeLink.includes("v=")) {
      const videoId = youtubeLink.split("v=")[1].slice(0, 11)
      console.log(videoId);
      setVideoDetails({ ...VideoDetails, link:` https://www.youtube.com/embed/${videoId}` }) 
      setInvalidLink(false)
     } else {
      setInvalidLink(true)
      console.log("invalid url");
      setVideoDetails({ ...VideoDetails, link: "" })
    }
  }
  const handleUploadVideo = async()=>{
    const{caption,url,link}= VideoDetails
    if(caption && url && link){
      // alert("call api");
      try{
        const response = await uploadVideoAPI(VideoDetails)
        // console.log(response);
        if(response.status>=200 && response.status<300 ){
          handleClose()
          setVideoDetails({...VideoDetails,caption:"",url:"",link:""})
          setvideoUploadResponse(response)
          alert("video upload sucessfully!!!")
        }
      }catch(err){
        // console.log(err);
        
      }
    }else{
      alert("Please fill the form completely");
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle px-3 py-2 fs-6 fw-bolder'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload video details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="videoCaption"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...VideoDetails, caption: e.target.value })} type="text" placeholder="video caption" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputUrl" label="image URL">
              <Form.Control onChange={e => setVideoDetails({ ...VideoDetails, url: e.target.value })} type="text" placeholder="img url" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputLInk" label="youtube link">
              <Form.Control onChange={e => getEmbededLink(e.target.value)} type="text" placeholder="youtube link" />
            </FloatingLabel>
            {isInvalidLink&&
            <div className="mt-3 text-danger fw-bolder">
              Invalid Youtubelink
            </div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default Add