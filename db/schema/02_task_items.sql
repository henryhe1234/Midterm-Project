DROP TABLE IF EXISTS task_items CASCADE;

CREATE TABLE task_items(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  create_on DATE NOT NULL,
  category VARCHAR(255) NOT NULL,
  scheduled_date DATE,
  completed_date DATE,

  info TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE

);

