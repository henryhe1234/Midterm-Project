-- -- Widgets table seeds here (Example)
INSERT INTO task_items (user_id,title,create_on,category,scheduled_date,completed_date,info) VALUES (1,'winter break task','2019-10-22','book','2020-03-11','2020-03-15','this is just a book');
INSERT INTO task_items (user_id,title,create_on,category,scheduled_date,completed_date,info) VALUES (2,'summer break task','2019-10-23','movie','2020-03-15','2020-03-17','this is just a movie');
-- id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id),
--   title VARCHAR(255) NOT NULL,
--   create_on DATE NOT NULL,
--   category VARCHAR(255) NOT NULL,
--   scheduled_date DATE NOT NULL,
--   completed_date DATE NOT NULL,

--   info TEXT NOT NULL,
--   is_active BOOLEAN NOT NULL DEFAULT TRUE


