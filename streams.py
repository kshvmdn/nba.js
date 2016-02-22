import requests
from pprint import pprint

# STREAMS_URL = 'https://www.reddit.com/r/nbastreams.json?limit=20'
STREAMS_URL = 'https://api.myjson.com/bins/40flf'  # reddit shut me down :(


def main(teams):
    submission = get_submission(request(STREAMS_URL), teams)
    if submission is not None:
        comments_url = 'http://reddit.com' + submission['permalink'] + '.json'
        print(comments_url)


def request(url):
    return requests.get(url).json()


def get_submission(response, teams):
    for submission in response['data']['children']:
        if all(team in submission['data']['title'] for team in teams):
            return submission['data']

if __name__ == '__main__':
    main(['Toronto Raptors', 'Memphis Grizzlies'])
