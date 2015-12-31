import pprint
import requests
import sys
import datetime

BASE_URL = 'http://data.nba.com/data/json/cms/noseason/scoreboard/{0}/games.json'

date = '20151230'  # today
if len(sys.argv) > 1:
    date = sys.argv[1]

r = requests.get(BASE_URL.format(date)).json()
games = []

for game in r['sports_content']['games']['game']:
    g = {}
    g['loc'] = '{0} - {1}, {2}'.format(game['arena'], game['city'], game['state'])
    g['period_status'] = game['period_time']['period_status']
    g['game_clock'] = game['period_time']['game_clock']
    g['visitor'] = {
        'abbr': game['visitor']['abbreviation'],
        'city': game['visitor']['city'],
        'name': game['visitor']['nickname'],
        'score': game['visitor']['score']
    }
    g['home'] = {
        'abbr': game['home']['abbreviation'],
        'city': game['home']['city'],
        'name': game['home']['nickname'],
        'score': game['home']['score']
    }
    games.append(g)

for game in games:
    print('{0} {1} @ {2} {3}\n{4}\n\n{5} {6} - {7} {8} {9} {10}'.format(
        game['visitor']['city'], game['visitor']['name'],
        game['home']['city'], game['home']['name'],
        game['loc'],
        game['visitor']['abbr'], game['visitor']['score'],
        game['home']['abbr'], game['home']['score'],
        game['period_status'], game['game_clock']
    ))
    print('-' * 20)
