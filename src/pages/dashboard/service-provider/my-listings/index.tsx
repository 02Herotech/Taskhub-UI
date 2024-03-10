import Link from "next/link";
import SPDashboardLayout from "../../../../../components/spdashboardLayout";

const Listing = () => {
  return (
    <SPDashboardLayout>
      <div>
        This page is yet to be implemented because the endpoint to fetch all the
        listing created by this SP is yet to be fixed. However you can create
        listing by clicking{" "}
        <Link
          href={"/dashboard/service-provider/my-listings/create-listing"}
          className="text-red5 hover:text-green6"
        >
          here
        </Link>
      </div>
    </SPDashboardLayout>
  );
};

export default Listing;
