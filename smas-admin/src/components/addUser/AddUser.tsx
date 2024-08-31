import { useState, FormEvent } from "react";
import Loader from "../loader/Loader";
const AddUser = ({getUsers}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(import.meta.env.VITE_API_URL + "/user/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    if (response.status >= 400) {
      setError(data.detail);
    } else {
      alert(`user Added : ${name} `);
      setEmail("");
      setName("");
      setPassword("");
      getUsers();
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        action=""
        className="border  p-2 my-2 rounded-md py-4 text-white"
      >
        <div className=" w-full mb-3 ">
          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Email
          </label>
          <input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" w-full mb-3 ">
          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Name
          </label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" w-full mb-3 ">
          <label className="block uppercase text-blueGray-600 text-xs  mb-2">
            Password
          </label>
          <input
            placeholder="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button className="bg-blue-500 w-[100%] py-1 rounded-md">
          {loading ? <Loader text="Adding ..." /> : "ADD User"}
        </button>
        <div className="text-red-500 w-[100%] text-center">{error}</div>
        <div className="text-white-500 w-[100%] text-center">{error}</div>
      </form>
    </div>
  );
};

export default AddUser;
