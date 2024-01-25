import User from "./User";
import { useUsersContext } from "../hooks/useUserContext";

export const Users = () => {
  const { users } = useUsersContext();
  return (
    <div>
      <section className="users">
        {users.map((user) => (
          <User id={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};
