import React from 'react'
import Image from './Image'
import img1 from '../assets/image-about-dark.jpg'
import img2 from '../assets/image-about-light.jpg'

const imgs = [
    {
        src: img1,
        alt: "Image of a dark chair"
    },
    {
        src: img2,
        alt: "Image of a light chair"
    }
]

export default function Bottom() {
    return (
        <section className="bottomTier">
            {imgs.map(img => <Image key={img.alt} src={img.src} alt={img.alt}/>)}
            <article className="info">
                <div className="container">
                    <h1>About our furniture</h1>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
            </article>
        </section>
    )
}
