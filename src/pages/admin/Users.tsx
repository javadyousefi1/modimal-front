import { useEffect, useState } from "react";
import { getAllUsers } from "../../api";

const Users = () => {
  const [users, setUser] = useState();

  useEffect(() => {
    getAllUsers().then((res) => {
      setUser(res.data.userData);
    });
  }, []);

  return (
    <>
      <div className="h-[3000px]  ">
        <h1 className="mt-6 text-lg font-semibold">Users</h1>

        {users &&
          users.map((user) => {
            return <div>{user.firstname}</div>;
          })}
      </div>
    </>
  );
};

export default Users;
