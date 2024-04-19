import "./styles.css";

const ButtonItem = ({ onClickHandler, children }) => {
  return (
    <button className="conversation_button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default ButtonItem;
