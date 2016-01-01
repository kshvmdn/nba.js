import argparse


def parse_arguments():
    parser = argparse.ArgumentParser(description='Get live NBA game updates.')
    parser.add_argument('-d', metavar="DATE", type=str,
                        help='the date for which scores will be shown (default: today)')
    parser.add_argument('-a', metavar="ALL_SCORES", type=bool, default=False,
                        help='show all scores for given date (default: False)')

    return parser.parse_args()
