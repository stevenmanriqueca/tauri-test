import React, { useEffect, useState } from 'react';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lubri7',
  password: 'winsirius',
  port: 5432,
});

const ExampleComponent = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM your_table');
        setData(result.rows);
        client.release(); // Release the client back to the pool when done
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    console.log(data);

    // Cleanup function to close the database connection pool when component unmounts
    return () => {
      pool.end(); // This will end all pool connections
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h1>Database Data</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{/* Render your data here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
