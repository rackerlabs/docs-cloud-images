.. _sharing-image-get-image-member-details:

Getting image member details
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to see details for a specific image member, get the image member's details.

-  Issue the following cURL command to get the image member's details.
   In this example, you list details for member ``123456`` of image
   ``a96be11e-8536-4910-92cb-de50aa19dfe6``.

**cURL get image member details request**

   .. code::  

       curl -s $API_ENDPOINT/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members/123456 \
       -H "X-Auth-Token: $AUTH_TOKEN" |python -m json.tool
                       

   **Options:**

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides
      the authentication token. If you previously exported the token
      environment variable as instructed in 
      :ref:`configure these variables<configure-environment-variables>`, you can use the
      $AUTH_TOKEN variable. Otherwise, substitute your actual token for the variable.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.

   **Get image member details response**

   .. code::  

       {
           "created_at": "2013-10-07T17:58:03Z",
           "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
           "member_id": "123456",
           "schema": "/v2/schemas/member",
           "status": "pending",
           "updated_at": "2013-10-07T17:58:03Z"
       }
