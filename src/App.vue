<script>
	import AppDeck from "./components/AppDeck.vue"
	import { store } from "./store.js";
	import axios from 'axios';

	export default{
		components: {
			AppDeck,
		},
		data(){
			return {
				queryParams: {
					num: 20,
					offset: 0
				}
			}
		},
		methods: {
			getCardsFromApi(){
				axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.queryParams })
				.then((response) => {
					store.deck = response.data.data;
					console.log(store.deck)
				})
			}
		},
		mounted(){
			//this.getCardsFromApi()
		}
	}
</script>

<template>
	<AppDeck></AppDeck>
</template>

<style lang="scss">
	@use './style/general' as *;
</style>