<template>
    <div class="">
        <div class="header__wrap">
            <div class="container m-auto">
                <div class="header">
                        <div class="header-col-left">
                            <div class="header-logo">
                                <nuxt-link to="/"  class="header-logo__link"> 
                                    <picture>
                                        <source srcset="/images/logo-main.png" media="(max-width: 800px)">
                                        <img src="/images/logo-main.png" alt="РЦ" title="РЦ">
                                    </picture>
                                </nuxt-link>
                            </div>
                            <div class="city-change__block">
                                <button class="city-change__wrap " 
                                    :class="{
                                        'active':isActive
                                    }"
                                    @click="toggleActiveCityChange"
                                    >
                                    <span class="city-change__icon">
                                        <svg  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="city-marker">
                                            <g clip-path="url(#clip0_3_3987)">
                                            <path d="M6.07504 10.4248L0.86816 8.56064L13.5961 2.90379L7.93923 15.6317L6.07504 10.4248Z" />
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_3_3987">
                                            <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span class="city-change__title"> 
                                        {{ selectCity }}
                                    </span>
                                </button>
                                <div class="city-change__select" v-show="isCitiesSelect">
                                    <template v-for="(item,idx) in cities" :key="idx"> 
                                        <div class="city-change__option" @click="selectedCity(item)">
                                            <div class="city-change__option-wrap" 
                                                :class="{
                                                    'active':selectCity === item
                                                }"
                                            >
                                                <p class="city-change__option-title">
                                                    {{ item }}
                                                </p>
                                                <div class="city-change__option-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.5 7.5L7 11L13 5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="header-col-right">
                            <a href="javascript:void(0)" class="header-link m-r-16">
                                <img src="/images/phone.svg" alt="" class="header-link__icon"/>
                                <span class="header-link__text">
                                    8 800 700-68-41
                                </span>
                            </a>
                            <a href="javascript:void(0)" class="header-link">
                                <img src="/images/mail.svg" alt="" class="header-link__icon"/>
                                <span class="header-link__text">
                                    example@mail.com
                                </span>
                            </a>
                        </div>
                </div>
                
            </div>
        </div>
        
        <NavbarComponent />
        
    </div>
</template>

<script>
export default {
  data(){
    return {
        isActive:false,
        selectCity:'Волгоград',
        isCitiesSelect:false,
        cities:[
            'Волжский',
            'Камышин',
            'Астрахань',
            'Ростов-на-Дону',
            'Волгодонск',
        ],
        show:false,
        isOpenMobileMenu:false,
    }
  },
  methods:{
    
    toggleActiveCityChange(){
        this.isActive = !this.isActive
        this.isCitiesSelect = !this.isCitiesSelect
        console.log(this.isActive)
    },
    selectedCity(city){
        console.log(city)
        this.selectCity = city
        this.isActive = !this.isActive
        this.isCitiesSelect = !this.isCitiesSelect
    }
  }
}
</script>

<style lang="scss" >

</style>