
— Docs —

https://www.mongodb.com/docs/

//-------------------------------------------------------//

— Pending —

Defining models in nodejs/react/nextjs

//-------------------------------------------------------//

— MongoDb Concepts —

Collections = Tables
Schema = maps to a Collection, uc: defines the shape of the documents within that collection.
Models = maps to a Schema, uc: creates+reads documents from MongoDB.
Document = Record

//-------------------------------------------------------//

— Collection vs Schema —

Collection = Table 
VS 
Schema = Collection meta definition

//-------------------------------------------------------//

— Schema vs Document —

Schema = Collection meta definition
Document = records stored inside Collection

//-------------------------------------------------------//

— Model —

An instance of a model is called a document.

Tool to create and read documents from MongoDB.

Constructors compiled from Schema definitions.

//-------------------------------------------------------//

— Model vs Collection —

Collection = Table
VS
Model = Constructors compiled from Schema definitions, related to Collection via Schema

//-------------------------------------------------------//

— Tools —

Mongoose: create models to map objects to collections

