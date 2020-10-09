import React from 'react'

export default function Image(props) {
    return (
        <section className="imageHolder">
            <img src={props.src} alt={props.alt} />
        </section>
    )
}
