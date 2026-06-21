const dbmsQuestions = [
{
question:"What does DBMS stand for?",
options:[
"Database Management System",
"Data Backup Management System",
"Digital Base Management System",
"Database Memory System"
],
answer:"Database Management System"
},
{
question:"Which language is used to interact with databases?",
options:["HTML","SQL","CSS","Java"],
answer:"SQL"
},
{
question:"Which key uniquely identifies a record?",
options:["Foreign Key","Primary Key","Candidate Key","Composite Key"],
answer:"Primary Key"
},
{
question:"Which command is used to retrieve data?",
options:["INSERT","UPDATE","SELECT","DELETE"],
answer:"SELECT"
},
{
question:"Which command removes a table permanently?",
options:["DELETE","DROP","TRUNCATE","REMOVE"],
answer:"DROP"
},
{
question:"Which normal form removes partial dependency?",
options:["1NF","2NF","3NF","BCNF"],
answer:"2NF"
},
{
question:"Which normal form removes transitive dependency?",
options:["1NF","2NF","3NF","BCNF"],
answer:"3NF"
},
{
question:"Which key creates relationship between tables?",
options:["Primary Key","Unique Key","Foreign Key","Candidate Key"],
answer:"Foreign Key"
},
{
question:"What is a tuple?",
options:[
"Column",
"Row",
"Table",
"Database"
],
answer:"Row"
},
{
question:"What is an attribute?",
options:[
"Row",
"Column",
"Table",
"Record"
],
answer:"Column"
},
{
question:"Which SQL clause filters rows?",
options:["GROUP BY","ORDER BY","WHERE","HAVING"],
answer:"WHERE"
},
{
question:"Which SQL clause sorts results?",
options:["ORDER BY","GROUP BY","WHERE","HAVING"],
answer:"ORDER BY"
},
{
question:"Which join returns matching rows only?",
options:[
"LEFT JOIN",
"RIGHT JOIN",
"INNER JOIN",
"FULL JOIN"
],
answer:"INNER JOIN"
},
{
question:"Which join returns all rows from left table?",
options:[
"LEFT JOIN",
"RIGHT JOIN",
"INNER JOIN",
"CROSS JOIN"
],
answer:"LEFT JOIN"
},
{
question:"What is a view?",
options:[
"Virtual Table",
"Real Table",
"Index",
"Constraint"
],
answer:"Virtual Table"
},
{
question:"Which constraint prevents duplicate values?",
options:[
"NOT NULL",
"CHECK",
"UNIQUE",
"DEFAULT"
],
answer:"UNIQUE"
},
{
question:"Which constraint prevents NULL values?",
options:[
"UNIQUE",
"NOT NULL",
"CHECK",
"DEFAULT"
],
answer:"NOT NULL"
},
{
question:"What does ACID stand for?",
options:[
"Atomicity Consistency Isolation Durability",
"Access Control Integrity Data",
"Atomic Control Isolation Database",
"None"
],
answer:"Atomicity Consistency Isolation Durability"
},
{
question:"Which command removes all rows but keeps table structure?",
options:[
"DELETE",
"DROP",
"TRUNCATE",
"REMOVE"
],
answer:"TRUNCATE"
},
{
question:"Which SQL function counts rows?",
options:[
"SUM()",
"AVG()",
"COUNT()",
"TOTAL()"
],
answer:"COUNT()"
}
];

export default dbmsQuestions;