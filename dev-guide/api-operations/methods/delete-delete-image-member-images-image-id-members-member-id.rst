


.. _delete-image-member:

Delete image member
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    DELETE /images/{image_id}/members/{member_id}

Deletes the specified ``account ID/tenant ID`` from the member list of the specified image.

This operation deletes the image member from the image. This call, which can only be made 
by the image owner, removes users from the list of members who have access to a shared image.

If the ``{member_id}`` is not a member of the specified image, the response is ``HTTP 404``

This table shows the possible response codes for this operation:

+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|204                       |Success                  |Delete request succeeded.|
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
|{member_id}               |String                   |Image member ID. For     |
|                          |                         |example, the tenant ID   |
|                          |                         |of the user with whom    |
|                          |                         |the image is being       |
|                          |                         |shared.                  |
+--------------------------+-------------------------+-------------------------+

This operation does not accept a request body.

Response
""""""""""""""""

This operation does not return a response body.


