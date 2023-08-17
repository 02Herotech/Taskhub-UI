import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../public/service-provider1.svg'
import img2 from '../../public/service-provider2.svg'
import img3 from '../../public/service-provider3.svg'
import img4 from '../../public/service-provider4.svg'
import sliderStyles from './slider.module.css'
import Image from 'next/image'


export const ImgSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={sliderStyles['slider-cont']}>
            <Slider {...settings}>
                {[
                    img1,
                    img2,
                    img3,
                    img4
                ].map((image, index) => (
                    <div className={`${sliderStyles['img1']}`} key={image}>
                        <Image fill src={`/service-provider${index + 1}.svg`} alt="" />
                    </div >
                ))}

            </Slider>
        </div>)
}
