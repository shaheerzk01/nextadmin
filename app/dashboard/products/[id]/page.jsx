import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id"/>
          <label>Title</label>
          <input type="text" name="title" />
          <label>Price</label>
          <input type="number" name="price"/>
          <label>Stock</label>
          <input type="number" name="stock"/>
          <label>Color</label>
          <input
            type="text"
            name="color"
            //placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            //placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            //placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
