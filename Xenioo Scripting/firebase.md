# Firebase Connection
The Firebase connection object represent a valid connection instance to a configured Firebase cloud database. Once the database instance has been associated with an object the following methods can be used.

## Connect
Returns a virtual Firebase database instance that can be further used to manipulate remote data. You can find here all methods supprted by the returned connection.
```javascript
var database = conversation.Connect( accountjson, projectid, databasename );
```  
---
## Create
This method will insert a new object in the specified collection. The collection must exist. The object can be expressed in standard notation like { a = "hello" }. Xenioo will translate it to the correct Firebase document format.
```javascript
database.Create( collection, object );
```  
---
## Delete  
Deletes a document with the specified Id from the specified collection.
```javascript
database.Delete( collection, documentid );
```  
---
## Update  
Updates a document with a specific Id with the new object instance. The remote object will be completely replaced by the new instance. Remote object properties that are not in the current object instance will be removed by the update.
```javascript
database.Update( collection, documentid, object );
```  
---
## List  
This method will return a list of all the objects that are currently stored in the specified collection.
```javascript
database.List( collection );
```  
---
## Get  
This method will return a single object instance from the database corresponding to the id specified in documentid.
```javascript
database.Get( collection, documentid );
```  
---
