import { Users } from "./components/Users";
import NewUsers from "./components/NewUsers";

import UserProvider from "./context/UsersContext";

function App() {
  return (
    <UserProvider>
      <div>
        <NewUsers />
        <Users />
      </div>
    </UserProvider>
  );
}

export default App;
