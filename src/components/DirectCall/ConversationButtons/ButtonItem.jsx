import "./styles.css";

const ButtonItem = ({ onClickHandler, children }) => {
  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default ButtonItem;
