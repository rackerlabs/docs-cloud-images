.. _req-resp-types:

==========================
Request and response types
==========================

The |apiservice| supports the JSON data serialization formats.

The request format is specified by using the ``Content-Type`` header and is
required for operations that have a request body.

The response format can be specified in requests either by using the ``Accept``
header or adding a ``.json`` extension to the request URI. A response  can be
serialized using a format that is different from the request.
If no response format is specified, JSON is the default. If conflicting
formats are specified by using both an ``Accept`` header and a query
extension, the query extension takes precedence.

.. _media-types:

Media Types
~~~~~~~~~~~

The |product name| API accepts and serves JSON-encoded data. The media type
required in the request varies by the following request types:

- Requests that send **JSON-encoded data** use the following media type in
  their ``Content-Type header: 'application/json'``.

- Requests that use **HTTP PATCH syntax** use the following media type in their
  ``Content-Type header: 'application/openstack-images-v2.1-json-patch'``.


.. _json-schemas:

JSON Schemas
~~~~~~~~~~~~

The necessary JSON-schema documents are provided at predictable URIs. A
consumer validates server responses and client requests based on the published
schemas. The schemas contained in this document are only examples and should
not be used to validate your requests. A client should always fetch current
schemas from the server.
