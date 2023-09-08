import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import styles from "./ItemCard.module.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../reducers/thaliSlice";

const ItemCard = ({ itemName, itemImage, indexValue, itemQuantity }) => {
  const dispatch = useDispatch();

  const removeDishHandler = (index) => {
    dispatch(removeItem(index));
  };

  const decreaseQty = (index) => {
    dispatch(decreaseQuantity(index));
  };
  const increaseQty = (index) => {
    dispatch(increaseQuantity(index));
  };

  return (
    <div className={styles.mainBox}>
      <div
        className={styles.itemImage}
        style={{ backgroundImage: `url(${itemImage})` }}
      ></div>
      <div className={styles.itemName}>{itemName}</div>
      <div className={styles.quantitySection}>
        <Button
          btnName="-"
          btnStyle={styles.decBtn}
          onClickHandler={() => decreaseQty(indexValue)}
        />
        <span className={styles.quantity}>{itemQuantity}</span>
        <Button
          btnName="+"
          btnStyle={styles.incBtn}
          onClickHandler={() => increaseQty(indexValue)}
        />
      </div>
      <Button
        btnName="Remove"
        btnStyle={styles.removeBtn}
        onClickHandler={() => {
          removeDishHandler(indexValue);
        }}
      />
    </div>
  );
};
export default ItemCard;
