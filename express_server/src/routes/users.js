import { Router } from 'express';
const router = Router();
import { createPool } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Create a MySQL connection pool
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// API endpoint to get all users
router.get('/getUsers', (req, res) => {
    // Fetch all users from the database
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Send the list of users as a JSON response
        res.json({ users: results });
    });
});

// API endpoint to check if a user exists and add if not
router.post('/users', (req, res) => {
    const { email, role } = req.body; // Assuming you are sending the email and role in the request body

    // Check if the user already exists
    pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length > 0) {
            // User already exists, you can handle this case as needed
            return res.status(400).json({ error: 'User already exists' });
        }

        // User does not exist, add a new entry
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

        pool.query(
            'INSERT INTO users (email, created_date, role) VALUES (?, ?, ?)',
            [email, currentDate, role],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                // User added successfully
                res.status(201).json({ message: 'User added successfully' });
            }
        );
    });
});

export default router;
