.. _using-image-update-image:

Updating an image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you need to change certain details about an image, such as adding, removing, or 
modifying image properties, you can update that image. For more information about how to 
update images by using the HTTP PATCH method and how to use the request body parameters 
(``op``, ``path``, and ``value``), see :ref:`HTTP PATCH method <http-patch-method>`. For 
more information about which properties can be updated, see 
:ref:`Update image <patch-update-image-images-image-id>`.

Issue the following cURL command to update an image. In this example, you are changing 
the name of image ``c9c7732f-5129-4930-a835-3781255fb1e2`` from ``Ubuntu 12.04 LTS 
(Precise Pangolin) (PVHVM)`` to ``My Favorite Ubuntu``.

**cURL update an image request**

.. code::  

   curl -s $API_ENDPOINT/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2 \
   -X PATCH \
   -d'{{"op": "replace", "path": "/name", "value": "My Favorite Ubuntu"}}' \
   -H "Content-Type: application/json" -H "X-Auth-Token: $AUTH_TOKEN" \
   -H "Accept: application/openstack-images-v2.1-json-patch" |python -m json.tool
                       
**Options:**

-  **-X**: Identifies the HTTP command. If no ``-X`` parameter is specified, the default 
   is **GET**.

-  **-s**: Runs the command in silent mode.

-  **-H**: Specified header information. In this case, it provides the content type, the 
   authentication token, and the special format for the response body 
   (``application/openstack-images-v2.1-json-patch`` instead of ``application/json``). If 
   you previously exported the token environment variable as instructed in 
   :ref:`configure these variables<configure-environment-variables>`, you can use the $AUTH_TOKEN 
   variable. Otherwise, substitute your actual token for the variable. To learn more about 
   the response body format, see :ref:`HTTP PATCH method <http-patch-method>`.

-  **-d**: Specifies the JSON request body.

-  **-m json.tool**: Specifies json.tool, which pretty-prints the JSON output. For more 
   information about json.tool, see :ref:`json.tool note <json-tool>`.
    
**Update an image response**

.. code::  

   {
      "id":"c9c7732f-5129-4930-a835-3781255fb1e2",
      "name":"My Favorite Ubuntu",
      "status":"queued",
      "visibility":"public",
      "tags": [],
      "created_at":"2012-08-11T17:15:52Z",
      "updated_at":"2012-08-11T17:15:52Z",
      "self":"/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2",
      "file":"/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2/file",
      "schema":"/v2/schemas/image"
   }

