import FriendListItem from "../components/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendListItem}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
