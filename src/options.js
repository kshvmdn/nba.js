module.exports = {
  request: {
    json: true,
    timeout: 8000,
    retries: 3,
    headers: {
      'user-agent': 'https://github.com/kshvmdn/nba-games'
    }
  },
  scoresTable: {
    head: ['AWAY', '', '', 'HOME', 'STATUS'],
    chars: {'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
            'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
            'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼',
            'right': '║', 'right-mid': '╢', 'middle': '│'},
    colAligns: ['right', 'middle', 'middle', 'left', 'left'],
    style: {
      head: ['blue'],
      border: ['white']
    }
  },
  standingsTable: {
    head: ['', 'TEAM', 'W', 'L'],
    colAligns: ['right', 'left', 'middle', 'middle'],
    style: {
      head: ['blue'],
      border: ['white'],
      compact: true
    }
  },
  teams: {
    west: ['DAL', 'DEN', 'GSW', 'HOU', 'LAC', 'LAL', 'MEM', 'MIN', 'NOP', 'OKC', 'PHX', 'POR', 'SAC', 'SAS', 'UTA'],
    east: ['BOS', 'BKN', 'NYK', 'PHI', 'TOR', 'CHI', 'CLE', 'DET', 'IND', 'MIL', 'ATL', 'CHA', 'MIA', 'ORL', 'WAS']
  }
};
