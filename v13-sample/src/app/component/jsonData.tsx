'use client'

import { useEffect, useState } from "react";
import { getData } from "../hook/getData";

interface IUser {
    name: string;
    username: string;
}

export default function JsonData() {
    const [user, setUser] = useState<IUser>();

    // データ取得
    useEffect(() => {
        const data = getData();
        data.then((response) => response.json()).then((user) => {
            setUser({ name: user.name, username: user.email });
        });
    })
    return (
        <>{`${user?.name}/${user?.username}`}</>
    )
}
