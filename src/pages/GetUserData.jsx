import React, { useEffect, useState } from "react";
import { fetchData } from "../services/getServices";

export default function GetUserData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const result = await fetchData();
                setData(result);
                setIsLoading(false);
            }
            catch (e) {
                console.log("Error from result:", e);
            }
        }
        fetchUsers();
    }, []);

    const showDrawer = (id) => {
        setSelectedId((prevId) => (prevId === id ? null : id)); 
    }

    return (

        <div className="flex flex-col p-5 m-5 gap-4 bg-gray-300">
            <h1 className="justify-center flex">User Details</h1>
            {isLoading ? <div>Loading...</div> :
                <div className="flex flex-col gap-2">
                    {
                        data.map((e, i) => {
                            return (
                                <div key={e.id} className="flex flex-col gap-2 border rounded-md bg-blue-300 px-2">
                                    <button onClick={() => showDrawer(e.id)}  className="cursor-pointer">
                                        {e.title}
                                    </button>
                                    {selectedId === e.id && (
                                        <div className="bg-white">{e.body}</div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>

            }

        </div>
    )
}
