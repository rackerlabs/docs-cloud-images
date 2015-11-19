.. _using-image-import-image:

Import an image by using tasks
------------------------------

To import an image to the Cloud Images service so that it is available
to use and to share, create an import task. For more information about
image tasks, see :ref:`Asynchronous tasks <asynchronous-tasks>`.

 
Import an image with cURL
~~~~~~~~~~~~~~~~~~~~~~~~~

1. Issue the following cURL command to create a task to import an image.
   In this example, the source file for the ``my-excellent-image.vhd``
   image, is in the ``exports`` directory on your Cloud Files account.

   .. code::  

       curl -s https://iad.images.api.rackspacecloud.com/v2/tasks \
       -X POST \
       -d '{"type": "import","input":{"image_properties": {"name": "My excellent custom image"},"import_from": "exports/my-excellent-image.vhd"}}' \
       -H "Content-Type: application/json" -H "X-Auth-Token: $token" |python -m json.tool
                       

   **Options:**

   -  **-X**: Identifies the HTTP command. If no ``-X`` parameter is
      specified, the default is **GET**.

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides
      the content type and the authentication token. If you previously
      exported the token environment variable as instructed in
      addlink “Exporting environment variables”, you can use the $token
      variable. Otherwise, substitute your actual token for the
      variable.

   -  **-d**: Specifies the JSON request body.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.

   The command returns the following response.

    
   **Example 2.4. Import an image with cURL response**

   .. code::  

       {
           "created_at": "2014-02-26T02:58:46Z",
           "id": "fc29a67c-ad76-49bc-a317-a5f38dcb44c0",
           "input": {
               "image_properties": {
                   "name": "My excellent custom image"
               },
               "import_from": "exports/my-excellent-image.vhd"
           },
           "message": "None",
           "owner": "00000123",
           "schema": "/v2/schemas/task",
           "self": "/v2/tasks/fc29a67c-ad76-49bc-a317-a5f38dcb44c0",
           "status": "pending",
           "type": "import",
           "updated_at": "2014-02-26T02:58:46Z"
       }
                           

2. Note the task ID in the ``id`` parameter (in this example,
   ``fc29a67c-ad76-49bc-a317-a5f38dcb44c0``), so you can poll the status of the task by 
   using the instructions in :ref:`Get details for a task <using-image-get-task-details>` 
   until the task succeeds or fails.
