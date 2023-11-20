import Image from "next/image";
import Menu from "../../../components/menu/Menu";
import styles from "./singlePage.module.css";
import Comments from "../../../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Ton Koe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolorem voluptate repellat consequatur obcaecati architecto
              voluptatum cupiditate harum perferendis, debitis dolorum numquam
              omnis deserunt eveniet nisi quam, expedita nostrum dicta. Fugiat
              inventore maiores amet similique aperiam illum corrupti
              necessitatibus, ratione adipisci, quam iste, repudiandae eum sint
              velit cupiditate temporibus voluptas!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolorem voluptate repellat consequatur obcaecati architecto
              voluptatum cupiditate harum perferendis, debitis dolorum numquam
              omnis deserunt eveniet nisi quam, expedita nostrum dicta. Fugiat
              inventore maiores amet similique aperiam illum corrupti
              necessitatibus, ratione adipisci, quam iste, repudiandae eum sint
              velit cupiditate temporibus voluptas!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolorem voluptate repellat consequatur obcaecati architecto
              voluptatum cupiditate harum perferendis, debitis dolorum numquam
              omnis deserunt eveniet nisi quam, expedita nostrum dicta. Fugiat
              inventore maiores amet similique aperiam illum corrupti
              necessitatibus, ratione adipisci, quam iste, repudiandae eum sint
              velit cupiditate temporibus voluptas!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
