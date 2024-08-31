import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddUser from "../../components/addUser/AddUser";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
const UsersPage = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/user/add/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-7 px-2">
        <div className="col-span-2">
          <div className="my-4 max-w-md mx-auto">
            <div className="">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search User by RollNo"
                required
              />
            </div>
          </div>
          {!openAdd ? (
            <button
              className="w-[100%] bg-blue-500 text-white py-1 rounded-md"
              onClick={() => {
                setOpenAdd(!openAdd);
              }}
            >
              ADD NEW USER
            </button>
          ) : (
            <AddUser getUsers={getUsers} />
          )}
        </div>

        <div className=" col-span-5 m-4 rounded-md overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Roll No
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody >
              {loading ? (
                <div className="w-[100%]"><Loader  text={"Fetching History"}/></div>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.email}
                    className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.roll_no}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {user.is_active ? "ACTIVE" : "INACTIVE"}
                    </td>
                    <td className="px-6 flex gap-1 py-4">
                      <button className="bg-green-500 py-1 px-2 rounded-md text-white">
                        <Link to={`/users/${user.email}`}>VIEW</Link>
                      </button>
                      <button className="bg-red-500 py-1 px-2 rounded-md text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
