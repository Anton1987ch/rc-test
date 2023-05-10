<template>
    <div class="container m-auto">
        
    </div>
    <main-banner-component/>
    <main-tabs-component/>
    <news-component :news="news" />
    <doc-component :docList="docList" />
    <tariff-component :tariffs="tariffs"/>
    <faq-component :faqs="faqs"/>
    
</template>

<script>
import DocComponent from '/components/fragments/DocComponent'
import FaqComponent from '/components/fragments/FaqComponent'
import TariffComponent from '/components/fragments/TariffComponent'
import NewsComponent from '/components/fragments/NewsComponent'
import { dataList,faqList,tariffsList,docList,news} from "~/test/data.js"
import {useCounterStore} from "~/store/store.js"
import { mapActions,mapState } from 'pinia'
import MainTabsComponent from '/components/fragments/MainTabsComponent'
import MainBannerComponent from '/components/fragments/MainBannerComponent'

export default {
    components:{
        TariffComponent,
        FaqComponent,
        DocComponent,
        NewsComponent,
        MainTabsComponent,
        MainBannerComponent
    },
    data(){
        return {
            slider:dataList.slider,
            faqs:faqList,
            tariffs:tariffsList,
            docList:docList,
           news:news,
           
            
        }
    },
    computed: {
        ...mapState(useCounterStore, ['dCount']),
    },
    methods:{
        ...mapActions(useCounterStore,{ myOwnName: 'increment' }),
        
      
    }
}
</script>

<style lang="scss" >

</style>