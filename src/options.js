module.exports = {
  request: {
    json: true,
    timeout: 8000,
    retries: 3,
    headers: {
      'user-agent': 'https://github.com/kshvmdn/nba-games'
    }
  },
  table: {
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
  }
};
