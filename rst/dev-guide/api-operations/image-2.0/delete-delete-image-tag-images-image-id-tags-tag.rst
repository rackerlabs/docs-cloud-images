
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

Delete Image Tag
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    DELETE /images/{image_id}/tags/{tag}

Deletes the specified tag from the image. 

This operation deletes the specified tag from the specified image. 

Include the tag you want to remove in the request URI ``{tag}`` path segment of the URI. For example, to remove the image tag 'miracle' from image e7db3b45-8db7-47ad-8109-3fb55c2c24fd, you would use: ``DELETE /v2/images/e7db3b45-8db7-47ad-8109-3fb55c2c24fd/tags/miracle``. The request body is ignored. 

An image tag can only be removed once. Subsequent attempts to remove the same tag will result in an ``HTTP 404`` error.



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
""""""""""""""""

This table shows the URI parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|{image_id}                |csapi:uuid               |Image ID stored through  |
|                          |                         |the image API, typically |
|                          |                         |a UUID.                  |
+--------------------------+-------------------------+-------------------------+
|{tag}                     |xsd:string               |Image tag (may be up to  |
|                          |                         |255 characters in        |
|                          |                         |length).                 |
+--------------------------+-------------------------+-------------------------+








Response
""""""""""""""""




