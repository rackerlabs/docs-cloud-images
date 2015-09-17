.. _glossary:

==========
Glossary 
==========

The Rackspace Support Network works best with JavaScript enabled. Please
`enable JavaScript <http://enable-javascript.com>`__ to enhance your
experience.

ABNF
    The Augmented BNF (ABNF) format is a plain-text (non-XML)
    representation, which is similar to a traditional BNF (Backus-Naur
    Form) grammar, and is used as a bidirectional communications
    protocol.

image
    A collection of files for a specific operating system (OS) that you
    use to create or rebuild a server. Rackspace provides pre-built
    images. You can also create custom images from servers that you have
    launched. Custom images can be used for data backups or as "gold"
    images for additional servers. In the Rackspace Cloud Images
    service, an image is represented by a JSON-encoded data structure
    (the image schema) and its raw binary data (the image file).

Image Member
    An image member is a user who has been granted access to an image.
    Normally, if an image is not public, only the owner can boot from
    the image.

Image Tag
    An image tag is a string of characters used to identify a specific
    image or images.

Image Task
    An image task is a resource that allows you to perform an
    asynchronous image-related operations such as importing or exporting
    images. The task resource may be polled to determine the status of
    the import or export operation, and the resource is deleted at a set
    time identified by the ``expires-at`` parameter.

JSON
    Javascript Object Notation, json, is an open standard format that
    uses human-readable text to transmit data objects consisting of
    key:value pairs. The following json example might be used to
    represent an object that describes a person:
    `` { "firstname": "John", "lastname": "Smith", "age": 25 }                     ``

JSON Pointer
    A JSON Pointer defines a syntax for identifying a specific value
    within a JSON document. A restricted JSON pointer is a Unicode
    string containing a sequence of exactly one reference token,
    prefixed by a '/' (%x2F) character. Each reference token is a
    sequence of unreserved and/or percent-encoded characters.

Media type
    An Internet media type is a standard identifier used on the Internet
    to indicate the type of data contained in a file. A media type is
    composed of a type, a subtype, and zero or more optional parameters.
    For example, an HTML file might be designated
    ``text/html; charset=UTF-8``

Schema
    Some Rackspace APIs supply json documents describing the
    JSON-encoded data structures that represent domain objects, so that
    a client knows exactly what to expect in an API response.

URI
    A uniform resource identifier (URI) is a string of characters used
    to identify the name of a web resource. The URI syntax consists of a
    URI scheme name (such as "http", "ftp", or "file") followed by a
    colon character, and then by a scheme-specific part (which varies
    depending on the context).

UUID
    A universal unique identifier (UUID) is a 128-bit that is used to
    uniquely identify an object on the internet.
