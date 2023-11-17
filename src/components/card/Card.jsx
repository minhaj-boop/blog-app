import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = ({ item, item_id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          nulla unde repudiandae autem est vitae iure dicta praesentium.
          Adipisci voluptatum delectus ab aliquam iste molestiae cumque soluta
          quidem suscipit veritatis architecto earum, laudantium sapiente amet.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
