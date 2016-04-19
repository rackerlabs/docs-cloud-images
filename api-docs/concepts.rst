.. _concepts:

Concepts
---------

To understand the Cloud Images service and API, review the following key terms and
concepts.

Images
~~~~~~

Server images are used to store a snapshot of a server's configuration.
If you take an image of a server, you can create a new server from that
image. The new server will have the same files and operating system that
the original server had at the time the image was created.


The Cloud Images service enables you to use standard, Rackspace-supported images
and to create, share, and use nonstandard images that are not supported by Rackspace.

.. _standard-images:

Standard images
^^^^^^^^^^^^^^^

Standard images include the following images:

*  All base images that have not reached their end of life and that are
   supplied by Rackspace for your service level

*  All images that have not reached their end of life and that are
   provided specifically for RackConnect customers

.. _nonstandard-images:

Nonstandard images
^^^^^^^^^^^^^^^^^^

Nonstandard images include the following images:

*  All imported and exported images

*  All end-of-life images

*  All shared images

*  All images that are not standard for your account's service level and
   that are not included in the subset of images provided for
   RackConnect customers

.. note::
   This is not an exhaustive list of nonstandard images.


.. _entities:

Image entities
~~~~~~~~~~~~~~

An image entity is represented by a JSON-encoded data structure and its raw binary data.

An image entity has an identifier (ID) that is guaranteed to be unique within its
endpoint. The ID is used as a token in request URIs to interact with that specific image.

An image is always guaranteed to have the following attributes: id, status, visibility,
protected, tags, created_at, file and self. The other attributes defined in the image
schema are guaranteed to be defined, but will only be returned with an image entity if
they have been explicitly set.

A client may set arbitrarily-named attributes on their images if the image json-schema
allows it. These user-defined attributes will appear like any other image attributes.

.. _image-identifiers:

Image identifiers
~~~~~~~~~~~~~~~~~

Images are uniquely identified by a *URI* that matches the following
signature:

``{image server location}/v2/images/{image_ID}``

where:

``{image server location}``
    The resource location of the Cloud Images service that knows about
    an image

``{image_ID}``
    The image identifier, which is a *UUID*, making it globally unique

.. _common-image-properties:

Image properties
~~~~~~~~~~~~~~~~~~~~~~~

To help end users use your images, you can specify additional common
properties, or metadata, on your images.

The available properties and their expected values include the following
options:

**os\_version**
    The operating system version as specified by the distributor

**os\_distro**
    The common name of the operating system distribution. 

    .. important:: You must specify the common name of the os\distro in lowercase. 
    
    The allowed values are as follows:

    **arch**
        Arch Linux

    **centos**
        Community Enterprise Operating System

    **debian**
        Debian

    **fedora**
        Fedora

    **freebsd**
        FreeBSD

    **gentoo**
        Gentoo Linux

    **mandrake**
        Mandrakelinux (MandrakeSoft)

    **mandriva**
        Mandriva Linux

    **mes**
        Mandriva Enterprise Server

    **msdos**
        Microsoft Disk Operating System

    **netbsd**
        NetBSD

    **netware**
        Novell NetWare

    **openbsd**
        OpenBSD

    **opensolaris**
        OpenSolaris

    **opensuse**
        openSUSE

    **rhel**
        Red Hat Enterprise Linux

    **sled**
        SUSE Linux Enterprise Desktop

    **ubuntu**
        Ubuntu

    **windows**
        Microsoft Windows

.. _image-sharing:

Image sharing
~~~~~~~~~~~~~

Image producers create and share images with image consumers, allowing
the consumers to use the shared image when booting a server. The
producer shares an image with the consumer by making the consumer a
member of that image. The consumer then accepts or rejects the image
by changing the image member status. After it is accepted, the image
appears in the consumer's image list. As long as the consumer is an
member of the image, the consumer can use the image, regardless of the
image member status.

.. image:: _images/image-member.png

            Sharing an image

.. note::
   In the Cloud Images API, the image member status serves three
   purposes:

   -  The member status controls whether image appears in the consumer's
      image list. If the image member status is ``accepted``, the image
      appears in the consumer's image list. Otherwise, the image does not
      appear in the image list.

   -  The member status can be used to filter the consumer's image list.
      For example, the consumer can discover images that have been shared
      with him or her by using the instructions in
      the *List images* API operation section and filtering
      the request by using ``visibility=shared&member_status=pending``.

   -  The member status lets the producer know whether the consumer has
      seen and acted on the shared image. If the status is ``accepted`` or
      ``rejected``, the consumer has definitely seen the shared image. If
      the status is ``pending``, the consumer may not be aware that an
      image was shared.

Image producers and consumers have different abilities and
responsibilities regarding image sharing. The following list shows these
abilities:

-  Image producers add or remove image members, but they may not modify
   the member status of an image member.

-  Image producers and consumers view the status of image members. When
   listing image members, the producers see all the image members, and
   the consumers see only themselves.

-  Image consumers change their own member status, but they may not add
   or remove themselves as an image member.

-  Image consumers can boot from any image shared by the image producer,
   regardless of the member status, as long as the consumer knows the
   image ID.

Sample workflow for image sharing, after image creation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. note::
   Communications between the image producer and the consumer, like
   those described in this sample workflow, must be arranged independent of the
   Cloud Images API. The consumer and producer can send notifications by
   using email, phone, Twitter, or other channels.

#. The producer posts the availability of specific images.

#. A potential consumer provides the producer with the consumer's tenant
   ID. Optionally, the producer might request the consumer's email
   address for notification purposes, but this is outside the scope of
   the API.

#. The producer shares the image with the consumer,  by using the
   *Create image member* API operation.

#. Optionally, the producer notifies the consumer that the image has
   been shared and provides the image's ID (UUID).

#. If the consumer wants the image to appear in the image list, the
   consumer uses the Cloud Images API to change the image member status
   to ``accepted``, by using the *Update image member* API operation.

#. If the consumer subsequently wants to hide the image, the consumer
   uses the Cloud Images API to change the image member status to
   ``rejected``. If the consumer wants to hide the image, but is open to
   the possibility of being reminded by the producer that the image is
   available, the consumer uses the Cloud Images API to change the image
   member status to ``pending``, by using the *Update image member* API operation.

.. _asynchronous-tasks:

Asynchronous tasks
~~~~~~~~~~~~~~~~~~~~~~~~

An image task API request performs an asynchronous image-related
operation, such as importing or exporting an image. The request creates
a disposable task resource that you poll for information about the
operation's status.

After you initiate an image import or export, poll the task's status by using
the :ref:`Get task details <get-task-details>` API operation repeatedly until the task completes. 

When the poll response has a status of ``success`` or ``failure``, the
response includes an expiration date and time. After expiration, the
disposable task resource is deleted, but the result of the task, such as
an imported or exported image, neither expires nor disappears.

For more information on task statuses, see :ref:`task statuses <task-statuses>`.

.. note::
   Tasks in the Cloud Images API conform to the uniform task interface
   provided by the OpenStack Images v2 API, with each task resource
   containing both input and result parameters. The API design enables
   individual providers, like Rackspace, to easily customize these two
   parameters.

   The *Task to import image* and *Task to export image* sections
   and "POST\exportImage\tasks\Image\Task\" show the Rackspace requirements for these
   parameters.

High-level process for importing an image
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Put the image into your Cloud Files account.

#. Submit the asynchronous import request by using the *Task to import image* API
   operation. The “Import an image by using tasks” section of this guide shows an example.

#. The Cloud Images service begins to fetch the image from your cloud
   storage and to create a new image for you. This activity takes some
   time.

#. Poll the task status by using the :ref:`Get task details <get-task-details>` operation 
   repeatedly. 

High-level process for exporting an image
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Determine the UUID of the image you want to export.

#. Submit the export request by using the *Task to export image* API operation. The
   “Export an image by using tasks” section of this guide shows an example.

#. The Cloud Images service begins to process the image, to convert it
   to a convenient format for a future export of the image to another
   cloud (or to another region of the Rackspace cloud), and to transfer
   the exported image to your Cloud Files account. This activity takes
   some time.

#. Poll the task status by using the :ref:`Get task details <get-task-details>` operation 
   repeatedly. 
   
.. _statuses:

Statuses
~~~~~~~~

The Cloud Images API uses a variety of statuses to identify the state of
images or image components. This section describes the statuses and
their values.

.. _image_statuses:

Image statuses
^^^^^^^^^^^^^^

Images in the Cloud Images service can have any of the following
statuses when you display details by using the *Get image details* API operation.

**queued**
    The image identifier has been reserved for an image in the Cloud
    Images registry. No image data has been uploaded to the Cloud Images
    service, and the image size was not explicitly set to zero on
    creation.

**saving**
    An image's raw data is being uploaded to the Cloud Images service.

**active**
    The image is fully available in the Cloud Images service. This
    status applies either after the image is uploaded or if the image
    size is explicitly set to zero on creation.

**killed**
    An error occurred during the image upload process, and the image
    data is unreadable.

**deleted**
    The Cloud Images service has retained the information about the
    image, but the image is no longer available to use. An image with
    this status will be removed automatically at a later date.

**pending\_delete**
    This status is similar to deleted, however, the Cloud Images service
    has not yet removed the image data. An image with this status is
    recoverable.

**deactivated**
    The administrator has marked the image as unavailable while it is under
    investigation. Image operations like list, get details, image sharing, and
    set metadata work; however, users cannot perform operations that must
    access image data. For example, users cannot boot from a deactivated image
    or export a deactivated image.

.. _task-statuses:

Task statuses
^^^^^^^^^^^^^

Image tasks are used for importing images from your Cloud Files account
and for exporting images to your Cloud files account. For more
information on image tasks, see :ref:`Asynchronous image tasks <asynchronous-tasks>`.

Image tasks in the Cloud Images service can have any of the following
statuses when you poll them by using the *Get details for a task* API operation.

**pending**
    The image task is waiting for execution.

**processing**
    The image task is processing.

**success**
    The image task completed successfully.

**failure**
    The image task did not complete successfully.

.. _member-statuses:

Image member statuses
^^^^^^^^^^^^^^^^^^^^^

When an image producer wants to share an image with a consumer, the producer 
creates an image member, linking the image and the consumer. As soon as an image has 
been shared, consumers can use it, regardless of image member status. Both image producers 
and consumers can check the status of an image member.

Image member status both controls whether the image appears in the
consumer's image list and lets the producer know whether the consumer
acknowledges the offer. If the consumer wants the image to appear in the
image list, the consumer accepts the image. Otherwise, the consumer
rejects the image.

If the image producer no longer wants the share an image with a
consumer, the producer deletes the image member. Once the image member
is deleted, the consumer cannot use the image, and the image is removed
from the consumer's image list.

For more information, see :ref:`image sharing <image-sharing>`.

.. note::
   *  Consumers and producers view the image status by using the
      instructions in “Get image member details”

   *  Consumers change the status any time by using the instructions in “Update
      an image member”

   *  Producers add image members by using the instructions in “Create
      an image member”

   *  Producers delete image members by using the instructions in “Delete an image
      member”

Image members can have any of the following statuses.

**accepted**
    The consumer accepts the invitation to potentially use the offered
    image, and the image appears in the consumer's image list. The
    producer knows that the consumer made an active decision about the
    image.

**rejected**
    The consumer declines the invitation to potentially use the offered
    image, and the image does not appears in the consumer's image list.
    The producer knows that the consumer made an active decision about
    the image.

**pending**
    The consumer neither accepts nor declines the invitation to
    potentially use the offered image, and may not have even noticed the
    offer. The producer might elect to send a reminder that the image is
    available, but this is outside the scope of the Cloud Images API.

.. note::
   With a ``rejected`` or ``pending``  image member status, the consumer can still use the
   image but must know the image ID, since the image is not in the image list.

.. _http-patch-method:

HTTP PATCH method
~~~~~~~~~~~~~~~~~

The Cloud Images API uses the HTTP PATCH method to update image
properties.

The HTTP PATCH request must provide a media type so that the server
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
^^^^^^^^^^^^^^^^^^^^^^^^

The ``application/openstack-images-v2.1-json-patch`` media type adopts
a restricted form of JSON Pointers, which limits the allowed number of tokens
to one token. Restricted JSON Pointers are evaluated as ordinary
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
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``'application/openstack-images-v2.1-json-patch'`` media type for
the HTTP PATCH method allows a subset of operations defined in the
``application/json-patch+json`` media type. To perform an operation, you
need an operation object that consists of member key pairs. The possible
members of an operation object are operation member, location member, and value member.

**operation** member
    -  Specified by: ``"op"``

    -  Required for all operations

    -  Identifies the type of operation to be performed.

    -  The allowed operations are as follows:

       -  **HHTP PATCH add**

       -  **HTTP PATCH remove**

       -  **HTTP PATCH replace**

**location** member
    -  Specified by: ``"path"``.

    -  Required for all operations.

    -  Identifies the location within the target image where the
       requested operation is to be performed.

    -  The member value is a string that contains a restricted JSON
       Pointer value that references the location where the operation
       is to be performed within the target image.

**value** member
    -  Specified by: ``"value"``

    -  Required for **HTTP PATCH add** and **HTTP PATCH replace** operations.

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
   added by users; please consult :how-to:`Image metadata and property protection 
   <cloud-images-faq#image-metadata-andproperty-protection>` for details. 
   If you add any other properties as part of your PATCH request, the request fails.

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
   modified by users by using the *Update image* operation.

Replace Example

.. code::

    [ {  "op": "replace", "path": "/login-name", "value": "kote" } ]

.. warning::
   If the specified image property does not exist for the target
   image, an error condition results.
