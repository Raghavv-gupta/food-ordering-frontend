import { createRoot } from "react-dom/client";
import App from "./App"; // no .tsx
import "./index.css";

const root = createRoot(document.getElementById("root")); // remove !
root.render(<App />);
