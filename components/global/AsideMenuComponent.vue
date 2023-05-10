<template>
    <div class="aside-block">
        <div class="aside-block__header">
            <div class="ls-block">
                <span class="ls-title">
                    Лицевой счет - {{ ls }}
                </span>
                <div class="ls-btn__wrap">
                    <button class="ls-btn">
                        Изменить
                    </button>
                </div>
            </div>
            <ul class="aside-menu">
                
                <li class="aside-item">
                    <nuxt-link to="/cabinet" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Личный кабинет
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <nuxt-link to="/cabinet/meterage" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="10" r="8" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M7 16.5L7 20C7 21.1045 7.89543 22 9 22H15C16.1046 22 17 21.1045 17 20V16.5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M9 10H15" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Показания
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <nuxt-link to="/cabinet/ipu" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="10" r="8" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="3.2 3.2"/>
                                <path d="M7 16.5L7 20C7 21.1045 7.89543 22 9 22H15C16.1046 22 17 21.1045 17 20V16.5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M9 10H15" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M12 13V7" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                            </svg>

                        </span>
                        <span class="aside-link-title">
                            Поверка ИПУ
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <nuxt-link to="/cabinet/payment" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="3" width="14" height="18" rx="2" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 7L15 7" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="10" cy="12" r="1" fill="#5AC55A"/>
                                <circle cx="10" cy="16" r="1" fill="#5AC55A"/>
                                <circle cx="14" cy="12" r="1" fill="#5AC55A"/>
                                <circle cx="14" cy="16" r="1" fill="#5AC55A"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Оплата
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <nuxt-link to="/cabinet/bills" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 6V20L8.5 17.5L12 21L15.5 17.5L19 20V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6Z" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 8H15" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Квитанции
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <nuxt-link to="/cabinet/docs" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V6C15 6.55228 14.5523 7 14 7H10C9.44772 7 9 6.55228 9 6V4Z" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 5V5C17.9659 5 18.1989 5 18.3827 5.07612C18.6277 5.17761 18.8224 5.37229 18.9239 5.61732C19 5.80109 19 6.03406 19 6.5V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.5C5 6.03406 5 5.80109 5.07612 5.61732C5.17761 5.37229 5.37229 5.17761 5.61732 5.07612C5.80109 5 6.03406 5 6.5 5V5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 5H18" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M6 5H6.5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Справки и заявления 
                        </span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="aside-block__footer">
            <ul class="aside-menu__footer">
                <li class="aside-item">
                    <nuxt-link to="/help" class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_134_2472)">
                                <circle cx="12" cy="12" r="9" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <circle cx="12" cy="12" r="4" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round"/>
                                <path d="M14.8285 9.17163L18.364 5.6361" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.63611 18.364L9.17164 14.8285" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.17164 9.17152L5.63611 5.63599" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.364 18.3639L14.8285 14.8284" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_134_2472">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Помощь
                        </span>
                    </nuxt-link>
                </li>
                <li class="aside-item">
                    <button  class="aside-link">
                        <span class="aside-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8189 3.19828L5.81893 3.83464C4.78877 3.92829 4 4.79202 4 5.82643V18.1736C4 19.208 4.78877 20.0717 5.81893 20.1654L12.8189 20.8017C13.9902 20.9082 15 19.986 15 18.8099V5.19007C15 4.014 13.9902 3.0918 12.8189 3.19828Z" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H17.5" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 11V13" stroke="#5AC55A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span class="aside-link-title">
                            Выйти
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ls:'99990223'
            }
        }
    }
</script>

<style lang="scss" >

</style>