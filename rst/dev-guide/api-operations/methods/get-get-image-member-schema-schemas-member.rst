.. _get-get-image-member-schema-schemas-member:

Get image member schema
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

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
""""""""""""""""

This operation does not accept a request body.

Response
""""""""""""""""

**Example: Get image member schema: JSON response**


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




