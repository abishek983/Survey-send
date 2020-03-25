module.exports = (survey) =>{
    return `
    <html>
        <div style = "text-align:center">
            <h2>I would like to have your review </h2>
            <p> ${survey} </p>
            <div>
                <a href="http://localhost:3000/"> Yes </a>
            </div>
            <div>
                <a href="http://localhost:3000/"> NO </a>
            </div>
        </div>
    </html>
    `;
}