import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className='text-white bg-[url("/src/assets/hero.jpg")]  bg-auto bg-no-repeat md:bg-cover font-VNProMedi '>
      <div className="max-w-[800px] pt-6 md:mt-[-96px] w-full  md:h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-white font-VNProRegu sm:text-xl text-lg">
          CÔNG TY TNHH{" "}
        </p>
        <h1 className="md:text-7xl  text-3xl font-VNProSemi md:py-6">
          NAM TIẾN ĐẠT
        </h1>
        <div className="items-center">
          <p className="md:text-4xl pt-2 sm:text-3xl text-base font-VNProRegu sm:mb-2">
            Nhà cung cấp than đá
          </p>
          <Typed
            className="pt-4 sm:text-3xl text-base font-VNProRegu md:pl-4"
            strings={["uy tín", "chuyên nghiệp"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="lg:text-xl text-sm font-VNProRegu p-4 rounded-md text-slate-100 mt-4 bg-slate-500 bg-opacity-50">
          Công ty TNHH Nam Tiến Đạt là nhà cung cấp than đá uy tín ở khu vực
          phía Nam. Công ty cung cấp than đá Quảng Ninh và than nhập khẩu cho
          các nhà máy sản xuất và doanh nghiệp kinh doanh than đá.
        </p>
        <button className="bg-[#4BA0F0] sm:w-[200px] w-32 rounded-md font-medium my-6 mx-auto sm:py-3 py-1 text-white hover:bg-blue-900 text-sm sm:text-base">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default Hero;
