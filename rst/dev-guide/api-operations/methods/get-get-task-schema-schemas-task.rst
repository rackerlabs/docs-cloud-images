.. _get-task-schema:

Get task schema
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /schemas/task

This operation returns the specified task entity. The following response is just an 
example. Consider the response to the API call as authoritative.

This table shows the possible response codes for this operation:

+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|200                       |Success                  |Request succeeded.       |
+--------------------------+-------------------------+-------------------------+
|400                       |Error                    |A general error has      |
|                          |                         |occured.                 |
+--------------------------+-------------------------+-------------------------+
|401                       |Unauthorized             |Unauthorized.            |
+--------------------------+-------------------------+-------------------------+
|403                       |Forbidden                |Forbidden.               |
+--------------------------+-------------------------+-------------------------+
|405                       |Bad Method               |Bad method.              |
+--------------------------+-------------------------+-------------------------+
|413                       |Over Limit               |The number of items      |
|                          |                         |returned is above the    |
|                          |                         |allowed limit.           |
+--------------------------+-------------------------+-------------------------+
|500                       |API Fault                |API fault.               |
+--------------------------+-------------------------+-------------------------+
|503                       |Service Unavailable      |The requested service is |
|                          |                         |unavailable.             |
+--------------------------+-------------------------+-------------------------+


Request
""""""""""""""""

This operation does not accept a request body.

Response
""""""""""""""""

**Example: Get task schema: JSON response**


.. code::

   {
       "name": "task", 
       "properties": {
           "created_at": {
               "description": "Datetime when this resource was created", 
               "type": "string"
           }, 
           "expires_at": {
               "description": "Datetime when this resource would be subject to removal", 
               "type": "string"
           }, 
           "id": {
               "description": "An identifier for the task", 
               "pattern": "^([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}$", 
               "type": "string"
           }, 
           "input": {
               "description": "The parameters required by task, JSON blob", 
               "type": "object"
           }, 
           "message": {
               "description": "Human-readable informative message only included when appropriate (usually on failure)", 
               "type": "string"
           }, 
           "owner": {
               "description": "An identifier for the owner of this task", 
               "type": "string"
           }, 
           "result": {
               "description": "The result of current task, JSON blob", 
               "type": "object"
           }, 
           "schema": {
               "type": "string"
           }, 
           "self": {
               "type": "string"
           }, 
           "status": {
               "description": "The current status of this task", 
               "enum": [
                   "pending", 
                   "processing", 
                   "success", 
                   "failure"
               ], 
               "type": "string"
           }, 
           "type": {
               "description": "The type of task represented by this content", 
               "enum": [
                   "import", 
                   "export"
               ], 
               "type": "string"
           }, 
           "updated_at": {
               "description": "Datetime when this resource was updated", 
               "type": "string"
           }
       }
   }




