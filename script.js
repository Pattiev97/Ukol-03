function parseDate(date) {
    const [day, month, year] = date.split(".")
    return {day, month, year}
}

const datum = parseDate('20.08.2023')

document.body.innerHTML = `
<p>Day: ${datum.day}</p>
<p>Month: ${datum.month}</p>
<p>Year: ${datum.year}</p>
`