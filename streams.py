import praw
r = praw.Reddit(user_agent='nba_stream_parser')

submissions = r.get_subreddit('nbastreams').get_hot(limit=10)
for submission in submissions:
    print(submission.selftext_html)
