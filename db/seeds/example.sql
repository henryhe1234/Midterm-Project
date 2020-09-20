SELECT title,create_on,scheduled_date,completed_date,info
FROM task_items
JOIN users ON users.id = user_id
WHERE user_id = 2;
