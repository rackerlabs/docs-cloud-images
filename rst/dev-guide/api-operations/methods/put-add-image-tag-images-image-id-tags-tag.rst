.. _put-add-image-tag:

Add image tag
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

    PUT /images/{image_id}/tags/{tag}

This operation adds the specified tag to the specified image.

Include the tag you want to add in the request URI ``{tag}`` path segment of the URI. 
For example, to tag image e7db3b45-8db7-47ad-8109-3fb55c2c24fd with *miracle*, use this URI: 
``PUT /v2/images/e7db3b45-8db7-47ad-8109-3fb55c2c24fd/tags/miracle``. The request body is ignored. 

An image can only be tagged once with a specific string. Multiple attempts to tag an image 
with the same string will result in a single instance of that string being added to the image's 
tags list.


This table shows the possible response codes for this operation:

+--------------------------+-------------------------+-------------------------+
|Response Code             |Name                     |Description              |
+==========================+=========================+=========================+
|204                       |Success                  |Request succeeded.       |
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
|415                       |Bad Media Type           |Bad media type. This may |
|                          |                         |result if the wrong      |
|                          |                         |media type is used in    |
|                          |                         |the cURL request.        |
+--------------------------+-------------------------+-------------------------+
|500                       |API Fault                |API fault.               |
+--------------------------+-------------------------+-------------------------+
|503                       |Service Unavailable      |The requested service is |
|                          |                         |unavailable.             |
+--------------------------+-------------------------+-------------------------+


Request
""""""""""""""""

This table shows the URI parameters for the request:

+--------------------------+-------------------------+-------------------------+
|Name                      |Type                     |Description              |
+==========================+=========================+=========================+
|{image_id}                |Uuid                     |Image ID stored through  |
|                          |                         |the image API, typically |
|                          |                         |a UUID.                  |
+--------------------------+-------------------------+-------------------------+
|{tag}                     |String                   |Image tag (may be up to  |
|                          |                         |255 characters in        |
|                          |                         |length).                 |
+--------------------------+-------------------------+-------------------------+

This operation does not accept a request body.


Response
""""""""""""""""

This operation does not return a response body.


