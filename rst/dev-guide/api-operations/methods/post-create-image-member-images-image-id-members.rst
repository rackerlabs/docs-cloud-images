.. _post-create-image-member:

Create image member
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    POST /images/{image_id}/members

This operation allows you to add users, by ``member_id`` (which is the ``tenant_id`` ) 
to the list of members with whom the image is shared. The member status of a newly created 
image member is ``pending``. The response conforms to the schema found in 
:ref:`Get image members schema <get-image-members-schema>`.

If the user making the call is not the image owner, the response is ``HTTP 404``.


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
|415                       |Bad Media Type           |Bad media type. This may |
|                          |                         |result if the wrong      |
|                          |                         |media type is used in    |
|                          |                         |the cURL request.        |
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


This table shows the body parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|**member**                |String *(Required)*      |The member ID. This is   |
|                          |                         |the tenant ID of the     |
|                          |                         |user with whom the image |
|                          |                         |is to be shared.         |
+--------------------------+-------------------------+-------------------------+

**Example: Create image member: JSON request**


.. code::

   {
       "member": "554433"
   }


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
|**image_id**              |String *(Required)*      |The UUID of the image.   |
+--------------------------+-------------------------+-------------------------+
|**member_id**             |String *(Required)*      |The id of the image      |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|**schema**                |String *(Required)*      |The schema of the image  |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|**status**                |String *(Required)*      |The status of the image  |
|                          |                         |member ( ``pending``,    |
|                          |                         |``accepted``, or         |
|                          |                         |``rejected``.            |
+--------------------------+-------------------------+-------------------------+
|**updated_at**            |String *(Required)*      |The date and time that   |
|                          |                         |the image member was     |
|                          |                         |updated.                 |
+--------------------------+-------------------------+-------------------------+

**Example: Create image member: JSON response**

.. code::

   {
       "created_at": "2013-09-20T19:22:19Z",
       "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
       "member_id": "554433",
       "schema": "/v2/schemas/member",
       "status": "pending",
       "updated_at": "2013-09-20T19:25:31Z"
   }




