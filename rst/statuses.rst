========
Statuses
========

The Cloud Images API uses a variety of statuses to identify the state of
images or image components. This section describes the statuses and
their values.

Image statuses
~~~~~~~~~~~~~~

Images in the Cloud Images service can have any of the following
statuses when you display details by using the instructions in
http://api.rackspace.com/api-ref-images.html#images for
"GET images\imageid".

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

Task statuses
~~~~~~~~~~~~~

Image tasks are used for importing images from your Cloud Files account
and for exporting images to your Cloud files account. For more
information on image tasks, see “Asynchronous image tasks”“Asynchronous
image tasks”.

Image tasks in the Cloud Images service can have any of the following
statuses when you poll them by using instructions in “Get details for a
task”.

**pending**
    The image task is waiting for execution.

**processing**
    The image task is processing.

**success**
    The image task completed successfully.

**failure**
    The image task did not complete successfully.

Image member statuses
~~~~~~~~~~~~~~~~~~~~~

When an image producer wants to share an image with a potential image
consumer, the producer creates an image member, linking the image and
the consumer. Once an image is shared, the image is available for the
consumer to use, regardless of image member status. Both producers and
consumers can check the status of an image member.

Image member status both controls whether the image appears in the
consumer's image list and lets the producer know whether the consumer
acknowledges the offer. If the consumer wants the image to appear in the
image list, the consumer accepts the image. Otherwise, the consumer
rejects the image.

If the image producer no longer wants the share an image with a
consumer, the producer deletes the image member. Once the image member
is deleted, the consumer cannot use the image, and the image is removed
from the consumer's image list.

For more information on image sharing, see “Image sharing”“Image
sharing”.

Tips
~~~~

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

.. note::
   The consumer can still use the image, but must know the image ID,
   since the image is not in the image list.

**pending**
    The consumer neither accepts nor declines the invitation to
    potentially use the offered image, and may not have even noticed the
    offer. The producer might elect to send a reminder that the image is
    available, but this is outside the scope of the Cloud Images API.

.. note::
   The consumer can still use the image, but must know the image ID,
   since the image is not in the image list.

