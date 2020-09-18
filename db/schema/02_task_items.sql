DROP TABLE IF EXISTS task_items CASCADE;

CREATE TABLE task_items(
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(255) NOT NULL,
  scheduled_date DATE NOT NULL,
  completed_date DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);
