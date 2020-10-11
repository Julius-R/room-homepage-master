import React, {useState} from 'react';
import Bottom from './components/Bottom';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

import mobile1 from "./assets/mobile-image-hero-1.jpg"
import desktop1 from "./assets/desktop-image-hero-1.jpg"
import mobile2 from "./assets/mobile-image-hero-2.jpg"
import desktop2 from "./assets/desktop-image-hero-2.jpg"
import mobile3 from "./assets/mobile-image-hero-3.jpg"
import desktop3 from "./assets/desktop-image-hero-3.jpg"

const slides = [
	{
		srcMobile: mobile1,
		srcDersktop: desktop1,
		header: "Discover innovative ways to decorate",
		body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
	},
	{
		srcMobile: mobile2,
		srcDersktop: desktop2,
		header: "We are available all across the globe",
		body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
	},
	{
		srcMobile: mobile3,
		srcDersktop: desktop3,
		header: "Manufactured with the best materials",
		body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
	},
]

export default function App() {
	const [slideNum, setSlideNum] = useState(0);
	const prevSlide = () => {
		slideNum == 0 ? setSlideNum( slides.length - 1) : setSlideNum( slideNum - 1)
	}
	const nextSlide = () => {
		slideNum == slides.length - 1 ? setSlideNum(0) : setSlideNum( slideNum + 1)
	}
	return (
		<main className="application">
			<Navbar />
			<Gallery slide={slides[slideNum]} nextSlide={nextSlide} prevSlide={prevSlide}/>
			<Bottom />
		</main>
	);
}
