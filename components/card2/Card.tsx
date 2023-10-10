import React from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import {BsStar, BsStarFill} from "react-icons/bs";
import {FaLocationDot} from "react-icons/fa6";
import {PiClipboardTextThin, PiStackBold} from "react-icons/pi";


interface IProps {
    image: any;
    title: string;
    pay: number;
    stars: number;
}

function Card(props: IProps) {
    const starCount = Math.min(props.stars, 5);

    const stars = Array.from({length: 5}, (_, index) => (
        <span key={index} className={index < starCount ? styles.filledStar : styles.unfilledStar}>
      {index < starCount ? <BsStarFill/> : <BsStar/>}
    </span>
    ));

    return (
        <div className={styles.card}>
            <div className={styles.imageDiv}>
                <Image src={props.image} alt="card-imagae" className={styles.cardImage}/>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.starsDiv}>
                    {stars}
                </div>
                <p className={styles.pay}>${props.pay}/hr</p>
                <div className={styles.bookDiv}>
                    <button className={styles.bookBtn}>
                        <PiClipboardTextThin className={styles.board}/>
                        BOOK NOW
                    </button>

                    <div className={styles.stackDiv}>
                        <PiStackBold className={styles.stack}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
