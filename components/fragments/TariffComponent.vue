<template>
    <div class="white__wrapper">
        <div class="container m-auto">
            <h2 class="second-title text-center">Тарифы</h2>
            <div class="tariffs__wrap">
                <Swiper
                :slidesPerView="3"
                :spaceBetween="20"
                :navigation="true"
                :pagination="false"
                :modules="[SwiperNavigation]"
                :breakpoints="{
                    320:{
                        slidesPerView: 1,
                        watchOverflow:true,
                        navigation:false
                       
                    },
                    760:{
                        slidesPerView: 3,
                        watchOverflow:false
                    }
                }"
                >
                 <SwiperSlide class="tariff-card" v-for="tariff in tariffs" :key="tariff.id">
                       <div class="tariff-card__wrap" :class="`tariff-gradient-${tariff.type}`">
                            <img :src="`/images/tarif/${tariff.type}.svg`" alt="" class="tariff-card__image " :class="`tariff-backimage-${tariff.type}`">
                            <div class="tariff-card__header">
                                <div class="tariff-card__icon">
                                    <picture>
                                        <img :src="'/images/icons/' + tariff.type + '.svg'" alt="" title="" class="">
                                    </picture>
                                </div>
                                <div class="tariff-card__content">
                                    <p class="tariff-card__content-title">
                                        {{ tariff.name }}
                                    </p>
                                    <p class="tariff-card__content-price">
                                        {{ tariff.value }} <i class="fas fa-ruble-sign"></i>  {{ tariff.dimesion }}
                                    </p>
                                </div>
                            </div>
                            <div class="tariff-card__footer">
                                <a href="" class="tariff-card__footer-link">
                                    Основание
                                </a>
                            </div>
                       </div>
                        
                    </SwiperSlide>
                   
                </Swiper>
                
            </div>
        </div>
       
    </div>
</template>

<script>

    export default {
        props:{
            tariffs:{
                type:Array,
                default:[],
                required:false,
            }
        },
    }
</script>

<style lang="scss" >

</style>