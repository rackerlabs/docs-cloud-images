.. _image-tasks-operations:

Image task
~~~~~~~~~~

Use image task operations to initiate and manage asynchronous image tasks
like those created when importing and exporting images.
For more information, see :ref:`Asynchronous image tasks <asynchronous-tasks>`.

.. note:: 
   The method and URI (POST tasks) used to create an asynchronous task is the same for 
   both importing and export images. However, the operations are listed separately to 
   reduce confusion. The desired end result, the request and response bodies, and the 
   examples of the two operations are different.

.. include:: methods/get-list-tasks-tasks.rst    
.. include:: methods/get-get-task-details-tasks-taskid.rst   
.. include:: methods/post-task-to-import-image-tasks.rst    
.. include:: methods/post-task-to-export-image-tasks.rst    
