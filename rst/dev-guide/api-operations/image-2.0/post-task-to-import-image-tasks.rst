
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

Task To Import Image
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    POST /tasks

Imports an image using an asynchronous task request. See the request body for specific details.

This operation imports an image using an asynchronous task request. The request begins the import process and returns the task UUID that can be subsequently polled to determine the status of the import by using the ` 4.4.2. Get task details <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getTask_tasks__taskID__Image_Task_Calls.html>`__ operation. The response conforms to the schema found in ` 4.5.6. Get tasks schema <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getTasksSchemas_schemas_tasks_Schema_Calls.html>`__.

To successfully import an image: 



*  Format the image using the VHD format.
   
   .. note::
      If you are importing an image that you have previously exported from Cloud Images in another region of the Rackspace open cloud, your image is already in the appropriate format. You can find information on `preparing a custom image for import <http://www.rackspace.com/knowledge_center/article/preparing-an-image-for-import-into-the-rackspace-open-cloud>`__ in the Rackspace Knowledge Center.
*  Store the image in your Cloud Files account.


.. note::
   As described in the ` Rackspace Terms of Service <http://docs.rackspace.com/images/api/v2/ci-devguide/content/ch_image-service-dev-overview.html>`__, you should be aware of and respect all licensing restrictions that apply to any software that you import into the Rackspace open cloud. For example, Microsoft licensing rules are very restrictive. Microsoft product use rights do not allow the use of License Mobility for Windows licenses. Given the limitations related to this software platform, image import is not available for Windows images. If you have questions, please contact the software vendor. 
   
   



This table shows the possible response codes for this operation:


+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|201                       |Success                  |Request succeeded.       |
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
""""""""""""""""






This table shows the body parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|type                      |xsd:string *(Required)*  |The type of task. Use    |
|                          |                         |``import`` for task      |
|                          |                         |imports.                 |
+--------------------------+-------------------------+-------------------------+
|input                     |*(Required)*             |The container for import |
|                          |                         |input parameters.        |
+--------------------------+-------------------------+-------------------------+
|image_properties          |*(Required)*             |The container for image  |
|                          |                         |properties.              |
+--------------------------+-------------------------+-------------------------+
|name                      |xsd:string *(Required)*  |The name of the image.   |
|                          |                         |.. warning:: Name is the |
|                          |                         |only property that can   |
|                          |                         |be included in ``image-  |
|                          |                         |properties``. Including  |
|                          |                         |any other property will  |
|                          |                         |cause the operation to   |
|                          |                         |fail.                    |
+--------------------------+-------------------------+-------------------------+
|import_from               |xsd:string *(Required)*  |The source of the        |
|                          |                         |imported image.          |
+--------------------------+-------------------------+-------------------------+





**Example Task To Import Image: JSON request**


.. code::

    {
        "type": "import",
        "input": {
            "image_properties": {
                "name": "My excellent custom image"
            }, 
            "import_from": "exports/my-excellent-image.vhd"
        }
    }


Response
""""""""""""""""


This table shows the body parameters for the response:

+-----------------+--------------+---------------------------------------------+
|Name             |Type          |Description                                  |
+=================+==============+=============================================+
|created_at       |xsd:string    |The date and time that the task resource was |
|                 |*(Required)*  |created.                                     |
+-----------------+--------------+---------------------------------------------+
|expires_at       |xsd:string    |The date and time that the task resource     |
|                 |*(Required)*  |expires. Even after the task resource        |
|                 |              |expires (and is thus no longer available to  |
|                 |              |be polled), the result of the task (such as  |
|                 |              |an imported or exported image) still exists. |
|                 |              |.. note:: This parameter is required for     |
|                 |              |responses with ``status`` of ``success`` and |
|                 |              |``failure``.                                 |
+-----------------+--------------+---------------------------------------------+
|id               |xsd:string    |The UUID of the task resource.               |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|input            |*(Required)*  |The container for import input parameters.   |
+-----------------+--------------+---------------------------------------------+
|image_properties |*(Required)*  |The container for image properties.          |
+-----------------+--------------+---------------------------------------------+
|name             |xsd:string    |The name of the image.                       |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|import_from      |xsd:string    |The source of the imported image.            |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|message          |xsd:string    |``None`` if task import succeeded or the     |
|                 |*(Required)*  |reason why the import failed. Possible       |
|                 |              |errors include the following: 111: The image |
|                 |              |cannot be imported. There is an unspecified  |
|                 |              |problem with your VHD that caused it to fail |
|                 |              |our validation checks. 396: The image cannot |
|                 |              |be imported. The file is not a valid VHD.    |
|                 |              |413: The image cannot be imported. The       |
|                 |              |virtual size of the disk exceeds the 40GB    |
|                 |              |limit. 523: The image cannot be imported.    |
|                 |              |Only fixed or dynamic disks may be imported. |
|                 |              |609: The image cannot be imported. The       |
|                 |              |physical size of the disk exceeds the 40GB   |
|                 |              |limit. 614: The image cannot be imported.    |
|                 |              |The internal UUID of the VHD is all zeros.   |
|                 |              |721: The image cannot be imported. Your VHD  |
|                 |              |has a parent disk. Only a stand-alone VHD    |
|                 |              |may be imported.                             |
+-----------------+--------------+---------------------------------------------+
|result           |*(Required)*  |The container for results. .. note:: This    |
|                 |              |parameter is required for responses with     |
|                 |              |``status`` of ``success``.                   |
+-----------------+--------------+---------------------------------------------+
|image_id         |xsd:uuid      |The UUID of the image.                       |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|owner            |xsd:string    |The tenant-id of the task owner.             |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|schema           |xsd:string    |The schema of the task.                      |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|self             |xsd:string    |The link to the task.                        |
|                 |*(Required)*  |                                             |
+-----------------+--------------+---------------------------------------------+
|status           |xsd:string    |The status of the task. For possible task    |
|                 |*(Required)*  |statuses, see ` 1.4.2. Task statuses         |
|                 |              |<http://docs.rackspace.com/images/api/v2/ci- |
|                 |              |devguide/content/task-statuses.html>`__.     |
+-----------------+--------------+---------------------------------------------+
|type             |xsd:string    |The type of the task ( ``export`` for task   |
|                 |*(Required)*  |exports).                                    |
+-----------------+--------------+---------------------------------------------+
|updated_at       |xsd:string    |The date and time that the task resource was |
|                 |*(Required)*  |updated.                                     |
+-----------------+--------------+---------------------------------------------+





**Example Import Task - Pending Response**


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
     

