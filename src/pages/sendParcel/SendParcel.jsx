import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from './../../hooks/useAuth';

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);
    Swal.fire({
      title: "Agree with the price",
      text: `You will charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {

        // save the parcel in thendatabase
        axiosSecure.post('/parcels', data)
          .then(res => {
            console.log(res.data)
          })

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send a Parcel</h2>

      <form
        className="mt-12 text-black p-4"
        onSubmit={handleSubmit(handleSendParcel)}
      >
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <span className="mr-2">Document</span>
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
          </label>

          <label className="label">
            <span className="mr-2">Non Document</span>
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
          </label>
        </div>

        {/* parcel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <fieldset className="fieldset space-y-4">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Parcel Name"
              {...register("parcelName")}
            />
          </fieldset>

          <fieldset className="fieldset space-y-4">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Parcel Weight"
              {...register("parcelWeight")}
            />
          </fieldset>
        </div>

        {/* Sender & Receiver */}
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
          {/* sender details */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-4">Sender Details</h4>

            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender Name"
                  defaultValue={user?.displayName}
                  {...register("senderName")}
                />
              </div>

              <div>
                <label className="label">Sender Email</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender Email"
                  defaultValue={user?.email}
                  {...register("senderEmail")}
                />
              </div>

              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <div>
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender Address"
                  {...register("senderAddress")}
                />
              </div>

              <div>
                <label className="label">Sender Phone Number</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Sender Phone Number"
                  {...register("senderPhoneNumber")}
                />
              </div>
            </fieldset>
          </div>

          {/* receiver details */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-4">Receiver Details</h4>

            <fieldset className="fieldset space-y-4">
              <div>
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Name"
                  {...register("recieverName")}
                />
              </div>

              <div>
                <label className="label">Receiver Email</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Email"
                  {...register("receiverEmail")}
                />
              </div>

              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Districts</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <div>
                <label className="label">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Address"
                  {...register("recieverAddress")}
                />
              </div>

              <div>
                <label className="label">Receiver Phone Number</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Receiver Phone Number"
                  {...register("recieverPhoneNumber")}
                />
              </div>
            </fieldset>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-black mt-8"
          value="send-parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
