import { useEffect, useState } from "react";
import { getAllUsers } from "../../api";
import Table from "@components/table/Table";

const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUser(res.data.userData);
    });
  }, []);

  return (
    <>
      <div className="h-[3000px]  ">
        <h1 className="text-lg font-semibold ">Users</h1>
        <Table tableData={users} />
      </div>
    </>
  );
};

export default Users;
