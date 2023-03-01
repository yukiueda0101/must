import { useAllTasks } from "@hooks";
import { WithAuth } from "@/layouts";

const IndexPage = () => {
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
};

// @ts-ignore
IndexPage.getLayout = (page) => <WithAuth>{page}</WithAuth>;

export default IndexPage;
