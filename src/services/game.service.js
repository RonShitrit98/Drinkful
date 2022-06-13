import { utilService } from "./util.service";
import { storageService } from "./async-storage.service";

const GAME_KEY = 'gameDB'
const PLAYER_KEY = 'playerDB'

export const gameService = {
    // createGame
    create,
}


function create(type, entity){
    if(type==='game') return _createGame(entity)
    else return _createPlayer(entity)
}

function _createGame(host) {
   const newGame =  {
        _id: utilService.makeId(),
        host,
        // password,
        isGameOn: false,
        players: [host]
    }

    return storageService.post(GAME_KEY, newGame)
}

function _createPlayer({name, gender, drink}){
    const newPlayer = {
        _id: utilService.makeId(),
        name, 
        gender, 
        drink,
        drinksTaken: 0,
    }

    return storageService.post(PLAYER_KEY, newPlayer)
}