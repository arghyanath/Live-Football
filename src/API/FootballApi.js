const fetchLiveFixtures = async () => {

    const result = fetch("https://v3.football.api-sports.io/fixtures?live=all", {

        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "da9f8f8f101a0ddead1dbbc0c5ac89a6"
        }
    })
        .then(response =>
            response.json()
        )
        .then(data => { return data })

        .catch(err => {
            console.log(err);
        })

    return result

}

var date = new Date()
var day = String(date.getDate())
var month = String(date.getMonth() + 1).padStart(2, '0')
var year = date.getFullYear()

var today = [year, month, day].join('-')


const fetchOtherFixtures = async () => {

    const result = fetch(`https://v3.football.api-sports.io/fixtures?date=${today}`, {

        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "da9f8f8f101a0ddead1dbbc0c5ac89a6"
        }
    })
        .then(response =>
            response.json()
        )
        .then(data => { return data })

        .catch(err => {
            console.log(err);
        })

    return result

}

export const data = await fetchLiveFixtures()
export const othersMatchesData = await fetchOtherFixtures()

// // console.log(res)