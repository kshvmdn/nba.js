import datetime as dt
import argparse

import stringify
from fetch import fetch

TODAY = dt.date.today()

parser = argparse.ArgumentParser(description='Get live NBA game updates.')
parser.add_argument('--d', dest="date", type=str,
                    help='the date for which scores will be shown (default: today)')
parser.add_argument('--a', dest='show_all', action='store_true',
                    help='choose to see all scores for given date (default: False)')
parser.set_defaults(show_all=False, date=TODAY.strftime('%Y%m%d'))

args = parser.parse_args()
score_date, show_all = args.date, args.show_all  # default to TODAY, False if None


def serve(date):
    games = fetch(validate_date(date))

    if games is None or len(games) == 0:  # no games
        return 'No games for provided date.'

    if show_all:
        return stringify.all(games)

    prompt = ''
    for i in range(len(games)):
        prompt += '{}: {} @ {} \n'.format(
            i + 1, games[i]['visitor']['abbr'], games[i]['home']['abbr'])
    prompt += '>>> '

    choice = input(prompt)
    while not choice.isnumeric() or int(choice) not in range(0, len(games) + 1):
        choice = input(prompt)

    return stringify.all(games) if int(choice) == 0 else stringify.single(games[int(choice) - 1])


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
