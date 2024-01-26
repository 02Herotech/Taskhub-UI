import CustomerDashboardLayout from "../../../../../components/customerdashboardLayout";

const TaskDetails = (params: any) => {
  const id = params.id;

  return (
    <CustomerDashboardLayout>
      <div
        className={`mt-16 flex flex-col justify-center items-start w-[900px] border h-20`}
      >
        <p>{id}</p>
      </div>
    </CustomerDashboardLayout>
  );
};

export default TaskDetails;
