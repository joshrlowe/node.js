# Module Summary: SQL vs. Sequelize

## SQL

1. **Strict Data Schemas and Relations**:

   - SQL databases enforce strict schemas, meaning each table must adhere to a predefined structure.
   - Relations between tables are explicitly defined, typically using foreign keys.

2. **Connecting Node.js Applications**:

   - You can connect your Node.js applications to SQL databases using packages like `mysql2`.
   - These packages facilitate communication between the Node.js application and the SQL database.

3. **Learning Curve**:
   - Writing SQL queries is a skill distinct from Node.js development.
   - Developers must learn SQL query syntax and database management alongside Node.js programming.

## Sequelize

1. **Focus on Node.js Code**:

   - Sequelize is an ORM (Object-Relational Mapper) that allows developers to interact with databases using JavaScript.
   - It abstracts SQL queries, enabling developers to focus more on Node.js code rather than writing raw SQL.

2. **Define Models and Interact with the Database**:

   - Sequelize allows you to define models that represent tables in your database.
   - These models provide an interface to interact with the database, making data manipulation more intuitive.

3. **Setting Up Relations (Associations)**:
   - Sequelize simplifies the process of setting up relations (associations) between different models.
   - You can define various types of associations (e.g., one-to-many, many-to-many) directly in your models.
   - Interacting with related models is streamlined, leveraging JavaScript syntax.

## Key Takeaways

- **SQL**:

  - Requires understanding and writing raw SQL queries.
  - Strict adherence to predefined schemas and explicit relational mapping.
  - Connection to Node.js apps via packages like `mysql2`.
  - Learning SQL is an additional requirement for Node.js developers.

- **Sequelize**:
  - Provides a higher abstraction level, allowing developers to work with native JavaScript objects.
  - Facilitates model definitions and database interactions without needing raw SQL.
  - Simplifies the setup and management of relationships between database tables.
  - Focuses on making database operations more intuitive and integrated with Node.js development.

By understanding the differences between using raw SQL and an ORM like Sequelize, developers can choose the best approach for their specific project requirements and personal or team expertise.
