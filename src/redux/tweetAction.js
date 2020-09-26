export function renderTweets(tweet) {
    return {
        type: 'RENDER_TWEETS',
        payload: tweet
    }
}