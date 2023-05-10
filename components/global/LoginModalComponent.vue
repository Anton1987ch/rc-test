<template>
    <div class="login-modal__wrap">
        <div class="close-form__wrap">
            <span class="close-form__span" @click="close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 17L7 7" stroke="#121212" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 17L17 7" stroke="#121212" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
       <div class="login-form__block">
            <form action="" class="login-form" @click.prevent>
                <h3 class="login-form__title">
                    Вход в личный кабинет
                </h3>
                <p class="login-form__subtitle">
                    Введите ваш номер телефона, мы отправим СМС с кодом подтверждения
                </p>
                <div class="login-form__group">
                    <input type="text" class="form-input login-form__input" placeholder="Почта или телефон">
                </div>
                <div class="login-form__group">
                    <input type="text" class="form-input login-form__input form-input__password" placeholder="Пароль">
                </div>
                <button class="green-btn__link">
                    Восстановить
                </button>
                <div class="login-form__btns">
                    <button class="login-btn">
                        Войти
                    </button>
                    <p class="login-form__p">
                        или
                    </p>
                    <button class="login-form__gos-btn">
                        <div class="login-gos__icon">
                            <img src="/images/login/gos.svg" alt="." title=".">
                        </div>
                       <span>
                        Войти через госуслуги
                       </span>
                    </button>
                </div>
            </form>
            
       </div>
       <div class="login-form__footer">
                
                <button class="green-btn__link-reg" @click="toggleModal">
                    Регистрация
                </button>
            </div>
    </div>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$emit('close');
            },
            toggleModal() {
                this.$emit('toggleModal');
            },
        },
    }
</script>

<style lang="scss" >

</style>