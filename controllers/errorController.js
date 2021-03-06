const { StatusCodes } = require("http-status-codes")

function renderError(req, res, statusCode, errorMessage, err) {
    res.locals.errorMessage = errorMessage
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    // render the error page
    res.status(statusCode)
    res.render('error')
}


exports.pageNotFoundError = (req, res) => {
    renderError(req, res, StatusCodes.NOT_FOUND,
        )
    res.render("error")
}

exports.internalServerError = (error, req, res) => {
    renderError(req, res, StatusCodes.INTERNAL_SERVER_ERROR,
<<<<<<< HEAD
        `${StatusCodes.INTERNAL_SERVER_ERROR}, error app`,
=======
        `${StatusCodes.INTERNAL_SERVER_ERROR}, Sorry! Something went wrong with our application :(`,
>>>>>>> fe4c75bbf0037e404c9da266e227796f6416e371
        error)
}