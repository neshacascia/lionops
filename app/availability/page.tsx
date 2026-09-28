import Image from "next/image";
import Link from "next/link";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers';


export default async function Availability() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

 const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>Hello availabilites</p>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
