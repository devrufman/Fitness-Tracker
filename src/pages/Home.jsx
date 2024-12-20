import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://6765d428410f849996563f5a.mockapi.io/db") // Update with your mock API URL
      .then((response) => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data."); // Handle error
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-orange-300 text-white p-6 font-kristen">
      <h1 className="text-4xl font-bold text-center mb-6">Fitness Tracker</h1>

      {loading && (
        <div className="flex justify-center items-center">
          <p className="animate-pulse text-xl">Loading workouts...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="bg-purple text-gray rounded-lg shadow-lg p-4 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={workout.image}
                alt={workout.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{workout.name}</h2>
              <p className="text-gray-700">{workout.description}</p>
              <p className="text-sm text-gray-500 mt-2">Duration: {workout.duration} mins</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
