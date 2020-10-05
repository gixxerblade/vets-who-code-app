/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import { FaPlay, FaPause } from 'react-icons/fa'

function Media({
  // eslint-disable-next-line react/prop-types
  data: {
    // eslint-disable-next-line react/prop-types
    allBuzzsproutPodcastEpisode: { edges: episodes },
  },
}) {
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0].node)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = node => {
    setCurrentEpisode(node)
  }

  return (
    <>
      <PageHeader title="media" />
      <div className="pad-regular bg-default">
        <section id="contact" className="section bg-default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="contactus-brief">
                  <h3>The VetsWhoCode Podcast</h3>
                  <audio id="audioSrc" src={currentEpisode.audio_url}></audio>
                  <div
                    className="audioPlayer"
                    style={{
                      boxShadow: '0 0 8px 0 var(--light-gray)',
                      padding: '20px',
                      display: 'grid',
                      width: '100%',
                      gridTemplateColumns: '150px auto 150px',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <img
                      src={currentEpisode.artwork_url}
                      style={{
                        height: '100px',
                        justifySelf: 'center',
                        borderRadius: '50%',
                        border: '1px solid var(--hash-flag-blue)',
                      }}
                      alt=""
                    />
                    <div>
                      <h5>{`Episode ${currentEpisode.episode_number}`}</h5>
                      <h4>{`${currentEpisode.title.replace('#VetsWhoCode - ', '')}`}</h4>
                    </div>

                    {isPlaying ? (
                      <button
                        style={{
                          background: 'none',
                          border: '1px solid var(--hash-flag-blue)',
                          borderRadius: '50%',
                          height: '100px',
                          width: '100px',
                          justifySelf: 'center',
                        }}
                        onClick={() => {
                          document.getElementById('audioSrc').pause()
                          setIsPlaying(false)
                        }}
                      >
                        <FaPause color="#091F40" size="2em" />
                      </button>
                    ) : (
                      <button
                        style={{
                          background: 'none',
                          border: '1px solid var(--hash-flag-blue)',
                          borderRadius: '50%',
                          height: '100px',
                          width: '100px',
                          justifySelf: 'center',
                        }}
                        onClick={() => {
                          document.getElementById('audioSrc').play()
                          setIsPlaying(true)
                        }}
                      >
                        <FaPlay color="#091F40"  size="2em" />
                      </button>
                    )}
                  </div>
                  {episodes.map(({ node }) => (
                    <div
                      key={node.id}
                      className="episode"
                      style={
                        node.id === currentEpisode.id
                          ? {
                              background: 'var(--hash-flag-blue)',
                              color: 'white',
                              fontWeight: 'bold',
                              paddingLeft: '20px',
                            }
                          : { paddingLeft: '20px' }
                      }
                      onClick={() => handleClick(node)}
                    >
                      {`Episode ${node.episode_number} - ${node.title.replace(
                        '#VetsWhoCode - ',
                        ''
                      )}`}
                    </div>
                  ))}
                </div>
              </div>
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
          published_at(fromNow: true)
        }
      }
    }
  }
`
export default Media
