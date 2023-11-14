import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

// Trụ sở chính: 152 Đường D, Khu Đô Thị Lakeview City, P. An Phú, TP Thủ Đức, TP.HCM

// Kho than: Tổ 14, Ấp Bình Hóa, Xã Hóa An, TP Biên Hòa, Đồng Nai (Gần cầu Hóa An, Quốc lộ 1k)

//

// Hotline: 0932.087.568 (Mr. Sơn)

// Email: congtytnhhnamtiendat@gmail.com

// Website: http://www.namtiendat.vn
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto lg:flex lg:justify-between py-16 px-4 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#6FB3F3]">
          CÔNG TY TNHH NAM TIẾN ĐẠT
        </h1>
        <p className="py-4 leading-8">
          <strong>Trụ sở chính:</strong> 152 Đường D, Khu Đô Thị Lakeview
          City,P. An Phú, TP Thủ Đức, TP.HCM
          <br />
          <strong>Kho than:</strong> Tổ 14, Ấp Bình Hóa, Xã Hóa An, TP Biên Hòa,
          Đồng Nai (Gần cầu Hóa An, Quốc lộ 1k) <br />
          <strong>MST:</strong> 0305601767
        </p>
        <div className="flex gap-4 md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="mt-6">
        <div>
          <p className="py-4 leading-8">
            <strong>Hotline:</strong> 0932.087.568 (Mr. Sơn) <br />
            <strong>Email:</strong> congtytnhhnamtiendat@gmail.com <br />
            <strong>Website:</strong>{" "}
            <a href="http://www.namtiendat.vn">http://www.namtiendat.vn</a>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1716748532455!2d106.76993779999999!3d10.793857300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270622d37213%3A0xfb39e9f977670315!2zMTUyIMSQxrDhu51uZyBELCBLaHUgxJDDtCBUaOG7iyBMYWtldmlldyBDaXR5LCBQLiBBbiBQaMO6LCBUUCBUaOG7pyDEkOG7qWMsIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1636362792027!5m2!1svi!2s"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
