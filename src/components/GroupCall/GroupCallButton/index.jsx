import "./styles.css";

export const GroupCallButton = ({ onClickHandler, label }) => {
  return (
    <button onClick={onClickHandler} className="group_call_button">
      {label}
    </button>
  );
};
