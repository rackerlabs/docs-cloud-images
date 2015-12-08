.. _using-image-export-image:

Exporting an image by using tasks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To export an image from the Cloud Images service so that you can store a
copy offline, create an export task. For more information about image
tasks, see :ref:`Asynchronous tasks <asynchronous-tasks>`.

1. Issue the following cURL command to create a task to export the image. In this example, 
   the image ``ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6`` is exported to the ``exports`` 
   directory on your Cloud Files account.

**cURL export an image with cURL request**

   .. code::  

       curl -s $API_ENDPOINT/v2/tasks \
       -X POST \
       -d '{"type": "export","input":{"image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6","receiving_swift_container": "exports"}}' \
       -H "Content-Type: application/json" -H "X-Auth-Token: $AUTH_TOKEN" |python -m json.tool
                       

   **Options:**

   -  **-X**: Identifies the HTTP command. If no ``-X`` parameter is specified, the default 
      is **GET**.

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides
      the content type and the authentication token. If you previously
      exported the token environment variable as instructed in
      :ref:`configure these variables<configure-environment-variables>`, 
      you can use the $AUTH_TOKEN
      variable. Otherwise, substitute your actual token for the variable.

   -  **-d**: Specifies the JSON request body.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.
    
   **Export an image with cURL response**

   .. code::  

       {
           "created_at": "2014-02-26T02:01:13Z",
           "id": "7bdc8ede-9098-4d79-9477-697f586cb333",
           "input":{
               "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6",
               "receiving_swift_container": "exports"
           },
           "message": "None",
           "owner": "00000123",
           "schema": "/v2/schemas/task",
           "self": "/v2/tasks/7bdc8ede-9098-4d79-9477-697f586cb333",
           "status": "pending",
           "type": "export",
           "updated_at": "2014-02-26T02:01:13Z"
       }
                           

2. Note the task ID in the ``id`` parameter (in this example, 
   ``7bdc8ede-9098-4d79-9477-697f586cb333``), so you can poll the status of the task by 
   using the instructions in :ref:`Get details for a task <using-image-get-task-details>` 
   until the task succeeds or fails.
