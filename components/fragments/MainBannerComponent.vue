<template>
    <div class="mobile__white-block">
        <div class="main-banner__wrap">
            <div class="container m-auto banner-container">
            <Swiper :class="'main-swiper'"
                    :slidesPerView="1"
                    :spaceBetween="20"
                    :navigation="{
                        nextEl:'.next-nav-arrow',
                        prevEl:'.prev-nav-arrow',
                        clickable:true
                    }"
                    :pagination="false"
                    :modules="[SwiperNavigation,SwiperEffectFade]"
                    :effect="'fade'"
                    :breakpoints="{
                        320:{
                            slidesPerView: 1,
                            navigation:false
                        
                        },
                        760:{
                            slidesPerView: 1,
                            
                        }
                    }"
                    >
                    <SwiperSlide class="banner-card__wrap" v-for="index in 10" :key="index">
                        
                            <div class="row row-banner">
                                <div class="col-md-5">
                                    <div class="banner-card__block">
                                        <h1 class="banner-card__title">
                                            Быстрым — скидки - {{ index }}
                                        </h1>
                                        <p class="banner-card__info">
                                            Отправьте показания счетчиков до 10 февраля и получите скидку –10% на всю сумму показаний. 
                                        </p>
                                        <div class="banner-card__btns-wrap">
                                            <nuxt-link to="/cabinet/meterage" class=banner-card__link>Передать показания</nuxt-link>
                                        </div>
                                    </div>   
                                </div>
                                <div class="col-md-7">
                                    <div class="banner-card__img">
                                        <picture>
                                        <source srcset="/images/banners/green.png" media="(max-width: 800px)">
                                        <img src="/images/banners/green.png" alt="РЦ" title="РЦ">
                                    </picture>
                                    </div>
                                </div>
                            </div>
                        
                    </SwiperSlide>
                    
                    </Swiper>
                    <div class="next-nav-arrow">
                        
                    </div>
                    <div class="prev-nav-arrow">

                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" >

</style>