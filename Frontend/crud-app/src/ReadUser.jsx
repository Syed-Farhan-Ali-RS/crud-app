import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { NavLink, useParams } from "react-router-dom";

function ReadUser() {
    const { id } = useParams();
    // Fetching Single User
    const [userData, setUserData] = useState([]);
    
    const fetchSingleUser = useCallback(async () => {
        const res = await axios.get(`http://localhost:5000/readuser/${id}`);
        console.log(res);
        setUserData(res.data);
    }, [id]);
    
    useEffect(() => {
        fetchSingleUser();
    }, [fetchSingleUser]);
    return (
        <div className="w-2/3 mx-auto mt-5">
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-lg text-center text-gray-500 ">
                    <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                SN.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {userData.name}
                            </th>
                            <td className="px-6 py-4"> {userData.email}</td>
                            <td className="px-6 py-4"> {userData.tel}</td>
                            <td className="px-6 py-4"> {userData.password}</td>
                            <td className="px-6 py-4">
                                <div className="flex gap-x-4 justify-center">
                                    <NavLink

                                        className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </NavLink>
                                    <button

                                        className="font-medium text-red-500  hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ReadUser
