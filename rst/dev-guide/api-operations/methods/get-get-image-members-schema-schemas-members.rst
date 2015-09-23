.. _get-image-members-schema:

Get image members schema
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    GET /schemas/members

Gets a json-schema document that represents an image members entity (a container of member entities).

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

**Example Get image members schema: JSON response**


.. code::

   {
       "name": "members",
       "properties": {
           "members": {
               "items": {
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
               },
               "type": "array"
           },
           "schema": {
               "type": "string"
           }
       },
       "links": [
           {
               "href": "{schema}",
               "rel": "describedby"
           }
       ]
   }




