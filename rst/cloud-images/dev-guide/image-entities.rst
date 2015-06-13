==============
Image entities
==============

An image entity is represented by a JSON-encoded data structure and its raw binary data.

An image entity has an identifier (ID) that is guaranteed to be unique within its endpoint. The ID is used as a token in request URIs to interact with that specific image.

An image is always guaranteed to have the following attributes: id, status, visibility, protected, tags, created_at, file and self. The other attributes defined in the image schema are guaranteed to be defined, but will only be returned with an image entity if they have been explicitly set.

A client may set arbitrarily-named attributes on their images if the image json-schema allows it. These user-defined attributes will appear like any other image attributes.

