<template>
    <div class="cabinets__gray-wrap">
      <div class="container m-auto">
            <div class="row">
                <div class="col-md-3">
                    <div class="asidebar">
                        <aside-menu-component/>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="cabinet__wrap">
                       
                        <slot />
                    </div>
                </div>
            </div>
            <div class="bottom-aside">

            </div>
      </div>
      
    </div>
</template>