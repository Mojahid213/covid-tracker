import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CovidCard from './CovidCard';

const Home = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState([]);
    // for world-wide
    useEffect(() => {
        const url = `https://covid-19.dataflowkit.com/v1/world`;
        axios.get(url)
            .then(res => setData(res.data))
    }, []);
    // for countries
    useEffect(() => {
        const url = `https://covid-19.dataflowkit.com/v1`;
        axios.get(url)
            .then(res => setCountry(res.data.slice(1)))
    }, []);
    return (
        <div>
            {/* Heading */}
            <div className="font-mono font-bold text-blue-900 text-4xl sm:text-5xl text-center mt-10">
                <h1>Covid-19 Tracker</h1>
                <hr className=" w-3/4 sm:w-2/4 mx-auto border-2 mt-3" />
            </div>
            {/* world-wide covid-19 cards */}
            <div className="px-5 mt-10 mb-10">
                <div className="text-center font-mono font-semibold leading-relaxed mb-6">
                    <h1 className="text-3xl">World Wide</h1>
                    <h1 className="text-2xl">(Updated: {data["Last Update"]})</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold gap-6">
                    {/* card-1 */}
                    <div className="px-5 py-4 flex flex-col bg-yellow-400 rounded-lg text-center items-center font-mono">
                        <p className="text-lg">NEW INFECTED:</p>
                        <p className="text-2xl">{data["New Cases_text"]}</p>
                    </div>
                    {/* card-2 */}
                    <div className="px-5 py-4 flex flex-col bg-red-500 text-white rounded-lg text-center items-center font-mono">
                        <p className="text-lg">NEW DEATHS:</p>
                        <p className="text-2xl">{data["New Deaths_text"]}</p>
                    </div>
                    {/* card-3 */}
                    <div className="px-5 py-4 flex flex-col bg-yellow-400 rounded-lg text-center items-center font-mono">
                        <p className="text-lg">TOTAL INFECTED:</p>
                        <p className="text-2xl">{data["Total Cases_text"]}</p>
                    </div>
                    {/* card-4 */}
                    <div className="px-5 py-4 flex flex-col bg-red-500 text-white rounded-lg text-center items-center font-mono">
                        <p className="text-lg">TOTAL DEATHS:</p>
                        <p className="text-2xl">{data["Total Deaths_text"]}</p>
                    </div>
                    {/* card-5 */}
                    <div className="px-5 py-4 flex flex-col bg-green-400 rounded-lg text-center items-center font-mono">
                        <p className="text-lg">TOTAL RECOVERED:</p>
                        <p className="text-2xl">{data["Total Recovered_text"]}</p>
                    </div>
                </div>
            </div>
            {/* Countries heading */}
            <div className="text-center mb-6 mt-14 sm:mt-5 font-mono font-semibold">
                <h1 className="text-3xl">COUNTRIES</h1>
            </div>
            {/* Country details card */}
            <div className="px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                    {
                        country.map(detail => <CovidCard details={detail} key={detail.Country_text}></CovidCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;