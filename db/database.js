const {Pool} = reuire('pg');

const addBook = ()=>{
  return Pool.query(`
  INSERT INTO task_items (
    category,
  )
  `)
}
