import requests
import sys
import html
from datetime import date as d

URL = 'http://data.nba.com/data/json/cms/noseason/scoreboard/{0}/games.json'
date = d.today().strftime('%Y%m%d') if len(sys.argv) == 1 else str(sys.argv[1])


def serve(date):
    # check for date out of range
    try:
        games = parse(fetch(date))
    except ValueError:
        games = parse(fetch(d.today().strftime('%Y%m%d')))

    if len(games) == 0:  # no games
        return 'No games for provided date'

    prompt = ''
    for i in range(len(games)):
        game_str = '{0}: {1} @ {2}'
        prompt += game_str.format(i + 1, games[i]['visitor']['abbr'], games[i]['home']['abbr'])
        prompt += '\n'
    prompt += str(len(games) + 1) + ': All\n' + '>>> '

    choice = input(prompt)
    while not choice.isnumeric():
        choice = input(prompt)

    if int(choice) == len(games) + 1:
        return stringify_all(games)
    else:
        return stringify_single(games[int(choice) - 1])


def fetch(date):
    return requests.get(URL.format(date)).json()


def parse(response):
    games = []
    for game in response['sports_content']['games']['game']:
        g = {'loc': '{0} - {1}, {2}'.format(game['arena'], game['city'], game['state']),
             'date': game['date'], 'time': game['time'],
             'period_status': game['period_time']['period_status'],
             'game_clock': game['period_time']['game_clock']}

        g['status'] = '{0} - {1}'.format(g['period_status'], g['game_clock'])
        if g['game_clock'] == '':
            g['status'] = g['period_status']

        for team in ('visitor', 'home'):
            g[team] = {'abbr': game[team]['abbreviation'], 'city': game[team]['city'],
                       'name': game[team]['nickname'], 'score': game[team]['score']}
        games.append(g)
    return games


def stringify_all(games):
    output = ''
    for game in games:
        output += '\n'
        team_1, score_1 = game['visitor']['name'].ljust(14), game['visitor']['score'].rjust(3)
        team_2, score_2 = game['home']['name'].rjust(14), game['home']['score'].ljust(3)
        output += '{0} {1} : {2} {3} [{4}]'.format(team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)


def stringify_single(game):
    team_1, score_1 = game['visitor']['name'], game['visitor']['score']
    team_2, score_2 = game['home']['name'], game['home']['score']
    output = '{0} {1} : {2} {3} [{4}]'.format(team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)

if __name__ == '__main__':
    print(serve(date))
