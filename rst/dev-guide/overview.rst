.. _ci-dg-overview:

========
Overview
========

The Rackspace Cloud Images service enables developers to create and
manipulate images, image members, and associated metadata through a
simple Representational State Transfer (REST) web service interface.

The `Cloud Images
FAQ <http://www.rackspace.com/knowledge_center/article/cloud-images-frequently-asked-questions>`__
in the Knowledge Center provides more information about the Cloud Images
service.

Cloud Images brings access to the OpenStack Image Registry and Delivery Service directly 
to Rackspace open cloud customers, thereby providing services for discovering, registering, 
and retrieving virtual machine images (and their metadata) by using a RESTful API.

Image **sharing** provides a mechanism for customers to give access to images in their account 
to other customers. Customer A initiates sharing with Customer B, and Customer B accepts 
the offer. The image is not copied into Customer B's repository, but Customer B has access 
to the image in Customer A's repository.

Image **import** allows customers to import images into the Rackspace cloud. Customers 
upload the image to Cloud Files, and then they use the import feature to make it into a 
cloud image. Image **export** allows customers to copy images from Cloud Images into 
Cloud Files for future downloading.

This chapter describes what images are, how you share images with
others, and how you use asynchronous image tasks.

.. _ci-dg-overview-images:

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
`Rackspace Standard and Non-Standard
Images <http://www.rackspace.com/knowledge_center/article/rackspace-standard-and-non-standard-images>`__.

Cloud Images has the following expected benefits:

- Images can be imported and exported among public cloud, private cloud and sources outside of Rackspace.

     - Images are portable, taking full advantage of the open cloud.

     - Images are imported from a private cloud into the public cloud for cloud-bursting.

     - Images created in the public cloud can be imported to a private cloud, or to 
       another provider's cloud, for redundancy and high availability.

- Customers share images.

     - Users with multiple accounts share images among the accounts.

     - Images are shared as an informal "image marketplace".

.. _ci-dg-overview-standard-images:

Standard images
~~~~~~~~~~~~~~~

Standard images include the following images:

*  All base images that have not reached their end of life and that are
   supplied by Rackspace for your service level

*  All images that have not reached their end of life and that are
   provided specifically for RackConnect customers

.. _ci-dg-overview-nonstandard-images:

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

.. include:: image-sharing.txt

.. include:: image-tasks.txt

.. include:: statuses.txt
