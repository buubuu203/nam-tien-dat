import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Liên lạc với chúng tôi
          </h1>
          <p>Để được tư vấn trực tiếp một cách tậm tâm nhất.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Nhập email của bạn"
            />
            <button className="bg-[#4BA0F0] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-white hover:text-[#4BA0F0]">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
