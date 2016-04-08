import html
from tabulate import tabulate


def all(games):
    table = []
    headers = ['Home', '', '', 'Away', 'Status']
    [table.append([game['home']['name'], game['home']['score'].rjust(3),
                   game['visitor']['score'].ljust(3), game['visitor']['name'],
                   game['status']])
     for game in games]
    return tabulate(table, headers, tablefmt='fancy_grid')


def single(game):
    team_1, score_1 = game['home']['name'], game['home']['score']
    team_2, score_2 = game['visitor']['name'], game['visitor']['score']
    output = '{} {} : {} {} [{}]'.format(
        team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)
