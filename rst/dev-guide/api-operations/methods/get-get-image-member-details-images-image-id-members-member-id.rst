.. _get-get-image-member-details-images-image-id-members-member-id:

Get image member details
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /images/{image_id}/members/{member_id}

This operation shows details of the image member. The response conforms to the schema 
found in :ref:`Get image members schema <get-image-members-schema>`
To get a successful response, either the image owner must make the call or the 
``tenant_id`` of the user making the call must match the specified ``member_id``. 
Otherwise the response is ``HTTP 404``.

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
|{member_id}               |String                   |Image member ID. For     |
|                          |                         |example, the tenant ID   |
|                          |                         |of the user with whom    |
|                          |                         |the image is being       |
|                          |                         |shared.                  |
+--------------------------+-------------------------+-------------------------+

This operation does not accept a request body.

Response
""""""""""""""""

This table shows the body parameters for the response:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|**created_at**            |String *(Required)*      |The date and time that   |
|                          |                         |the image member was     |
|                          |                         |created.                 |
+--------------------------+-------------------------+-------------------------+
| **image_id**             |String *(Required)*      |The UUID of the image.   |
+--------------------------+-------------------------+-------------------------+
| **member_id**            |String *(Required)*      |The id of the image      |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
| **schema**               |String *(Required)*      |The schema of the image  |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
| **status**               |String *(Required)*      |The status of the image  |
|                          |                         |member ( ``pending``,    |
|                          |                         |``accepted``, or         |
|                          |                         |``rejected``.            |
+--------------------------+-------------------------+-------------------------+
|**updated_at**            |String *(Required)*      |The date and time that   |
|                          |                         |the image member was     |
|                          |                         |updated.                 |
+--------------------------+-------------------------+-------------------------+


**Example Get image member details: JSON response**


.. code::

   {
       "created_at": "2014-02-20T04:15:17Z",
       "image_id": "634985e5-0f2e-488e-bd7c-928d9a8ea82a",
       "member_id": "348129",
       "schema": "/v2/schemas/member",
       "status": "pending",
       "updated_at": "2014-02-20T04:15:17Z"
   }




