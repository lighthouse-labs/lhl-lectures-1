# Agenda 

- How to think of tables
- Tables
- Primary Keys
- Foreign Keys
- Naming Conventions
- Data Types
- Relationships
- General Design Concepts
- Breakout Exercise
- Take up Exercise ^
- BONUS -- show an IDE for database 


## How do WE think of tables 

### User Stories

A description of a feature for an application.

```
As a  ____________
I want to be able to do 
________________________
________________________
Because
________________________
________________________
```

*** Tables Are NOUNS ***

### Whats a Table

- rows and columns
- stored data
- organization


## TinyApp ##

Database Table
(.csv)
email,                password,       longURL,              shortURL
vasily@gmail.com     du0u3248f234     www.google.ca          F3F2a24
vasily@gmail.com     du0u3248f234     www.reddit.com         5g94fdd
a@b.ca               f9sut0245029     www.apple.com          oofmn45
vasily@gmail.com     du0u3248f234     www.canadiantire.ca    Xdfc442


### ERD - Entity Relationship Diagram

- a way to visually show how your database looks like (connections between tables, fk, pk, etc)

`users`
--------------------------------------
PK
id,   email,                password,
1    v@gmail.com          du0u3248f234
2    a@b.ca               f9sut0245029
--------------------------------------


`urls`
--------------------------------------    
PK                                        FK
id    longURL,              shortURL          user_id
1    www.google.ca          F3F2a24             1
2    www.reddit.com         5g94fdd             1
3    www.apple.com          oofmn45             2
4    www.canadiantire.ca    Xdfc442             1
-------------------------------------- 

### Table Conventions

- pluralized our table names <--(Lighthouse labs Prefers this convention)
- make sure you use snake_case for multiple words for a table
- column names should be singular UNLESS its a collection []

### Datatypes

- INTEGERS (PK, FK)
- CHAR( VARCHAR OR TEXT )  
-   CHAR VARCHAR 0 - 255 bytes (max 255 letters stored ) 
-   TEXT is unlimited size ()
- BOOLEAN
- DATE / TIMESTAMP
- FLOATS
- DECIMALS


### Performance and Storage

- nowdays data is CHEAP !!! 1tb storage 500gb SSDs
- harddrive 1-2tb 30-50$  8 tb - 100$

back to 1990s - 2000s

100gb storage, you are set for life
RAM 512mb ddr2 or 1


### Primary Key

is a unique VALUE
Primary keys CAN BE ANY DATATYPE (strings, booleans, integers, etc)
PK (SERIAL INTEGER) ---> INTEGER will always autoincrement upwards 
+1
Emails, 


### Foreign Key
just a reference to a row in another table
Foreign key has to be the same DATATYPE as the KEY that is being referenced!


### One to One (rare)
One X has One Y
One Y has One X

### One To many (very common)
One X has MANy Y
One Y Has one X


### Many to Many (very common,  but cannot exist in psql....)
One X Has Many Y
One Y has Many X

A bridge table is needed to fix this relationship
A bridge table is a 3rd table, between the 2 tables that will have both foreign keys, 
changing the `many to many` to `one to many` from A to B  and `many to one` from B to C

### General concepts

- Always starts with core user stories, create tables based on the CORE users stories, 
- and then move on to the the other stories that are not CORE

### Aggregate Functions

(SUM, AVG, COUNT, etc)

- NEVER store aggregate values 


### Constraints

email         <--- NOT NULL
password      <--- NOT NULL
first_name    DEFAULT("")
last_name     DEFAULT("")
phone_number  DEFAULT(000-000-0000)
picture       DEFAULT("default.img")
Address
etc...

### Deletions

Try not to HARD DELETE any data from your tables

`urls`
--------------------------------------    
PK                                              FK
id    longURL,              shortURL          user_id                  DELETED(DEFAULT: false)
1    www.google.ca          F3F2a24             1                             false
2    www.reddit.com         5g94fdd             1                             false
3    www.apple.com          oofmn45             2                             true
4    www.canadiantire.ca    Xdfc442             1                             false
--------------------------------------  