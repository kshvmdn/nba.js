import html


def all(games):
    output = ''
    for game in games:
        output += single(game) + '\n'
        # team_1, score_1 = game['visitor']['name'].ljust(14), game['visitor']['score'].rjust(3)
        # team_2, score_2 = game['home']['name'].rjust(14), game['home']['score'].ljust(3)
        # output += '{} {} : {} {} [{}]\n'.format(team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)


def single(game):
    team_1, score_1 = game['visitor']['name'].ljust(14), game['visitor']['score'].rjust(3)
    team_2, score_2 = game['home']['name'].rjust(14), game['home']['score'].ljust(3)
    output = '{} {} : {} {} [{}]'.format(team_1, score_1, score_2, team_2, game['status'])
    # team_1, score_1 = game['visitor']['name'], game['visitor']['score']
    # team_2, score_2 = game['home']['name'], game['home']['score']
    # output = '{} {} : {} {} [{}]'.format(team_1, score_1, score_2, team_2, game['status'])
    return html.unescape(output)
