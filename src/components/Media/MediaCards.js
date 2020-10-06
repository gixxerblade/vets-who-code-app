import React from 'react'
import PropTypes from 'prop-types'
import './media.css'

function MediaCards({ episodes, clickHandler, currentEpisode }) {
  return (
    <>
      {episodes.map(({ node }) => {
        const episodeDate = new Date(node.published_at)

        return (
          <div key={node.id} className="col-md-6 col-lg-3 col-sm-6">
            <div
              className={`card-box text-center ${
                currentEpisode.id === node.id ? 'active-episode' : ''
              }`}
              onClick={() => clickHandler(node)}
            >
              <div className="upper">
                <div className="user-pic">
                  <img src={node.artwork_url} alt={node.id} className="media-image" />
                </div>
                <h5>{node.title.replace('#VetsWhoCode - ', '')}</h5>
                <h6>{episodeDate.toDateString().slice(4)}</h6>
              </div>
              <div className="media-description">
                <p>{node.description.replace(/<p>|<\/p>/g, '').slice(0, 100)}...</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

MediaCards.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
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
    })
  ),
  clickHandler: PropTypes.func,
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

export default MediaCards
