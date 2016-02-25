import bs4
import html
import requests
import pprint

STREAMS_URL = 'https://www.reddit.com/r/nbastreams.json?limit=20'


def main(teams):
    submission = get_submission(request(STREAMS_URL), teams)
    if submission is not None:
        comments_url = 'https://reddit.com' + submission['permalink'] + '.json'
        streams = get_streams(request(comments_url))
        return streams if len(streams) > 0 else None


def request(url):
    return requests.get(url=url).json()


def get_submission(response, teams):
    for submission in response['data']['children']:
        if all(team in submission['data']['title'] for team in teams):
            return submission['data']


def get_streams(response):
    streams = []
    for comment in response[1]['data']['children']:
        comment_body = html.unescape(comment['data']['body_html'])
        soup = bs4.BeautifulSoup(comment_body, 'html.parser')
        if soup.find('a'):
            streams.append(soup.find('a')['href'])
    return streams

if __name__ == '__main__':
    # print(main(['Miami']))
    pprint.pprint(request(STREAMS_URL))
