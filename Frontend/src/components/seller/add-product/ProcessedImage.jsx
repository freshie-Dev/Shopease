import React from "react";
import { useProductFormContext } from "../../../context/product-form/ProductFormProvider";

const ProcessedImage = () => {
  const { processedImageUrl } = useProductFormContext();

  return (
    <div className="rounded-xl overflow-hidden my-3">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-[50%] text-center font-bold text-xl cursive">
              Original Image
            </th>
            <th className="w-[50%] text-center font-bold text-xl cursive">
              Processed image
            </th>
          </tr>
        </thead>
      </table>
      {!processedImageUrl ? (
        <table className="w-full my-2 rounded-xl">
          <tr className="rounded-xl">
            <td className="rounded-l-xl w-[50%] h-[200px] text-center font-bold text-xl cursive bg-[#9e7852] ">
              preview
            </td>
            <td className="rounded-r-xl w-[50%] h-[200px] text-center font-bold text-xl cursive bg-[#9e7852] ">
              preview
            </td>
          </tr>
        </table>
      ) : (
        <img className="rounded-xl h-full w-full object-cover object-center" src={processedImageUrl} alt="" />
      )}
    </div>
  );
};

export default ProcessedImage;
