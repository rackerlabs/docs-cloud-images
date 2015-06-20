==============
Concepts
==============

To take advantage of the Cloud Images service, it is helpful to be familiar with the 
concepts outlined in this section: 

- **image tasks**

- **image entities**

- **common image properties**

- **HTTP PATCH method**

Image entities
--------------

An image entity is represented by a JSON-encoded data structure and its raw binary data.

An image entity has an identifier (ID) that is guaranteed to be unique within its 
endpoint. The ID is used as a token in request URIs to interact with that specific image.

An image is always guaranteed to have the following attributes: id, status, visibility, 
protected, tags, created_at, file and self. The other attributes defined in the image 
schema are guaranteed to be defined, but will only be returned with an image entity if 
they have been explicitly set.

A client may set arbitrarily-named attributes on their images if the image json-schema 
allows it. These user-defined attributes will appear like any other image attributes.


Image identifiers
-----------------

Images are uniquely identified by a *URI* that matches the following
signature:

``{image server location}/v2/images/{image_ID}``

where:

``{image server location}``
    The resource location of the Cloud Images service that knows about
    an image

``{image_ID}``
    The image identifier, which is a *UUID*, making it globally unique


Common image properties
-----------------------

To help end users use your images, you can put additional common
properties, or metadata, on your images.

The available properties and their expected values include the following
options:

**os\_version**
    The operating system version as specified by the distributor
    
**os\_distro**
    The common name of the operating system distribution

.. important:: The common name of the os\distro must be all lowercase and entered exactly 
    as shown here. The allowed values are as follows:

    **arch**
        Arch Linux

    **centos**
        Community Enterprise Operating System

    **debian**
        Debian

    **fedora**
        Fedora

    **freebsd**
        FreeBSD

    **gentoo**
        Gentoo Linux

    **mandrake**
        Mandrakelinux (MandrakeSoft)

    **mandriva**
        Mandriva Linux

    **mes**
        Mandriva Enterprise Server

    **msdos**
        Microsoft Disk Operating System

    **netbsd**
        NetBSD

    **netware**
        Novell NetWare

    **openbsd**
        OpenBSD

    **opensolaris**
        OpenSolaris

    **opensuse**
        openSUSE

    **rhel**
        Red Hat Enterprise Linux

    **sled**
        SUSE Linux Enterprise Desktop

    **ubuntu**
        Ubuntu

    **windows**
        Microsoft Windows


.. include:: http-patch-method.txt