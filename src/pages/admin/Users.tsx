import { useEffect, useState } from "react";
import { getAllUsers } from "../../api";
import Table from "@components/admin/table/Table";

const Users = () => {
  const [users, setUser] = useState([]);
  let deletedColumns = ["_id"];
  useEffect(() => {
    getAllUsers().then((res) => {
      setUser(res.data.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-lg font-semibold ">Users</h1>
        <Table tableData={users} deletedColumns={deletedColumns} />
      </div>
    </>
  );
};

export default Users;
