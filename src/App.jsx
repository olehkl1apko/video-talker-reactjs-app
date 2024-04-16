import { useEffect } from "react";
import { connectWithWebSocket } from "./utils/wssConnection";

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return <main>Hello</main>;
}

export default App;
