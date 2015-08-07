=============================================================================
Get Image Member Schema -  Rackspace Cloud Images Developer Guide - API v2.0
=============================================================================

Get Image Member Schema
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <GET_get_image_member_schema_schemas_member.rst#request>`__
`Response <GET_get_image_member_schema_schemas_member.rst#response>`__

.. code-block:: javascript

    GET /schemas/member

Gets a json-schema document that represents an image member entity.

The following schema is just an example. Consider only the response to the API call as authoritative.



This table shows the possible response codes for this operation:


+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|200                       |Success                  |Request succeeded.       |
+--------------------------+-------------------------+-------------------------+


Request
^^^^^^^^^^^^^^^^^









Response
^^^^^^^^^^^^^^^^^^





**Example Get Image Member Schema: JSON request**


.. code::

    {
        "name": "member",
        "properties": {
            "created_at": {
                "description": "Date and time of image member creation",
                "type": "string"
            },
            "image_id": {
                "description": "An identifier for the image",
                "pattern": "^([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}$",
                "type": "string"
            },
            "member_id": {
                "description": "An identifier for the image member (tenantId)",
                "type": "string"
            },
            "status": {
                "description": "The status of this image member",
                "enum": [
                    "pending",
                    "accepted",
                    "rejected"
                ],
                "type": "string"
            },
            "updated_at": {
                "description": "Date and time of last modification of image member",
                "type": "string"
            },
            "schema": {
                "type": "string"
            }
        }
    }

