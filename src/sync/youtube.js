import {google} from "googleapis";

const apiKey = "AIzaSyA8iCtxTXCDSM2Cgnopw_X8L14VsHbUCWA";
const youtube = google.youtube({
    version: "v3",
    auth: apiKey,
});

async function youtubeSearch() {
    try {
        const response = await youtube.search.list({
            part: "snippet",
            channelId: 'UCsg20ERGZt9eHVZRXROJSqg',
            maxResults: 50,
        });

        const titles = response.data.items.map((item) => item.snippet.title)
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export default youtubeSearch


