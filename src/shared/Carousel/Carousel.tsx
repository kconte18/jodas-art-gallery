import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

import Slider from 'react-slick';

export default function Carousel(props: { pictures: string[] | undefined }) {
    function NextArrow(props: { onClick: any }) {
        return (
            <span className={styles["next-arrow"]} onClick={props.onClick}>
                Next
            </span>
        )
    }

    function PrevArrow(props: { onClick: any }) {
        return (
            <span className={styles["prev-arrow"]} onClick={props.onClick}>
                Prev
            </span>
        )
    }

    const renderSlides = () =>
        props.pictures?.map(pic => (
            <div className={styles["sub-pic-container"]}>
                <img className={styles["sub-pic"]} src={pic} alt="Pic" />
            </div>
        ));

    let nextArrow = <p className={styles.next}>Poop</p>

    return (
        <Slider className={styles.slider} dots={true} nextArrow={<NextArrow onClick={onclick} />} prevArrow={<PrevArrow onClick={onclick} />} arrows={true}>
            {renderSlides()}
        </Slider>
    )
}