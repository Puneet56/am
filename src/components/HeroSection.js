import HeroCarousel from 'react-hero-carousel';

import img1 from '../assets/hero/img1.jpg';
import img2 from '../assets/hero/img2.jpg';
import img3 from '../assets/hero/img3.jpg';
import img4 from '../assets/hero/img4.jpg';
import img5 from '../assets/hero/img5.jpg';

const HeroSection = () => {
	const images = [img1, img2, img3, img4, img5];

	return (
		<>
			{/* logo */}
			<div className='absolute z-50 '></div>

			{/* slideshow */}
			<div className='relative z-10'>
				<HeroCarousel>
					{images.map((image) => (
						<img
							src={image}
							key={image}
							alt='slideshow'
							width='100%'
							height='40vh'
						/>
					))}
				</HeroCarousel>
			</div>
		</>
	);
};

export default HeroSection;
