import { useEffect, useState } from "react";

interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    address: object;
    phone: string;
    website: string;
    company: string;
}

const Hook = () => {
    const [users, setUsers] = useState<IUser[]>([] as IUser[]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        };
        fetchData();
    }, []);
    console.log(users);
    return (
        <div>
            <p>User List</p>
            {users?.map(user => (
                <p key={user.id}> {user.username}</p>
            ))}
        </div>
    )
}

export default Hook