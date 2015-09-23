


.. _put-update-image-member:

Update image member
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    PUT /images/{image_id}/members/{member_id}

Sets the specified status for the specified member of the specified image.

This operation updates the image member. The response conforms to the schema found in 
:ref:`Get image members schema <get-image-members-schema>`.

If the call is made by the image owner, the response is ``HTTP 403 (Forbidden)``.

If the call is made by a user who is not the owner and whose ``tenant ID`` is not the same 
as the ``{member_id}`` in the operation URI, the response is ``HTTP 404``.


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
|{member_id}               |String                   |Image member ID. For     |
|                          |                         |example, the tenant ID   |
|                          |                         |of the user with whom    |
|                          |                         |the image is being       |
|                          |                         |shared.                  |
+--------------------------+-------------------------+-------------------------+

This table shows the body parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|parameters.\ **status**   |String *(Required)*      |The status to which this |
|                          |                         |image member should be   |
|                          |                         |set. Valid values are as |
|                          |                         |follows:                 |
|                          |                         |                         |
|                          |                         |``pending``              |
|                          |                         |At creation, the         |
|                          |                         |creation, the member's   |
|                          |                         |status is set to         |
|                          |                         |pending. The image is    |
|                          |                         |not visible in the       |
|                          |                         |member's image-list, but |
|                          |                         |the member can still     |
|                          |                         |boot instances from the  |
|                          |                         |image.                   |
|                          |                         |                         |
|                          |                         |``accepted``             |
|                          |                         |The                      |
|                          |                         |image is visible in the  |
|                          |                         |member's image-list. The |
|                          |                         |member can boot          |
|                          |                         |instances from the       |
|                          |                         |image.                   |
|                          |                         |                         |
|                          |                         |``rejected``             |
|                          |                         |The \                    |
|                          |                         |member has decided that  |
|                          |                         |he or she does not want  |
|                          |                         |to see the image. The    |
|                          |                         |image is not visible in  |
|                          |                         |the member's image-list, |
|                          |                         |but the member can still |
|                          |                         |boot instances from the  |
|                          |                         |image.                   |
+--------------------------+-------------------------+-------------------------+

**Example: Update image member: JSON request**


.. code::

   {
       "status": "accepted"
   }

Response
""""""""""""""""

This table shows the body parameters for the response:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|parameters.\              |String *(Required)*      |The date and time that   |
|**created_at**            |                         |the image member was     |
|                          |                         |created.                 |
+--------------------------+-------------------------+-------------------------+
|parameters.\ **image_id** |String *(Required)*      |The UUID of the image.   |
+--------------------------+-------------------------+-------------------------+
|parameters.\ **member_id**|String *(Required)*      |The id of the image      |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|parameters.\ **schema**   |String *(Required)*      |The schema of the image  |
|                          |                         |member.                  |
+--------------------------+-------------------------+-------------------------+
|parameters.\ **status**   |String *(Required)*      |The status of the image  |
|                          |                         |member ( ``pending``,    |
|                          |                         |``accepted``, or         |
|                          |                         |``rejected``.            |
+--------------------------+-------------------------+-------------------------+
|parameters.\              |String *(Required)*      |The date and time that   |
|**updated_at**            |                         |the image member was     |
|                          |                         |updated.                 |
+--------------------------+-------------------------+-------------------------+

**Example: Update image member: JSON response**


.. code::

   {
       "created_at": "2013-09-20T19:22:19Z",
       "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
       "member_id": "554433",
       "schema": "/v2/schemas/member",
       "status": "accepted",
       "updated_at": "2013-09-20T20:15:31Z"
   }




