<script>
    export default{
        name: 'GameCard',
        props: ["card"]
    }
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="">
        <h2>{{ card.name }}</h2>
        <div>{{ card.archetype || "Archetipo non definito" }}</div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        background-color: orange;
        text-align: center;
        width: calc(100% / 4 - 15px);
        box-shadow: 0 0 8px 2px black;
        padding-bottom: 10px;
    }

    img{
        width: 100%;
    }

    h2{
        color: white;
        font-size: 1.2rem;
        margin-bottom: 8px;
    }

</style>