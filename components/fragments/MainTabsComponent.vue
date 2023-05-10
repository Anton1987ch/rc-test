<template>
    <div class="gray__wrapper-two">
        <div class="container m-auto">
            <div class="main-tabs">
                <div class="main-tabs__card"
                    v-for="(item, idx) in tabs" 
                    :key="idx"
                    :class="{
                        'active':activeTab === idx
                    }"
                    @click="selectTab(idx)"
                >
                    <div class="main-tabs__card-icon">
                        <component v-bind:is="item.icon"></component>
                    </div>
                    <span class="main-tabs__card-title">
                        {{ item.title }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeTab:0,
                tabs:[
                    {
                        title:'Оплата',
                        icon:'payment-svg'
                    },
                    {
                        title:'Внести показания',
                        icon:'meterage-svg'
                    },
                    {
                        title:'Установить ИПУ',
                        icon:'ipu-svg'
                    },
                    {
                        title:'Записаться на прием',
                        icon:'entry-svg'
                    },
                    {
                        title:'Получить консультацию',
                        icon:'consultation-svg'
                    },
                ]
            }
        },
        methods:{
            selectTab(idx){
                this.activeTab = idx
            }
        }
    }
</script>

<style lang="scss">

</style>