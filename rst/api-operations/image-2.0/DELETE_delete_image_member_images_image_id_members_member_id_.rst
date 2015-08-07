=============================================================================
Delete Image Member -  Rackspace Cloud Images Developer Guide - API v2.0
=============================================================================

Delete Image Member
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <DELETE_delete_image_member_images_image_id_members_member_id_.rst#request>`__
`Response <DELETE_delete_image_member_images_image_id_members_member_id_.rst#response>`__

.. code-block:: javascript

    DELETE /images/{image_id}/members/{member_id}

Deletes the specified ``account ID/tenant ID`` from the member list of the specified image.

This operation deletes the image member from the image. This call, which can only be made by the image owner, removes users from the list of members who have access to a shared image.

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
|{member_id}               |xsd:string               |Image member ID. For     |
|                          |                         |example, the tenant ID   |
|                          |                         |of the user with whom    |
|                          |                         |the image is being       |
|                          |                         |shared.                  |
+--------------------------+-------------------------+-------------------------+








Response
^^^^^^^^^^^^^^^^^^




