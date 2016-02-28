import datetime as dt
import argparse

import output
from fetch import fetch

TODAY = dt.date.today()

parser = argparse.ArgumentParser(description='Get live NBA game updates.')
parser.add_argument('-d', dest="date", type=str,
                    help='date to see scores for (default=today)')
parser.add_argument('-a', dest='show_all', action='store_true',
                    help='see all scores or choose game (default=False)')
parser.set_defaults(show_all=False, date=TODAY.strftime('%Y%m%d'))

args = parser.parse_args()
score_date, show_all = args.date, args.show_all


def serve(date):
    games = fetch(validate_date(date))

    if games is None or len(games) == 0:  # no games
        return 'No games for provided date.'

    if show_all:
        return output.all(games)

    prompt = ''
    for i in range(len(games)):
        prompt += '{}: {} @ {} \n'.format(
            i + 1, games[i]['visitor']['abbr'], games[i]['home']['abbr'])
    prompt += '>>> '

    c = input(prompt)
    while not c.isnumeric() or int(c) not in range(0, len(games)+1):
        c = input(prompt)

    return output.all(games) if int(c) == 0 else output.single(games[int(c)-1])


def validate_date(d):
    '''Determine if arg --d is valid date, else return TODAY.'''

    if d == 'y' or d == 'yesterday':
        return (TODAY - dt.timedelta(1)).strftime('%Y%m%d')

    try:
        dt.datetime.strptime(d, '%Y%m%d').date()
    except ValueError:
        return TODAY.strftime('%Y%m%d')

    return d


if __name__ == '__main__':
    print(serve(score_date))
