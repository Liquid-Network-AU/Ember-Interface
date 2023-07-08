"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Repository {
  id: number;
  name: string;
  description: string;
}

const Repositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const supabase = createClientComponentClient();
  const session = useSession();

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const { data, error } = await supabase.from('repositories').select('*');
      if (error) {
        throw error;
      }
      setRepositories(data || []);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {repositories.map((repository) => (
        <div key={repository.id} className="p-4 w-1/2">
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold">{repository.name}</h2>
            <p>{repository.description}</p>
            <Link href={`/repositories/${repository.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repositories;