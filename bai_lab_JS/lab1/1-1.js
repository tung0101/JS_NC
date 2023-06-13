const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Levandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Levandowski", "Gnarby", "Levandowski", "Muller"],
  date: "Nov 9th,2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [player1, player2] = game.players;
console.log(player1, player2);
//2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
//3
const allplayer = [...player1, ...player2];
console.log(allplayer);
//4
const allplayer2 = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(allplayer2);
//5
const {
  odds: { team1, x: darw, team2 },
} = game;
console.log(team1, darw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} bàn thắng đã được ghi`);
};
// printGoals("c2", "c3", "c4", "c5");
// printGoals("c2", "c3");
printGoals(...game.scored);
//7
team1 < team2 && console.log(`team 1 thắng`);
team1 > team2 && console.log(`team 2 thắng`);
