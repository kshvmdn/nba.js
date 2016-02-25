from bs4 import BeautifulSoup
import html
import praw

r = praw.Reddit(user_agent='nba_stream_parser')


def get_streams_for_team(teams):
    teams.append('Game Thread')
    submissions = r.get_subreddit('nbastreams').get_hot(limit=20)
    streams = []
    for submission in submissions:
        if all(team in submission.title for team in teams):
            for comment in submission.comments:
                soup = BeautifulSoup(
                    html.unescape(comment.body_html), 'html.parser')
                if soup.find('a'):
                    streams.append(soup.find('a')['href'])
    return streams

if __name__ == '__main__':
    print(get_streams_for_team(['Spurs']))
