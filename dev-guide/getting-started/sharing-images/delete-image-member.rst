.. _sharing-image-delete-image-member:

Delete an image member
----------------------

If you decide to no longer share your image with a user, delete that image member.

 
Delete an image member with cURL
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Issue the following cURL command to delete an image member for an image. In this example, 
	you delete the user ``123456`` so that the user can no longer share the image
	``a96be11e-8536-4910-92cb-de50aa19dfe6``.

   .. code::  

       curl -i https://iad.images.api.rackspacecloud.com/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members/123456 \
       -X DELETE \
       -H "X-Auth-Token: $token"
                       

   **Options:**

   -  **-X**: Identifies the HTTP command. If no ``-X`` parameter is
      specified, the default is **GET**.

   -  **-i**: Includes headers in the output so you can see the result
      of the request.

   -  **-H**: Specified header information. In this case, it provides
      the authentication token. If you previously exported the token
      environment variable as instructed in addlink “Exporting
      environment variables”, you can use the
      $token variable. Otherwise, substitute your actual token for the
      variable.

   If the operation is successful, it returns an ``HTTP 204`` response code
   with no response body.
