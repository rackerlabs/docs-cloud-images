##Content architecture check

**Getting Started navigation**

- [x] Link at top of doc

      ![Part links](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-part-links.png)

- [x] Content hierarchy for top-sections looks like one of these two models, with GS title in nav

      ![Nav with curl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-nav-curl-only.png)
      ![Nav with curl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-nav-with-client.png)

##Content check

**Use cases and examples**

- [x] Compare use case (topics) in migrated content to original content on docs.rackspace.com to identify any missing content

- [x] Use case H1 topics use imperative, H2 topics use gerund **issue created**

      ![Use case titles](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-use-case-titles.png)


**Getting Started common content**

- [x]  Prerequisites include config environment variables (late change) **issue created**

       ![Gen API authl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-prereqs.png)


- [x]  GS intro topic that follows boiler plate, might have extra content depending on product.

       ![Gen API authl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-intro.png)


- [x]  Uses common Get Credentials topic ==> Save your API Key, Save your Account number are heading levels.

       ![Get Credsl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-getcreds.png)


- [x]  Send API requests content follows template (some docs have only cURL, some have cURL and CLI)


- [x]  Authenticate uses [common content](https://developer.rackspace.com/docs/cloud-big-data/v2/developer-guide/#document-getting-started/authenticate)


- [x]  Review auth response section has link to annotated auth response.

       ![Get Credsl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-note-annotated-auth-ref.png)


**General API section**

- [x] Authentication section contains short section referencing GS auth example and Identity doc.
      See [example](https://developer.rackspace.com/docs/cloud-big-data/v2/developer-guide/#document-general-api-info/authentication-gen-api)

- [x] Authentication section contains short section referencing GS auth example and Identity doc.

      ![Gen API authl](https://github.com/rackerlabs/docs-common/blob/master/rst/getting-started-content-architecture/QE-images/GS-nav-with-client.png)

- [x] Service access endpoints topic follows authentication **issue created**

- [x] Service access endpoints topic has link to auth response in Review Auth response section. **issue created**

- [x] How to use cURL topic not included in the General API section (info provided in common auth section)


##Copy check

**Check links**

- [x] Run link check on page.

- [x] Look for malformed internal and external cross-references **issue created**

- [x] Look for link references that aren't linked, or links that refer to html topics from docs.rackspace.com

- [x] Look for missing punctuation when link is at end of sentence.  
          (Leave a space between the end of link and the punctuation. ```This is a :ref:`test <refid>` .```

**Code samples**

- [x] Make sure spacing is OK -- as good as it can be.

- [x] Examples use environment variables -- ``$ENDPOINT``, ``$TENANT_ID``, and ``$AUTH_TOKEN``  (just mark it if not used, not critical but preferable.)

- [x] Paragraph text not merged into code samples.

**Inline markup**

- [x] Look for stray ` or * symbols or funny spacing

- [x] Find Bold, italic, or inline literal rendering issues

- [x] Look for stray | or html leftovers  (margin: 0 ... )

**Tables**

- [x] Check formatting and inline markup for weird stuff

- [x] Tables have titles

**Lists**

- [x] Look for strange indenting or bolding (ragged margins make Sphinx think things are dl lists.)
