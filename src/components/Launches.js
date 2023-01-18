import { useEffect, useState } from "react";
import { getAllLaunches } from "../services/launchesService";
import Table from "./Table";
import React from 'react';
import { Link } from "react-router-dom";



const Launches = () => {

    const [launches, setLaunches] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllLaunches();
            
            setLaunches(response);
            console.log(response)


        }

        fetchData();


    }, []);



    return (
        <div>

<nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My App</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </Link>

                    <Link to='/Capsules' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Capsules
                    </Link>
                </div>
            </div>
        </nav>
            <h1 className="text-orange-600 mt-4 mb-4">All Launches</h1>

           

            <Table data={launches} itemsPerPage={5} />
           

        </div>
    )






}


export default Launches;