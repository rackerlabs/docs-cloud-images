=======================
Learn more about images
=======================

The Rackspace Cloud Images service enables developers to create and
manipulate images, image members, and associated metadata through a
simple Representational State Transfer (REST) web service interface.

The `*Cloud Images
FAQ* <http://www.rackspace.com/knowledge_center/article/cloud-images-frequently-asked-questions>`__
in the Knowledge Center provides more information about the Cloud Images
service.

This chapter describes what images are, how you share images with
others, and how you use asynchronous image tasks.

Images
------

Server images are used to store a snapshot of a server's configuration.
If you take an image of a server, you can create a new server from that
image. The new server will have the same files and operating system that
the original server had at the time the image was created.

The Cloud Images service provides operations that enable you to
manipulate images, to import and export images (by using tasks), and to
share images with other people.

The Cloud Images service enables you to use standard images (which are
supported by Rackspace) and to create, share, and use nonstandard images
(which are not supported by Rackspace). For more information, see
`*Rackspace Standard and Non-Standard
Images* <http://www.rackspace.com/knowledge_center/article/rackspace-standard-and-non-standard-images>`__
at
http://www.rackspace.com/knowledge\_center/article/rackspace-standard-and-non-standard-images.

Standard images
~~~~~~~~~~~~~~~

Standard images include the following images:

*  All base images that have not reached their end of life and that are
   supplied by Rackspace for your service level

*  All images that have not reached their end of life and that are
   provided specifically for RackConnect customers

Nonstandard images
~~~~~~~~~~~~~~~~~~

Nonstandard images include the following images:

*  All imported and exported images

*  All end-of-life images

*  All shared images

*  All images that are not standard for your account's service level and
   that are not included in the subset of images provided for
   RackConnect customers

.. note::
   This is not an exhaustive list of nonstandard images.

