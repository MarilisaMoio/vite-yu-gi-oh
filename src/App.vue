<script>
	import AppDeck from "./components/AppDeck.vue"
	import AppHeader from "./components/AppHeader.vue"
	import { store } from "./store.js";
	import axios from 'axios';

	export default{
		components: {
			AppDeck,
			AppHeader
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
				setTimeout(() => {
					axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.queryParams })
					.then((response) => {
					store.deck = response.data.data;
					store.loading = false
				})
				}, 2000); //almeno si vede per un tot
			}
		},
		mounted(){
			this.getCardsFromApi()
		}
	}
</script>

<template>
	<AppHeader></AppHeader>
	<AppDeck></AppDeck>
</template>

<style lang="scss">
	@use './style/general' as *;
</style>