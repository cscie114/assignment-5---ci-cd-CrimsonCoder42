
const handler = async function (event, context) {
    const { latitude, longitude } = event.queryStringParameters;
    try {
        const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'myweatherapp.com, nostro37@gmail.com'
            },
        })

        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText }
        }



        const data = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify({ data }),
        }
    } catch (error) {
        // output to netlify function log
        console.log(error)
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({ msg: error.message }),
        }
    }
}

module.exports = { handler }
