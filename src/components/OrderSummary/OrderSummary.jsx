import { useSelector } from "react-redux";
import styles from "./OrderSummary.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

const OrderSummary = () => {
  const selectedItems = useSelector((store) => store.thaliItems.value);

  const getSubTotalArray = (selectedItems) => {
    const newArray = [];
    for (let i = 0; i < selectedItems.length; i++) {
      newArray.push(selectedItems[i].price * selectedItems[i].quantity);
    }
    return newArray;
  };

  const grand = getSubTotalArray(selectedItems).reduce((s, a) => s + a, 0);

  const selected = selectedItems.map((ele, index) => (
    <div className={styles.mainBox} key={index}>
      <div
        className={styles.imageBox}
        style={{ backgroundImage: `url(${ele.imgSrc})` }}
      ></div>
      <div className={styles.detailsBox}>
        <div className={styles.nameBox}>{ele.name}</div>
        <div className={styles.priceAndQuantityBox}>
          <div className={styles.price}>Price : ₹ {ele.price} /-</div>
          <div className={styles.quantity}>
            Quantity :<span> {ele.quantity}</span>
          </div>
        </div>
      </div>
      <div className={styles.finalPriceBox}>
        ₹ {ele.quantity * ele.price} /-
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.grandTotal}>
        <span>Grand Total: ₹ {grand} /-</span>
      </div>
      <div>{selected}</div>
    </>
  );
};
export default OrderSummary;
