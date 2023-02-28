import { useAllTasks } from "@hooks";

export default function Index() {
  const { tasks } = useAllTasks();

  return (
    <>
      {tasks?.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
        </div>
      ))}
    </>
  );
}
