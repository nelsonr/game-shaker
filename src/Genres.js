const GameGenres = [
    "Action",
    "Action role-playing",
    "Action-adventure",
    "Adventure",
    "Alternate reality",
    "Art",
    "Artillery",
    "Battle royale",
    "Beat 'em up",
    "Bishōjo",
    "Business simulation",
    "City-building",
    "Collectible card",
    "Combat flight simulation",
    "Construction and management simulation",
    "Dating sim",
    "Dungeon crawl",
    "Escape the room",
    "Falling-sand",
    "Fighting",
    "First-person shooter",
    "Girls'",
    "God",
    "Government simulation",
    "Grand Theft Auto clone",
    "Hack and slash",
    "Immersive sim",
    "Incremental",
    "Interactive film",
    "Kart racing",
    "Life simulation",
    "Light gun shooter",
    "Massively multiplayer online",
    "Metroidvania",
    "MUD",
    "Multiplayer online battle arena",
    "Music",
    "Non-game",
    "Nonviolent",
    "Olympic",
    "Open world",
    "Otome",
    "Platform",
    "Programming",
    "Puzzle",
    "Racing",
    "Real-time strategy",
    "Real-time tactics",
    "Rhythm",
    "Roguelike",
    "Role-playing",
    "Shoot 'em up",
    "Shooter",
    "Sim racing",
    "Simulation",
    "Social simulation",
    "Space flight simulation",
    "Sports",
    "Stealth",
    "Strategy",
    "Survival",
    "Survival horror",
    "Tactical role-playing",
    "Tactical shooter",
    "Third-person shooter",
    "Time management",
    "Tower defense",
    "Turn-based strategy",
    "Turn-based tactics",
    "Vehicle simulation",
    "Vehicular combat",
    "Vertically scrolling",
    "Visual novel",
    "Wargame"
];

export function getRandomGenre() {
    const randomIndex = Math.floor(Math.random() * (GameGenres.length - 1));

    return GameGenres[randomIndex];
}

export function genreShaker() {
    const game1 = getRandomGenre();
    const game2 = getRandomGenre();
    const game3 = getRandomGenre();

    return `${game1} ${game2} ${game3} game`;
}

export default GameGenres;
