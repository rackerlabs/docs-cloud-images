.. _service-access:

========================
Service access endpoints
========================

The |apiservice| service is a regionalized service. The user of the service is
therefore responsible for selecting the appropriate regional endpoint to ensure
access to servers, networks, or other Cloud services.

If you are working with cloud servers that are in one of the Rackspace data
centers, using the ``ServiceNet`` endpoint in the same data center has no
network costs and provides a faster connection. ``ServiceNet`` is the data
center internet network. In your authentication response service catalog, it is
listed as ``InternalURL``.

If you are working with servers that are not in one of the Rackspace data
centers, you must use a public endpoint to connect. In your authentication
response, public endpoints are listed as ``publicURL``. If you are working with
servers in multiple data centers or have a mixed environment where you have
servers in your data centers and in Rackspace data centers, use a public
endpoint because it is accessible from all the servers in the different
environments.

.. tip::
   If you do not know your account ID or which data center you are working in,
   you can find that information in your :mycloud:`Cloud Control Panel<>`.

The following table lists the |product name| endpoints that are available
for each region.

.. tip::
   To help you decide which regionalized endpoint to use, read about
   :how-to:`special considerations for choosing a region <about-regions>`.

.. _api-info-service-access-regional:

.. list-table:: **Regionalized service endpoints**
    :widths: 10 40
    :header-rows: 1

    * - Region
      - Endpoint
    * - Chicago (ORD)
      - ``https://ord.images.api.rackspacecloud.com/v2/``
    * - Dallas/Ft. Worth (DFW)
      - ``https://dfw.images.api.rackspacecloud.com/v2/``
    * - Northern Virginia (IAD)
      - ``https://iad.images.api.rackspacecloud.com/v2/``
    * - London (LON)
      - ``https://lon.images.api.rackspacecloud.com/v2/``
    * - Sydney (SYD)
      - ``https://syd.images.api.rackspacecloud.com/v2``
    * - Hong Kong (HKG)
      - ``https://hkg.images.api.rackspacecloud.com/v2``

The service catalog returned in the authentication response specifies the
correct service access endpoint for your account to use for accessing
|product name|. Use the service type (`cloudImages``) to locate the
correct endpoint in the service catalog. For an example of the service
catalog, see
:ref:`authentication response examples <authentication-response-examples>`.

