const PRODUCT_WRAPPER = document.querySelector("#productWrapper");
const NAVBAR_WRAPPER = document.querySelector("#navbarWrapper");

function SwiperVariants(swiperName, PerView, space) {
  return new Swiper(swiperName, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: PerView,
    spaceBetween: space,
    loop: true,
  });
}
SwiperVariants(".mySwiper", 1, 0);
SwiperVariants(".productSwiper", 4, 30);

const productFactory = () => {
  const products = [
    {
      id: 1,
      title: "Scalp Moisturizing Cream",
      price: 29.0,
      oldPrice: null,
      badge: null,
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-11-1.jpg?v=1736500652&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-11-2.jpg?v=1736500652&width=360",
    },
    {
      id: 2,
      title: "Enriched Hand Wash",
      price: 25.0,
      oldPrice: 85.0,
      badge: "Sale",
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-05-1.jpg?v=1736500614&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-05-2.jpg?v=1736500614&width=360",
    },
    {
      id: 3,
      title: "Enriched Hand & Body Wash",
      price: 23.0,
      oldPrice: null,
      badge: "New",
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-3.jpg?v=1736500607&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-1.jpg?v=1736500607&width=360",
    },
    {
      id: 4,
      title: "Enriched Duo",
      price: 27.0,
      oldPrice: null,
      badge: null,
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-1.jpg?v=1736500658&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-2.jpg?v=1736500658&width=360",
    },
    {
      id: 5,
      title: "Enriched Hand & Body Wash",
      price: 23.0,
      oldPrice: null,
      badge: "New",
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-3.jpg?v=1736500607&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-1.jpg?v=1736500607&width=360",
    },
    {
      id: 6,
      title: "Enriched Duo",
      price: 27.0,
      oldPrice: null,
      badge: null,
      image:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-1.jpg?v=1736500658&width=360",
      hoverImg:
        "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-2.jpg?v=1736500658&width=360",
    },
  ];
  const productHtml = products
    .map(
      (item) => `
      <div class="swiper-slide">
        <div class="box flex flex-col items-center justify-center bg-white">
          <div class="boxImg relative group overflow-hidden">
            <img src="${item?.image}" alt="${item?.title}"
              class="transition-opacity duration-300 w-full h-full object-cover" />
           ${
             item?.badge
               ? `<div class="badge absolute top-[10px] left-2.5 
       ${item.badge === "New" ? "bg-[#BC4F38]" : ""} 
       ${item.badge === "Sale" ? "bg-[#4E7661]" : ""} 
       text-white px-2.5 rounded-[2px] font-medium z-50">
       <button>${item.badge}</button>
     </div>`
               : ""
           }
            <div class="hoverImg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 cursor-pointer overflow-hidden">
              <img src="${item?.hoverImg}" alt="${
        item.title
      }" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="boxBody flex items-center flex-col justify-center mt-4">
            <h2 class="font-semibold text-[16px]">$${item.price.toFixed(2)}</h2>
            <h3 class="font-semibold text-[15px]">${item.title}</h3>
          </div>
        </div>
      </div>
    `
    )
    .join("");
  PRODUCT_WRAPPER.innerHTML = productHtml;
};

productFactory();

const navBarRendering = () => {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "#" },
    { name: "PRODUCT", path: "#" },
    { name: "PAGES", path: "#" },
    { name: "BLOG", path: "#" },
  ];
  const iconItems = [
    {
      name: "Search",
      icon: `     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[28px] h-[28px] stroke-black stroke-0 fill-black"
                  viewBox="0 0 28 32"
                >
                  <path
                    d="M28.529 27.47l-5.566-5.566c1.731-1.97 2.787-4.57 2.787-7.417 0-6.221-5.043-11.264-11.264-11.264s-11.264 5.043-11.264 11.264c0 6.221 5.043 11.264 11.264 11.264 2.846 0 5.446-1.056 7.429-2.797l-0.013 0.011 5.566 5.566c0.136 0.136 0.323 0.22 0.53 0.22 0.414 0 0.75-0.336 0.75-0.75 0-0.207-0.084-0.395-0.22-0.53v0zM4.75 14.5c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 5.385-4.365 9.75-9.75 9.75v0c-5.382-0.006-9.744-4.368-9.75-9.749v-0.001z"
                  ></path>
                </svg>`,
    },
    {
      name: "User",
      icon: `     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[28px] h-[28px] stroke-black stroke-0 fill-black"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M28.776 26.623c-1.94-3.298-5.031-5.742-8.709-6.8l-0.105-0.026c2.864-1.477 4.788-4.415 4.788-7.802 0-4.832-3.918-8.75-8.75-8.75s-8.75 3.918-8.75 8.75c0 3.387 1.924 6.324 4.739 7.779l0.049 0.023c-3.783 1.083-6.874 3.528-8.776 6.756l-0.038 0.069c-0.063 0.108-0.101 0.237-0.101 0.376 0 0.414 0.336 0.75 0.75 0.75 0.276 0 0.517-0.149 0.647-0.371l0.002-0.004c2.335-3.988 6.598-6.624 11.477-6.624s9.143 2.636 11.443 6.562l0.034 0.063c0.132 0.225 0.373 0.374 0.649 0.374 0.414 0 0.75-0.336 0.75-0.75 0-0.138-0.037-0.268-0.103-0.379l0.002 0.004zM8.75 12c0-4.004 3.246-7.25 7.25-7.25s7.25 3.246 7.25 7.25c0 4.004-3.246 7.25-7.25 7.25v0c-4.002-0.005-7.245-3.248-7.25-7.25v-0z"
                  ></path>
                </svg>`,
    },
    {
      name: "Wishlist",
      icon: `   <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[28px] h-[28px] stroke-black stroke-0 fill-black"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9zM226.5 168.8C221.9 178.3 212.9 184.9 202.4 186.5L64.99 206.8L164.8 305.6C172.1 312.9 175.5 323.4 173.8 333.7L150.2 473.2L272.8 407.7C282.3 402.6 293.6 402.6 303 407.7L425.6 473.2L402.1 333.7C400.3 323.4 403.7 312.9 411.1 305.6L510.9 206.8L373.4 186.5C362.1 184.9 353.1 178.3 349.3 168.8L287.9 42.32L226.5 168.8z"
                  ></path>
                </svg>`,
    },
    {
      name: "Cart",
      icon: ` <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[28px] h-[28px] stroke-black stroke-0 fill-black"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M27 5.25h-22c-0.966 0.001-1.749 0.784-1.75 1.75v18c0.001 0.966 0.784 1.749 1.75 1.75h22c0.966-0.001 1.749-0.784 1.75-1.75v-18c-0.001-0.966-0.784-1.749-1.75-1.75h-0zM5 6.75h22c0.138 0 0.25 0.112 0.25 0.25v2.25h-22.5v-2.25c0-0.138 0.112-0.25 0.25-0.25h0zM27 25.25h-22c-0.138-0-0.25-0.112-0.25-0.25v-14.25h22.5v14.25c-0 0.138-0.112 0.25-0.25 0.25h-0zM21.75 14c0 3.176-2.574 5.75-5.75 5.75s-5.75-2.574-5.75-5.75v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0z"
                  ></path>
                </svg>`,
    },
  ];

  const renderNavBarHTML = ` <nav class="container max-w-[1860px] px-[1.875rem] mx-auto">
        <div class="flex items-center justify-between">
          <div class="left w-[50%]">
            <ul
              class="items-center flex text-[14px] leading-[25px] tracking-[1.4px] font-semibold gap-[35px]"
            >
                      ${menuItems
                        .map(
                          (item) =>
                            `<li>${item?.name} <i class="ri-arrow-down-s-line"></i></li>`
                        )
                        .join("")}
           
            </ul>
          </div>
          <div class="center">
            <img
              src="https://glowing-theme.myshopify.com/cdn/shop/files/logo-dark.png?v=1736504155"
              alt=""
              class="max-w-[190px] py-[20px] h-auto object-contain"
            />
          </div>
          <div class="right w-[50%] flex items-end justify-end">
            <ul class="text-black flex items-center gap-[24px]">
       ${iconItems.map((icon) => `<li>${icon?.icon}</li>`).join("")}
            </ul>
          </div>
        </div>
      </nav>`;
  NAVBAR_WRAPPER.innerHTML = renderNavBarHTML;
};
navBarRendering();
