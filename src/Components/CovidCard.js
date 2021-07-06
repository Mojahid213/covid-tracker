import React from 'react';

const CovidCard = ({ details }) => {
    return (
        <div>
            <div className="px-5 py-4 flex flex-col bg-indigo-800 rounded-lg text-center text-white items-center font-mono">
                <div className=" mb-3 font-semibold">
                    <h1 className="text-2xl">{details.Country_text}</h1>
                    <hr className=" border border-white w-full" />
                </div>
                <div className="font-semibold mb-2">
                    <p className="text-xl">Total Infected:</p>
                    <p className="text-lg">{details["Total Cases_text"]}</p>
                </div>
                <div className="font-semibold mb-2">
                    <p className="text-xl">Total Deaths:</p>
                    <p className="text-lg">{details["Total Deaths_text"]}</p>
                </div>
                <div className="font-semibold">
                    <p className="text-xl">Total Recovered:</p>
                    <p className="text-lg">{details["Total Recovered_text"]}</p>
                </div>
            </div>
        </div>
    );
};

export default CovidCard;