import React from "react";

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      title:
        "Đề xuất xây băng tải để vận chuyển than đá xuyên biên giới từ Lào qua Quảng Trị",
      description:
        "Để thuận lợi hơn trong việc vận chuyển than từ mỏ than của tỉnh Sekong và Salavan (Lào) về Quảng Trị, tỉnh này vừa kiến nghị Thủ tướng cho xây dựng băng tải than nối xuyên qua biên giới.",
      image:
        "https://cdn.tuoitre.vn/zoom/260_163/471584752817336320/2023/6/6/bang-tai-than-16860390594401502494512-0-152-932-1644-crop-16860395854721940641467.jpg",
    },
    {
      id: 2,
      title: "'Cơn nghiện' năng lượng hóa thạch vẫn chưa dứt",
      description:
        "TTO - Dầu mỏ và khí đốt vẫn là những nguồn năng lượng chính, than đá đang quay trở lại với tốc độ kỷ lục. Giấc mơ về một thế giới năng lượng xanh xem ra vẫn còn xa vời.",
      image:
        "https://cdn.tuoitre.vn/zoom/260_163/2022/8/17/bart-van-dijk-than-da-1read-only-1660705289479815707113-crop-16607053694441859171703.jpg",
    },
    {
      id: 3,
      title: "Nga 'đại hạ giá' than đá, Ấn Độ mua ồ ạt",
      description:
        "TTO - Khối lượng than đá Ấn Độ nhập từ Nga đã tăng đột biến trong mấy tuần gần đây sau khi các nhà buôn Nga giảm giá tới 30%.",
      image:
        "https://cdn.tuoitre.vn/zoom/260_163/2022/6/18/than-an-do-165555803278346135717-crop-16555581824241066710665.jpg",
    },
    {
      id: 4,
      title: "Trung Quốc sắp mở thêm 169 mỏ than",
      description:
        "TTO - Ngày 24-5, Tổ chức Giám sát năng lượng toàn cầu (GEM) ghi nhận Trung Quốc sắp mở thêm 169 mỏ than mới, có khả năng tăng công suất khai thác thay vì giảm xuống như cam kết chống biến đổi khí hậu.",
      image:
        "https://cdn.tuoitre.vn/zoom/260_163/2022/5/25/screen-shot-2022-05-25-at-120214-16534551143581869434058-crop-1653455153609677144121.png",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl p-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <p className="text-center text-[#4BA0F0] p-4 sm:p-6 text-xl sm:text-3xl uppercase font-VNProSemi">
          Tin tức
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group relative p-4 rounded-md border-2 border-slate-100 shadow-sm"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={article.image}
                  alt="Article"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleGrid;
