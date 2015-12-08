.. _sharing-image-list-image-members:

Listing image members
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to see everyone with whom you've shared an image and the status of each member, 
list the image members.

-  Issue the following cURL command to list the image members for an
   image. In this example, you list members for image
   ``a96be11e-8536-4910-92cb-de50aa19dfe6``.

**cURL list image members request**

   .. code::  

       curl -s API_ENDPOINT/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members \
       -H "X-Auth-Token: $AUTH_TOKEN" |python -m json.tool
                       

   **Options:**

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides the authentication 
      token. If you previously exported the token environment variable as instructed in 
      :ref:`configure these variables<configure-environment-variables>`, you can use the $AUTH_TOKEN
      variable. Otherwise, substitute your actual token for the variable.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.
    
   **List image members with cURL response**

   .. code::  

       {
           "members": [
               {
                   "created_at": "2013-10-07T17:58:03Z",
                   "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
                   "member_id": "123456",
                   "schema": "/v2/schemas/member",
                   "status": "pending",
                   "updated_at": "2013-10-07T17:58:03Z"
               },
               {
                   "created_at": "2013-10-07T17:58:55Z",
                   "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
                   "member_id": "9876543",
                   "schema": "/v2/schemas/member",
                   "status": "accepted",
                   "updated_at": "2013-10-08T12:08:55Z"
               }
           ],
           "schema": "/v2/schemas/members"
       }

