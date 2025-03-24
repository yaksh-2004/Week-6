import React from "react";
    import { Link } from "react-router-dom";
    
    const LaunchItem = ({ launch }) => {
      return (
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold">{launch.name}</h2>
          <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
          <Link to={`/launch/${launch.id}`} className="text-blue-500">View Details</Link>
        </div>
      );
    };
    
    export default LaunchItem;