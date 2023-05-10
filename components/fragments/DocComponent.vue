<template>
    <div class="white__wrapper">
        <div class="container m-auto">
            <h2 class="second-title ">Документы</h2>
            <div class="doc-tabs">
                <button v-for="(item,idx) in docList" 
                    :key="idx" 
                    class="doc-tabs__item" 
                    @click="selectTab(idx)"
                    :class="{
                        'active': activeTab === idx
                    }"
                    >
                {{ item.title }}
                </button>
                
            </div>
            <div class="row ">
                <div class="col-md-6">
                    <div class="doc-tabs__content" id="doc-content">
                        <div class="doc-tabs__content-block" v-for="(cardList,idx) in docList" :key="idx" 
                            :class="{
                                'show':activeTab === idx
                            }"
                        >
                            <div v-for="(card,idx) in cardList.items"  :key="idx">
                               <a :href="card.link" class="doc-tabs__card">
                                    <div class="doc-tabs__card-icon">
                                        <img src="/images/icons/doc.svg" alt="." title=".">
                                    </div>
                                    <div class="doc-tabs__card-content">
                                       <div class="doc-tabs__card-wrap">
                                            <p class="doc-tabs__card-title">
                                                {{card.title  }}
                                            </p>
                                            <p class="doc-tabs__card-text">
                                                {{card.text }}
                                            </p>
                                       </div>
                                       <div class="doc-tabs__card-aside_icon">
                                            <img src="/images/icons/arrow-gray.svg" alt="." title=".">
                                       </div>
                                    </div>
                               </a>
                            </div>
                            <div class="block-link__wrap">
                                <div class="block-link">
                                    <nuxt-link to="/all" class="nuxt-link">Все {{ cardList.title.toLowerCase() }}</nuxt-link>
                                    <div class="block-link__img">
                                        <img src="/images/icons/arrow-gray.svg" alt="." title=".">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="doc-tabs__content-block">
                            <div v-for="(card,idx) in spec"  :key="idx">
                               <a :href="card.link" class="doc-tabs__card">
                                    <div class="doc-tabs__card-icon">
                                        <img src="/images/icons/doc.svg" alt="." title=".">
                                    </div>
                                    <div class="doc-tabs__card-content">
                                       <div class="doc-tabs__card-wrap">
                                            <p class="doc-tabs__card-title">
                                                {{card.title  }}
                                            </p>
                                            <p class="doc-tabs__card-text">
                                                {{card.text }}
                                            </p>
                                       </div>
                                       <div class="doc-tabs__card-aside_icon">
                                            <img src="/images/icons/arrow-gray.svg" alt="." title=".">
                                       </div>
                                    </div>
                               </a>
                            </div>            
                        </div> -->
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="doc-textcontent">
                        1. Для заключения договора теплоснабжения Потребитель обязан представить следующие документы (Копии и оригиналы) (п.22 Постановления Правительства РФ №354 от 06.05.2011г.):
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            docList:{
                type:Array,
                default:[],
                required:false,
            },
           
        },
        data(){
            return{
               
                activeTab:0,
            }
        },
        methods:{
            selectTab(idx){
                this.activeTab = idx
                // console.log(idx)
                // let tabs = document.querySelectorAll('.doc-tabs__content-block')
                // tabs.classList.remove("active");
                // console.log(tabs)
                // Array.prototype.forEach.call(tabs,(e,idx)=>{
                //     if(idx === this.activeTab) {
                        
                //         e.classList.add("active");
                //     }
                //     // console.log(e )
                //     // console.log(idx + 'zxc')
              
            }
        }
    }
</script>

<style lang="scss">

</style>