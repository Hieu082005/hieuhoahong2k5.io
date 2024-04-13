// Import necessary modules
const axios = require('axios');

// Export a function that accepts the bot as a parameter
module.exports = (bot) => {
    // Register the '/search' command and link it to the handler function
    bot.command('search', async (ctx) => {
        // Get the search query from the user's message
        const query = ctx.message.text.split(' ').slice(1).join(' ');

        if (!query) {
            // If there is no search query, send an error message
            return ctx.reply('Please provide a search query.');
        }

        // Perform the search using SerpApi
        const searchResults = await performSearch(query);

        // Split the search results into chunks to avoid message length limit
        const messageChunks = splitIntoChunks(searchResults);

        // Send each chunk as a separate message
        for (const chunk of messageChunks) {
            await ctx.reply(chunk);
        }
    });
};

async function performSearch(query) {
    // Perform the search using SerpApi and return the results
    try {
        const response = await axios.get('https://serpapi.com/search.json', {
            params: {
                api_key: 'ac29add9f8fb26922ae631698ef5686656292fffa5e6b2ff8eb1060bc4776cf0',
                q: query
            }
        });
        return JSON.stringify(response.data);
    } catch (error) {
        console.error('Error performing search:', error);
        return 'An error occurred while performing the search.';
    }
}

function splitIntoChunks(message) {
    const maxLength = 4000; // Maximum length of each message
    const chunks = [];

    // Split the message into chunks
    for (let i = 0; i < message.length; i += maxLength) {
        chunks.push(message.slice(i, i + maxLength));
    }

    return chunks;
}
