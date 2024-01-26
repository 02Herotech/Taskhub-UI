// pages/tasks/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerDashboardLayout from "../../../../../components/customerdashboardLayout";

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [taskDetails, setTaskDetails] = useState<any>(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}task/${id}`
        );
        setTaskDetails(response.data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    if (id) {
      fetchTaskDetails();
    }
  }, [id]);

  return (
    <CustomerDashboardLayout>
      <div className="mt-16 flex flex-col justify-center items-start max-w-screen-md mx-auto border p-4">
        {taskDetails ? (
          <>
            <h1>{taskDetails.taskServiceName}</h1>
            {/* Display other task details here */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </CustomerDashboardLayout>
  );
};

export default TaskDetails;
