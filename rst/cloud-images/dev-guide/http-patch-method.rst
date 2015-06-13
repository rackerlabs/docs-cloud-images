=================
HTTP PATCH method
=================

The Cloud Images API uses the HTTP PATCH method to update image
properties.

The HTTP PATCH request must provide a *media type* so that the server
can determine how the changes should be applied to an image resource. An
unsupported media type results in an HTTP 415 error code. For image
resources, the supported media types for PATCH requests are as follows:

*  ``'application/openstack-images-v2.0-json-patch'`` - which is
   deprecated

*  ``'application/openstack-images-v2.1-json-patch'`` - which provides
   useful and compatible functionality for JSON PATCH and is based on
   the JavaScript Object Notation (JSON) Patch standard RFC6902
   (http://tools.ietf.org/html/rfc6902).

.. note::
   In addition to working with existing image properties, you can use
   the HTTP PATCH method to add or modify user-defined properties, which you
   create, to make notes on an image. For example, you could add
   ``user_passed_qe`` (with a true or false value or a date value) or
   ``user_image_creator`` (with a name for the value).

Restricted JSON pointers
~~~~~~~~~~~~~~~~~~~~~~~~

The ``application/openstack-images-v2.1-json-patch`` *media type* adopts
a restricted form of *JSON-Pointers*, which limits the number of tokens
allowed to one token. Restricted JSON Pointers are evaluated as ordinary
JSON Pointers.

.. note::
   If a reference token contains a tilde (**~** or ``(%x7E)``) or a
   forward slash (**/** or ``(%x2F)``), encode them as '~0' and '~1' respectively.

The *ABNF* syntax is as follows:

.. code::

    restricted-json-pointer = "/" reference-token
    reference-token = *( unescaped / escaped )
    unescaped = %x00-2E / %x30-7D / %x7F-10FFFF
    escaped = "~" ( "0" / "1" )
                        

An example of converting image properties to JSON Pointers, which is
necessary to use the ``HTTP PATCH`` method, is as
follows

Image Entity:

.. code::

    {
        "id": "da3b75d9-3f4a-40e7-8a2c-bfab23927dea",
        "name": "cirros-0.3.0-x86_64-uec-ramdisk",
        "status": "active",
        "visibility": "public",
        "size": 2254249,
        "checksum": "2cec138d7dae2aa59038ef8c9aec2390",
        "~/.ssh/": "present",
        "tags": ["ping", "pong"],
        "created_at": "2012-08-10T19:23:50Z",
        "updated_at": "2012-08-10T19:23:50Z",
        "self": "/v2/images/da3b75d9-3f4a-40e7-8a2c-bfab23927dea",
        "file": "/v2/images/da3b75d9-3f4a-40e7-8a2c-bfab23927dea/file",
        "schema": "/v2/schemas/image"
    }             
                

Comparison of the JSON Pointer to the Image Entity Key Pair:

.. code::

    JSON Pointer        Image Entity Key Pair
     /name          "name":"cirros-0.3.0-x86_64-uec-ramdisk"
     /size          "size":"2254249"             
     /tags          "tags":["ping", "pong"]
     /~0~1.ssh~1    "~/.ssh/":"present"               
                

Using the HTTP PATCH method
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ``'application/openstack-images-v2.1-json-patch'`` *media type* for
the HTTP PATCH method allows a subset of operations defined in the
``application/json-patch+json`` media type. To perform an operation, you
need an operation object that consists of member key pairs. The possible
members of an operation object are as follows:

**operation** member
    -  Specified by: ``"op"``

    -  Required for all operations

    -  Identifies the type of operation to be performed.

    -  The allowed operations are as follows:

       -  add

       -  remove

       -  replace

**location** member
    -  Specified by: ``"path"``.

    -  Required for all operations.

    -  Identifies the location within the target image where the
       requested operation is to be performed.

    -  The member value is a string that contains a restricted *JSON
       Pointer* value that references the location where the operation
       is to be performed within the target image.

**value** member

    -  Specified by: ``"value"``

    -  Required for **add** and **replace** operations.

    -  Contains the actual value to add (or to use in the replace
       operation) expressed in JSON notation. String values are quoted
       and numeric values are unquoted.

.. warning::
   If an operation object contains no recognized operation member, or
   more than one operation member, an error condition results.

HTTP PATCH add operation
^^^^^^^^^^^^^^^^^^^^^^^^

The **add** operation adds a new custom user-defined property at a
specified path in the target image. The path must reference an image
property to add to an existing image. The operation object contains a
value member that specifies the value to be added.

.. warning:: 
   There is a small subset of standard image properties that can be
   added by users; please consult the `Rackspace Knowledge Center <http://www.rackspace.com/knowledge_center/>`__ for details. If
   you add any other properties as part of your PATCH request, the
   request fails.

Add Example

.. code::

    [ { "op": "add", "path": "/login-name", "value": "kvothe"} ]

HTTP PATCH remove operation
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The **remove** operation removes the custom user-defined image property
from the target image. If no image property exists at the specified
location, an error results.

.. warning::
   Some image properties used by the system are ``protected``. If you
   remove any of these properties as part of your PATCH request, the
   request fails.

Remove Example

.. code::

    [ { "op": "remove", "path": "/login-name" } ]

HTTP PATCH replace operation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The **replace** operation replaces the value of the specified image
property in the target image with a new value. The operation object
contains a value member that specifies the replacement value.

.. warning::
   Some image properties used by the system are ``protected``. If you
   modify any of these properties as part of your PATCH request, the
   request fails. To learn which standard image properties can be
   modified by users with a 
   "PATCH\updateImage\images\imageid" call.

Replace Example

.. code::

    [ {  "op": "replace", "path": "/login-name", "value": "kote" } ]

.. warning::
   If the specified image property does not exist for the target
   image, an error condition results.

