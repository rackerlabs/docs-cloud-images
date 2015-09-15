
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

.. _get-list-image-members-images-image-id-members:

List image members
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /images/{image_id}/members

Returns collection of members (users) with whom the image has been shared.

This operation returns collection of members (users) with whom the image has been shared. 
The response conforms to the schema found in :ref:`Get image members schema <get-image-members-schema>`.

If a user with whom this image is shared makes this call, the member list contains only i
nformation for that user. If a user with whom this image has not been shared makes this call, 
the response is ``HTTP 404``.

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

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|parameters.\ **members**  |Array *(Required)*       |The array of image       |
|                          |                         |members.                 |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The date and time that   |
|**created_at**            |                         |the image member was     |
|                          |                         |created.                 |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The UUID of the image.   |
|**image_id**              |                         |                         |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The id of the image      |
|**member_id**             |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The schema of the image  |
|**schema**                |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The status of the image  |
|**status**                |                         |member ( ``pending``,    |
|                          |                         |``accepted``, or         |
|                          |                         |``rejected``.            |
+--------------------------+-------------------------+-------------------------+
|parameters.members.\      |String *(Required)*      |The date and time that   |
|**updated_at**            |                         |the image member was     |
|                          |                         |updated.                 |
+--------------------------+-------------------------+-------------------------+
|parameters.\              |String *(Required)*      |The schema of the image  |
|**schema**                |                         |members.                 |
+--------------------------+-------------------------+-------------------------+

**Example: List image members: JSON response**


.. code::

   {
       "members": [
           {
               "created_at": "2013-10-07T17:58:03Z",
               "image_id": "dbc999e3-c52f-4200-bedd-3b18fe7f87fe",
               "member_id": "123456789",
               "schema": "/v2/schemas/member",
               "status": "pending",
               "updated_at": "2013-10-07T17:58:03Z"
           },
           {
               "created_at": "2013-10-07T17:58:55Z",
               "image_id": "dbc999e3-c52f-4200-bedd-3b18fe7f87fe",
               "member_id": "987654321",
               "schema": "/v2/schemas/member",
               "status": "accepted",
               "updated_at": "2013-10-08T12:08:55Z"
           }
       ],
       "schema": "/v2/schemas/members"
   }




