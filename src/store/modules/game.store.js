import { gameService } from "../../services/game.service";
export const gameStore = {
    state: {
        player: null,
        game: null
    },
    getters: {

    },
    mutations: {
        setEntity(state, {entityType, entity}){
            console.log(entity)
            state[entityType] = entity
            console.log(state)
        }
    },
    actions: {
        // async createGame({commit}, {host}){
        //     const game = await gameService.createGame(host)
        //     commit({type: 'setGame', game})
        //     return game
        // },
        // async createPlayer({commit}, {player}){
        //     const player = await gameService.createPlayer(player)
        //     commit()
        // }
        async createEntity({commit}, {entityType, entityInfo}){
            const entity = await gameService.create(entityType, entityInfo)
            commit({type:`setEntity`, entityType, entity})
            return entity
        }
    },
};
