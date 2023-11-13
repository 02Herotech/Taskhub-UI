import { CategoryDetails } from "./categoryDetails";
// import { CategoryDetailsProps } from "./categoryDetails";
import Image from "next/image";
import { LiaBuffer, LiaClipboardListSolid } from 'react-icons/lia'






const ServiceCategoryDetails = () => {
    
    
    return (
        <div className={`grid grid-cols-2 `}>
           {CategoryDetails?.map((blog) => (
            <div key={blog.id} className={` border-[1px] border-grey3 py-4 px-6 mx-3 my-6 text-[14px]`}>
                <Image src={blog.CategoryDetailsImage} width={200} alt=""/>
                <p className=" font-extrabold my-2">{blog.CategoryDescription}</p>
                <p className="text-purpleBase">{blog.CategoryDetailsPrice}</p>
                <div className="flex justify-start items-center mt-2 text-[13px] ">
                    <button className="flex mr-2 border-[1px] border-grey3 px-2 py-1 items-center justify-center  hover:text-grey4">
                       <span className="mr-1 text-[18px]"><LiaClipboardListSolid /></span> ORDER NOW
                    </button>
                    <button className="border-[1px] border-grey3 px-1 py-1 text-[18px] hover:text-grey4">
                       <LiaBuffer />
                    </button>
                </div>
            </div>
           ))}

        </div>
        
    );
}
 
export default ServiceCategoryDetails;