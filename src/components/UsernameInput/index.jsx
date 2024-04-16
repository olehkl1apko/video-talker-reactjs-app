import "./styles.css";

export const UsernameInput = ({ username, setUsername }) => {
  return (
    <div className="login-page_input_container">
      <input
        placeholder="enter your name"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        className="login-page_input background_main_color text_main_color"
      />
    </div>
  );
};
