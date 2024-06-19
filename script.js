const team = {
  _players : [

   { 
     firstName:'shafana',
     lastName:'Shaeen',
     age:25
    },

   {
      firstName:'Mohamed',
      lastName:'Jasim',
      age:30
    },

   {
      firstName:'Afizah',
      lastName:'Faseeha',
      age:10
    }
  ],
  _games :[
    {
      opponent: 'Manchester',
      teamPoints: 44,
      opponentPoints: 50
    },
    {
      opponent:'Liverpool',
      teamPoints: 50,
      opponentPoints: 60
    },
    {
      opponent:'kent',
      teamPoints: 50,
      opponentPoints:56
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName,newLastName,newAge){
    let player = {
      firstName:newFirstName,
      lastName:newLastName,
      age:newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints) {
    let game = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints
    }
    this.games.push(game);
  },
};
team.addPlayer('Bugs','Bunny',76);
team.addPlayer('Mohamed','Shayan',86);
team.addPlayer('Fanah','Faiz',76);


team.addGame('london',91,83);
console.log(team.players);
console.log(team.games)

