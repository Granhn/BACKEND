const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'',
    database:'firstapi'
})





const getUsers = async(req, res) =>{
    const query_response = await pool.query('SELECT * FROM users');
    res.status(200).json(query_response.rows);

}

const createUser = async (req, res) =>{
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)',[ name,email ]);
    res.json({
        message: 'User Added Succesfully',
        body:{
            user: { name, email }
        }
    })
}
const getUserById = async (req, res )=>{

    const query_result = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.params.id]);
    console.log(query_result.rows);
    res.send('Get user by id');
}
const updateUser = async (req, res) => {
    const { name, email } = req.body;
    const id = req.params.id;
    pool.query('UPDATE users SET name= $1, email = $2 WHERE id = $3',[ name, email, id ]);
    res.json('User updated');
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const query_result = pool.query('DELETE FROM users WHERE id = $1',[ id ]);
    console.log(query_result);
    res.json(`User ${id} deleted successfully`);
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}