.. _share-images:

Share images 
--------------

The Cloud Images API enables image owners to share images that they have created with 
others and to use images created by someone else. See :ref:`Image sharing <image-sharing>`
to learn more about the fundamental concepts. 

The following sections show some basic image sharing operations with cURL examples.

.. note:: 

	The user with whom the image is being shared in these examples is identified by a 
	``member_id``, which is the same as that user's tenant_id.

To help you get started exploring Cloud Images, the following sections show some basic 
image operations with cURL examples.

Before running the examples, review the :ref:`Cloud Images concepts<concepts>`.

.. note:: 
     These examples use the ``$API_ENDPOINT`` and ``$AUTH_TOKEN`` environment 
     variables to specify the API endpoint and authentication token values 
     for accessing the service. Make sure you 
     :ref:`configure these variables<configure-environment-variables>` before running the 
     code samples. 

.. include:: examples/share-images/create-image-member.rst
.. include:: examples/share-images/list-image-members.rst
.. include:: examples/share-images/get-image-member-details.rst
.. include:: examples/share-images/update-image-member.rst
.. include:: examples/share-images/delete-image-member.rst

