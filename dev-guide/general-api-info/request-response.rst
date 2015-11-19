.. _send-request-receive-responses:

API requests and responses
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You have several options for sending requests through an API:

- Developers and testers might prefer to use cURL with the command-line tool from
  http://curl.haxx.se/.

  For more information about using cURL, see 
  :ref:`How cURL commands work <how-curl-commands-work>`.

- If you like to use a more graphical interface, the REST client for Mozilla Firefox also
  works well for testing and trying out commands. See
  https://addons.mozilla.org/en-US/firefox/addon/restclient/.

  Similar browser plug-ins are available for browsers other than Firefox.

   .. note::
      If you use a browser plug-in, be sure to include the Header elements for ``Content-Type``
      and ``X-Auth-Token`` with appropriate values.

- You can download and install RESTclient, a Java application for testing ReSTful web
  services, from http://code.google.com/p/rest-client/.

.. _media-types:

Media Types
~~~~~~~~~~~

The Cloud Images API accepts and serves JSON-encoded data. The media type required in the
request varies by the following request types:

- Requests that send **JSON-encoded data** use the following media type in their
  ``Content-Type header: 'application/json'``.

- Requests that use **HTTP PATCH syntax** use the following media type in their
  ``Content-Type header: 'application/openstack-images-v2.1-json-patch'``.


.. _json-schemas:

JSON Schemas
~~~~~~~~~~~~

The necessary JSON-schema documents are provided at predictable URIs. A consumer
validates server responses and client requests based on the published schemas. The
schemas contained in this document are only examples and should not be used to validate
your requests. A client should always fetch current schemas from the server.
