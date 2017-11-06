.. _auth-response-example:

.. code::

   {
      "access": {
         "token": {
            "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            "expires": "2014-11-24T22:05:39.115Z",
            "tenant": {
               "id": "110011",
               "name": "110011"
            },
            "RAX-AUTH:authenticatedBy": [
              "APIKEY"
            ]
         },
         "serviceCatalog": [
            {
               "name": "cloudDatabases",
               "endpoints": [
                  {
                     "publicURL": "https://syd.databases.api.rackspacecloud.com/v1.0/110011",
                     "region": "SYD",
                     "tenantId": "110011"
                  },
                  {
                     "publicURL": "https://dfw.databases.api.rackspacecloud.com/v1.0/110011",
                     "region": "DFW",
                     "tenantId": "110011"
                  },
                  {
                     "publicURL": "https://hkg.databases.api.rackspacecloud.com/v1.0/110011",
                     "region": "HKG",
                     "tenantId": "110011"
                  }
               ],
               "type": "rax:database"
            },

            ...

            {
               "name": "cloudDNS",
               "endpoints": [
                  {
                     "publicURL": "https://dns.api.rackspacecloud.com/v1.0/110011",
                     "tenantId": "110011"
                  }
               ],
               "type": "rax:dns"
            }
         ],
         "user": {
            "id": "123456",
            "roles": [
               {
                  "description": "A Role that allows a user access to keystone Service methods",
                  "id": "6",
                  "name": "compute:default",
                  "tenantId": "110011"
               },
               {
                  "description": "User Admin Role.",
                  "id": "3",
                  "name": "identity:user-admin"
               }
            ],
            "name": "jsmith",
            "RAX-AUTH:defaultRegion": "ORD"
         }
      }
   }
