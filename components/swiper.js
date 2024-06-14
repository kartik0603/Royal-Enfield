

const swiperHTML = () => {
    return `
        <div class="swiper mySwiper" >
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_1.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_2.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_3.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_4.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_5.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="swiper-slide">
                    <img src="/Images/RE_banner_6.jpg" class="img-fluid" alt="..." />
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    `;
};

export default swiperHTML;
