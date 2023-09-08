import React from 'react';
import styles from "./styles.module.scss"
import Image from 'next/image';
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

interface IProps {
    image: any;
    description: JSX.Element;
    address: JSX.Element;
    count: number;
}

function Card(props: IProps) {
    // Ensure that the count does not exceed 5
    const starCount = Math.min(props.count, 5);

    // Create an array of stars based on the count
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < starCount ? styles.filledStar : styles.unfilledStar}>
      {index < starCount ? <BsStarFill /> : <BsStar />}
    </span>
    ));

    return (
        <div className={styles.card}>
            <div className={styles.imageDiv}>
                <Image src={props.image} alt="card-imagae" className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardDescription}>{props.description}</p>
                <div className={styles.addressDiv}>
                    <FaLocationDot className={styles.location} />
                    <p className={styles.address}>{props.address}</p>
                </div>
                <div className={styles.starsDiv}>
                    {stars}
                </div>
            </div>
        </div>
    );
}

export default Card;
