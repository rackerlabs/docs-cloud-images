.. _get-get-image-details-images-image-id:

Get image details
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /images/{image_id}

This operation shows the details for the image. The response body is a single image 
entity and conforms to the schema found in :ref:`Get image schema <get-image-schema>`.


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
|{image_id}                |Uuid                     |Image ID stored through  |
|                          |                         |the image API, typically |
|                          |                         |a UUID.                  |
+--------------------------+-------------------------+-------------------------+

This operation does not accept a request body.

Response
""""""""""""""""

This table shows the body parameters for the response:

+-------------------+------------+---------------------------------------------+
|Name               |Type        |Description                                  |
+===================+============+=============================================+
|**id**             |String      |The UUID of the image.                       |
+-------------------+------------+---------------------------------------------+
|**name**           |String      |The name of the image.                       |
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+
|**status**         |String      |The status of the image. For possible image  |
|                   |            |statuses,                                    |
|                   |            |see :ref:`Image statuses <image_statuses>`   |
+-------------------+------------+---------------------------------------------+
|**visibility**     |String      |Specifies image visibility as either         |
|                   |``public``, |``private``, or ``shared``.                  |
+-------------------+------------+---------------------------------------------+
|**checksum**       |String      |The checksum of the image.                   |
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+
|**minRam**         |String      |The minimum server RAM required for this     |
|                   |            |image.                                       |
+-------------------+------------+---------------------------------------------+
|**minDisk**        |String      |The minimum server disk size required for    |
|                   |            |this image.                                  |
+-------------------+------------+---------------------------------------------+
|**tags**           |Array       |An array of user-defined image tags.         |
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+
|**created**        |String      |The date and time that the image was created.|
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+
|**updated**        |String      |The date and time that the image was updated.|
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+
|**schema**         |String      |The schema of the image.                     |
|                   |            |                                             |
+-------------------+------------+---------------------------------------------+

**Example Get image details: JSON response**


.. code::

   {
   	"container_format": "ovf",
   	"min_ram": 512,
   	"updated_at": "2015-03-09T19:32:29Z",
   	"owner": "657197",
   	"file": "/v2/images/126a6674-6308-421f-801e-fc302ab4f53f/file",
   	"flavor_classes": "*,!onmetal",
   	"vm_mode": "hvm",
   	"id": "126a6674-6308-421f-801e-fc302ab4f53f",
   	"size": 758777106,
   	"os_distro": "centos",
   	"image_type": "base",
   	"self": "/v2/images/126a6674-6308-421f-801e-fc302ab4f53f",
   	"disk_format": "vhd",	
   	"schema": "/v2/schemas/image",
   	"status": "active",	
   	"tags": [],	
   	"visibility": "public",
   	"auto_disk_config": "disabled",
   	"min_disk": 20,
   	"name": "CentOS 7 (PVHVM)",
   	"checksum": "554bd2ad5b3a275c46b6d8983ae4da26",
   	"created_at": "2015-01-28T19:31:37Z",
   	"cache_in_nova": "True",
   	"protected": false,	
   	"os_type": "linux",
   	"com.rackspace__1__release_id": "220",
   	"com.rackspace__1__build_core": "1",
   	"com.rackspace__1__options": "0",
   	"com.rackspace__1__release_version": "10",
       "com.rackspace__1__platform_target": "PublicCloud",
   	"com.rackspace__1__build_managed": "1",
   	"com.rackspace__1__visible_managed": "0",
   	"com.rackspace__1__source": "kickstart",
   	"com.rackspace__1__ui_default_show": "True",
   	"com.rackspace__1__release_build_date": "2015-01-28_18-59-30",
   	"com.rackspace__1__visible_core": "0",
   	"com.rackspace__1__build_rackconnect": "1",
   	"com.rackspace__1__visible_rackconnect": "0",
   	"org.openstack__1__os_version": "7",
   	"org.openstack__1__architecture": "x64",
       "org.openstack__1__os_distro": "org.centos"
   }
   




