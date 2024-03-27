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

interface booking3Props {
  formData: FormState;
  previous: () => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
  message: any;
  isLoading: any;
  errMessage: any;
  status: any;
}

const Booking3 = ({
  formData,
  previous,
  handleSubmit,
  isLoading,
  message,
  errMessage,
  status,
}: booking3Props) => {
  // Function to format the date
  const formatDate = (date: any) => {
    if (!date) return "No date selected";
    const formattedDate = new Date(date);
    if (isNaN(formattedDate.getTime())) {
      return "Invalid date";
    }
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    } as const;
    return new Intl.DateTimeFormat("en-GB", options).format(formattedDate);
  };

  return (
    <div>
      <div className="w-full p-8 shadow-md border-grey4 flex flex-col justify-center space-y-8">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Description</h3>

          <p className="text-[14px]">{formData.description}</p>
          <hr />
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Time & Date</h3>

          <div className="flex space-x-4 items-end">
            <div className="flex flex-col space-y-1">
              <p className="text-[12px] text-grey6">From:</p>
              <p className="text-[14px] border-[1.5px] px-2 py-1 max-w-[60px] rounded-lg">
                {formData.startTime}
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <p className="text-[12px] text-grey6">To:</p>
              <p className="text-[14px] border-[1.5px] px-2 py-1 max-w-[60px] rounded-lg">
                {formData.endTime}
              </p>
            </div>

            <span className="block h-[30px] w-[3px] bg-black"></span>

            <div className="mb-1">
              <p className="text-[14px]">{formatDate(formData.bookDate)}</p>
            </div>
          </div>

          <hr />
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Address</h3>

          <p className="text-[14px]">{formData.address}</p>
          <hr />
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Budget</h3>

          <p className="text-[14px]">{formData.budget}</p>
          <hr />
        </div>
      </div>

      {status ? (
        <div className="flex mt-5  justify-center">
          {errMessage ? (
            <p className="text-[14px] text-red6">{errMessage}</p>
          ) : (
            <p className="text-[14px] text-green8">{message}!</p>
          )}
        </div>
      ) : (
        <div className="flex mt-5  justify-between">
          <button
            onClick={previous}
            className=" px-4 cursor-pointer hover:bg-purpleHover  text-white font-bold bg-purpleBase rounded-lg py-3 disabled:opacity-50"
            disabled={isLoading}
          >
            Prev
          </button>

          <button
            onClick={handleSubmit}
            className=" px-4 cursor-pointer hover:bg-purpleHover  text-white font-bold bg-purpleBase rounded-lg py-3 disabled:opacity-50"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking3;
