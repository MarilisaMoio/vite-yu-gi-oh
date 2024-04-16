<script>
    import { store } from "../store.js";
    import GameCard from "./GameCard.vue"

    export default{
        name: 'AppDeck',
        components: {
            GameCard,
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <main>
        <div class="container">
            <template v-if="!store.loading">
                <GameCard v-for="card in store.deck" :card="card" :key="card.id"></GameCard>
            </template>
            <img v-else="store.loading" src="https://i.redd.it/xo7baaby2ac31.gif">
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    main{
        background-color: $main_color;
        padding: 40px 0px;
        min-height: 700px;
    }

    .container{
        max-width: 1100px;
        background-color: white;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 40px;
        align-content: flex-start;
        img{
            margin: 0 auto;
        }
    }
</style>