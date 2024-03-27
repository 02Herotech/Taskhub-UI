interface FormState {
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
}

interface booking1Props {
  next: () => void;
  formData: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  taskDateRef: any;
}

const Booking1 = ({
  next,
  handleChange,
  formData,
  handleTimeChange,
  taskDateRef,
}: booking1Props) => {
  const isAllFieldsFilled = () => {
    const requiredFields: (keyof FormState)[] = [
      "description",
      "bookDate",
      "startTime",
      "endTime",
    ];
    return requiredFields.every((field) => {
      const value = formData[field];
      return (
        typeof value === "number" ||
        (typeof value === "string" && value.trim() !== "")
      );
    });
  };

  console.log(formData);
  return (
    <div>
      <div className="w-full p-8 shadow-md border-grey4 flex flex-col space-y-8">
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold">What do you need done?</h3>
          <input
            name="description"
            type="text"
            className="w-full bg-grey2 text text-[14px] text-grey6 p-2 rounded-md focus:border-red5 focus:outline-none"
            placeholder="I need your service on..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold">Set date and time:</h3>
          <div className="flex text-[14px] justify-between">
            <div className="flex flex-col space-y-2">
              <label htmlFor="startTime" className="font-semibold">
                From:
              </label>
              <input
                name="startTime"
                type="time"
                className="border-[1.5px] p-1 rounded-md "
                value={formData.startTime}
                onChange={handleTimeChange}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="endTime" className="font-semibold">
                To:
              </label>
              <input
                name="endTime"
                type="time"
                className="border-[1.5px] p-1 rounded-md "
                value={formData.endTime}
                onChange={handleTimeChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <input
            name="bookDate"
            type="date"
            className="border-[1.5px] p-1 rounded-md w-[150px]"
            onChange={handleChange}
            ref={taskDateRef}
          />
        </div>
      </div>

      <div className="flex mt-5  justify-end">
        <button
          onClick={next}
          disabled={!isAllFieldsFilled()}
          className=" px-4 cursor-pointer hover:bg-purpleHover  text-white font-bold bg-purpleBase rounded-lg py-3 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Booking1;
