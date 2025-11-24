import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
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
                  {...register("senderName")}
                />
              </div>

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
                <label className="label">Sender District</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender District"
                  {...register("senderDistrict")}
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
                <label className="label">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Address"
                  {...register("recieverAddress")}
                />
              </div>

              <div>
                <label className="label">Receiver District</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver District"
                  {...register("recieverDistrict")}
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
