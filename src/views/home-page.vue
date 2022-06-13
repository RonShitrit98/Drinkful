<template>
    <main-header></main-header>
    <h1>Welcome!</h1>
    <button @click="startGame">Start new game</button>
    <button>Join game</button>
    <h3>How do I play?</h3>
</template>

<script>
import mainHeader from '../components/main-header.vue'
export default {
    components: { mainHeader },
    methods: {
       async startGame() {
           const game = await this.$store.dispatch({type:'createEntity', entityType:'game', entityInfo:'Ron'})
            this.$router.push(`/${game._id}/play`)
        }
    }
}
</script>