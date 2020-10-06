/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import MediaCards, { MediaPlayer } from '../components/Media'

function MediaPage({
  // eslint-disable-next-line react/prop-types
  data: {
    // eslint-disable-next-line react/prop-types
    allBuzzsproutPodcastEpisode: { edges: episodes },
  },
}) {
  const publishedEpisodes = episodes.filter(({ node }) => new Date(node.published_at) <= Date.now())
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0].node)

  const handleClick = node => {
    setCurrentEpisode(node)
  }

  return (
    <>
      <PageHeader title="media" />
      <div className="pad-regular bg-default">
        <section id="media" className="section bg-default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="contactus-brief">
                  <h3>The VetsWhoCode Podcast</h3>
                  <audio id="audioSrc" src={currentEpisode.audio_url}></audio>
                </div>
              </div>
            </div>
            <div className="row is-flex">
              <MediaPlayer currentEpisode={currentEpisode} />
            </div>
            <div className="row is-flex">
              <MediaCards
                episodes={publishedEpisodes}
                clickHandler={handleClick}
                currentEpisode={currentEpisode}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const query = graphql`
  query PodcastPageQuery {
    allBuzzsproutPodcastEpisode {
      edges {
        node {
          artist
          artwork_url
          audio_url
          buzzsproutId
          description
          duration
          episode_number
          id
          private
          season_number
          tags
          title
          published_at
        }
      }
    }
  }
`
export default MediaPage
