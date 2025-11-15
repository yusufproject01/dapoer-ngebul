"use client";

import { useEffect, useState } from "react";
import UsersType from "@/types/usersType";
import { getAllUsers } from "@/services/users.services";

export function useUsers() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return { users, loading };
}
