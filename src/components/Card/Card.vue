<template>
    <div class="cardStatus" :style="{ color:colore, borderLeft: '7px solid'}">
        <div className="cardStatusText" >
            <h3>{{status}}</h3>
            <spam>{{qtde}}</spam>
        </div>
        <i :class="img" class="cardImg"></i>
        </div>
    
</template>

<script>


export default {
    name: "Card",
	props: ['status', 'qtde', 'img', 'colore'],
	data(){
		return {}
		
	}
};
</script>

<style scoped>


.cardStatus {
    margin: 30px 10px 0px 10px;
    width: 250px;
    height: 120px;
    background-color: var(--card-color);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding: 0px 25px 0px 25px;
    border-radius: 10px 5px 5px 10px;
    
}

.cardStatusText h3 {
    font-size: 17px;
}

.cardStatusText spam {
    font-size: 20px;
    color: var(--font-color);
    font-weight: 700;
    opacity: 0.9;
}

.cardImg {
    font-size: 30px;
}


</style>

