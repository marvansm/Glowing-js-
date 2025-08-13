const PRODUCT_WRAPPER = document.querySelector("#productWrapper");

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


const navBarRendering = ()=> {
  const navBarItems = [ 
    {
      
    }
  ]
}