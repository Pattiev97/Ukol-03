function parseDate(date) {
    const [day, month, year] = date.split(".")
    return {day, month, year}
}

const datum = parseDate('20.08.2023')

document.body.innerHTML = `
<p>Day: ${parseInt(datum.day)}</p>
<p>Month: ${parseInt(datum.month)}</p>
<p>Year: ${parseInt(datum.year)}</p>
`