<template>
    <div class="mobile-menu__wrap">
        <ul class="navbar-nav">
            <li class="navbar-nav__item">

                <nuxt-link to="/cabinet" class="navbar-nav__link">
                  
                    <span class="navbar-nav__link-title">
                        Личный кабинет
                    </span>
                </nuxt-link>
            </li>
            <li class="navbar-nav__item">
                <nuxt-link to="/news" class="navbar-nav__link">Новости</nuxt-link>
            </li>
            <li class="navbar-nav__item">
                <nuxt-link to="/contacts" class="navbar-nav__link">Контакты</nuxt-link> 
            </li>
            <li class="navbar-nav__item">
                <nuxt-link to="/vacancies" class="navbar-nav__link">Вакансии</nuxt-link>  
            </li>
            <li class="navbar-nav__item">
                <nuxt-link to="/faq" class="navbar-nav__link">FAQ</nuxt-link>         
            </li>  
        </ul>
        <div class="mobile-info__block">
            
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

            <div class="mobile-header__link">
                <a href="javascript:void(0)" class="header-link m-r-16">
                    <img src="/images/phone.svg" alt="" class="header-link__icon"/>
                    <span class="header-link__text">
                        8 800 700-68-41
                    </span>
                </a>
            </div>
            <div class="mobile-header__link">
                <a href="javascript:void(0)" class="header-link">
                    <img src="/images/mail.svg" alt="" class="header-link__icon"/>
                    <span class="header-link__text">
                        example@mail.com
                    </span>
                </a>
            </div>
            <p class="mobile-info__text">
                © 2014-2023 ООО "Расчётный центр южного округа"
            </p>

        </div>
        <div class="body-overlay"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                selectCity:'Волгоград',
                isCitiesSelect:false,
                cities:[
                    'Волжский',
                    'Камышин',
                    'Астрахань',
                    'Ростов-на-Дону',
                    'Волгодонск',
                ],
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