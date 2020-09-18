-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS task_lists CASCADE;

CREATE TABLE task_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  task_id INTEGER REFERENCEs task_items(id),
  title VARCHAR(255) NOT NULL,
  create_on DATE NOT NULL
);
