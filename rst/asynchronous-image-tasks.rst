========================
Asynchronous image tasks
========================

An *image task* request performs an asynchronous image-related
operation, such as importing or exporting an image. The request creates
a disposable task resource that you poll for information about the
operation's status.

After you initiate an image import or export, poll the task's status with a call to
"GET\getTask\tasks\{taskID}Image\Task\Calls"until the task
completes. “Get details for a task” of this guide shows an example.

When the poll response has a status of ``success`` or ``failure``, the
response includes an expiration date and time. After expiration, the
disposable task resource is deleted, but the result of the task, such as
an imported or exported image, neither expires nor disappears.

For more information on task statuses, search for task statuses.

.. note::
   Tasks in the Cloud Images API conform to the uniform task interface
   provided by the OpenStack Images v2 API, with each task resource
   containing both input and result parameters. The API design enables
   individual providers, like Rackspace, to easily customize these two
   parameters.

The "POST\importImage\tasks\Image\Task\
and "POST\exportImage\tasks\Image\Task\" have parameters needed.

High-level process for importing an image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Put the image into your Cloud Files account.

#. Submit the asynchronous import request with a 
   "POST\importImage\tasks\Image\Task\." “Import an image by
   using tasks” of this guide shows an example.

#. The Cloud Images service begins to fetch the image from your cloud
   storage and to create a new image for you. This activity takes some
   time.

#. Poll the task status by using the calls for
   "GET\getTask\tasks\taskID\Image\Task\ “Get details for a task” of this guide shows an example.

High-level process for exporting an image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Determine the UUID of the image you want to export.

#. Submit the export request with a 
   "POST\exportImage\tasks\Image\Task call. “Export an image by
   using tasks” of this guide shows an example.

#. The Cloud Images service begins to process the image, to convert it
   to a convenient format for a future export of the image to another
   cloud (or to another region of the Rackspace cloud), and to transfer
   the exported image to your Cloud Files account. This activity takes
   some time.

#. Poll the task status by calling 
   "GET\getTask\tasks\taskID\Image\Task" to see the task details until the task
   completes. “Get details for a task” of this guide shows an example.

