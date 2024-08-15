const { query } = require('express');
const db=require('./config.js');

let movie={};

movie.getf=(callback)=>
    {
    
        db.query('SELECT * FROM fav',callback);
    
    };

movie.getAll=(callback)=>
{

    db.query('SELECT * FROM movies',callback);

};

movie.getById=(id,callback)=>
{
    db.query('SELECT * FROM movies WHERE id=?',[id],callback);
};

movie.create = (newmov, callback) => {

    const { id, title, director, genre, release_year, duration_minutes, rating, poster_image, box_office_total } = newmov;

    const query = 'INSERT INTO movies (id, title, director, genre, release_year, duration_minutes, rating, poster_image, box_office_total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const values = [id, title, director, genre, release_year, duration_minutes, rating, poster_image, box_office_total];

    db.query(query, values, callback);
};

movie.update = (id, updatedFields, callback) => {
    const { title, director, genre, release_year, duration_minutes, rating, poster_image, box_office_total } = updatedFields;

    const query = `
        UPDATE movies 
        SET title = ?, director = ?, genre = ?, release_year = ?, duration_minutes = ?, rating = ?, poster_image = ?, box_office_total = ? 
        WHERE id = ?
    `;

    const values = [title, director, genre, release_year, duration_minutes, rating, poster_image, box_office_total, id];

    db.query(query, values, callback);
};


movie.delete=(id,callback)=>
{
    db.query('DELETE FROM movies WHERE id = ?', [id], callback);
}

movie.fav=(c,callback)=>
{
    let { id,movie } = c;
    let query = 'INSERT INTO fav (id, movie) VALUES (?, ?)';
    let values=[id,movie];
    db.query(query,values,callback);
}

movie.deletefav = (id, callback) => {
    db.query('DELETE FROM fav WHERE id = ?', [id], callback);
};


module.exports=movie;