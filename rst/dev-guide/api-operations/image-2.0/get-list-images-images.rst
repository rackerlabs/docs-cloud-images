
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

=============================================================================
List Images -  1
=============================================================================

List Images
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <get-list-images-images.html#request>`__
`Response <get-list-images-images.html#response>`__

.. code::

    GET /images

Lists public virtual machine (VM) images.

This operation returns images you created, shared images that you accepted, and standard images. For more information about standard images, see ` 1.1.1. Standard images <http://docs.rackspace.com/images/api/v2/ci-devguide/content/what-and-why.html#std-images>`__. The response conforms to the schema found in ` 4.5.1. Get images schema <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getImagesSchema_schemas_images_Schema_Calls.html>`__.

This operation returns a subset of the larger collection of images and a link that you can use to get the next set of images. Always check for the presence of a ``next`` link and use it as the URI in a subsequent ``GET`` request. Follow this pattern until a ``next`` link is no longer provided. The next link preserves any query parameters that you send in your initial request. You can use the ``first`` link to jump back to the first page of the collection. If you prefer to paginate through images manually, use the ``limit`` and ``marker`` parameters. 

The List Images operation accepts several types of query parameters that you can use to filter the results of the returned collection. 

A client can provide direct comparison filters by using most image attributes, such as ``name=Ubuntu``, ``visibility=public``, and so on. A client cannot filter on tags or anything defined as a link in the json-schema, such as ``self``, ``file``, or ``schema``. 

You can use the ``size_min`` and ``size_max`` query parameters to perform greater-than and less-than filtering of images based on their ``size`` attribute. The size is measured in bytes and refers to the size of an image when it is stored on disk.

For example, sending a ``size_min`` filter of 1048576 and size_max of 4194304 filters the container to include only images that are between 1 MB and 4 MB in size.

You can sort the results of this operation by using the ``sort_key`` and ``sort_dir`` parameters. The API uses the natural sorting of whatever image attribute is provided as the ``sort_key``. 

.. note::
   Public images may reach end-of-life and be removed from the base image list. This ` Hidden Base Images article <http://www.rackspace.com/knowledge_center/article/hidden-base-images>`__ contains images which have been removed from the base images list but which may still be available.
   
   



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
|503                       |Service Unavailable      |The requested service is |
|                          |                         |unavailable.             |
+--------------------------+-------------------------+-------------------------+
|500                       |API Fault                |API fault.               |
+--------------------------+-------------------------+-------------------------+
|404                       |Not Found                |Resource not found.      |
+--------------------------+-------------------------+-------------------------+


Request
^^^^^^^^^^^^^^^^^




This table shows the query parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|limit                     |xsd:string *(Required)*  |Requests a specific page |
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
|marker                    |xsd:string *(Required)*  |Specifies the ID of the  |
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
|name                      |xsd:string *(Required)*  |Filter parameter that    |
|                          |                         |specifies the name of    |
|                          |                         |the image as a string.   |
+--------------------------+-------------------------+-------------------------+
|visibility                |imageapi:string          |Filter parameter that    |
|                          |*(Required)*             |specifies image          |
|                          |                         |visibility as either     |
|                          |                         |``public``, ``private``, |
|                          |                         |or ``shared``.           |
+--------------------------+-------------------------+-------------------------+
|member_status             |imageapi:string          |Filter parameter that    |
|                          |*(Required)*             |shows images with the    |
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
|owner                     |imageapi:string          |Filter parameter that    |
|                          |*(Required)*             |shows images shared with |
|                          |                         |the user by the          |
|                          |                         |specified tag.           |
+--------------------------+-------------------------+-------------------------+
|tag                       |imageapi:string          |Filter parameter that    |
|                          |*(Required)*             |shows images with the    |
|                          |                         |specified tag, where the |
|                          |                         |owner is indicated by    |
|                          |                         |tenant ID.               |
+--------------------------+-------------------------+-------------------------+
|status                    |xsd:int *(Required)*     |Filter parameter that    |
|                          |                         |species the image status |
|                          |                         |as ``queued``,           |
|                          |                         |``saving``, ``active``,  |
|                          |                         |``killed``, ``deleted``, |
|                          |                         |or ``pending_delete``.   |
+--------------------------+-------------------------+-------------------------+
|size_min                  |xsd:string *(Required)*  |Filter parameter that    |
|                          |                         |specifies the minimum    |
|                          |                         |size of the image in     |
|                          |                         |bytes.                   |
+--------------------------+-------------------------+-------------------------+
|size_max                  |xsd:string *(Required)*  |Filter parameter that    |
|                          |                         |specifies the maximum    |
|                          |                         |size of the image in     |
|                          |                         |bytes.                   |
+--------------------------+-------------------------+-------------------------+
|sort_key                  |xsd:string *(Required)*  |Sort key. All image      |
|                          |                         |attributes can be used   |
|                          |                         |as the sort key, except  |
|                          |                         |``tags`` and ``link``    |
|                          |                         |attributes. The default  |
|                          |                         |is ``created_at``.       |
+--------------------------+-------------------------+-------------------------+
|sort_dir                  |xsd:string *(Required)*  |Sort direction. Valid    |
|                          |                         |values are ``asc``       |
|                          |                         |(ascending) and ``desc`` |
|                          |                         |(descending). The        |
|                          |                         |default is ``desc``.     |
+--------------------------+-------------------------+-------------------------+







Response
^^^^^^^^^^^^^^^^^^


This table shows the body parameters for the response:

+----------------+---------------+---------------------------------------------+
|Name            |Type           |Description                                  |
+================+===============+=============================================+
|images          |array          |The array of the images in the list.         |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|id              |xsd:string     |The UUID of the image.                       |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|name            |xsd:string     |The name of the image.                       |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|status          |xsd:string     |The status of the image. For possible image  |
|                |*(Required)*   |statuses, see ` 1.4.1. Image statuses        |
|                |               |<http://docs.rackspace.com/images/api/v2/ci- |
|                |               |devguide/content/image-statuses.html>`__.    |
+----------------+---------------+---------------------------------------------+
|visibility      |xsd:string     |Specifies image visibility as either         |
|                |*(Required)*   |``public``, ``private``, or ``shared``.      |
+----------------+---------------+---------------------------------------------+
|size            |xsd:integer    |The size of the image in bytes.              |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|checksum        |xsd:string     |The checksum of the image.                   |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|tags            |xsd:string     |The user-defined image tags.                 |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|created_at      |xsd:string     |The date and time that the image was created.|
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|updated_at      |xsd:string     |The date and time that the image was updated.|
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|self            |xsd:string     |The link to the image.                       |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|file            |xsd:string     |The image file.                              |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|schema          |xsd:string     |The schema of the image.                     |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|first           |xsd:string     |The URI for the first image in the list.     |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|next            |xsd:string     |The URI for the next image in the list.      |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+
|schema          |xsd:string     |The schema of the images list.               |
|                |*(Required)*   |                                             |
+----------------+---------------+---------------------------------------------+





**Example List Images: JSON response**


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
    

