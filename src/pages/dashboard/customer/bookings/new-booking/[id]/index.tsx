import CustomerDashboardLayout from "../../../../../../../components/customerdashboardLayout";
import Head from "next/head";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Booking1 from "../../../../../../../components/bookings/1";
import Booking2 from "../../../../../../../components/bookings/2";
import Booking3 from "../../../../../../../components/bookings/3";

interface FormState {
  listingID: string | number;
  description: string;
  bookDate: Date | undefined;
  startTime: string;
  endTime: string;
  bookFrom: {
    hour: string | number;
    minute: string | number;
  };
  bookTo: {
    hour: string | number;
    minute: string | number;
  };
  address: string;
  budget: string;
}

const NewBooking = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState<FormState>({
    listingID: "",
    description: "",
    bookDate: undefined,
    startTime: "",
    endTime: "",
    bookFrom: {
      hour: "",
      minute: "",
    },
    bookTo: {
      hour: "",
      minute: "",
    },
    address: "",
    budget: "",
  });

  const step = [
    {
      id: "1",
      name: "Service & Date",
    },
    {
      id: "2",
      name: " Location & Budget",
    },
    { id: "3", name: "Summary" },
  ];

  //   To go to next step

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < step.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const previous = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  //   To handle change

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To handle time change

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "startTime") {
      const [hour, minutes] = value.split(":");
      // Update the formData state with separated hours and minutes
      setFormData((prevFormData) => ({
        ...prevFormData,
        bookFrom: {
          hour: hour,
          minute: minutes,
        },
      }));
    }

    if (name === "endTime") {
      const [hour, minutes] = value.split(":");
      // Update the formData state with separated hours and minutes
      setFormData((prevFormData) => ({
        ...prevFormData,
        bookTo: {
          hour: hour,
          minute: minutes,
        },
      }));
    }

    // Update the form data with the new password or confirm password value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // To reset form

  const taskDateRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setFormData({
      listingID: "",
      description: "",
      bookDate: undefined,
      startTime: "",
      endTime: "",
      bookFrom: {
        hour: "",
        minute: "",
      },
      bookTo: {
        hour: "",
        minute: "",
      },
      address: "",
      budget: "",
    });

    // Reset date input
    if (taskDateRef.current) {
      taskDateRef.current.value = "";
    }
  };

  // To  submit form

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [status, setStatus] = useState(false);

  const { data: session } = useSession();
  const userToken = session?.user?.accessToken;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);

    const ListinIdValue = id;
    const bookDateBalue = formData.bookDate;
    const addressValue = formData.address;
    const bookFromHourValue = formData.bookFrom.hour;
    const bookFromMinuteValue = formData.bookFrom.minute;
    const bookToHourValue = formData.bookTo.hour;
    const bookToMinuteValue = formData.bookTo.minute;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}booking/book`,

        {
          listingId: ListinIdValue,
          bookDates: [bookDateBalue],
          bookFrom: {
            hour: bookFromHourValue,
            minute: bookFromMinuteValue,
          },
          bookTo: {
            hour: bookToHourValue,
            minute: bookToMinuteValue,
          },
          address: addressValue,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      if (response.status === 201) {
        setStatus(true);
        setMessage(response.data.message);
        setTimeout(() => {
          setStatus(false);
          setMessage("");
          router.push("/dashboard/customer/bookings");
          resetForm();
        }, 2000);
      }
    } catch (error: any) {
      console.log(error);
      setErrMessage(error.response.data.message);
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
        setErrMessage("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CustomerDashboardLayout>
      <div>
        <Head>
          <title>TaskHub | New Booking</title>
        </Head>
      </div>
      <div
        className={`my-16 flex flex-col justify-center items-start w-[900px] space-y-10`}
      >
        <h1 className="text-lg my-10 font-extrabold bg-purpleBase border-[1.5px] rounded-2xl shadow-2xl py-2 px-4 text-white">
          New Booking
        </h1>

        <div className="flex w-[600px] justify-between  items-start">
          <div className="flex flex-col w-[200px]  justify-center items-center space-y-6 ">
            {step.map((step, index) => (
              <div
                key={index}
                className={`text-[18px]  ${
                  index === currentStep && "text-[#FE9B07] font-extrabold"
                }`}
              >
                <span className="mx-3">{step.name}</span>
              </div>
            ))}
          </div>

          <div className=" w-[350px]">
            {currentStep === 0 && (
              <Booking1
                next={next}
                formData={formData}
                handleChange={handleChange}
                handleTimeChange={handleTimeChange}
                taskDateRef={taskDateRef}
              />
            )}
            {currentStep === 1 && (
              <Booking2
                next={next}
                formData={formData}
                handleChange={handleChange}
                previous={previous}
              />
            )}
            {currentStep === 2 && (
              <Booking3
                formData={formData}
                previous={previous}
                handleSubmit={handleSubmit}
                message={message}
                isLoading={isLoading}
                errMessage={errMessage}
                status={status}
              />
            )}
          </div>
        </div>
      </div>
    </CustomerDashboardLayout>
  );
};

export default NewBooking;
