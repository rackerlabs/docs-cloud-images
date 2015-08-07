=============================================================================
Delete Image -  Rackspace Cloud Images Developer Guide - API v2.0
=============================================================================

Delete Image
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <DELETE_delete_image_images_image_id_.rst#request>`__
`Response <DELETE_delete_image_images_image_id_.rst#response>`__

.. code-block:: javascript

    DELETE /images/{image_id}

Deletes the specified image.

This operation deletes the image. Make sure you set ``protected`` parameter to false (Boolean) before performing the delete. If the operation succeeds, it returns an ``HTTP 204`` status code with no response body.

``An attempt to delete an image with the ``protected`` parameter set to ``true`` (boolean) results in a response code ``HTTP 403``.

``

This table shows the possible response codes for this operation:


+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|204                       |Delete Successful        |Delete request succeeded.|
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

This table shows the URI parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|{image_id}                |csapi:uuid               |Image ID stored through  |
|                          |                         |the image API, typically |
|                          |                         |a UUID.                  |
+--------------------------+-------------------------+-------------------------+








Response
^^^^^^^^^^^^^^^^^^




