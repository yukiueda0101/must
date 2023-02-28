import { supabase } from "@/lib/initSupabase";
import { Database } from "@/lib/schema";
import { useEffect, useState } from "react";

type taskType = Database["public"]["Tables"]["tasks"]["Row"];

export function useAllTasks() {
  const [tasks, setTasks] = useState<taskType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, error, status } = await supabase
          .from("tasks")
          .select()
          .returns<taskType[]>();
        if (!data) return;

        setTasks(data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return { tasks };
}
