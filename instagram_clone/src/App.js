import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AvatarCard from "./components/AvatarCard";

function App() {
  const stories = [
    
  ]


  return (
    <div>
      <Navbar />
      {/* Welcome! */}
      <div className="feed_section">
        <div className="posts_section">
          <div className="avatar_section">
            <AvatarCard />
            <AvatarCard />
            <AvatarCard />
          </div>
        </div>
        <div className="profile_section">
          <h3>UserProfile</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
