import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text25 thq-heading-2">
                  What Our Users Say
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text33 thq-body-small">
                  Read what our users have to say about their experience with
                  Adet.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text37 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            Software Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text30 thq-body-small">
                        Adet helped me find my dream job within days of using
                        the platform. Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text32 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34 thq-body-small">
                            UX Designer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        The job alerts feature is a game-changer! I never miss
                        out on new opportunities now.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text36 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35 thq-body-small">
                            Product Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        Applying to jobs through Adet is so seamless and easy.
                        Love the user-friendly interface.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text31 thq-body-large">
                            Sarah Williams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Marketing Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text29 thq-body-small">
                        I&apos;ve saved so much time by using Adet to aggregate
                        job listings from various sources. Thank you!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Position: undefined,
  heading1: undefined,
  author2Alt: 'Jane Smith Image Alt Text',
  review3: undefined,
  author4Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU3MzM3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Sarah Williams Image Alt Text',
  review2: undefined,
  review4: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1702907155366-31d6c26a3938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU3MzM4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author4Name: undefined,
  author3Alt: 'Michael Johnson Image Alt Text',
  author2Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU3MzM3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author2Position: undefined,
  author3Position: undefined,
  author3Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU3MzM4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author1Alt: 'John Doe Image Alt Text',
}

Testimonial17.propTypes = {
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  author2Alt: PropTypes.string,
  review3: PropTypes.element,
  author4Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.element,
  review4: PropTypes.element,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.element,
  author1Src: PropTypes.string,
  content1: PropTypes.element,
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  author3Name: PropTypes.element,
  author3Src: PropTypes.string,
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
}

export default Testimonial17
