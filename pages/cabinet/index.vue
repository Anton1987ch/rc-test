<template>
   <NuxtLayout name="cabinet">
       
       <h1 class="h1-title">Личный кабинет</h1>
       <p class="h1-subtitle">
        Заполните информацию о себе как можно подробнее — это <br>поможет оперативнее вас уведомлять
       </p>
       <div class="cabinet-header">
            <div class="cabinet-header__picture">
                <picture>
                    <source srcset="/images/user.svg" media="(max-width: 610px)" >
                    <img src="/images/user.svg" alt="test image" class="cabinet-header__picture-img">
                </picture>
                <!-- <button class="cabinet-header__picture-btn">
                    Изменить
                </button> -->
            </div>
            <div class="cabinet-header__info">
                <p class="cabinet-header__info-title">
                    {{ user.firstname }}
                </p>
                <p class="cabinet-header__info-title">
                    {{ user.lastname }}
                </p>
                <p class="cabinet-header__info-subtitle">
                    {{ user.email }}
                </p>
            </div>
       </div>
       <div class="cabinet-card ">
            <div class="cabinet-card__label-wrap">
                <p class="cabinet-card__label">
                Личные данные
                </p>
            </div>
            <div class="cabinet-card__block__wrap flex-block">
                
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Фамилия, имя и отчество
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.firstname }}   {{ user.lastname }}
                    </p>
                </div>
                <div class="cabinet-card__icon">
                    <img src="/images/icons/arrow-gray.svg" alt="." title=".">
                </div>
            </div>
       </div>
       <div class="cabinet-card ">
            <div class="cabinet-card__label-wrap flex-block">
                <p class="cabinet-card__label">
                    Контактные данные
                </p>
                <a href="" class="cabinet-card__change-link">
                    Изменить
                </a>
            </div>
            <div class="cabinet-card__block__wrap ">
                
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Телефон
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.phone }}  
                    </p>
                </div>
                <hr class="cabinet-hr">
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Электронная почта
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.email }}  
                    </p>
                </div>
               
            </div>
            <div class="cabinet-card__infotext">
                <p>
                    Телефон нужен, чтобы подтверждать операции и настройки счета
                </p>
                <p>
                    На почту мы оправляем квитанции и важные уведомления
                </p>
            </div>
       </div>
       <div class="cabinet-card ">
            <div class="cabinet-card__label-wrap flex-block">
                <p class="cabinet-card__label">
                    Недвижимость
                </p>
                <a href="" class="cabinet-card__change-link">
                    Изменить
                </a>
            </div>
            <div class="cabinet-card__block__wrap ">
                
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Адрес
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.adress.street }}, {{ user.adress.house }}, {{ user.adress.apartment }}  
                    </p>
                </div>
                <hr class="cabinet-hr">
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Количество жильцов
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.adress.count }}  
                    </p>
                </div>
                <hr class="cabinet-hr">
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Дата последних переданных показаний
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.adress.last_meterage }}  
                    </p>
                </div>
                <hr class="cabinet-hr">
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Общая площадь помещения
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.adress.total_area }}  
                    </p>
                </div>
                <hr class="cabinet-hr">
                <div class="cabinet-card__block">
                    <span class="cabinet-card__block-title">
                        Лицевой счет
                    </span>
                    <p class="cabinet-card__block-content">
                        {{ user.adress.ls }}  
                    </p>
                </div>
               
            </div>
            <div class="cabinet-card__infotext">
                <p>
                    Телефон нужен, чтобы подтверждать операции и настройки счета
                </p>
                <p>
                    На почту мы оправляем квитанции и важные уведомления
                </p>
            </div>
       </div>
       <div class="cabinet-card notification-card">
            <p class="notification-title">
                Уведомления на почту
            </p>
            <div class="notification-switch__wrap">
                <label class="notification-switch__label">
                    <input type="checkbox" class="notification-switch" :checked="dot">
                    <span class="notification-switch__slider"></span>
                </label>
            </div>
       </div>
       
    </NuxtLayout>
</template>
<script>
import {user} from "~/test/data.js"
export default {
    
    data(){
        return {
         
            user:user,
           
        }
    },
   
   
}
</script>


<style lang="scss" >

</style>