# Firebase Connection
The Firebase connection object represent a valid connection instance to a configured Firebase cloud database. Once the database instance has been associated with an object the following methods can be used.

## Create
This method will insert a new object in the specified collection. The collection must exist. The object can be expressed in standard notation like { a = "hello" }. Xenioo will translate it to the correct Firebase document format.
```javascript
database.Create( collection, object );
```  
---
## Delete  
Deletesa document with the specified Id from the specified collection.
```javascript
database.Delete( collection, documentid );
```  
---
