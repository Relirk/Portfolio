'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/")
    }, [router, user])

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;