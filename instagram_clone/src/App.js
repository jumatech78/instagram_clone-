import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AvatarCard from "./components/AvatarCard";

function App() {
  const stories = [
    {
      name:'Dee',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzekRsRNONYXTdO92J4K3_cq8bapCSkoaW8A&usqp=CAU'
    },
    {
      name:'Juma',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgl4jbP-DKKfyYpx5OcJdLiRuDXyapOqcbhQ&usqp=CAU'
    },
    {
      name:'Adonia',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEp4DpZ6wqWLTSOMEvo9U4XwRX67q1FllVQ&usqp=CAU'
    },
    {
      name:'Bruce',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn06g4tXnMYVDyRozlBdZ8Jk7brIp-VdWBBA&usqp=CAU'
    },
    {
      name:'Raymond',
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdt9MQ9YB-vMQJoWkitnLfPzrVf6fVYDNVw&usqp=CAU'
    },
  ]


  return (
    <div>
      <Navbar />
      {/* Welcome! */}
      <div className="feed_section">
        <div className="posts_section">
          <div className="avatar_section">
            {
              stories.map(story=>(<AvatarCard post_story={story}/>))
            }
            {/* <AvatarCard />
            <AvatarCard />
            <AvatarCard /> */}
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
