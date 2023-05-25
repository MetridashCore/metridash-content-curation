import React, { useState } from "react";
import Switch from "react-switch";

type SwitchProps = {};

const index: React.FC<SwitchProps> = (props: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };
  return (
    <div className="bg-zinc-900 h-[100vh] flex justify-center items-center w-[100%]">
      <div className="bg-white py-[5%] px-[5%] w-[50%]">
        <div className="flex justify-between items-center">
          <p className="text-[#160647] text-[20px] font-semibold">
            Account Settings
          </p>
          <div className="px-8 py-4 bg-[#96a9b2] rounded-md cursor-pointer">
            <span className="text-white font-semibold">Save Changes</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#160647] font-bold mb-2">First Name</p>
          <input
            className="border-[#dcd8e8] w-[100%] h-[50px] rounded-[5px] border-2 text-[#222c3a] font-semibold"
            type="text"
          />
          <p className="text-[#160647] font-bold mt-10 mb-2">Last Name</p>
          <input
            className="border-[#dcd8e8] w-[100%] h-[50px] rounded-[5px] border-2 text-[#222c3a] font-semibold"
            type="text"
          />
        </div>
        <div className="bg-[#a3acb0] h-[2px] my-8" />
        <p className="text-[#160647] text-[20px] font-semibold">
          Email Settings
        </p>
        <p className="text-[#160647] font-bold mt-10 mb-2">Email</p>
        <div className="flex">
          <input
            className="border-[#dcd8e8] w-[100%] h-[50px] rounded-[5px] border-2 text-[#222c3a] font-semibold"
            type="text"
          />
          <div className="flex items-center justify-center px-5 py-2 cursor-pointer ml-5 bg-[#f3fffd] rounded-md border-[#d6fff8] border-2">
            <span className="text-[#6bbbb7] font-semibold">Change</span>
          </div>
        </div>
        <div className="bg-[#a3acb0] h-[2px] my-8" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <p className="text-[#160647] text-[20px] font-semibold">
                Write More
              </p>
              <span className="text-[#91e8e7] rounded-2xl bg-[#e6fffb] border-[#cdf4f4] border-2 ml-2 px-2">
                Beta
              </span>
            </div>
            <p className="text-[#9eaeb8]">
              Predictive wrting suggestions appear as you write
            </p>
          </div>
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor={"#91e8e7"}
            checkedIcon={undefined}
          />
        </div>
        <div className="bg-[#a3acb0] h-[2px] my-8" />
        <p className="text-[#160547] font-bold text-center">
          Email <span className="text-[#35a4a0]">help@copy.ai</span> if you have
          any questions. any questions.
        </p>
      </div>
    </div>
  );
};

export default index;
