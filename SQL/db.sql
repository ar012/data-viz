-- This lists databases:

SELECT datname FROM pg_database
WHERE datistemplate = false;

-- This lists tables in the current database
SELECT table_schema,table_name
FROM information_schema.tables
ORDER BY table_schema,table_name;



-- psql - save results of command to a file
db=>\o out.txt
db=>\dt
db=>\q


-- Save PL/pgSQL output from PostgreSQL to a CSV file
-- https://stackoverflow.com/questions/1517635/save-pl-pgsql-output-from-postgresql-to-a-csv-file

Copy (Select * From foo) To '/tmp/test.csv' With CSV DELIMITER ',';

COPY (SELECT * from users) To '/tmp/output.csv' With CSV;




DELETE FROM aa_settings
    WHERE company_code IN ('OMEGA', 'EBL', 'GLIL');