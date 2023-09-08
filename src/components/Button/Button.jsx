const Button = ({ btnName, onClickHandler, btnStyle, isDisabled }) => {
  return (
    <>
      <button
        onClick={onClickHandler}
        className={btnStyle}
        disabled={isDisabled}
      >
        {btnName}
      </button>
    </>
  );
};
export default Button;
