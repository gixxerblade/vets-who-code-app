import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPause, FaPlay } from 'react-icons/fa'
import './media.css'

function MediaPlayer({ currentEpisode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="audio-player">
      <img
        src={currentEpisode.artwork_url}
        alt={`Episode ${currentEpisode.episode_number} artwork`}
      />
      <div>
        <h5>{`Episode ${currentEpisode.episode_number}`}</h5>
        <h4>{`${currentEpisode.title.replace('#VetsWhoCode - ', '')}`}</h4>
        <p style={{color: 'var(--hask-flag-blue)'}}>{currentEpisode.description.replace(/<p>|<\/p>/g, '')}</p>
      </div>

      {isPlaying ? (
        <button
          onClick={() => {
            document.getElementById('audioSrc').pause()
            setIsPlaying(false)
          }}
        >
          <FaPause color="#091F40" title="Pause" size="2em" />
        </button>
      ) : (
        <button
          onClick={() => {
            document.getElementById('audioSrc').play()
            setIsPlaying(true)
          }}
        >
          <FaPlay color="#091F40" title="Play" size="2em" />
        </button>
      )}
    </div>
  )
}

MediaPlayer.propTypes = {
  currentEpisode: PropTypes.shape({
    artwork_url: PropTypes.string,
    audio_url: PropTypes.string,
    buzzsproutId: PropTypes.number,
    description: PropTypes.string,
    duration: PropTypes.number,
    episode_number: PropTypes.number,
    id: PropTypes.string,
    tags: PropTypes.string,
    title: PropTypes.string,
    published_at: PropTypes.string,
  }),
}

export default MediaPlayer
