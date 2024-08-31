import { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Checkbox from "../../components/checkbox/Checkbox";
import { tableToCSV } from "../../utils";

const ExportPage = () => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [billData, setBillData] = useState({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(
      import.meta.env.VITE_API_URL + "/user/admin/mealsstatsforall/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          month: month,
          year: year,
        }),
        credentials: "include",
      }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        // console.log(data.meals);
        setBillData(data);
        // setMealDetails(data.meals)
        setDataLoaded(true);
        // setEmail("");
        // setMonth(0);
        // setYear(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mx-2 my-2 flex flex-col gap-4 justify-center items-center ">
        <div className="flex gap-1 text-white font-bold text-lg">
          EXPORT REPORTS
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-2 border rounded-md  flex justify-center  items-center gap-4"
          action=""
        >
          <div>
            <label>Month</label>
            <input
              name="Month"
              id="month"
              type="number"
              value={month}
              onChange={(e) => {
                setMonth(parseInt(e.target.value));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="month - (1-12)"
              required
            />
          </div>

          <div>
            <label>Year</label>
            <input
              name="year"
              id="year"
              type="number"
              value={year}
              onChange={(e) => {
                setYear(parseInt(e.target.value));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Academic Year"
              required
            />
          </div>

          <div>
            <button className="rounded-md py-2 px-2 bg-blue-500 text-white">
              SUBMIT
            </button>
          </div>
        </form>

        {dataLoaded ? (
          <div className=" text-white w-full max-w-5xl text-lg my-8">
            <div className="flex justify-between">
              <div>
                <div className="font-bold"> Meal Stats </div>
                <div className="flex gap-2">
                  <div>Month : {month}</div>
                  <div>Year : {year}</div>
                </div>
              </div>
              <button
                className="rounded-md py-2 px-2 bg-blue-500 text-white"
                onClick={() => {
                  tableToCSV("report");
                }}
              >
                Export as CSV
              </button>
            </div>
            <table
              id="report"
              className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
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
                </tr>
              </thead>
              <tbody>
                {billData.length > 0 ? (
                  billData.map((meal) => {
                    return (
                      <tr
                        key={meal.student}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 uppercase  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {meal.student}
                        </th>
                        <td className="px-6 py-4 flex items-center w-[100%]  ">
                          {meal.breakfast}
                        </td>
                        <td className="px-6 py-4">{meal.lunch}</td>
                        <td className="px-6 py-4">{meal.dinner}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="">No meal details available</tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ExportPage;
