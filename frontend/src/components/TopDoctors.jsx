import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { LifeLine } from 'react-loading-indicators';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Detect loading state
  const isLoading = !doctors || doctors.length === 0;

  return (
    <div
      className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10"
      id="top-doctors"
    >
      <h1 className="text-3xl font-medium">TopDoctors To See</h1>
      <p className="sm:w-1/3 text-sm text-center">
        Here are some of the top doctors you can consult
      </p>

      {/* Loading indicator */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-32">
          <LifeLine color="#0ebcc1" text="" textColor="" />
        </div>
      ) : (
        <>
          {/* Doctor cards */}
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 md:px-5 lg:px-10">
            {doctors.slice(0, 10).map((doctor, index) => (
              <div
                onClick={() => navigate(`/appointments/${doctor._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img
                  className="bg-blue-50 h-40 w-full object-cover"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p
                      className={`w-2 h-2 ${
                        doctor.available ? 'bg-green-500' : 'bg-gray-500'
                      } rounded-full`}
                    ></p>
                    {doctor.available ? (
                      <p className="text-sm text-green-500">Available</p>
                    ) : (
                      <p className="text-sm text-gray-500">Not Available</p>
                    )}
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
              </div>
            ))}
          </div>

        </>
      )}

          <button
            onClick={() => {
              navigate('/doctors');
              scrollTo(0, 0);
            }}
            className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
          >
            See All Doctors
          </button>
    </div>
  )
}

export default TopDoctors
