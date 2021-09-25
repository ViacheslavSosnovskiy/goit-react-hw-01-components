import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
// --------------------------------------------
import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friends.json";

const App = () => {
  return (
    <div>
      <Profile
        {...user}
        // avatar={user.avatar}
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;

// -----------------------------
// export default function App() {
//   // const isOnline = false;
//   return (
//     // {isOnline && 'ОНЛАЙН'}
//     // {isOnline ? 'ОНЛАЙН' : 'ОФЛАЙН'}
//     <div>
//       {users.map((user) => (
//         <Profile
//           // key={user.id}
//           avatar={user.avatar}
//           name={user.name}
//           tag={user.tag}
//           location={user.location}
//           stats={user.stats}
//         />
//       ))}
//     </div>
//   );
// }
