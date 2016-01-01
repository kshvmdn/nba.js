import requests
import html
import datetime as dt
from args import parse_arguments as parse_args

URL = 'http://data.nba.com/data/json/cms/noseason/scoreboard/{0}/games.json'
TODAY = dt.date.today().strftime('%Y%m%d')

args = parse_args()
score_date, show_all = TODAY if args.d is None else args.d, bool(args.a)


def serve(date):
    games = parse(fetch(validate_date(date)))

    # no games
    if len(games) == 0:
        return 'No games for provided date'

    if show_all:
        return stringify_all(games)

    prompt = ''
    for i in range(len(games)):
        prompt += '{0}: {1} @ {2} \n'.format(
            i + 1, games[i]['visitor']['abbr'], games[i]['home']['abbr'])
    prompt += '>>> '

    choice = input(prompt)
    while not choice.isnumeric() or int(choice) not in range(1, len(games) + 1):
        choice = input(prompt)

    return stringify_single(games[int(choice) - 1])


def validate_date(date):
    """Determine if arg date is valid, else return TODAY."""
    try:
        dt.datetime.strptime(date, '%Y%m%d').date()
    except ValueError:
        return TODAY
    return date


def fetch(date):
    return requests.get(URL.format(date)).json()


def parse(response):
    games = []
    for game in response['sports_content']['games']['game']:
        g = {
            'loc': '{0} - {1}, {2}'.format(game['arena'], game['city'], game['state']),
            'date': game['date'], 'time': game['time'],
            'period_status': game['period_time']['period_status'],
            'game_clock': game['period_time']['game_clock']
        }
        g['status'] = '{0} - {1}'.format(g['period_status'], g['game_clock'])
        if g['game_clock'] == '' or g['period_status'] == 'Final':
            g['status'] = g['period_status']
        for team in ('visitor', 'home'):
            g[team] = {
                'abbr': game[team]['abbreviation'], 'city': game[team]['city'],
                'name': game[team]['nickname'], 'score': game[team]['score']
            }
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
    # TODO add quarterly scores.

    team_1, score_1 = game['visitor']['name'], game['visitor']['score']
    team_2, score_2 = game['home']['name'], game['home']['score']
    output = '{0} {1} : {2} {3} [{4}]'.format(team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)


if __name__ == '__main__':
    print(serve(score_date))
