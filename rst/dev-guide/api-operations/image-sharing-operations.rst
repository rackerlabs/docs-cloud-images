.. _image-sharing-operations:

Image sharing
~~~~~~~~~~~~~

Use image sharing operations to distribute and manage images. For more information,
see :ref:`Image sharing <image-sharing>` in the Cloud Images Developer Guide.

If you are an image producer, use the :ref:`create image member <post-create-image-member>` 
and :ref:`delete image member <delete-image-member>` to manage shared images.

If you are an image consumer, use the :ref:`update image member <put-update-image-member>` 
operation to set the status for the shared image. 

.. warning:
    Before using a shared image, consider its source. It's a good idea to build critical 
    infrastructure components using only images produced by people who have earned your 
    trust. Further, as outlined in your Rackspace Cloud Terms of Service, support for a 
    non-Rackspace image is on an AS IS basis.
    
    

.. include:: methods/get-list-image-members-images-image-id-members.rst
.. include:: methods/get-get-image-member-details-images-image-id-members-member-id.rst    
.. include:: methods/post-create-image-member-images-image-id-members.rst    
.. include:: methods/delete-delete-image-member-images-image-id-members-member-id.rst   
.. include:: methods/put-update-image-member-images-image-id-members-member-id.rst    
