import requests

URL = 'http://data.nba.com/data/json/cms/noseason/scoreboard/{0}/games.json'


def fetch(date):
    return parse(request(date))


def request(date):
    return requests.get(URL.format(date)).json()


def parse(response):
    games = []
    for game in response['sports_content']['games']['game']:
        g = {
            'loc': '{} - {}, {}'.format(game['arena'], game['city'], game['state']),
            'date': game['date'], 'time': game['time'],
            'period_status': game['period_time']['period_status'],
            'game_clock': game['period_time']['game_clock']
        }
        g['status'] = '{} - {}'.format(g['period_status'], g['game_clock'])
        if g['game_clock'] == '' or g['period_status'] == 'Final':
            g['status'] = g['period_status']
        for team in ('visitor', 'home'):
            g[team] = {
                'abbr': game[team]['abbreviation'], 'city': game[team]['city'],
                'name': game[team]['nickname'], 'score': game[team]['score']
            }
        games.append(g)
    return games
