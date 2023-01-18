import { useEffect, useState } from "react";
import { getAllCapsules } from "../services/capsuleService";
import { Link } from "react-router-dom";



const Capsules = () => {

    const [capsules, setCapsules] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await getAllCapsules();
            console.log(res);
            setCapsules(res);

        }

        fetchData();

    }, []);

    
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage,setItemsPerPage]=useState(5)

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = capsules.slice(startIndex, endIndex);

        const handlePageChange = (newPage) => {
            setCurrentPage(newPage);
        }

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
                <h1 className="text-orange-600 mt-4 mb-4">All Capsules</h1>



                <div className="">
                    <table className="table-fixed border-separate rounded-lg border-2 border-orange-600 my-8 mx-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Type</th>
                                <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Capsule Serial</th>
                                <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {capsules.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 rounded-lg border-2 border-orange-600">{item.type}</td>
                                    <td className="px-4 py-2 rounded-lg border-2 border-orange-600">{item.serial}</td>


                                    {item.status ? <td className="px-4 py-2 rounded-lg  border-2 border-orange-600">{item.status}</td> : <td className="px-4 py-2 rounded-lg  border-2 border-orange-600">Pas de details</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center">
                        <button
                            className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-l"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="px-2 text-orange-600 ">{currentPage}</span>
                        <button
                            className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-r"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === Math.ceil(capsules.length / itemsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </div>


            </div>
        )


    

}

    export default Capsules;