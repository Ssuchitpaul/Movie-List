const express=require('express');
const router = express.Router();
const moviecon=require('./controller');

router.get('/movies',moviecon.getAllMovies);
router.get('/movies/:id',moviecon.getMovieById);
router.post('/movies',moviecon.createMovie);
router.put('/movies/:id',moviecon.updateMovie );
router.delete('/movies/:id',moviecon.deleteMovie);
router.post('/movies/fav',moviecon.addtofav);
router.get('/fav', moviecon.getfav);
router.delete('/fav/:id', moviecon.deleteMoviefav);

module.exports=router;