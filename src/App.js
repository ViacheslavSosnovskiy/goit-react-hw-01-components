import users from "./users.json";
import Profile from "./components/profile";

export default function App() {
  return (
    <div>
      <Profile
        // key={user.tag}
        avatar={users.avatar}
        name={users.name}
        tag={users.tag}
        location={users.location}
        stats={users.stats}
      />
    </div>
  );
}

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
//           // tag={user.tag}
//           location={user.location}
//           stats={user.stats}
//         />
//       ))}
//     </div>
//   );
// }
