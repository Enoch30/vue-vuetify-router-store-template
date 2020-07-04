<template>
	<v-app>
		<v-content transition="slide-x-transition">
			<!-- TODO: Make base with navigation -->
			<router-link v-bind:to="{ name: 'About' }">
				<i class="fa fa-shopping-basket" aria-hidden="true"></i>
				About
			</router-link>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	}),
}
</script>
