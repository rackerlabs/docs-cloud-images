.. _get-images-schema-schemas-images:

Get images schema
-----------------

.. code::

    GET /schemas/images

Gets a json-schema document that represents an image members entity,
which is a container of image member entities.

The following schema is just an example. Consider only the response to the API
call as authoritative.

This table shows the possible response codes for this operation:

+-------------------------+-------------------------+-------------------------+
|Response Code            |Name                     |Description              |
+=========================+=========================+=========================+
|200                      |Success                  |Request succeeded.       |
+-------------------------+-------------------------+-------------------------+
|400                      |Error                    |A general error has      |
|                         |                         |occurred.                |
+-------------------------+-------------------------+-------------------------+
|401                      |Unauthorized             |Unauthorized.            |
+-------------------------+-------------------------+-------------------------+
|403                      |Forbidden                |Forbidden.               |
+-------------------------+-------------------------+-------------------------+
|404                      |Not Found                |Resource not found.      |
+-------------------------+-------------------------+-------------------------+
|405                      |Bad Method               |Bad method.              |
+-------------------------+-------------------------+-------------------------+
|413                      |Over Limit               |The number of items      |
|                         |                         |returned is above the    |
|                         |                         |allowed limit.           |
+-------------------------+-------------------------+-------------------------+
|500                      |API Fault                |API fault.               |
+-------------------------+-------------------------+-------------------------+
|503                      |Service Unavailable      |The requested service is |
|                         |                         |unavailable.             |
+-------------------------+-------------------------+-------------------------+


Request
^^^^^^^

This operation does not accept a request body.

Response
^^^^^^^^

**Example Get images schema: JSON response**


.. code::

   {
       "name": "images",
       "properties": {
           "first": {
               "type": "string"
           },
           "images": {
               "items": {
                   "name": "image",
                   "properties": {
                       "architecture": {
                           "description": "Operating system architecture as specified in http://docs.openstack.org/trunk/openstack-compute/admin/content/adding-images.html",
                           "type": "string"
                       },
                       "checksum": {
                           "description": "md5 hash of image contents. (READ-ONLY)",
                           "maxLength": 32,
                           "type": "string"
                       },
                       "container_format": {
                           "description": "Format of the container",
                           "enum": [
                               "ami",
                               "ari",
                               "aki",
                               "bare",
                               "ovf"
                           ],
                           "type": "string"
                       },
                       "created_at": {
                           "description": "Date and time of image registration (READ-ONLY)",
                           "type": "string"
                       },
                       "direct_url": {
                           "description": "URL to access the image file kept in external store (READ-ONLY)",
                           "type": "string"
                       },
                       "disk_format": {
                           "description": "Format of the disk",
                           "enum": [
                               "ami",
                               "ari",
                               "aki",
                               "vhd",
                               "vmdk",
                               "raw",
                               "qcow2",
                               "vdi",
                               "iso"
                           ],
                           "type": "string"
                       },
                       "file": {
                           "description": "(READ-ONLY)",
                           "type": "string"
                       },
                       "id": {
                           "description": "An identifier for the image",
                           "pattern": "^([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}$",
                           "type": "string"
                       },
                       "instance_uuid": {
                           "description": "ID of instance used to create this image.",
                           "type": "string"
                       },
                       "kernel_id": {
                           "description": "ID of image stored in Glance that should be used as the kernel when booting an AMI-style image.",
                           "pattern": "^([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}$",
                           "type": "string"
                       },
                       "locations": {
                           "description": "A set of URLs to access the image file kept in external store",
                           "items": {
                               "properties": {
                                   "metadata": {
                                       "type": "object"
                                   },
                                   "url": {
                                       "maxLength": 255,
                                       "type": "string"
                                   }
                               },
                               "required": [
                                   "url",
                                   "metadata"
                               ],
                               "type": "object"
                           },
                           "type": "array"
                       },
                       "min_disk": {
                           "description": "Amount of disk space (in GB) required to boot image.",
                           "type": "integer"
                       },
                       "min_ram": {
                           "description": "Amount of ram (in MB) required to boot image.",
                           "type": "integer"
                       },
                       "name": {
                           "description": "Descriptive name for the image",
                           "maxLength": 255,
                           "type": "string"
                       },
                       "os_version": {
                           "description": "Operating system version as specified by the distributor",
                           "type": "string"
                       },
                       "protected": {
                           "description": "If true, image will not be deletable.",
                           "type": "boolean"
                       },
                       "ramdisk_id": {
                           "description": "ID of image stored in Glance that should be used as the ramdisk when booting an AMI-style image.",
                           "pattern": "^([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}$",
                           "type": "string"
                       },
                       "schema": {
                           "description": "(READ-ONLY)",
                           "type": "string"
                       },
                       "self": {
                           "description": "(READ-ONLY)",
                           "type": "string"
                       },
                       "size": {
                           "description": "Size of image file in bytes (READ-ONLY)",
                           "type": "integer"
                       },
                       "status": {
                           "description": "Status of the image (READ-ONLY)",
                           "enum": [
                               "queued",
                               "saving",
                               "active",
                               "killed",
                               "deleted",
                               "pending_delete"
                           ],
                           "type": "string"
                       },
                       "tags": {
                           "description": "List of strings related to the image",
                           "items": {
                               "maxLength": 255,
                               "type": "string"
                           },
                           "type": "array"
                       },
                       "updated_at": {
                           "description": "Date and time of the last image modification (READ-ONLY)",
                           "type": "string"
                       },
                       "visibility": {
                           "description": "Scope of image accessibility",
                           "enum": [
                               "public",
                               "private"
                           ],
                           "type": "string"
                       }
                   },
                   "additionalProperties": {
                       "type": "string"
                   },
                   "links": [
                       {
                           "href": "{self}",
                           "rel": "self"
                       },
                       {
                           "href": "{file}",
                           "rel": "enclosure"
                       },
                       {
                           "href": "{schema}",
                           "rel": "describedby"
                       }
                   ]
               },
               "type": "array"
           },
           "next": {
               "type": "string"
           },
           "schema": {
               "type": "string"
           }
       },
       "links": [
           {
               "href": "{first}",
               "rel": "first"
           },
           {
               "href": "{next}",
               "rel": "next"
           },
           {
               "href": "{schema}",
               "rel": "describedby"
           }
       ]
   }
