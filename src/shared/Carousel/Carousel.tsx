import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import chevronRight from "../../assets/chevron_right.svg";
import chevronLeft from "../../assets/chevron_left.svg";

import Slider from 'react-slick';

export default function Carousel(props: { pictures: string[] | undefined }) {
    function NextArrow(props: { onClick: any }) {
        return (
            <div className={styles["next-arrow-div"]} onClick={props.onClick}>
              <img src={chevronRight} className={styles["next-arrow"]} alt="next"/>
            </div>
        )
    }

    function PrevArrow(props: { onClick: any }) {
        return (
            <div className={styles["prev-arrow-div"]} onClick={props.onClick}>
              <img src={chevronLeft} className={styles["prev-arrow"]} alt="prev" />
            </div>
        )
    }

    const renderSlides = () =>
        props.pictures?.map(pic => (
            <div key={pic} className={styles["sub-pic-container"]}>
                <img className={styles["sub-pic"]} src={pic} alt="Pic" />
            </div>
        ));

    return (
        <Slider className={styles.slider} dots={true} nextArrow={<NextArrow onClick={onclick} />} prevArrow={<PrevArrow onClick={onclick} />} arrows={true}>
            {renderSlides()}
        </Slider>
    )
}