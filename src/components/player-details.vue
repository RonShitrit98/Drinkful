<template>
    <section>
        <form @submit.prevent="savePlayer">
            <input type="text" placeholder="Name" v-model="player.name"/> 
            <select v-model="player.gender">
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <select v-model="player.drink">
                <option value="">What are you drinking?</option>
                <option>Vodka</option>
                <option>Beer</option>
                <option>Gin</option>
                <option>Cocktail</option>
            </select>
            <input type="submit" value="Save" />
        </form>
    </section>
</template>

<script>
export default {
    data(){
        return {
            player:{
                name:'',
                gender:'',
                drink:''
            }
        }
    },
    methods: {
        savePlayer() {
            console.log(this.player)
            this.$store.dispatch({type:'createEntity', entityType:'player',  entityInfo: this.player})
        }
    }
}
</script>