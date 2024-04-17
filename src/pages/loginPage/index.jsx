import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { setUsername } from "@/store/dashboardSlice";
import { registerNewUser } from "@/utils/wssConnection/wssConnection";
import logo from "@/resources/logo.png";
import { UsernameInput } from "@/components/UsernameInput";
import { SubmitButton } from "@/components/SubmitButton";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsernameState] = useState("");

  const setUsernameCallback = useCallback((value) => {
    setUsernameState(value);
  }, []);

  const handleSubmitButtonPressed = useCallback(() => {
    registerNewUser(username);
    dispatch(setUsername(username));
    navigate("/dashboard");
  }, [dispatch, navigate, username]);

  return (
    <div className="login-page_container background_main_color">
      <div className="login-page_login_box background_secondary_color">
        <div className="login-page_logo_container">
          <img className="login-page_logo_image" src={logo} alt="VideoTalker" />
        </div>
        <div className="login-page_title_container">
          <h2>Get on Board</h2>
        </div>
        <UsernameInput username={username} setUsername={setUsernameCallback} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
    </div>
  );
}

export default LoginPage;
