import React from 'react'
import leftArrow from '../assets/icon-angle-left.svg'
import rightArrow from '../assets/icon-angle-right.svg'

export default function Gallery(props) {
    return (
        <section className="galleryArea">
            {console.log(props.slide)}
            <section className="image">
                <img src={props.slide.srcMobile} alt="" srcset=""/>
                <section className="controller">
                    <div className="control" onClick={props.prevSlide}>
                        <img src={leftArrow} alt="Left arrow"/>
                    </div>
                    <div className="control" onClick={props.nextSlide}>
                        <img src={rightArrow} alt="Right arrow"/>
                    </div>
                </section>
            </section>
            <section className="description">
                <div className="container">
                    <h1>{props.slide.header}</h1>
                    <p>{props.slide.body}</p>
                    <a href="#">Shop Now <svg className="svg" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg></a>
                </div>
            </section>
        </section>
    )
}
