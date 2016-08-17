.. _paginated-collections:

=====================
Paginated collections
=====================

To reduce load on the service, retrieve operations return a maximum limit of
100 items at a time. If a request supplies no limit or one that exceeds the
configured  default limit, the default limit is used instead.

This behavior is called *pagination*. Pagination gives you the ability to
limit the size of the returned data and to retrieve a specified subset of a
large data set.  Pagination has two key concepts: limit and marker.

* *Limit* is the restriction on the maximum number of items for that type that
  can be returned.

* *Marker* is a reference to an object's ID and is in the list of paged
  results for a particular resource. For example, if the resource is a load
  balancer, the marker is the load balancer ID at which to begin the list of
  the paged results.

To navigate the collection, you can set the ``limit`` and ``marker``
parameters in the URI. For example, ``?limit=10&marker=1234`` displays a
maximum of 10 load balancers in the paginated results, beginning with the
load balancer whose ID is 1234.

You can also use the ``offset`` parameter, which is a count of the number
of objects from where the paginated list is started.

If a marker beyond the end of a list is given, an empty list is returned.
