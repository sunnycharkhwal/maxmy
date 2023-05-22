import Gantt from "./Gantt";
export const Index = () => {
  const data = {
    data: [
      {
        id: 1,
        text: "Task #1",
        start_date: "2019-04-15",
        duration: 3,
        progress: 0.6,
      },
      {
        id: 2,
        text: "Task #2",
        start_date: "2019-04-18",
        duration: 3,
        progress: 0.4,
      },
    ],
    links: [{ id: 1, source: 1, target: 2, type: "0" }],
  };
  return (
    <>
      <div className="gantt-container">
        <Gantt tasks={data} />
      </div>
    </>
  );
};
