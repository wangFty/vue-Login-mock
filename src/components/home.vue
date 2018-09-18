<template>
    <section class="layout grid">
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h1>网格布局解决方案</h1>
            </div>
            <div class="right"></div>
        </article>
    </section>
</template>
<script>
    export default {
        name: "msg",
        data() {
            return {
                msg: "后台主界面"
            };
        }
    };
</script>

<style scoped>
    html * {
        margin: 0;
        padding: 0
    }
    .layout article div {
        text-align: center;
        line-height: 100px;
        min-height: 100px;
    }
    .layout.grid .left-center-right {
        display: -ms-grid;
        display: -webkit-grid;
        display: grid;
        width: 100%;
        grid-template-rows: 100px;
        grid-template-columns: 300px auto 300px;
    }
    .layout.grid .left {
        background: red;
    }
    .layout.grid .center {
        background: yellow
    }
    .layout.grid .right {
        background: blue;
    }
</style>