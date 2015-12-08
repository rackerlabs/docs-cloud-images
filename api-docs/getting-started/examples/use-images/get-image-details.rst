.. _using-image-get-image-details:

If you need to see any additional details about an image, get the details for that image.

 
Getting details for an image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Issue the following cURL command to get details for the Ubuntu 12.04 image, using an 
image ID that you got from the :ref:`List images <using-image-list-images>` step.


**cURL get details for an image request**

.. code::  

	curl -s $API_ENDPOINT/v2/images/c9c7732f-5129-4930-a835-3781255fb1e2 \
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

**Get details for an image with cURL response**

.. code::  

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
                           
