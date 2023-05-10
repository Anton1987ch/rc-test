<template>
    <div class="header-mobile" :class="{
                    'active':activeMenu === true
                }">
       <div class="header-mobile__wrap-block">
            <div class="header-mobile__col-left">
                <div class="gamburger" @click="isOpenMobileMenu" :class="{
                    'active':activeMenu === true
                }">
                    <span class="el-one">

                    </span>
                    <span class="el-two">

                    </span>
                </div>
                <div class="header-mobile__logo">
                    <nuxt-link to="/"  class="header-mobile__logo__link"> 
                        <picture>
                            <source srcset="/images/logo-main.png" media="(max-width: 800px)">
                            <img src="/images/logo-main.png" alt="РЦ" title="РЦ">
                        </picture>
                    </nuxt-link>
                </div>
            </div>
            <div class="header-mobile__col-right">
                <button class="green-btn__link-reg" @click="showLoginModal">
                    Войти
                </button>
            </div>
       </div>
        <mobile-menu-component v-show="activeMenu"/>
    </div>
    <div class="navbar__wrap">
       <div class="container m-auto">
            <div class="navbar__block">
                <div class="navbar navbar__block-left">
                    <ul class="navbar-nav">
                        <li class="navbar-nav__item">

                            <nuxt-link to="/" class="navbar-nav__link">
                                <span class="navbar-nav__icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3.5" y="3.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="3.5" y="8.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="3.5" y="13.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="8.5" y="3.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="8.5" y="8.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="8.5" y="13.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="13.5" y="3.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="13.5" y="8.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                        <rect x="13.5" y="13.5" width="3" height="3" rx="1.5" fill="#C9CBD1"/>
                                    </svg>
                                </span>
                                <span class="navbar-nav__link-title">
                                    Услуги
                                </span>
                            </nuxt-link>
                        </li>
                        <li class="navbar-nav__item">
                            <nuxt-link to="/cabinet" class="navbar-nav__link">Личный кабинет</nuxt-link>
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
                </div>
                <div class="navbar__block-right">
                    <div class="navbar__block-btn-wrap">
                        <button class="btn-main">
                            Передать показания
                        </button>
                    </div>
                    <div class="lk-block" @click="showLoginModal">
                            <p class="lk-block__title">
                                Кабинет
                            </p>
                            <div class="lk-block__img">
                                <picture>
                                    <source srcset="/images/user.svg" media="(max-width: 610px)" >
                                    <img src="/images/user.svg" alt="test image">
                                </picture>
                            </div>
                        </div>
                </div>
            </div>
       </div>
    </div>
   
    <login-modal-component  v-show="isLoginModalVisible" @close="closeLoginModal" @toggleModal="toggleModal"/>
    <register-form-component  v-show="isRegisterModalVisible" @close="closeRegisterModal" @toggleModal="toggleModal"/>
</template>

<script>
export default {
    props:{
        show:{
            type: Boolean,
            default:false,
        },
      
    },
    data(){
        return {
            isLoginModalVisible:this.show,
            isRegisterModalVisible: false,
            activeMenu:false,
        }
    },
   
    methods: {
        isOpenMobileMenu(){
            this.activeMenu = !this.activeMenu
            console.log(this.activeMenu)
        },
      showLoginModal() {
        this.isLoginModalVisible = true;
        this.isRegisterModalVisible = false;
        
      },
      closeLoginModal() {
        this.isLoginModalVisible = false;
      },
      showRegisterModal() {
        this.isLoginModalVisible = false;
        this.isRegisterModalVisible = true;
      },
      closeRegisterModal() {
        this.isRegisterModalVisible = false;
      },
      toggleModal(){
        this.isLoginModalVisible = !this.isLoginModalVisible;
        this.isRegisterModalVisible = !this.isRegisterModalVisible;
      }
    },
    
}
</script>

<style lang="scss" >

</style>