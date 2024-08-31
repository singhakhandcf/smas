import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'

const SingleUsersPage = () => {
  const [userData,setUserData]=useState({});
  const [mealsData,setMealsData]=useState([]);
  const {email} =useParams();
  const getdetails=async()=>{
    const response = await fetch(import.meta.env.VITE_API_URL + "/user/retrieve/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    if (response.status >= 400) {
      console.log(data.detail);
    }else{
      setUserData(data.user);
      setMealsData(data.meal_stats);
    }
  }
  useEffect(()=>{
    getdetails();
  },[])
    
  return (
    <>
    <Navbar/>
    <div className="px-6 py-10  min-w-[100%]  bg-gray-900 md:gap-2">
        <div className='my-4 justify-between text-white font-bold'>
            <div>NAME: {userData.name}</div>
            <div>EMAIL: {userData.email}</div>
            <div>ROLL NO: {userData.roll_no}</div>
            <div className='text-green-500'>{userData.is_active?"ACTIVE":"INACTIVE"}</div>          
        </div>
        <div className="w-[100%]  grid grid-cols-1  gap-10 ">
          <div className="w-[100%] col-span-1 md:col-span-6  overflow-x-auto shadow-md sm:rounded-lg">
            <div className="border-t w-full min-w-[100%] rounded-t-lg px-2 border-r border-l my-0 mx-0 dark:border-gray-700 flex flex-row justify-between items-center">
              <h2 className="text-white font-semibold py-2 text-lg px-2">
                MEAL COUNTS
              </h2>
              {/* filter options */}
              {/* <div className="flex justify-center items-center flex-row gap-1 text-white font-semibold py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                Month :{" "}
                <select
                  className=" bg-gray-900 border border-white px-2 rounded-md"
                  title="monthName"
                  name="month"
                  id="month"
                >
                  <option value="january">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="August">August</option>
                </select>
              </div> */}
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    YEAR
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MONTH
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BREAKFAST
                  </th>
                  <th scope="col" className="px-6 py-3">
                    LUNCH
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DINNER
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TOTAL
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                 
                   
                  
                    {
                      mealsData.map((data)=>{
                        console.log(data)
                        return (
                          <tr key={data.month}
                      
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      
                        
                      
                      <td className="px-6 py-4 flex items-center w-[100%]  ">
                      {data.year}
                      </td>
                      <td className="px-6 py-4">
                        {data.month}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.breakfast}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.lunch}
                      </td>
                      <td className="px-6 py-4">
                        {data.meal_count.dinner}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {
                            data.meal_count.breakfast+data.meal_count.lunch+data.meal_count.dinner
                          }
                        </a>
                      </td>
                    </tr>
                        )
                      })
                    }
                
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleUsersPage
