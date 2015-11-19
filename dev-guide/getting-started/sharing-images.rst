.. _sharing-images:

Sharing images 
--------------

The Cloud Images API enables image owners to share images that they have created with 
others and to use images created by someone else. See :ref:`Image sharing <image-sharing>`
to learn more about the fundamental concepts. The following sections show some basic image 
sharing operations with cURL examples:

-	:ref:`Create an image member <sharing-image-create-image-member>`
-	:ref:`List image members <sharing-image-list-image-members>`
-	:ref:`Get image member details <sharing-image-get-image-member-details>`
-	:ref:`Update an image member <sharing-image-update-image-member>`
-	:ref:`Delete an image member <sharing-image-delete-image-member>`


.. toctree::
   :maxdepth: 2
   
	Create an image member <sharing-images/create-image-member>
	List image members <sharing-images/list-image-members>
	Get image member details <sharing-images/get-image-member-details>
	Update an image member <sharing-images/update-image-member>
	Delete an image member <sharing-images/delete-image-member>

.. note:: 

	The user with whom the image is being shared in these examples is identified by a 
	``member_id``, which is the same as that user's tenant_id.
