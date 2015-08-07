=============================================================================
Task To Export Image -  Rackspace Cloud Images Developer Guide - API v2.0
=============================================================================

Task To Export Image
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <POST_task_to_export_image_tasks.rst#request>`__
`Response <POST_task_to_export_image_tasks.rst#response>`__

.. code-block:: javascript

    POST /tasks

Exports an image using an asynchronous task request. See the request body for specific details.

This operation exports an image in VHD format using an asynchronous task request to export. The request begins the export process and returns the task UUID that can be subsequently polled to determine the status of the export by using the `4.4.2. Get task details <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getTask_tasks__taskID__Image_Task_Calls.html>`__ operation. The response conforms to the schema found in `4.5.5. Get tasks schema <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getTasksSchemas_schemas_tasks_Schema_Calls.html>`__.

The exported image is deposited in your Cloud Files account and is identified by the ``image_uuid`` with a.vhd extension. You are responsible for ensuring that any distribution of your image from the Rackspace open cloud complies with any licensing restrictions.



This table shows the possible response codes for this operation:


+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|201                       |Success                  |Task export request      |
|                          |                         |succeeded.               |
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
|503                       |Service Unavailable      |The requested service is |
|                          |                         |unavailable.             |
+--------------------------+-------------------------+-------------------------+
|500                       |API Fault                |API fault.               |
+--------------------------+-------------------------+-------------------------+
|415                       |Bad Media Type           |Bad media type. This may |
|                          |                         |result if the wrong      |
|                          |                         |media type is used in    |
|                          |                         |the cURL request.        |
+--------------------------+-------------------------+-------------------------+


Request
^^^^^^^^^^^^^^^^^






This table shows the body parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|type                      |xsd:string *(Required)*  |The type of the task.    |
|                          |                         |Use ``export`` for task  |
|                          |                         |exports.                 |
+--------------------------+-------------------------+-------------------------+
|input                     |*(Required)*             |The container for export |
|                          |                         |input parameters.        |
+--------------------------+-------------------------+-------------------------+
|image_uuid                |xsd:string *(Required)*  |The UUID for the         |
|                          |                         |exported image. You must |
|                          |                         |own the image or the     |
|                          |                         |export task will fail.   |
+--------------------------+-------------------------+-------------------------+
|receiving_swift_container |xsd:string *(Required)*  |The Cloud Files          |
|                          |                         |container for the        |
|                          |                         |exported image. If the   |
|                          |                         |container does not       |
|                          |                         |exist, the task fails.   |
|                          |                         |The task also fails if   |
|                          |                         |the container name       |
|                          |                         |contains any of the      |
|                          |                         |following three          |
|                          |                         |characters: forward      |
|                          |                         |slash ( ``/`` ),         |
|                          |                         |question mark ( ``?`` )  |
|                          |                         |or period ( ``.`` ).     |
+--------------------------+-------------------------+-------------------------+





**Example Task To Export Image: JSON request**


.. code::

    {
        "type": "export",
        "input": 
        {
            "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6", 
            "receiving_swift_container": "exports"
        }
    }


Response
^^^^^^^^^^^^^^^^^^


This table shows the body parameters for the response:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|created_at                |xsd:string *(Required)*  |The date and time that   |
|                          |                         |the task resource was    |
|                          |                         |created.                 |
+--------------------------+-------------------------+-------------------------+
|expires_at                |xsd:string *(Required)*  |The date and time that   |
|                          |                         |the task resource        |
|                          |                         |expires. Even after the  |
|                          |                         |task resource expires    |
|                          |                         |(and is thus no longer   |
|                          |                         |available to be polled), |
|                          |                         |the result of the task   |
|                          |                         |(such as an imported or  |
|                          |                         |exported image) still    |
|                          |                         |exists. This parameter   |
|                          |                         |is required for          |
|                          |                         |responses with           |
|                          |                         |``status`` of            |
|                          |                         |``success`` and          |
|                          |                         |``failure``.             |
+--------------------------+-------------------------+-------------------------+
|id                        |xsd:string *(Required)*  |The UUID of the task     |
|                          |                         |resource.                |
+--------------------------+-------------------------+-------------------------+
|input                     |*(Required)*             |The container for export |
|                          |                         |export input parameters. |
+--------------------------+-------------------------+-------------------------+
|image_uuid                |*(Required)*             |The UUID for the         |
|                          |                         |exported image.          |
+--------------------------+-------------------------+-------------------------+
|receiving_swift_container |xsd:string *(Required)*  |The Cloud Files          |
|                          |                         |container for the        |
|                          |                         |exported image.          |
+--------------------------+-------------------------+-------------------------+
|message                   |xsd:string *(Required)*  |``None`` if task export  |
|                          |                         |succeeded or the reason  |
|                          |                         |why the export failed.   |
+--------------------------+-------------------------+-------------------------+
|result                    |*(Required)*             |The container for        |
|                          |                         |results. This parameter  |
|                          |                         |is required for          |
|                          |                         |responses with           |
|                          |                         |``status`` of            |
|                          |                         |``success``.             |
+--------------------------+-------------------------+-------------------------+
|export_location           |xsd:string *(Required)*  |The location of the      |
|                          |                         |exported image in Cloud  |
|                          |                         |Files.                   |
+--------------------------+-------------------------+-------------------------+





**Example Export Task - Pending Response**


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

