-- Creating Database
CREATE DATABASE IF NOT EXISTS mcg;

-- Creating Moves table that combos draws from
DROP TABLE IF EXISTS moves;
CREATE TABLE IF NOT EXISTS moves (
    id int AUTO_INCREMENT PRIMARY KEY,
    move_name varchar(256) NOT NULL
);

-- Insert values
INSERT INTO moves (move_name) VALUES
('Jab'),
('Cross'),
('Left Hook'),
('Right Hook'),
('Left Uppercut'),
('Right Uppercut'),
('Left Roundhouse Kick'),
('Right Roundhouse Kick'),
('Left Elbow'),
('Right Elbow'),
('Left Up Elbow'),
('Right Up Elbow'),
('Left Knee'),
('Right Knee'),
('Step Forward'),
('Step Back'),
('Step Left'),
('Step Right');
COMMIT;

-- Creating Combos table that has all permutations of Moves table

-- Create table
DROP TABLE IF EXISTS combos;
CREATE TABLE IF NOT EXISTS combos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    combo_moves VARCHAR(255) NOT NULL,
    favorites BOOLEAN DEFAULT false
);


-- 2 Move Combos
INSERT INTO combos (combo_moves)
SELECT CONCAT(m1.move_name, ', ', m2.move_name) AS combo
FROM moves m1
CROSS JOIN moves m2
WHERE m1.move_name <> m2.move_name;

-- 3 Move Combos
INSERT INTO combos (combo_moves)
SELECT CONCAT(m1.move_name, ', ', m2.move_name, ', ', m3.move_name) AS combo
FROM moves m1
CROSS JOIN moves m2
CROSS JOIN moves m3
WHERE m1.move_name <> m2.move_name
    AND m1.move_name <> m3.move_name
    AND m2.move_name <> m3.move_name;

-- 4 Move Combos
INSERT INTO combos (combo_moves)
SELECT CONCAT(m1.move_name, ', ', m2.move_name, ', ', m3.move_name, ', ', m4.move_name) AS combo
FROM moves m1
CROSS JOIN moves m2
CROSS JOIN moves m3
CROSS JOIN moves m4
WHERE m1.move_name <> m2.move_name
    AND m1.move_name <> m3.move_name
    AND m1.move_name <> m4.move_name
    AND m2.move_name <> m3.move_name
    AND m2.move_name <> m4.move_name
    AND m3.move_name <> m4.move_name;