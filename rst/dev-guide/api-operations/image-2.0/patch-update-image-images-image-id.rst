
.. THIS OUTPUT IS GENERATED FROM THE WADL. DO NOT EDIT.

=============================================================================
Update Image -  1
=============================================================================

Update Image
~~~~~~~~~~~~~~~~~~~~~~~~~

`Request <patch-update-image-images-image-id.html#request>`__
`Response <patch-update-image-images-image-id.html#response>`__

.. code::

    PATCH /images/{image_id}

Updates the specified image. 

This operation allows you to update an image that you own. The request body must conform to the ``'application/openstack-images-v2.1-json-patch'`` media type. The response conforms to the schema found in ` 4.5.2. Get image schema <http://docs.rackspace.com/images/api/v2/ci-devguide/content/GET_getImageSchema_schemas_image_Schema_Calls.html>`__.

You can use the ``HTTP PATCH`` method to update certain standard properties, and to add, update, or remove custom, user-defined image properties. For more information, see ` 2.4. HTTP PATCH method <http://docs.rackspace.com/images/api/v2/ci-devguide/content/patch-method.html>`__ in this guide. Here are some guidelines for custom, user-defined properties. 

* Adding properties: You can add custom properties to your image.
 
 
 
 * Naming properties: We recommend you name a custom property by prefixing your domain or name, and we do not allow you to use ``com.rackspace`` as the prefix. For example, ``com.mycompany.myproperty`` and ``myname.myproperty`` are valid, and ``com.rackspace.myproperty`` is not allowed.
 
 Do not use the prefix ``org.openstack`` since OpenStack might add a property with the same name.
* Deleting properties: You can delete any custom property which you previously added to your image.
* Updating properties: You can update any custom properties that you previously added to an image that you own, and you can update the following standard properties:
 
 
 
 * ``name``
 * ``tags``
 * ``os_distro``
 * ``os_version``
 * ``protected``
 * ``container_format`` (changing this may render your image unusable)
 * ``disk_format`` (changing this may render your image unusable)
 * ``min_disk`` (changing this affects what flavors you can use with the image)
 * ``min_ram`` (changing this affects what flavors you can use with the image)
 * ``ramdisk_id`` (only applies to disk_format of ``ami`` )
 * ``kernel_id`` (only applies to disk_format of ``ami`` )




In general, you can update any properties you own, but do not expect to be able to update anyone else's properties. For example, you can't update any properties starting with ``com.rackspace``, and you might not be able to update some properties starting with ``org.openstack``.



This table shows the possible response codes for this operation:


+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|200                       |Success                  |Request succeeded.       |
+--------------------------+-------------------------+-------------------------+
|400                       |Error                    |A general error has      |
|                          |                         |occured.                 |
+--------------------------+-------------------------+-------------------------+
|401                       |Unauthorized             |Unauthorized.            |
+--------------------------+-------------------------+-------------------------+
|403                       |Forbidden                |Forbidden.               |
+--------------------------+-------------------------+-------------------------+
|405                       |Bad Method               |Bad method.              |
+--------------------------+-------------------------+-------------------------+
|413                       |Over Limit               |The number of items      |
|                          |                         |returned is above the    |
|                          |                         |allowed limit.           |
+--------------------------+-------------------------+-------------------------+
|503                       |Service Unavailable      |The requested service is |
|                          |                         |unavailable.             |
+--------------------------+-------------------------+-------------------------+
|500                       |API Fault                |API fault.               |
+--------------------------+-------------------------+-------------------------+
|415                       |Bad Media Type           |Bad media type. This may |
|                          |                         |result if the wrong      |
|                          |                         |media type is used in    |
|                          |                         |the cURL request.        |
+--------------------------+-------------------------+-------------------------+


Request
^^^^^^^^^^^^^^^^^

This table shows the URI parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|{image_id}                |csapi:uuid               |Image ID stored through  |
|                          |                         |the image API, typically |
|                          |                         |a UUID.                  |
+--------------------------+-------------------------+-------------------------+





This table shows the body parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|op                        |xsd:string *(Required)*  |The operation to be      |
|                          |                         |executed ( ``add``,      |
|                          |                         |``remove``, or           |
|                          |                         |``replace`` ).           |
+--------------------------+-------------------------+-------------------------+
|path                      |xsd:string *(Required)*  |The location within the  |
|                          |                         |image where the          |
|                          |                         |operation is to be       |
|                          |                         |performed.               |
+--------------------------+-------------------------+-------------------------+
|value                     |xsd:string *(Required)*  |The actual value to be   |
|                          |                         |added or replaced. It is |
|                          |                         |not required for the     |
|                          |                         |``delete`` operation.    |
+--------------------------+-------------------------+-------------------------+





**Example Update Image: JSON request**


.. code::

        [
            {"op": "replace", "path": "/name", "value": "Fedora 17"},
            {"op": "replace", "path": "/tags", "value": ["fedora", "beefy"]}
        ]


Response
^^^^^^^^^^^^^^^^^^


This table shows the body parameters for the response:

+----------------+---------------+---------------------------------------------+
|Name            |Type           |Description                                  |
+================+===============+=============================================+
|id              |xsd:string     |The UUID of the image.                       |
+----------------+---------------+---------------------------------------------+
|name            |xsd:string     |The name of the image.                       |
+----------------+---------------+---------------------------------------------+
|status          |xsd:string     |The status of the image. For possible image  |
|                |               |statuses, see ` 1.4.1. Image statuses        |
|                |               |<http://docs.rackspace.com/images/api/v2/ci- |
|                |               |devguide/content/image-statuses.html>`__.    |
+----------------+---------------+---------------------------------------------+
|visibility      |xsd:string     |Specifies image visibility as either         |
|                |               |``public``, ``private``, or ``shared``.      |
+----------------+---------------+---------------------------------------------+
|checksum        |xsd:string     |The checksum of the image.                   |
+----------------+---------------+---------------------------------------------+
|minRam          |xsd:string     |The minimum server RAM required for this     |
|                |               |image.                                       |
+----------------+---------------+---------------------------------------------+
|minDisk         |xsd:string     |The minimum server disk size required for    |
|                |               |this image.                                  |
+----------------+---------------+---------------------------------------------+
|tags            |array          |An array of user-defined image tags.         |
+----------------+---------------+---------------------------------------------+
|created_at      |xsd:string     |The date and time that the image was created.|
+----------------+---------------+---------------------------------------------+
|updated_at      |xsd:string     |The date and time that the image was updated.|
+----------------+---------------+---------------------------------------------+
|schema          |xsd:string     |The schema of the image.                     |
+----------------+---------------+---------------------------------------------+





**Example Update Image: JSON response**


.. code::

    {
       "id":"e7db3b45-8db7-47ad-8109-3fb55c2c24fd",
       "name":"Fedora 17",
       "status":"queued",
       "visibility":"public",
       "tags": ["fedora", "beefy"],
       "created_at":"2012-08-11T17:15:52Z",
       "updated_at":"2012-08-11T17:15:52Z",
       "self":"/v2/images/e7db3b45-8db7-47ad-8109-3fb55c2c24fd",
       "file":"/v2/images/e7db3b45-8db7-47ad-8109-3fb55c2c24fd/file",
       "schema":"/v2/schemas/image"
    }
    

