import React, { useEffect, useState } from "react";
import { fetchData } from "../services/getServices";

export default function GetUserData() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const result = await fetchData();
                setData(result);
            }
            catch (e) {
                console.log("Error from result:", e);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col justify-center">
            {
                data.map((e, i) => {
                    return <>
                        <div key={e.id}>
                            {e.title}
                        </div>
                    </>
                })
            }
        </div>
    )
}
