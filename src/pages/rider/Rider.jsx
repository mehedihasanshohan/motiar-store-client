// import React from "react";
// import { useForm, useWatch } from "react-hook-form";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useLoaderData, useNavigate } from "react-router";
// import useAuth from "../../hooks/useAuth";

// const Rider = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     // formState: { errors },
//   } = useForm();
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const serviceCenters = useLoaderData();
//   const regionDuplicate = serviceCenters.map((c) => c.region);
//   const regions = [...new Set(regionDuplicate)];
//   const riderRegion = useWatch({ control, name: "region", defaultValue: "" });

//   const handleRiderApplication = (data) => {
//     console.log(data);
//   };

//   const districtByRegion = (region) => {
//     if (!region) return [];
//     return serviceCenters
//       .filter((c) => c.region === region)
//       .map((d) => d.district);
//   };

//   return (
//     <div>
//       <form
//         className="mt-12 text-black p-4"
//         onSubmit={handleSubmit(handleRiderApplication)}
//       >
//         <h4 className="text-2xl font-semibold">Riders Details</h4>

//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <div>
//               <label className="label">Rider Name</label>
//               <input
//                 type="text"
//                 className="input w-full"
//                 placeholder="Rider Name"
//                 defaultValue={user?.displayName}
//                 {...register("riderName")}
//               />
//             </div>

//             <div>
//               <label className="label">Rider Email</label>
//               <input
//                 type="text"
//                 className="input w-full"
//                 placeholder="Rider Email"
//                 defaultValue={user?.email}
//                 {...register("riderEmail")}
//               />
//             </div>

//             <div>
//               <label className="label">Rider Phone Number</label>
//               <input
//                 type="number"
//                 className="input w-full"
//                 placeholder="Sender Phone Number"
//                 {...register("senderPhoneNumber")}
//               />
//             </div>
//           </div>

//           <div>
//             <div>
//               {/* rider region */}
//               <fieldset className="fieldset">
//                 <legend className="fieldset-legend">Regions</legend>
//                 <select
//                   {...register("region")}
//                   defaultValue="Pick a region"
//                   className="select w-full"
//                 >
//                   <option disabled={true}>Pick a region</option>
//                   {regions.map((r, i) => (
//                     <option key={i} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </fieldset>
//             </div>

//             <div>
//               {/* rider districts */}
//               <fieldset className="fieldset">
//                 <legend className="fieldset-legend">Districts</legend>
//                 <select
//                   {...register("district")}
//                   defaultValue=""
//                   className="select w-full"
//                 >
//                   <option disabled={true}>Pick a District</option>
//                   {districtByRegion(riderRegion).map((r, i) => (
//                     <option key={i} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </fieldset>
//             </div>

//             <div>
//               <label className="label">Your Address</label>
//               <input
//                 type="text"
//                 className="input w-full"
//                 placeholder="Your Address"
//                 {...register("address")}
//               />
//             </div>
//           </div>
//         </div>

//         <input
//           type="submit"
//           className="btn btn-primary text-black mt-8"
//           value="send-parcel"
//         />
//       </form>
//     </div>
//   );
// };

// export default Rider;


import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const serviceCenters = useLoaderData();

  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const riderRegion = useWatch({
    control,
    name: "region",
    defaultValue: "",
  });

  const handleRiderApplication = (data) => {
    console.log(data);
  };

  const districtByRegion = (region) => {
    if (!region) return [];
    return serviceCenters
      .filter((c) => c.region === region)
      .map((d) => d.district);
  };

  return (
    <div>
      <form
        className="mt-12 text-black p-4"
        onSubmit={handleSubmit(handleRiderApplication)}
      >
        <h4 className="text-2xl font-semibold">Riders Details</h4>

        <div className="grid grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="label">Rider Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Rider Name"
                defaultValue={user?.displayName}
                {...register("riderName")}
              />
            </div>

            <div className="space-y-2">
              <label className="label">Rider Email</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Rider Email"
                defaultValue={user?.email}
                {...register("riderEmail")}
              />
            </div>

            <div className="space-y-2">
              <label className="label">Rider Phone Number</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Sender Phone Number"
                {...register("senderPhoneNumber")}
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <div className="space-y-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select
                  {...register("region")}
                  defaultValue="Pick a region"
                  className="select w-full"
                >
                  <option disabled>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            <div className="space-y-2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select
                  {...register("district")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option disabled>Pick a District</option>
                  {districtByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            <div className="space-y-2">
              <label className="label">Your Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Address"
                {...register("address")}
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-black mt-8"
          value="Apply As a Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
