import { useEffect, useState } from "react";
import { fetchLaunches } from "../api/spacexApi";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { HiViewColumns } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";

export default function Launches() {
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 10;

  useEffect(() => {
    fetchLaunches().then(setLaunches);
  }, []);

  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="selectors flex justify-around item items-center mx-16">
        <select
          name="Past 6 Months"
          id="Filters"
          className="border px-3 py-2 bg-black"
        >
          <option value="Past 6 Months">Past 6 Months</option>
          <option value="Upcoming 6 Months">Upcoming 6 Months</option>
        </select>

        <select
          name="All Launches"
          id="Filters"
          className="border px-3 py-2 bg-black"
        >
          <option value="All Launches">All Launches</option>
          <option value="Upcoming Launches">Upcoming Launches</option>
          <option value="Successful Launches">Successful Launches</option>
          <option value="Failed Launches">Failed Launches</option>
        </select>
<div>
  <p className='details flex justify-around items-center px-3 py-2'>Click on record to see details</p>
    </div>
    <div className='icons flex justify-end text-2xl gap-4'>
<FaSearch />
<IoMdCloudDownload />
<FaPrint />
<HiViewColumns />
<IoFilter />
</div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">Mission Name</th>
            <th className="p-2">Launch Date</th>
          </tr>
        </thead>
        <tbody>
          {currentLaunches.map((launch) => (
            <tr
              key={launch.flight_number}
              className="cursor-pointer hover:bg-gray-600"
            >
              <td className="p-2 border-b">
                <Link
                  to={`/launch/${launch.flight_number}`}
                  className="text-blue-400"
                >
                  {launch.mission_name}
                </Link>
              </td>
              <td className="p-2 border-b">
                {new Date(launch.launch_date_utc).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-700 px-4 py-2 mr-2 rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4">Page {currentPage}</span>
        <button
          className="bg-gray-700 px-4 py-2 ml-2 rounded disabled:opacity-50"
          disabled={indexOfLastLaunch >= launches.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
