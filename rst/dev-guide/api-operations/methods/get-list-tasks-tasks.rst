
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

.. _get-list-tasks-tasks:

List tasks
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /tasks

This operation returns list of tasks, with basic details about each task. The response 
conforms to the schema found in :ref:`Get tasks schema <get-tasks-schema>`.

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
|404                       |Not Found                |Resource not found.      |
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

This table shows the body parameters for the response:

+--------------------+-------------+---------------------------------------------+
|Name                |Type         |Description                                  |
+====================+=============+=============================================+
|parameters.\        |String       |The URI for the first task in the list.      |
|**first**           |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.\        |String       |The schema of the tasks list.                |
|**schema**          |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.\        |Array        |The container for tasks in the list.         |
|**tasks**           |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The date and time that the task resource was |
|**created_at**      |*(Required)* |created.                                     |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The UUID of the task resource.               |
|**id**              |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The tenant-id of the task owner.             |
|**owner**           |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The schema of the task.                      |
|**schema**          |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The link to the task.                        |
|**self**            |*(Required)* |                                             |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The status of the task. For status values,   |
|**status**          |*(Required)* |see :ref:`Image statuses <statuses>`.        |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The type of the task (``export`` for task    |
|**type**            |*(Required)* |exports).                                    |
+--------------------+-------------+---------------------------------------------+
|parameters.tasks.\  |String       |The date and time that the task resource was |
|**updated_at**      |*(Required)* |updated.                                     |
+--------------------+-------------+---------------------------------------------+


**Example: List Tasks**


.. code::

   {
       "first": "/v2/tasks", 
       "schema": "/v2/schemas/tasks", 
       "tasks": [
           {
               "created_at": "2014-02-26T02:04:18Z", 
               "id": "baef2134-9c33-47b9-9d63-c29a2a224715", 
               "owner": "00000123", 
               "schema": "/v2/schemas/task", 
               "self": "/v2/tasks/baef2134-9c33-47b9-9d63-c29a2a224715", 
               "status": "pending", 
               "type": "export", 
               "updated_at": "2014-02-26T02:04:18Z"
           }, 
           {
               "created_at": "2014-02-26T02:01:13Z", 
               "id": "7bdc8ede-9098-4d79-9477-697f586cb333", 
               "owner": "00000123", 
               "schema": "/v2/schemas/task", 
               "self": "/v2/tasks/7bdc8ede-9098-4d79-9477-697f586cb333", 
               "status": "processing", 
               "type": "export", 
               "updated_at": "2014-02-26T02:01:13Z"
           }
       ]
   }
   




