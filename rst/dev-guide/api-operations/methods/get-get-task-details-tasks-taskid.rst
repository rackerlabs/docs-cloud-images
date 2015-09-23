.. _get-task-details:

Get task details
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /tasks/{taskID}

This operation shows the details for the specified task, including the status. You can use 
it to confirm whether an import or export task completed successfully. For more 
information on statuses, see :ref:`Task statuses <task-statuses>`. The response conforms 
to the schema found in :ref:`Get tasks schema <get-task-schema>`.


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

This table shows the URI parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|{task_id}                 |Uuid                     |The task id. This task   |
|                          |                         |id is the same as the id |
|                          |                         |parameter returned in    |
|                          |                         |the Import Task or       |
|                          |                         |Export Task operation    |
|                          |                         |response body.           |
+--------------------------+-------------------------+-------------------------+


This operation does not accept a request body.




Response
""""""""""""""""

This table shows the body parameters for the response:

+-------------------------------------+-------------+---------------------------------------------+
|Name                                 |Type         |Description                                  |
+=====================================+=============+=============================================+
| **created_at**                      |String       |The date and time that the task resource was |
|                                     |*(Required)* |created.                                     |
+-------------------------------------+-------------+---------------------------------------------+
| **expires_at**                      |String       |The date and time that the task resource     |
|                                     |*(Optional)* |expires. Even after the task resource        |
|                                     |             |expires (and is thus no longer available to  |
|                                     |             |be polled), the result of the task (such as  |
|                                     |             |an imported or exported image) still exists. |
|                                     |             |                                             |
|                                     |             |.. note::                                    |                               
|                                     |             |   This parameter is required for response   |
|                                     |             |   with ``status`` of ``success`` and        |
|                                     |             |   ``failure``.                              |
+-------------------------------------+-------------+---------------------------------------------+
| **id**                              |String       |The UUID of the task resource.               |
|                                     |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **input**                           |*(Required)* |The container for import input parameters.   |
+-------------------------------------+-------------+---------------------------------------------+
|input.\                              |*(Required)* |The container for image properties.          |
|**image_properties**                 |             |                                             |
+-------------------------------------+-------------+---------------------------------------------+
|input.image_properties.\             |String       |The name of the image.                       |
|**name**                             |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
|input.\ **import_from**              |String       |The source of the imported image.            |
|                                     |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **message**                         |String       |``None`` if task import succeeded or the     |
|                                     |*(Required)* |reason why the import failed. Possible       |
|                                     |             |errors include the following:                |
|                                     |             |                                             |
|                                     |             |``111``: The image cannot be imported/       |
|                                     |             |There is an unspecified                      |
|                                     |             |problem with your VHD that caused it to fail |
|                                     |             |our validation checks.                       |
|                                     |             |                                             |
|                                     |             |``396``: The image cannot                    |
|                                     |             |be imported. The file is not a valid VHD.    |
|                                     |             |                                             |
|                                     |             |``413``: The image cannot be imported. The   |
|                                     |             |virtual size of the disk exceeds the 40GB    |
|                                     |             |limit.                                       |
|                                     |             |                                             |
|                                     |             |``523``: The image cannot be imported.       |
|                                     |             |Only fixed or dynamic disks may be imported. |
|                                     |             |                                             |
|                                     |             |``609``: The image cannot be imported. The   |
|                                     |             |physical size of the disk exceeds the 40GB   |
|                                     |             |limit.                                       |
|                                     |             |                                             |
|                                     |             |``614``: The image cannot be imported.       |
|                                     |             |The internal UUID of the VHD is all zeros.   |
|                                     |             |                                             |
|                                     |             |``721``: The image cannot be imported.       |
|                                     |             |Your VHD has a parent disk. You can only     |
|                                     |             |import a stand-alone VHD.                    |
|                                     |             |                                             |             
+-------------------------------------+-------------+---------------------------------------------+
| **result**                          |*(Optional)* |The container for results.                   |
|                                     |             |                                             |
|                                     |             |.. note::                                    |
|                                     |             |   This parameter is required for responses  |
|                                     |             |   with a ``status`` of ``success``.         |
|                                     |             |                                             |
+-------------------------------------+-------------+---------------------------------------------+
|result.\ **image_id**                |Uuid         |The UUID of the image.                       |
|                                     |*(Optional)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **owner**                           |String       |The tenant-id of the task owner.             |
|                                     |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **schema**                          |String       |The schema of the task.                      |
|                                     |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **self**                            |String       |The link to the task.                        |
|                                     |*(Required)* |                                             |
+-------------------------------------+-------------+---------------------------------------------+
| **status**                          |String       |The status of the task. For possible task    |
|                                     |*(Required)* |statuses, see                                |
|                                     |             |:ref:`Task statuses <task-statuses>`.        |
+-------------------------------------+-------------+---------------------------------------------+
| **type**                            |String       |The type of the task ( ``export`` for task   |
|                                     |*(Required)* |exports).                                    |
+-------------------------------------+-------------+---------------------------------------------+
| **updated_at**                      |String       |The date and time that the task resource was |
|                                     |*(Required)* |updated.                                     |
+-------------------------------------+-------------+---------------------------------------------+


**Example: Get import task details - pending response**


.. code::

   {
       "created_at": "2014-02-26T02:58:46Z", 
       "id": "fc29a67c-ad76-49bc-a317-a5f38dcb44c0", 
       "input": {
           "image_properties": {
               "name": "My excellent custom image"
           }, 
           "import_from": "exports/my-excellent-image.vhd"
       }, 
       "message": "None", 
       "owner": "00000123", 
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/fc29a67c-ad76-49bc-a317-a5f38dcb44c0", 
       "status": "pending", 
       "type": "import", 
       "updated_at": "2014-02-26T02:58:46Z"
   }
    

**Example: Get import task details - success response**


.. code::

   {
       "created_at": "2014-02-26T03:02:23Z", 
       "expires_at": "2014-02-28T03:28:18Z", 
       "id": "d8dd8c24-2534-473c-881f-9097bc784068", 
       "input": {
           "image_properties": {
               "name": "My excellent custom image"
           }, 
           "import_from": "exports/my-excellent-image.vhd"
       }, 
       "message": "None", 
       "owner": "00000123", 
       "result": {
           "image_id": "1d944ab7-6748-4f3c-b7e2-3553bf006677"
       }, 
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/d8dd8c24-2534-473c-881f-9097bc784068", 
       "status": "success", 
       "type": "import", 
       "updated_at": "2014-02-26T03:28:18Z"
   }


**Example: Get import task details - failure response**


.. code::

   {
       "created_at": "2014-02-26T02:58:46Z", 
       "expires_at": "2014-02-28T02:58:49Z", 
       "id": "fc29a67c-ad76-49bc-a317-a5f38dcb44c0", 
       "input": 
       {
           "image_properties": 
           {
               "name": "my imported image"
           }, 
           "import_from": "nonexistentcontainer/noimage.vhd"
       }, 
       "message": "Error: Image not found for import. Possible invalid location", 
       "owner": "00000123", 
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/fc29a67c-ad76-49bc-a317-a5f38dcb44c0", 
       "status": "failure", 
       "type": "import", 
       "updated_at": "2014-02-26T02:58:49Z"
   }


**Example Get export task details - pending response**

.. code::

   {
       "created_at": "2014-02-26T02:01:13Z", 
       "id": "7bdc8ede-9098-4d79-9477-697f586cb333", 
       "input": 
       {
           "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6", 
           "receiving_swift_container": "exports"
       }, 
       "message": "None", 
       "owner": "00000123", 
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/7bdc8ede-9098-4d79-9477-697f586cb333", 
       "status": "pending", 
       "type": "export", 
       "updated_at": "2014-02-26T02:01:13Z"
   }


**Example: Get export task details - success response**

.. code::

   {
       "created_at": "2014-02-26T02:01:13Z", 
       "expires_at": "2014-02-28T02:16:50Z", 
       "id": "7bdc8ede-9098-4d79-9477-697f586cb333", 
       "input": 
       {
           "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6", 
           "receiving_swift_container": "exports"
       }, 
       "message": "None", 
       "owner": "00000123", 
       "result": 
       {
           "export_location": "exports/ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6.vhd"
       }, 
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/7bdc8ede-9098-4d79-9477-697f586cb333", 
       "status": "success", 
       "type": "export", 
       "updated_at": "2014-02-26T02:16:50Z"
   }


**Example: Get export task details - failure response**

.. code::

   {
       "created_at": "2014-02-26T02:04:18Z", 
       "expires_at": "2014-02-28T02:25:12Z", 
       "id": "baef2134-9c33-47b9-9d63-c29a2a224715", 
       "input": 
       {
           "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6", 
           "receiving_swift_container": "exports"
       }, 
       "message": "Swift already has an object with id 'ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6.vhd' in container 'exports'", 
       "owner": "00000123",
       "schema": "/v2/schemas/task", 
       "self": "/v2/tasks/baef2134-9c33-47b9-9d63-c29a2a224715", 
       "status": "failure", 
       "type": "export", 
       "updated_at": "2014-02-26T02:25:12Z"
   }




