import { Link, useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();


    return (
        <div className="my-8 mt-32  ">

            <div className="card my-16 mt-16 bg-cover bg-center h-full">
                <div className="card-header bg-orange-300">
                    <h3  className="text-orange-600">Launches & Capsules</h3>
                </div>
                <div className="card-body mt-2">
                    <div className="flex items-center content-center  flex-col  space-y-4">

                        <button className="transition
                                            rounded-full 
                                            ease-in-out 
                                            delay-150
                                            bg-orange-600
                                            hover:-translate-y-1
                                                hover:scale-110 hover:bg-indigo-500 duration-300
                                                border-solid
                                                w-40
                                                text-white
                                                italic hover:not-italic
                                                h-12
                                                "
                            onClick={() => navigate("/Launches")}
                        >
                            Launches

                        </button>

                        <button className="transition
                                            rounded-full 
                                            ease-in-out 
                                            delay-150
                                            bg-orange-600
                                            hover:-translate-y-1
                                                hover:scale-110 hover:bg-indigo-500 duration-300
                                                border-solid
                                                w-40
                                                text-white
                                                italic hover:not-italic
                                                h-12
                                                "
                            onClick={() => navigate("/Capsules")}
                        >
                            Capsules

                        </button>


                    </div>
                </div>
            </div>









        </div>
    )
}


export default Home;