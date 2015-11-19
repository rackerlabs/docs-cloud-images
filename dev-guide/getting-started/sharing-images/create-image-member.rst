.. _sharing-image-create-image-member:

Create an image member
----------------------

To share an image with a particular user, you need to know who the user is, create an image 
member for that user, and associate the image member with the image.

Issue the following cURL command to create an image member for an image. In this example, 
you share the image ``a96be11e-8536-4910-92cb-de50aa19dfe6``, which you created, with
user ``123456``. You might have blogged about your image, and the user emailed you 
requesting access, so you know the user's user ID and can use it as the value for the 
member parameter.

.. code::  

   curl -s https://iad.images.api.rackspacecloud.com/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members \
   -X POST \
   -d '{"member":"123456"}' -H "X-Auth-Token: $token" 
   -H "Content-Type:application/json" |python -m json.tool
                       

**Options:**

   -  **-X**: Identifies the HTTP command. If no ``-X`` parameter is
      specified, the default is **GET**.

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides
      the content type and the authentication token. If you previously
      exported the token environment variable as instructed in
      :ref:`Exporting environment variables <export-variables>`, you can use the $token
      variable. Otherwise, substitute your actual token for the
      variable.

   -  **-d**: Specifies the JSON request body.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.

The command returns the following response.

    
**Example: Create an image member with cURL response**

.. code::  

   {
      "created_at": "2013-09-20T19:22:19Z",
      "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
      "member_id": "123456",
      "schema": "/v2/schemas/member",
      "status": "pending",
      "updated_at": "2013-09-20T19:25:31Z"
   }
                           
