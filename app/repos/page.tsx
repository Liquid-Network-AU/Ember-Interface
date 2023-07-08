"use client"
import Repositories from "@/components/Repositories/RepoList";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";

export default function RepoListPage() {
    const supabase = useSupabaseClient();
    const session = useSession();

    return (
        <Repositories />
    )
}