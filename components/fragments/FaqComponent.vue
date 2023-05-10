<template>
    <div class="gray__wrapper">
        <div class="container m-auto">
            <div class="blocks__wrapper">
                <h2 class="second-title text-center">Часто задаваемые вопросы</h2>
                <div class="faqs__wrap">
                    <div class="faq-card" 
                        v-for="(faq,idx) in faqs" 
                        :key="faq.id" 
                        @click="activeTab(idx)"
                        :class="{
                            'active':activeFaqItem == idx
                        }"
                    >
                        <div class="faq-title__wrap">
                            <h5 class="faq-title">
                                {{ faq.question }}  -{{ idx }}
                            </h5>
                            <div class="faq-toggler">

                            </div>
                        </div>
                        <div class="faq-answer">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            faqs:{
                type:Array,
                default:[],
                required:false,
            }
        },
       data(){
        return {
            activeFaqItem:0
        }
       },
        methods:{
            activeTab(faqItem){
                this.activeFaqItem = faqItem
            }
        }
    }
</script>

<style lang="scss" >

</style>