export const fetchLaunches = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        return await response.json();
    } catch (error) {
        console.error("Error fetching launches:", error);
        return [];
    }
};

export const fetchLaunchById = async (id) => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching launch details:", error);
        return null;
    }
};

