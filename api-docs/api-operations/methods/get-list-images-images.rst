.. _get-list-images-images:

List images
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /images

Lists public virtual machine (VM) images.

This operation returns images you created, shared images that you accepted, and standard images. 
For more information about standard images, see :ref:`Standard images <standard-images>`. 
The response conforms to the schema found in :ref:`Get images schema <get-images-schema-schemas-images>`.

This operation returns a subset of the larger collection of images and a link that you can 
use to get the next set of images. Always check for the presence of a ``next`` link and use 
it as the URI in a subsequent ``GET`` request. Follow this pattern until a ``next`` link is no longer provided. 
The next link preserves any query parameters that you send in your initial request. 
You can use the ``first`` link to jump back to the first page of the collection. If you prefer 
to paginate through images manually, use the ``limit`` and ``marker`` parameters. 

The List Images operation accepts several types of query parameters that you can use to 
filter the results of the returned collection. 

A client can provide direct comparison filters by using most image attributes, 
such as ``name=Ubuntu``, ``visibility=public``, and so on. A client cannot filter on tags 
or anything defined as a link in the json-schema, such as ``self``, ``file``, or ``schema``. 

You can use the ``size_min`` and ``size_max`` query parameters to perform greater-than and 
less-than filtering of images based on their ``size`` attribute. The size is measured in bytes 
and refers to the size of an image when it is stored on disk.

For example, sending a ``size_min`` filter of 1048576 and size_max of 4194304 filters the 
container to include only images that are between 1 MB and 4 MB in size.

You can sort the results of this operation by using the ``sort_key`` and ``sort_dir`` parameters. 
The API uses the natural sorting of whatever image attribute is provided as the ``sort_key``. 

.. note::
   Public images may reach end-of-life and be removed from the base image list. The
   :how-to:`Hidden Base Images <hidden-base-images>` article
   lists images which have been removed from the base images list but which may still be available.
   

This table shows the possible response codes for this operation:

+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|200                       |Success                  |Request succeeded        |
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

This table shows the query parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|limit                     |String *(Optional)*      |Requests a specific page |
|                          |                         |size. Expect a response  |
|                          |                         |to a limited request to  |
|                          |                         |return between zero      |
|                          |                         |items and the number     |
|                          |                         |specified. The typical   |
|                          |                         |pattern for using the    |
|                          |                         |``limit`` and ``marker`` |
|                          |                         |parameters is to make an |
|                          |                         |initial limited request  |
|                          |                         |and then to use the ID   |
|                          |                         |of the last image from   |
|                          |                         |the response as the      |
|                          |                         |``marker`` parameter in  |
|                          |                         |a subsequent limited     |
|                          |                         |request.                 |
+--------------------------+-------------------------+-------------------------+
|marker                    |String *(Optional)*      |Specifies the ID of the  |
|                          |                         |last-seen image. The     |
|                          |                         |typical pattern for      |
|                          |                         |using the ``limit`` and  |
|                          |                         |``marker`` parameters is |
|                          |                         |to make an initial       |
|                          |                         |limited request and then |
|                          |                         |to use the ID of the     |
|                          |                         |last image from the      |
|                          |                         |response as the          |
|                          |                         |``marker`` parameter in  |
|                          |                         |a subsequent limited     |
|                          |                         |request.                 |
+--------------------------+-------------------------+-------------------------+
|name                      |String *(Optional)*      |Filter parameter that    |
|                          |                         |specifies the name of    |
|                          |                         |the image as a string.   |
+--------------------------+-------------------------+-------------------------+
|visibility                |String *(Optional)*      |Filter parameter that    |
|                          |                         |specifies image          |
|                          |                         |visibility as either     |
|                          |                         |``public``, ``private``, |
|                          |                         |or ``shared``.           |
+--------------------------+-------------------------+-------------------------+
|member_status             |String *(Optional)*      |Filter parameter that    |
|                          |                         |shows images with the    |
|                          |                         |specified member status  |
|                          |                         |for only those images    |
|                          |                         |shared with the user.    |
|                          |                         |Valid values are         |
|                          |                         |``accepted``,            |
|                          |                         |``pending``,             |
|                          |                         |``rejected``, and        |
|                          |                         |``all``. The default is  |
|                          |                         |``accepted``.            |
+--------------------------+-------------------------+-------------------------+
|owner                     |String *(Optional)*      |Filter parameter that    |
|                          |                         |shows images shared with |
|                          |                         |the user by the          |
|                          |                         |specified tag.           |
+--------------------------+-------------------------+-------------------------+
|tag                       |String *(Optional)*      |Filter parameter that    |
|                          |                         |shows images with the    |
|                          |                         |specified tag, where the |
|                          |                         |owner is indicated by    |
|                          |                         |tenant ID.               |
+--------------------------+-------------------------+-------------------------+
|status                    |Int *(Optional)*         |Filter parameter that    |
|                          |                         |species the image status |
|                          |                         |as ``queued``,           |
|                          |                         |``saving``, ``active``,  |
|                          |                         |``killed``, ``deleted``, |
|                          |                         |or ``pending_delete``.   |
+--------------------------+-------------------------+-------------------------+
|size_min                  |String *(Optional)*      |Filter parameter that    |
|                          |                         |specifies the minimum    |
|                          |                         |size of the image in     |
|                          |                         |bytes.                   |
+--------------------------+-------------------------+-------------------------+
|size_max                  |String *(Optional)*      |Filter parameter that    |
|                          |                         |specifies the maximum    |
|                          |                         |size of the image in     |
|                          |                         |bytes.                   |
+--------------------------+-------------------------+-------------------------+
|sort_key                  |String *(Optional)*      |Sort key. Results will   |
|                          |                         |be sorted by the         |
|                          |                         |requested image          |
|                          |                         |property. Accepted       |
|                          |                         |values are ``name``,     |
|                          |                         |``status``,              |
|                          |                         |``container_format``,    |
|                          |                         |``disk_format``,         |
|                          |                         |``size``, ``id``,        |
|                          |                         |``created_at``, and      |
|                          |                         |``updated_at``. The      |
|                          |                         |default is               |
|                          |                         |``created_at``.          |
+--------------------------+-------------------------+-------------------------+
|sort_dir                  |String *(Optional)*      |Sort direction. Valid    |
|                          |                         |values are ``asc``       |
|                          |                         |(ascending) and ``desc`` |
|                          |                         |(descending). The        |
|                          |                         |default is ``desc``.     |
+--------------------------+-------------------------+-------------------------+

This operation does not accept a request body.


Response
""""""""""""""""

This table shows the body parameters for the response:

+---------------------+-------------+---------------------------------------------+
|Name                 |Type         |Description                                  |
+=====================+=============+=============================================+
|**images**\.[]       |Array        |The array of the images in the list.         |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\ **id**      |String       |The UUID of the image.                       |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\ **name**    |String       |The name of the image.                       |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\ **status**  |String       |The status of the image. For possible image  |
|                     |*(Required)* |statuses, see :ref:`Statuses <statuses>`.    |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |Specifies image visibility as either         |
|**visibility**       |*(Required)* |``public``, ``private``, or ``shared``.      |
+---------------------+-------------+---------------------------------------------+
|images.\             |Integer      |The size of the image in bytes.              |
|**size**             |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The checksum of the image.                   |
|**checksum**         |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The user-defined image tags.                 |
|**tags**             |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The date and time that the image was created.|
|**created_at**       |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The date and time that the image was updated.|
|**updated_at**       |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The link to the image.                       |
|**self**             |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The image file.                              |
|**file**             |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|images.\             |String       |The schema of the image.                     |
|**schema**           |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|**first**            |String       |The URI for the first image in the list.     |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|**next**             |String       |The URI for the next image in the list.      |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+
|**schema**           |String       |The schema of the images list.               |
|                     |*(Required)* |                                             |
+---------------------+-------------+---------------------------------------------+

**Example List images: JSON response**


.. code::

   {
      "images":
      [
         {
            "id":"da3b75d9-3f4a-40e7-8a2c-bfab23927dea",
            "name":"cirros-0.3.0-x86_64-uec-ramdisk",
            "status":"active",
            "visibility":"public",
            "size":2254249,
            "checksum":"2cec138d7dae2aa59038ef8c9aec2390",
            "tags":[
               "ping",
               "pong"
            ],
            "created_at":"2012-08-10T19:23:50Z",
            "updated_at":"2012-08-10T19:23:50Z",
            "self":"/v2/images/da3b75d9-3f4a-40e7-8a2c-bfab23927dea",
            "file":"/v2/images/da3b75d9-3f4a-40e7-8a2c-bfab23927dea/file",
            "schema":"/v2/schemas/image"},
         {
            "id":"0d5bcbc7-b066-4217-83f4-7111a60a399a",
            "name":"cirros-0.3.0-x86_64-uec",
            "status":"active",
            "visibility":"public",
            "size":25165824,
            "checksum":"2f81976cae15c16ef0010c51e3a6c163",
            "tags":[ ],
            "created_at":"2012-08-10T19:23:50Z",
            "updated_at":"2012-08-10T19:23:50Z",
            "self":"/v2/images/0d5bcbc7-b066-4217-83f4-7111a60a399a",
            "file":"/v2/images/0d5bcbc7-b066-4217-83f4-7111a60a399a/file",
            "schema":"/v2/schemas/image"},
         {
            "id":"e6421c88-b1ed-4407-8824-b57298249091",
            "name":"cirros-0.3.0-x86_64-uec-kernel",
            "status":"active",
            "visibility":"public",
            "size":4731440,
            "checksum":"cfb203e7267a28e435dbcb05af5910a9",
            "tags":[ ],
            "created_at":"2012-08-10T19:23:49Z",
            "updated_at":"2012-08-10T19:23:49Z",
            "self":"/v2/images/e6421c88-b1ed-4407-8824-b57298249091",
            "file":"/v2/images/e6421c88-b1ed-4407-8824-b57298249091/file",
            "schema":"/v2/schemas/image"}
      ],
      "first":"/v2/images?limit=3",
      "next":"/v2/images?limit=3&marker=e6421c88-b1ed-4407-8824-b57298249091",
      "schema":"/v2/schemas/images"
   }
   




