import requests
import sys
import html
from datetime import date as d

URL = 'http://data.nba.com/data/json/cms/noseason/scoreboard/{0}/games.json'

# date = d.today().strftime('%Y%m%d') if len(sys.argv) == 1 else sys.argv[1]
date = '20151230'


def serve(date):
    games = parse(fetch(date))
    if len(games) == 0:  # no games
        return 'No games for provided date'

    prompt = ''
    for i in range(len(games)):
        game_str = '{0}: {1} @ {2}'
        prompt += game_str.format(i + 1, games[i]['visitor']['abbr'], games[i]['home']['abbr'])
        prompt += '\n'
    prompt += str(len(games) + 1) + ': All\n'
    choice = int(input(prompt))

    if choice == len(games) + 1:
        return html.unescape(prep_all(games))
    else:
        return '\n' + html.unescape(prep_single(games[choice - 1]))


def fetch(date):
    return requests.get(URL.format(date)).json()


def parse(response):
    games = []

    for game in response['sports_content']['games']['game']:
        g = {}
        g['loc'] = '{0} - {1}, {2}'.format(game['arena'], game['city'], game['state'])
        g['date'], g['time'] = game['date'], game['time']
        g['period_status'] = game['period_time']['period_status']
        g['game_clock'] = game['period_time']['game_clock']
        g['status'] = '{0} - {1}'.format(g['period_status'], g['game_clock'])
        if g['game_clock'] == '':
            g['status'] = g['period_status']
        for x in ('visitor', 'home'):
            g[x] = {
                'abbr': game[x]['abbreviation'],
                'city': game[x]['city'],
                'name': game[x]['nickname'],
                'score': game[x]['score']
            }

        games.append(g)
    return games


def prep_all(games):
    output = ''
    for game in games:
        output += '\n' + prep_single(game)
    return output


def prep_single(game):
    team_1, score_1 = game['visitor']['name'].ljust(14), game['visitor']['score'].rjust(3)
    team_2, score_2 = game['home']['name'].rjust(14), game['home']['score'].ljust(3)
    return '{0} {1} : {2} {3} [{4}]'.format(team_1, score_1, score_2, team_2, game['status'])

if __name__ == '__main__':
    print(serve(date))
