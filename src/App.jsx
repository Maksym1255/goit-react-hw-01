import "./App.css";
import userData from "./userData.json";
import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
