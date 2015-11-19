.. _sharing-image-get-image-member-details:

Get image member details
------------------------

If you want to see details for a specific image member, get the image member's details.

 
Get an image member's details with cURL
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Issue the following cURL command to get the image member's details.
   In this example, you list details for member ``123456`` of image
   ``a96be11e-8536-4910-92cb-de50aa19dfe6``.

   .. code::  

       curl -s https://iad.images.api.rackspacecloud.com/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members/123456 \
       -H "X-Auth-Token: $token" |python -m json.tool
                       

   **Options:**

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides
      the authentication token. If you previously exported the token
      environment variable as instructed in addlink “Exporting
      environment variables”, you can use the
      $token variable. Otherwise, substitute your actual token for the
      variable.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.

   The command returns the following response.

    
   **Example: Get an image member's details with cURL response**

   .. code::  

       {
           "created_at": "2013-10-07T17:58:03Z",
           "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
           "member_id": "123456",
           "schema": "/v2/schemas/member",
           "status": "pending",
           "updated_at": "2013-10-07T17:58:03Z"
       }
