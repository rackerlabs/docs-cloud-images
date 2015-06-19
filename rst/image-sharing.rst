=============
Image sharing
=============

Image producers create and share images with image consumers, allowing
the consumers to use the shared image when booting a server. The
producer shares an image with the consumer by making the consumer a
*member* of that image. The consumer then accepts or rejects the image
by changing the image member status. After it is accepted, the image
appears in the consumer's image list. As long as the consumer is an
member of the image, the consumer can use the image, regardless of the
image member status.

**Figure: Sharing an image**

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
      "GET\_listImages\_images\_Image\_Calls" “List images” and filtering
      the request by using ``visibility=shared&member_status=pending``.

   -  The member status lets the producer know whether the consumer has
      seen and acted on the shared image. If the status is ``accepted`` or
      ``rejected``, the consumer has definitely seen the shared image. If
      the status is ``pending``, the consumer may not be aware that an
      image was shared.

For more information on image member status, search for “Image member
statuses”.

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

#. The producer uses the Cloud Images API to share the image with the
   consumer.

   "POST\createImageMember\images\imageid\members" contains the API method
   details.

#. Optionally, the producer notifies the consumer that the image has
   been shared and provides the image's ID (*UUID*).

#. If the consumer wants the image to appear in the image list, the
   consumer uses the Cloud Images API to change the image member status
   to ``accepted`` with a PUT call to 
   updateImageMember\images\imageid\members\memberid.

#. If the consumer subsequently wants to hide the image, the consumer
   uses the Cloud Images API to change the image member status to
   ``rejected``. If the consumer wants to hide the image, but is open to
   the possibility of being reminded by the producer that the image is
   available, the consumer uses the Cloud Images API to change the image
   member status to ``pending`` with a PUT call to
   updateImageMember\images\imageid\members\memberid.
