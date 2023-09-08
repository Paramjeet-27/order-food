import items from "./../../data/items.json";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../reducers/thaliSlice";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./ThaliItems.module.css";

const ThalItems = () => {
  const selectedItems = useSelector((store) => store.thaliItems.value);

  const dispatch = useDispatch();

  const addDishHandler = (index) => {
    dispatch(addItem(items[index]));
  };

  const selected = selectedItems.map((ele, index) => (
    <div key={index} className={styles.mainBox}>
      <ItemCard
        itemImage={ele.imgSrc}
        itemName={ele.name}
        indexValue={index}
        itemQuantity={ele.quantity}
      />
    </div>
  ));

  const listing = items.map((ele, index) => (
    <div key={index} className={styles.menuItems}>
      <div className={styles.menuDescription}>
        <div className={styles.menuItemName}>{ele.name}</div>
        <div className={styles.menuItemDecription}>{ele.description}</div>
        <div className={styles.menuItemPrice}>₹ {ele.price} /-</div>
        <Button
          btnName="Add"
          btnStyle={styles.addBtnStyle}
          onClickHandler={() => {
            addDishHandler(index);
          }}
        />
      </div>
      <div
        className={styles.menuImage}
        style={{ backgroundImage: `url(${ele.imgSrc})` }}
      ></div>
    </div>
  ));

  return (
    <>
      <div className={styles.selectedItems}>{selected}</div>
      <div>{listing}</div>;
    </>
  );
};
export default ThalItems;
