const Movie = require('./models');

exports.getAllMovies = (req, res) => {
    
    Movie.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(result);
    });
};

exports.getMovieById = (req, res) => {
    const { id } = req.params;
    Movie.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(result[0]);
    });
};

exports.createMovie = (req, res) => {
    const movie = req.body; 
    Movie.create(movie, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Movie added successfully.' });
    });
};

exports.updateMovie = (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    Movie.update(id, movie, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Movie updated successfully.' });
    });
};

exports.deleteMovie = (req, res) => {
    const { id } = req.params;
    Movie.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Movie deleted successfully.' });
    });
};

exports.addtofav=(req,res)=>{
    let c=req.body;
    Movie.fav(c,(err,result)=>
    {
        if(err){

            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Movie added successfully to fav.' });
    });
};

exports.getfav = (req, res) => {
    
    Movie.getf((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(result);
    });
};

exports.deleteMoviefav = (req, res) => {
    const { id } = req.params;
    Movie.deletefav(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Movie deleted successfully.' });
    });
};

