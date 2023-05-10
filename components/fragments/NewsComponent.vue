<template>
   <div class="white__wrapper">
        <div class="container m-auto">
            <div class="title__wrap">
                <h2 class="second-title hidden-mobile__title">Будьте в курсе последних новостей</h2>
                <h2 class="second-title show-mobile__title">Новости</h2>
                <div class="block-link">
                    <nuxt-link to="/news" class="nuxt-link">Все новости</nuxt-link>
                    <div class="block-link__img">
                        <img src="/images/icons/arrow-gray.svg" alt="." title=".">
                    </div>
                </div>
            </div>
            <div class="news__wrap">
                <div class="row row-stretch">
                    <template v-for="(item, idx) in news" :key="idx">
                        <div v-if="idx === 0 " class="col-md-6">
                            <a href="javascript:void(0)" class="news-card__big">
                                <p class="news-card__title">
                                    {{ item.title }}
                                </p>
                                <p class="news-card__intro">
                                    {{ item.intro }}
                                </p>
                                <div class="news-card__date-block">
                                    <span class="news-card__date">
                                            {{ item.date }} •
                                    </span>
                                    <span class="news-card__city">
                                        {{ item.city }}
                                    </span>
                                </div>
                                <div class="hidden-btns">
                                    <nuxt-link to="/news" class="white-btn">
                                        Подробнее
                                    </nuxt-link>
                                </div>
                            </a>
                        </div>
                        <div v-else class="col-md-3 col-mob-5">
                            <a href="javascript:void(0)" class="news-card__small">
                                <div class="news-card__img">
                                    <picture>
                                        <source srcset="/images/news/news.jpg" media="(max-width: 610px)">
                                        <img src="/images/news/news.jpg" alt="{{ item.title }}" title="{{ item.title }}" class="">
                                    </picture>
                                </div>
                                <div class="news-card__date-block">
                                    <span class="news-card__date">
                                            {{ item.date }} •
                                    </span>
                                    <span class="news-card__city">
                                        {{ item.city }}
                                    </span>
                                </div>
                                <div class="news-card__title">
                                    {{ item.title }}
                                </div>
                            </a>
                        </div>
                    </template>
                </div>
            </div>
            <div class="news-important__wrap">
                <div class="row">
                    <div class="col-md-6">
                        <a href="javascript:void(0)" class="news-important__card">
                            <p class="news-important__card-title">
                                Электронные сервисы для водителей в приложении «Госуслуги Авто»
                            </p>
                            <div class="news-card__date-block">
                                <span class="news-card__date">
                                    12 января •
                                </span>
                                <span class="news-card__city">
                                    Волгоград
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-hidden">
                        <a href="javascript:void(0)" class="news-important__card">
                            <p class="news-important__card-title">
                                Электронные сервисы для водителей в приложении «Госуслуги Авто»
                            </p>
                            <div class="news-card__date-block">
                                <span class="news-card__date">
                                    12 января •
                                </span>
                                <span class="news-card__city">
                                    Волгоград
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        props:{
            news:{
                type:Array,
                default:[],
                required:false,
            },
           
        },
    }
</script>

<style lang="scss" >

</style>