:orphan:   

.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

.. _get-list-tasks-tasks:

List tasks
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /tasks

Lists tasks.

This operation returns list of tasks, with basic details about each task. The response conforms to the schema found in `4.5.5. Get tasks schema <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getTasksSchemas_schemas_tasks_Schema_Calls.html>`__.



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

+----------------+---------------+---------------------------------------------+
|Name            |Type           |Description                                  |
+================+===============+=============================================+
|first           |String         |The URI for the first task in the list.      |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|schema          |String         |The schema of the tasks list.                |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|tasks           |Array          |The container for tasks in the list.         |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|created_at      |String         |The date and time that the task resource was |
|                |*(Required)*   |created.                                     |
+----------------+---------------+---------------------------------------------+
|id              |String         |The UUID of the task resource.               |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|owner           |String         |The tenant-id of the task owner.             |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|schema          |String         |The schema of the task.                      |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|self            |String         |The link to the task.                        |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|status          |String         |The status of the task. For possible task    |
|                |*(Required)*   |statuses, see ` 1.4.1. Image statuses        |
|                |               |<http://docs.rackspace.com/images/api/v2/ci- |
|                |               |devguide/content/image-statuses.html>`__.    |
+----------------+---------------+---------------------------------------------+
|type            |String         |The type of the task ( ``export`` for task   |
|                |*(Required)*   |exports).                                    |
+----------------+---------------+---------------------------------------------+
|updated_at      |String         |The date and time that the task resource was |
|                |*(Required)*   |updated.                                     |
+----------------+---------------+---------------------------------------------+







**Example List Tasks**


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
    

