// Write your code here

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieCards} = props
  const {thumbnailUrl, videoUrl} = movieCards
  return (
    <div>
      <Popup
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        modal
        nested
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="25" color="#231f20" />
            </button>
            <div className="video-url-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
