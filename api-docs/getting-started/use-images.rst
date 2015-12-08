.. _use-images:

Use images
------------

The Cloud Images service provides basic operations for managing images, such as listing 
and updating images. You can also use tasks to import images to and export images from your 
Cloud Files account. To learn more about the fundamentals of image tasks, see 
:ref:`Asynchronous tasks <asynchronous-tasks>`.

To help you get started exploring Cloud Images, the following sections show some basic 
image operations with cURL examples.

Before running the examples, review the :ref:`Cloud Images concepts<concepts>`.

.. note:: 
     These examples use the ``$API_ENDPOINT`` and ``$AUTH_TOKEN`` environment 
     variables to specify the API endpoint and authentication token values 
     for accessing the service. Make sure you 
     :ref:`configure these variables<configure-environment-variables>` before running the 
     code samples. 

.. include:: examples/use-images/list-images.rst
.. include:: examples/use-images/get-image-details.rst
.. include:: examples/use-images/update-image.rst
.. include:: examples/use-images/import-image.rst
.. include:: examples/use-images/export-image.rst
.. include:: examples/use-images/get-task-details.rst



