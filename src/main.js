const PRODUCT_WRAPPER = document.querySelector("#productWrapper");
const NAVBAR_WRAPPER = document.querySelector("#navbarWrapper");
const FAV_PR_WRAPPER = document.querySelector("#favPrWrapper");

function SwiperVariants(swiperName, PerView, space, breakpoints) {
  return new Swiper(swiperName, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: breakpoints,
    slidesPerView: PerView,
    spaceBetween: space,
    loop: true,
  });
}
SwiperVariants(".mySwiper", 1, 0);
SwiperVariants(".productSwiper", 4, 30, {
  0: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 30 },
  1280: { slidesPerView: 4, spaceBetween: 40 },
});

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
  const swipperProduct = products
    .map(
      (item) => `
      <div class="swiper-slide">
        <div  class="box flex flex-col items-center justify-center bg-white">
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
                              <div
                    class="hoverIcon absolute bottom-4 flex items-center justify-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ul class="flex items-center gap-3.5">
                      <li
                        class="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[22px] h-[22px] fill-current"
                        >
                          <path
                            d="M27 5.25h-22c-0.966 0.001-1.749 0.784-1.75 1.75v18c0.001 0.966 0.784 1.749 1.75 1.75h22c0.966-0.001 1.749-0.784 1.75-1.75v-18c-0.001-0.966-0.784-1.749-1.75-1.75h-0zM5 6.75h22c0.138 0 0.25 0.112 0.25 0.25v2.25h-22.5v-2.25c0-0.138 0.112-0.25 0.25-0.25h0zM27 25.25h-22c-0.138-0-0.25-0.112-0.25-0.25v-14.25h22.5v14.25c-0 0.138-0.112 0.25-0.25 0.25h-0zM21.75 14c0 3.176-2.574 5.75-5.75 5.75s-5.75-2.574-5.75-5.75v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[22px] h-[22px] fill-current"
                        >
                          <path
                            d="M30.685 15.695c-0.043-0.097-1.083-2.404-3.405-4.726-2.153-2.153-5.858-4.72-11.28-4.72s-9.127 2.567-11.28 4.72c-2.322 2.322-3.362 4.629-3.405 4.726-0.041 0.090-0.065 0.194-0.065 0.304s0.024 0.215 0.067 0.309l-0.002-0.005c0.043 0.097 1.083 2.404 3.405 4.725 2.153 2.153 5.858 4.719 11.28 4.719s9.127-2.566 11.28-4.719c2.322-2.322 3.362-4.628 3.405-4.725 0.041-0.090 0.065-0.194 0.065-0.305s-0.024-0.215-0.067-0.309l0.002 0.005zM16 24.249c-3.922 0-7.348-1.427-10.181-4.241-1.16-1.152-2.152-2.472-2.939-3.919l-0.044-0.089c0.83-1.536 1.823-2.856 2.982-4.008l0.001-0.001c2.833-2.815 6.259-4.242 10.181-4.242s7.348 1.427 10.181 4.242c1.16 1.153 2.152 2.472 2.939 3.92l0.044 0.089c-0.796 1.525-4.784 8.249-13.164 8.249zM16 10.25c-3.176 0-5.75 2.574-5.75 5.75s2.574 5.75 5.75 5.75c3.176 0 5.75-2.574 5.75-5.75v0c-0.004-3.174-2.576-5.746-5.75-5.75h-0zM16 20.25c-2.347 0-4.25-1.903-4.25-4.25s1.903-4.25 4.25-4.25c2.347 0 4.25 1.903 4.25 4.25v0c-0.003 2.346-1.904 4.247-4.25 4.25h-0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[22px] h-[22px] fill-current"
                        >
                          <path
                            d="M23.408 28.748c-0.354-0-0.683-0.104-0.96-0.283l0.007 0.004-6.304-3.994c-0.042-0.028-0.094-0.044-0.15-0.044s-0.108 0.016-0.151 0.045l0.001-0.001-5.859 3.712c-0.3 0.198-0.669 0.316-1.064 0.316-0.439 0-0.844-0.145-1.17-0.39l0.005 0.004c-0.515-0.377-0.846-0.979-0.846-1.658 0-0.184 0.024-0.362 0.070-0.532l-0.003 0.014 1.689-6.645c0.007-0.026 0.012-0.057 0.012-0.088 0-0.104-0.046-0.197-0.119-0.26l-0-0-5.653-4.705c-0.405-0.339-0.661-0.844-0.661-1.41 0-0.207 0.034-0.406 0.097-0.591l-0.004 0.013c0.225-0.695 0.845-1.199 1.588-1.25l0.006-0 7.383-0.479c0.119-0.010 0.217-0.088 0.257-0.195l0.001-0.002 2.754-6.934c0.266-0.675 0.913-1.144 1.669-1.144s1.403 0.469 1.665 1.132l0.004 0.012 2.754 6.934c0.040 0.109 0.139 0.187 0.256 0.197l0.001 0 7.383 0.479c0.749 0.051 1.369 0.555 1.59 1.237l0.004 0.013c0.059 0.173 0.093 0.371 0.093 0.578 0 0.565-0.256 1.071-0.658 1.408l-0.003 0.002-5.654 4.705c-0.073 0.063-0.119 0.156-0.119 0.26 0 0.031 0.004 0.062 0.012 0.091l-0.001-0.002 1.822 7.165c0.038 0.139 0.059 0.298 0.059 0.462 0 0.608-0.296 1.146-0.752 1.479l-0.005 0.004c-0.289 0.213-0.652 0.341-1.045 0.341h-0zM16 22.933c0.001 0 0.001 0 0.002 0 0.353 0 0.681 0.102 0.958 0.279l-0.007-0.004 6.304 3.994c0.042 0.030 0.094 0.047 0.151 0.047 0.062 0 0.12-0.022 0.165-0.058l-0.001 0c0.084-0.060 0.138-0.157 0.138-0.267 0-0.034-0.005-0.066-0.015-0.097l0.001 0.002-1.822-7.165c-0.036-0.137-0.057-0.293-0.057-0.455 0-0.567 0.255-1.074 0.656-1.413l0.003-0.002 5.653-4.705c0.074-0.061 0.121-0.154 0.121-0.257 0-0.041-0.007-0.080-0.021-0.116l0.001 0.002c-0.033-0.12-0.137-0.209-0.264-0.217l-0.001-0-7.383-0.479c-0.707-0.052-1.298-0.504-1.55-1.128l-0.004-0.012-2.754-6.934c-0.040-0.116-0.148-0.198-0.275-0.198s-0.235 0.082-0.275 0.196l-0.001 0.002-2.754 6.934c-0.257 0.636-0.847 1.088-1.548 1.14l-0.006 0-7.383 0.479c-0.127 0.008-0.232 0.097-0.264 0.215l-0 0.002c-0.013 0.034-0.020 0.073-0.020 0.114 0 0.103 0.047 0.195 0.121 0.256l0.001 0 5.653 4.705c0.404 0.342 0.659 0.849 0.659 1.416 0 0.162-0.021 0.318-0.060 0.468l0.003-0.013-1.689 6.645c-0.013 0.045-0.021 0.096-0.021 0.15 0 0.182 0.089 0.342 0.226 0.441l0.002 0.001c0.078 0.060 0.177 0.096 0.285 0.096 0.097 0 0.188-0.030 0.263-0.080l-0.002 0.001 5.859-3.712c0.269-0.173 0.598-0.275 0.95-0.275 0.001 0 0.002 0 0.002 0h-0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[22px] h-[22px] fill-current"
                        >
                          <path
                            d="M28.629 22.407c-0.002 0.003-0.003 0.005-0.005 0.008-0.029 0.043-0.060 0.081-0.095 0.116v0l-4 4c-0.136 0.136-0.323 0.219-0.53 0.219-0.414 0-0.75-0.336-0.75-0.75 0-0.207 0.084-0.394 0.219-0.53v0l2.72-2.72h-22.189c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h22.189l-2.72-2.72c-0.136-0.136-0.219-0.323-0.219-0.53 0-0.414 0.336-0.75 0.75-0.75 0.207 0 0.394 0.084 0.53 0.219v0l4 4c0.035 0.035 0.066 0.072 0.093 0.113l0.002 0.003c0.002 0.003 0.003 0.005 0.005 0.008 0.023 0.035 0.045 0.075 0.062 0.117l0.002 0.005c0.001 0.003 0.002 0.006 0.003 0.009 0.015 0.037 0.029 0.080 0.038 0.125l0.001 0.005c0 0.002 0.001 0.005 0.001 0.007 0.008 0.041 0.013 0.089 0.013 0.138s-0.005 0.096-0.014 0.143l0.001-0.005c-0 0.002-0.001 0.005-0.001 0.007-0.010 0.050-0.023 0.094-0.040 0.135l0.002-0.005c-0.001 0.003-0.002 0.006-0.003 0.009-0.020 0.047-0.041 0.087-0.066 0.125l0.002-0.003zM3.306 9.715c-0.001 0.003-0.002 0.006-0.003 0.009-0.015 0.037-0.029 0.080-0.038 0.126l-0.001 0.005c-0.001 0.002-0.001 0.005-0.001 0.007-0.008 0.041-0.013 0.089-0.013 0.138s0.005 0.097 0.014 0.143l-0.001-0.005c0 0.002 0.001 0.005 0.001 0.007 0.010 0.050 0.023 0.094 0.040 0.135l-0.002-0.005c0.001 0.003 0.002 0.006 0.003 0.009 0.020 0.047 0.041 0.087 0.066 0.125l-0.002-0.003c0.002 0.003 0.003 0.005 0.005 0.008 0.029 0.043 0.060 0.081 0.095 0.116v0l4 4c0.136 0.136 0.323 0.22 0.531 0.22 0.414 0 0.75-0.336 0.75-0.75 0-0.207-0.084-0.395-0.22-0.531v0l-2.72-2.72h22.189c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-22.189l2.72-2.72c0.136-0.136 0.22-0.323 0.22-0.531 0-0.414-0.336-0.75-0.75-0.75-0.207 0-0.395 0.084-0.531 0.22v0l-3.999 4c-0.035 0.035-0.066 0.072-0.093 0.113l-0.002 0.003c-0.002 0.003-0.003 0.005-0.005 0.008-0.023 0.035-0.045 0.075-0.062 0.117l-0.002 0.005z"
                          ></path>
                        </svg>
                      </li>
                    </ul>
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

  const productHtml = products
    .map(
      (item) => `
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
                              <div
                    class="hoverIcon absolute bottom-4 flex items-center justify-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ul class="flex items-center gap-3.5">
                      <li
                        class="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[20px] h-[20px] fill-current"
                        >
                          <path
                            d="M27 5.25h-22c-0.966 0.001-1.749 0.784-1.75 1.75v18c0.001 0.966 0.784 1.749 1.75 1.75h22c0.966-0.001 1.749-0.784 1.75-1.75v-18c-0.001-0.966-0.784-1.749-1.75-1.75h-0zM5 6.75h22c0.138 0 0.25 0.112 0.25 0.25v2.25h-22.5v-2.25c0-0.138 0.112-0.25 0.25-0.25h0zM27 25.25h-22c-0.138-0-0.25-0.112-0.25-0.25v-14.25h22.5v14.25c-0 0.138-0.112 0.25-0.25 0.25h-0zM21.75 14c0 3.176-2.574 5.75-5.75 5.75s-5.75-2.574-5.75-5.75v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25v0c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[20px] h-[20px] fill-current"
                        >
                          <path
                            d="M30.685 15.695c-0.043-0.097-1.083-2.404-3.405-4.726-2.153-2.153-5.858-4.72-11.28-4.72s-9.127 2.567-11.28 4.72c-2.322 2.322-3.362 4.629-3.405 4.726-0.041 0.090-0.065 0.194-0.065 0.304s0.024 0.215 0.067 0.309l-0.002-0.005c0.043 0.097 1.083 2.404 3.405 4.725 2.153 2.153 5.858 4.719 11.28 4.719s9.127-2.566 11.28-4.719c2.322-2.322 3.362-4.628 3.405-4.725 0.041-0.090 0.065-0.194 0.065-0.305s-0.024-0.215-0.067-0.309l0.002 0.005zM16 24.249c-3.922 0-7.348-1.427-10.181-4.241-1.16-1.152-2.152-2.472-2.939-3.919l-0.044-0.089c0.83-1.536 1.823-2.856 2.982-4.008l0.001-0.001c2.833-2.815 6.259-4.242 10.181-4.242s7.348 1.427 10.181 4.242c1.16 1.153 2.152 2.472 2.939 3.92l0.044 0.089c-0.796 1.525-4.784 8.249-13.164 8.249zM16 10.25c-3.176 0-5.75 2.574-5.75 5.75s2.574 5.75 5.75 5.75c3.176 0 5.75-2.574 5.75-5.75v0c-0.004-3.174-2.576-5.746-5.75-5.75h-0zM16 20.25c-2.347 0-4.25-1.903-4.25-4.25s1.903-4.25 4.25-4.25c2.347 0 4.25 1.903 4.25 4.25v0c-0.003 2.346-1.904 4.247-4.25 4.25h-0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[20px] h-[20px] fill-current"
                        >
                          <path
                            d="M23.408 28.748c-0.354-0-0.683-0.104-0.96-0.283l0.007 0.004-6.304-3.994c-0.042-0.028-0.094-0.044-0.15-0.044s-0.108 0.016-0.151 0.045l0.001-0.001-5.859 3.712c-0.3 0.198-0.669 0.316-1.064 0.316-0.439 0-0.844-0.145-1.17-0.39l0.005 0.004c-0.515-0.377-0.846-0.979-0.846-1.658 0-0.184 0.024-0.362 0.070-0.532l-0.003 0.014 1.689-6.645c0.007-0.026 0.012-0.057 0.012-0.088 0-0.104-0.046-0.197-0.119-0.26l-0-0-5.653-4.705c-0.405-0.339-0.661-0.844-0.661-1.41 0-0.207 0.034-0.406 0.097-0.591l-0.004 0.013c0.225-0.695 0.845-1.199 1.588-1.25l0.006-0 7.383-0.479c0.119-0.010 0.217-0.088 0.257-0.195l0.001-0.002 2.754-6.934c0.266-0.675 0.913-1.144 1.669-1.144s1.403 0.469 1.665 1.132l0.004 0.012 2.754 6.934c0.040 0.109 0.139 0.187 0.256 0.197l0.001 0 7.383 0.479c0.749 0.051 1.369 0.555 1.59 1.237l0.004 0.013c0.059 0.173 0.093 0.371 0.093 0.578 0 0.565-0.256 1.071-0.658 1.408l-0.003 0.002-5.654 4.705c-0.073 0.063-0.119 0.156-0.119 0.26 0 0.031 0.004 0.062 0.012 0.091l-0.001-0.002 1.822 7.165c0.038 0.139 0.059 0.298 0.059 0.462 0 0.608-0.296 1.146-0.752 1.479l-0.005 0.004c-0.289 0.213-0.652 0.341-1.045 0.341h-0zM16 22.933c0.001 0 0.001 0 0.002 0 0.353 0 0.681 0.102 0.958 0.279l-0.007-0.004 6.304 3.994c0.042 0.030 0.094 0.047 0.151 0.047 0.062 0 0.12-0.022 0.165-0.058l-0.001 0c0.084-0.060 0.138-0.157 0.138-0.267 0-0.034-0.005-0.066-0.015-0.097l0.001 0.002-1.822-7.165c-0.036-0.137-0.057-0.293-0.057-0.455 0-0.567 0.255-1.074 0.656-1.413l0.003-0.002 5.653-4.705c0.074-0.061 0.121-0.154 0.121-0.257 0-0.041-0.007-0.080-0.021-0.116l0.001 0.002c-0.033-0.12-0.137-0.209-0.264-0.217l-0.001-0-7.383-0.479c-0.707-0.052-1.298-0.504-1.55-1.128l-0.004-0.012-2.754-6.934c-0.040-0.116-0.148-0.198-0.275-0.198s-0.235 0.082-0.275 0.196l-0.001 0.002-2.754 6.934c-0.257 0.636-0.847 1.088-1.548 1.14l-0.006 0-7.383 0.479c-0.127 0.008-0.232 0.097-0.264 0.215l-0 0.002c-0.013 0.034-0.020 0.073-0.020 0.114 0 0.103 0.047 0.195 0.121 0.256l0.001 0 5.653 4.705c0.404 0.342 0.659 0.849 0.659 1.416 0 0.162-0.021 0.318-0.060 0.468l0.003-0.013-1.689 6.645c-0.013 0.045-0.021 0.096-0.021 0.15 0 0.182 0.089 0.342 0.226 0.441l0.002 0.001c0.078 0.060 0.177 0.096 0.285 0.096 0.097 0 0.188-0.030 0.263-0.080l-0.002 0.001 5.859-3.712c0.269-0.173 0.598-0.275 0.95-0.275 0.001 0 0.002 0 0.002 0h-0z"
                          ></path>
                        </svg>
                      </li>

                      <li
                        class="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          class="w-[20px] h-[20px] fill-current"
                        >
                          <path
                            d="M28.629 22.407c-0.002 0.003-0.003 0.005-0.005 0.008-0.029 0.043-0.060 0.081-0.095 0.116v0l-4 4c-0.136 0.136-0.323 0.219-0.53 0.219-0.414 0-0.75-0.336-0.75-0.75 0-0.207 0.084-0.394 0.219-0.53v0l2.72-2.72h-22.189c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h22.189l-2.72-2.72c-0.136-0.136-0.219-0.323-0.219-0.53 0-0.414 0.336-0.75 0.75-0.75 0.207 0 0.394 0.084 0.53 0.219v0l4 4c0.035 0.035 0.066 0.072 0.093 0.113l0.002 0.003c0.002 0.003 0.003 0.005 0.005 0.008 0.023 0.035 0.045 0.075 0.062 0.117l0.002 0.005c0.001 0.003 0.002 0.006 0.003 0.009 0.015 0.037 0.029 0.080 0.038 0.125l0.001 0.005c0 0.002 0.001 0.005 0.001 0.007 0.008 0.041 0.013 0.089 0.013 0.138s-0.005 0.096-0.014 0.143l0.001-0.005c-0 0.002-0.001 0.005-0.001 0.007-0.010 0.050-0.023 0.094-0.040 0.135l0.002-0.005c-0.001 0.003-0.002 0.006-0.003 0.009-0.020 0.047-0.041 0.087-0.066 0.125l0.002-0.003zM3.306 9.715c-0.001 0.003-0.002 0.006-0.003 0.009-0.015 0.037-0.029 0.080-0.038 0.126l-0.001 0.005c-0.001 0.002-0.001 0.005-0.001 0.007-0.008 0.041-0.013 0.089-0.013 0.138s0.005 0.097 0.014 0.143l-0.001-0.005c0 0.002 0.001 0.005 0.001 0.007 0.010 0.050 0.023 0.094 0.040 0.135l-0.002-0.005c0.001 0.003 0.002 0.006 0.003 0.009 0.020 0.047 0.041 0.087 0.066 0.125l-0.002-0.003c0.002 0.003 0.003 0.005 0.005 0.008 0.029 0.043 0.060 0.081 0.095 0.116v0l4 4c0.136 0.136 0.323 0.22 0.531 0.22 0.414 0 0.75-0.336 0.75-0.75 0-0.207-0.084-0.395-0.22-0.531v0l-2.72-2.72h22.189c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-22.189l2.72-2.72c0.136-0.136 0.22-0.323 0.22-0.531 0-0.414-0.336-0.75-0.75-0.75-0.207 0-0.395 0.084-0.531 0.22v0l-3.999 4c-0.035 0.035-0.066 0.072-0.093 0.113l-0.002 0.003c-0.002 0.003-0.003 0.005-0.005 0.008-0.023 0.035-0.045 0.075-0.062 0.117l-0.002 0.005z"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
          </div>
          <div class="boxBody flex items-center flex-col justify-center mt-4">
            <h2 class="font-semibold text-[16px]">$${item.price.toFixed(2)}</h2>
            <h3 class="font-semibold text-[15px]">${item.title}</h3>
          </div>
        </div>
    `
    )
    .join("");

  PRODUCT_WRAPPER.innerHTML = swipperProduct;
  FAV_PR_WRAPPER.innerHTML = productHtml;
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

  const renderNavBarHTML = ` <nav class="container max-w-[1860px] px-[1.875rem] mx-auto " >
  <div class="flex items-center justify-between py-3">
    <div class="flex items-center gap-4 w-[50%]">
      <button id="menu-toggle" class="xl:hidden text-black text-2xl"><i class="ri-menu-line"></i></button>
      <ul class="hidden xl:flex text-[14px] tracking-[1.4px] font-semibold gap-[35px]">
        ${menuItems
          .map((item) => `<li><a href="${item.path}">${item.name}</a></li>`)
          .join("")}
      </ul>
    </div>
    <div class="flex justify-center ">
      <img src="https://glowing-theme.myshopify.com/cdn/shop/files/logo-dark.png?v=1736504155"
        alt="Logo"
        class="max-w-[190px] h-auto object-contain" />
    </div>
    <div class="flex items-end justify-end gap-[24px] w-[50%]">
      <div class="flex xl:hidden gap-4">
        ${iconItems
          .filter((icon) => icon.name === "Search" || icon.name === "Cart")
          .map((icon) => icon.icon)
          .join("")}
      </div>
      <ul class="hidden xl:flex gap-[24px]">
        ${iconItems.map((icon) => `<li>${icon.icon}</li>`).join("")}
      </ul>
    </div>
  </div>
</nav>
`;

  NAVBAR_WRAPPER.innerHTML = renderNavBarHTML;
};
navBarRendering();
