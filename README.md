# task-manager
## Database

### SQL
The project includes a `tasks.sql` file showing how the schema would look in a relational database:
- `id` (INT, primary key, auto increment)
- `title` (VARCHAR)
- `description` (TEXT)
- `is_completed` (BOOLEAN)

### NoSQL
The `tasks_nosql.json` file shows how a document would look in MongoDB.

Example:
```json
{
  "_id": "unique_task_id",
  "title": "My first task",
  "description": "This is an example",
  "isCompleted": false
}
