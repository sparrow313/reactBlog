import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectIsSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";
import Blog from "./components/Blog";

function App() {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
}

export default App;
