const team = {
  _players: [
    { firstName: 'Yaromir', lastName: 'Jez', age: 35 }, 
    { firstName: 'Srosh', lastName: 'Kroon', age: 19 }, 
    { firstName: 'Luned', lastName: 'Riley', age: 37 }, 
  ], 
  _games: [
    {opponent: 'Aero Commandos', teamPoints: 92, opponentPoints: 22}, 
    {opponent: 'Condemned Apes', teamPoints: 2, opponentPoints: 29}, 
    {opponent: 'Green Bears', teamPoints: 36, opponentPoints: 12}, 
  ], 
  get players() {
    return this._players; 
  }, 
  get games(){
    return this._games; 
  }, 
  addPlayer(newFirstName, newLastName, newAge) {
    let player = { 
      firstName: newFirstName, 
      lastName: newLastName, 
      age: newAge 
      }; 
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints
    }; 
    this.games.push(game); 
  }
}

team.addPlayer('Bugs', 'Bunny', 76); 
team.addGame('Titans', 100, 98);

//console.log(team); 
console.log(team.players); 
console.log(team.games); 
