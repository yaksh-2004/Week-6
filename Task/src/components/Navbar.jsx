import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">SpaceX Explorer</h1>
                <div>
                    
                    <Link to="/">Launches</Link>
                </div>
            </div>
        </nav>
    );
}