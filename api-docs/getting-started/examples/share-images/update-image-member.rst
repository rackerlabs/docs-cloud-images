.. _sharing-image-update-image-member:

Updating an image member
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you send a request, outside of the Cloud Images API, to an image producer asking for 
access to an image, the image producer creates an image member with your tenant ID by using 
the instructions in :ref:`Create an image member <sharing-image-create-image-member>`. Once 
the image member has been created for you, you update the image member, either accepting the 
image (which adds it to your image list), or rejecting the image (which notifies the 
producer that you received the image share notification and don't want it in your image list).

.. tip::

	For more information about image member statuses, see 
	:ref:`Image member statuses<member-statuses>`.
 
Issue the following cURL command to update an image member for an image. In this example, 
you (member ID ``123456``) accept the offer of the shared image 
``a96be11e-8536-4910-92cb-de50aa19dfe6``.

**cURL update an image member request**

.. code::  

   curl -s $API_ENDPOINT/v2/images/a96be11e-8536-4910-92cb-de50aa19dfe6/members/123456 \
   -X PUT -d '{"status":"accepted"}' -H "Content-Type: application/json" -H "X-Auth-Token: $AUTH_TOKEN"|python -m json.tool
                       
**Options:**

-  **-X**: Identifies the HTTP command. If no ``-X`` parameter is specified, the default 
   is **GET**.

-  **-s**: Runs the command in silent mode.

-  **-H**: Specified header information. In this case, it provides the content-type and 
   the authentication token. If you previously exported the token environment variable as 
   instructed in :ref:`configure these variables<configure-environment-variables>`, 
   you can use the $AUTH_TOKEN variable. Otherwise, substitute your actual token for the variable.

-  **-d**: Specifies the JSON request body.

-  **-m json.tool**: Specifies json.tool, which pretty-prints the JSON output. For more 
   information about json.tool, see `Note <curl_stuff.html#json_tool>`__.

**Update an image member with cURL response**

.. code::  

   {
      "created_at": "2013-09-20T19:22:19Z",
      "image_id": "a96be11e-8536-4910-92cb-de50aa19dfe6",
      "member_id": "123456",
      "schema": "/v2/schemas/member",
      "status": "accepted",
      "updated_at": "2013-09-20T20:15:31Z"
   }

