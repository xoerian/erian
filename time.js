const locations = document.querySelectorAll("div.time")



const updateTime = function() {
    locations.forEach(location => {
        const output = location.querySelector("output")

        const now = luxon.DateTime.now()

        output.innerHTML = now.toFormat("h:mm a")
    })
}

updateTime()

setInterval(function() {
    updateTime()
}, 1000)