<template>
    <div class="static-banner__wrap">

        <div class="container m-auto">
            <div class="static-banner">
                <ul class="breadcrumbs">
                    <li class="breadcrumb-item first">
                        <nuxt-link class="breadcrumb-link">
                            Главная
                        </nuxt-link>
                    </li>
                    <li class="breadcrumb-item last">
                        Новости
                    </li>
                </ul>
                <h1 class="banner-title">
                    Новости
                </h1>
                <div class="banner-select__wrap">
                    <div class="custom-select">
                        <span class="custom-select__subtitle">
                            
                        </span>
                        <p class="custom-select__title">
                            {{city.name}}
                        </p>
                        <div class="custom-select__options">
                            <template  v-for="(item,idx) in cities" :key="idx">
                                <div class="custom-select__option" >
                                    {{ item.name }}
                                </div>
                            </template>
                        </div>
                    </div>
                    <!-- <select name="" id="" class="banner-select">
                        <option value="Все города">Все города</option>
                        <option value="Волгодонск">Волгодонск</option>
                        <option value="Волжский">Волжский</option>
                        <option value="Ростов-на-Дону">Ростов-на-Дону</option>
                        <option value="Астрахань">Астрахань</option>
                        <option value="Камышин">Камышин</option>
                    </select>                     -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                city:{
                        title:'all',
                        name:'Все города'
                    },
                cities:[
                    {
                        title:'all',
                        name:'Все города'
                    },
                    {
                        title:'volgodonsk',
                        name:'Волгодонск'
                    },
                    {
                        title:'volgskiy',
                        name:'Волжский'
                    },
                    {
                        title:'rostov',
                        name:'Ростов-на-Дону'
                    },
                    {
                        title:'astrahan',
                        name:'Астрахань'
                    },
                    {
                        title:'kamishin',
                        name:'Камышин'
                    },

                ],
            }
        }
    }
</script>

<style lang="scss" >

</style>