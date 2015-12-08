.. _using-image-get-task-details:

Getting details for a task
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To find when an import or export task finishes and whether it worked, get the details for 
that task.

1. Issue the following cURL command to get details for an import task, by using the task 
   ID that you got from importing or exporting an image. In this example, you poll task 
   ``fc29a67c-ad76-49bc-a317-a5f38dcb44c0`` and get a status of ``pending``. If you 
   continue polling, you will eventually get a status of ``success`` or ``failure``.

   **cURL get details for a task request**

   .. code::  

       curl -s $API_ENDPOINT/v2/tasks/fc29a67c-ad76-49bc-a317-a5f38dcb44c0  \
       -H "X-Auth-Token: $AUTH_TOKEN" |python -m json.tool
                       

   **Options:**

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides the authentication 
      token. If you previously exported the token environment variable as instructed in 
      :ref:`configure these variables<configure-environment-variables>`, 
      you can use the $AUTH_TOKEN variable. Otherwise, substitute your actual token for the variable.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.
 
   **Get details for a task response (pending)**

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
                           

2. Continue to reissue the operation, until the status is either ``success`` or ``failure``.

   When an **import task** completes successfully, note the image ID so that you can share 
   it or use it to boot a server. In this example, the image ID is 
   ``1d944ab7-6748-4f3c-b7e2-3553bf006677``.

    
   **Get details for an import task response (success)**

   .. code::  

       {
           "created_at": "2014-02-26T03:02:23Z",
           "expires_at": "2014-02-28T03:28:18Z",
           "id": "d8dd8c24-2534-473c-881f-9097bc784068",
           "input": {
               "image_properties": {
                   "name": "My excellent custom image"
               },
               "import_from": "exports/my-excellent-image.vhd"
           },
           "message": "None",
           "owner": "00000123",
           "result": {
               "image_id": "1d944ab7-6748-4f3c-b7e2-3553bf006677"
           },
           "schema": "/v2/schemas/task",
           "self": "/v2/tasks/d8dd8c24-2534-473c-881f-9097bc784068",
           "status": "success",
           "type": "import",
           "updated_at": "2014-02-26T03:28:18Z"
       }
                           

   When an **export task** completes successfully, note the export_location so that you can 
   find the image file in your Cloud Files account. In this example, the export_location is
   ``exports/ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6.vhd``.

    
   **Get details for an export task with cURL response (success)**

   .. code::  

       {
           "created_at": "2014-02-26T02:01:13Z",
           "expires_at": "2014-02-28T02:16:50Z",
           "id": "7bdc8ede-9098-4d79-9477-697f586cb333",
           "input":{
               "image_uuid": "ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6",
               "receiving_swift_container": "exports"
           },
           "message": "None",
           "owner": "00000123",
           "result":{
               "export_location": "exports/ca5e7f11-5d57-4dd7-8ace-03ab647fe6c6.vhd"
           },
           "schema": "/v2/schemas/task",
           "self": "/v2/tasks/7bdc8ede-9098-4d79-9477-697f586cb333",
           "status": "success",
           "type": "export",
           "updated_at": "2014-02-26T02:16:50Z"
       }
                           
