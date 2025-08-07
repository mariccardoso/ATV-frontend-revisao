import styles from "./ProductCard.module.css";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productcard} data-category={product.category}>
      <div className={styles.productimage}>
        <Image
          src={product.image}
          alt="Responsive"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "100%",
            objectFit:"cover",
            
          }}
        />
      </div>
      <div className={styles.producttitle}>{product.title}</div>
      <div className={styles.productprice}>{product.price}</div>
      <div className={styles.productdescription}>{product.description}</div>
      <div className={styles.productrating}>
        <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
        <span>(4.8) - 1.234 avaliações</span>
      </div>
    </div>
  );
};

export default ProductCard;
