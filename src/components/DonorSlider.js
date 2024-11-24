import React from 'react'
import donor1Img from '../imgs/1.png'
import donor2Img from '../imgs/2.png'
import donor3Img from '../imgs/3.png'
import donor4Img from '../imgs/4.png'
import donor5Img from '../imgs/5.png'
import donor6Img from '../imgs/6.jpeg'
import donor7Img from '../imgs/7.png'
import donor8Img from '../imgs/8.png'

const DonorSlider = () => {
  return (
    <section className='section' style={{ padding: "50px 0px" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {/* donors slider start */}
            <div className='slider-holder'>
              <div className='donors-slider donors-slider--style-1 slick-initialized slick-slider slick-dotted'>
                <div className='slick-list draggable'>
                  <div
                    className='slick-track'
                    style={{
                      opacity: 1,
                      width: "4290px",
                      transform: "translate3d(-2340px, 0px, 0px)",
                    }}
                  >
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-6'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor3Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-5'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor4Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-4'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor5Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-3'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor6Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-2'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor7Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='-1'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor8Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='0'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide00'
                      aria-describedby='slick-slide-control00'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor1Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='1'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide01'
                      aria-describedby='slick-slide-control01'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor2Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='2'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide02'
                      aria-describedby='slick-slide-control02'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor3Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='3'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide03'
                      aria-describedby='slick-slide-control03'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor4Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='4'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide04'
                      aria-describedby='slick-slide-control04'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor5Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide'
                      data-slick-index='5'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide05'
                      aria-describedby='slick-slide-control05'
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor6Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-current slick-active'
                      data-slick-index='6'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide06'
                      aria-describedby='slick-slide-control06'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor7Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-active'
                      data-slick-index='7'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      role='tabpanel'
                      id='slick-slide07'
                      aria-describedby='slick-slide-control07'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor8Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-active'
                      data-slick-index='8'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor1Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-active'
                      data-slick-index='9'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor2Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-active'
                      data-slick-index='10'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor2Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned slick-active'
                      data-slick-index='11'
                      aria-hidden='false'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor4Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='12'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor5Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='13'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor6Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='14'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor7Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className='slick-slide slick-cloned'
                      data-slick-index='15'
                      aria-hidden='true'
                      style={{ width: "195px" }}
                      tabIndex='-1'
                    >
                      <div>
                        <div
                          className='donors-slider__item'
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='donors-slider__img'>
                            <img src={donor8Img} alt='donor' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className='slick-dots'
                  style={{ display: "flex" }}
                  role='tablist'
                >
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control00'
                      aria-controls='slick-slide00'
                      aria-label='1 of 2'
                      tabIndex='-1'
                    >
                      1
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control01'
                      aria-controls='slick-slide01'
                      aria-label='2 of 2'
                      tabIndex='-1'
                    >
                      2
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control02'
                      aria-controls='slick-slide02'
                      aria-label='3 of 2'
                      tabIndex='-1'
                    >
                      3
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control03'
                      aria-controls='slick-slide03'
                      aria-label='4 of 2'
                      tabIndex='-1'
                    >
                      4
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control04'
                      aria-controls='slick-slide04'
                      aria-label='5 of 2'
                      tabIndex='-1'
                    >
                      5
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control05'
                      aria-controls='slick-slide05'
                      aria-label='6 of 2'
                      tabIndex='-1'
                    >
                      6
                    </button>
                  </li>
                  <li role='presentation' className='slick-active'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control06'
                      aria-controls='slick-slide06'
                      aria-label='7 of 2'
                      tabIndex='0'
                      aria-selected='true'
                    >
                      7
                    </button>
                  </li>
                  <li role='presentation'>
                    <button
                      type='button'
                      role='tab'
                      id='slick-slide-control07'
                      aria-controls='slick-slide07'
                      aria-label='8 of 2'
                      tabIndex='-1'
                    >
                      8
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* donors slider end */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default DonorSlider