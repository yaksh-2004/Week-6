import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLaunchById } from "../api/spacexApi";

export default function LaunchDetails() {
    const { id } = useParams();
    const [launch, setLaunch] = useState(null);

    useEffect(() => {
        fetchLaunchById(id).then(setLaunch);
    }, [id]);

    if (!launch) return <p className="text-white text-center mt-10">Loading...</p>;
    
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl">{launch.mission_name}</h1>
            <p className="mt-2">Date: {new Date(launch.launch_date_utc).toLocaleDateString()}</p>
            <p className="mt-2">Details: {launch.details || "No details available."}</p>
            {launch.links.mission_patch_small && <img src={launch.links.mission_patch_small} alt={launch.mission_name} className="mt-4 w-32" />}
        </div>
    );
}