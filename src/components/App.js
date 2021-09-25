import user from "../data/user.json";
import Profile from "./Profile/Profile";

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
//           // key={user.tag}
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
