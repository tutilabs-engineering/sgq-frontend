<template>
	<div class="title">
		<h2>METROLOGIA</h2>

		<TableMetrologia />

	</div>
</template>

<script>

import TableMetrologia from '../components/TableMetrologia/TableMetrologia.vue'

export default {
	components: {TableMetrologia}
}
</script>

<style scoped>

.title {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title h2 {
	margin-top: 20px;
	text-align: center;
	color: var(--black_text);
}

</style>