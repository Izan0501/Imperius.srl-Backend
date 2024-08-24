function register(req, res) {
    console.log('Correctly Executed');

    res.status(200).send({ msg: 'Conected' });
    
}

module.exports = {
    register,
}