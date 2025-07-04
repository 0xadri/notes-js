
-------------------------------------------------------

# Docs

https://www.mongodb.com/docs/

MongoDB Shell - https://www.mongodb.com/docs/mongodb-shell/

-------------------------------------------------------

# Pending

Defining models in nodejs/react/nextjs

-------------------------------------------------------

# MongoDb Concepts

Collections = Tables

Schema = maps to a Collection, uc: defines the shape of the documents within that collection.

Models = maps to a Schema, uc: creates+reads documents from MongoDB.

Document = Record

-------------------------------------------------------

# Collection Namings

A collection name must always be lower-case and plural (with a 's').

Not doing so will create issues such as inability to connect with Mongoose.

https://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name

-------------------------------------------------------

# Collection vs Schema

`Collection` = `Table` 

VS

`Schema` = Collection meta definition

-------------------------------------------------------

# Schema vs Document

`Schema` = `Collection` meta definition

`Document` = records stored inside `Collection`

-------------------------------------------------------

# Model

An instance of a `model` is called a `document`.

Tool to create and read `documents` from MongoDB.

Constructors compiled from Schema definitions.

-------------------------------------------------------

# Model vs Collection

`Collection` = `Table`

VS

`Model` = Constructors compiled from Schema definitions, related to `Collection` via `Schema`

-------------------------------------------------------

# Tools

Mongoose: create models to map objects to collections

-------------------------------------------------------

# MongoDB Shell

### Rename Collection / Table

>     db["oldCollectionILLEGALName"].renameCollection("someBetterName")

### `updateOne()` vs `updateMany()` vs `update()`

`update()` deprecated since ~2018.

https://stackoverflow.com/questions/36719331/what-is-the-difference-between-update-and-updatemany-method-in-mongo-db

https://stackoverflow.com/questions/9038547/mongodb-update-every-document-on-one-field

### Rename Field / Column

>     db["bottom-wealth-distros"].updateMany({}, { $rename: { "combined_wealth_gbp": "combined_wealth_billion_gbp" } } );

### Add Field / Column

>     db["collectionname"].updateMany( {}, { $set: {"new_field": 1} } )

https://stackoverflow.com/questions/7714216/add-new-field-to-every-document-in-a-mongodb-collection

### Divide Field Values By 1000

>     db["bottom-wealth-distros"].updateMany({}, {$mul: {"combined_wealth_gbp": 0.001}});

-------------------------------------------------------

# Indexes

A database index makes queries faster by

Indexing is the way to get an unordered table into an order that will maximize the query’s efficiency while searching.
