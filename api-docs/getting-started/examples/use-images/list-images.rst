.. _using-image-list-images:

Listing images 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To find out what images are available, list them.

1. Issue the following cURL command.


   **cURL list images request**

   .. code::  

       curl -s $API_ENDPOINT/v2/images -H "X-Auth-Token: $AUTH_TOKEN" |python -m json.tool
                       

   **Options:**

   -  **-s**: Runs the command in silent mode.

   -  **-H**: Specified header information. In this case, it provides the authentication 
      token. If you previously exported the token environment variable as instructed in 
      :ref:`configure these variables<configure-environment-variables>`, 
      you can use the $AUTH_TOKEN variable. Otherwise, substitute your actual token for the variable.

   -  **-m json.tool**: Specifies json.tool, which pretty-prints the
      JSON output. For more information about json.tool, see
      :ref:`json.tool note <json-tool>`.

   The command returns an array of images. The details for the Ubuntu
   12.04 image within the array are shown in following example, with
   other images removed for brevity.

    
   **List images response**

   .. code::  

       {
          "images":
          [
             {
               "auto_disk_config": "disabled",
               "cache_in_nova": "True",
               "checksum": "acd9be13a17af33ec8f66ac5b1afc44a",
               "com.rackspace__1__build_core": "1",
               "com.rackspace__1__build_managed": "1",
               "com.rackspace__1__build_rackconnect": "1",
               "com.rackspace__1__options": "0",
               "com.rackspace__1__platform_target": "PublicCloud",
               "com.rackspace__1__release_build_date": "2014-03-19_10-50-10",
               "com.rackspace__1__release_id": "1003",
               "com.rackspace__1__release_version": "3",
               "com.rackspace__1__source": "kickstart",
               "com.rackspace__1__visible_core": "1",
               "com.rackspace__1__visible_managed": "0",
               "com.rackspace__1__visible_rackconnect": "1",
               "container_format": "ovf",
               "created_at": "2014-03-19T16:28:33Z",
               "disk_format": "vhd",
               "file": "/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2/file",
               "id": "c9c7732f-5129-4930-a835-3781255fb1e2",
               "image_type": "base",
               "min_disk": 20,
               "min_ram": 512,
               "name": "Ubuntu 12.04 LTS (Precise Pangolin) (PVHVM)",
               "org.openstack__1__architecture": "x64",
               "org.openstack__1__os_distro": "com.ubuntu",
               "org.openstack__1__os_version": "12.04",
               "os_distro": "ubuntu",
               "os_type": "linux",
               "protected": false,
               "schema": "/v2/schemas/image",
               "self": "/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2",
               "size": 647449489,
               "status": "active",
               "tags": [],
               "updated_at": "2014-03-26T21:44:54Z",
               "visibility": "public",
               "vm_mode": "hvm"
            }
          ],
          "next": "/v2/images?marker=c9c7732f-5129-4930-a835-3781255fb1e2",
          "schema": "/v2/schemas/images"
       }
                           

2. Copy the image ID of the image that you want to use. Find the image
   ID in the ``id`` field of the output. In this example, the ``id`` of
   the Ubuntu 12.04 image is ``c9c7732f-5129-4930-a835-3781255fb1e2``.
