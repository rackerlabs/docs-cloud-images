# Rackspace Cloud Images API documentation
==========================================
## Resources

This github repository contains the source files for the following Rackspace Images API documentation:

* [Cloud Images Getting Started Guide](http://docs.rackspace.com/images/api/v2.0/ci-gettingstarted/)
* [Cloud Images Developer Guide](http://docs.rackspace.com/images/api/v2.0/ci-devguide/)
* [Cloud Images Release Notes](http://docs.rackspace.com/images/api/v2.0/ci-releasenotes/)
    Note: Release Notes have not been published yet, since there has not been a major release sine initial publication.

## Contributing

Contributions are welcome! To suggest changes to the documentation, 
    submit an [issue](https://github.com/rackerlabs/docs-cloud-images/issues) 
    or a [pull request](https://github.com/rackerlabs/docs-cloud-images/pulls).

To make changes to a project, create your own fork of the project and send a pull request to have your changes reviewed 
    and merged into the master branch as appropriate.

### Building from Source

This repository uses Maven to generate the output documentation. Command line users can generate the complete output from this 
    repository by using the following command:

    mvn clean generate-sources

The output appears in PDF and HTML form in the following locations. The items in the **Name** column link to the location 
    where the documentation is published, when available.

| Name | Build Location |
| --- | --- |
| [Getting Started Guide](http://docs.rackspace.com/images/api/v2/ci-gettingstarted) | target/docbkx/webhelp/ci-getting-started-external |
| [Developer Guide](http://docs.rackspace.com/images/api/v2/ci-devguide/) | target/docbkx/webhelp/ci-devguide-external |

#### Editors

You can use any text editor to work with these source files. If you want to use an IDE, consider [NetBeans](http://netbeans.org). 
    This cross-platform IDE offers seamless support for Maven projects and does not require  additional configuration to open
    the **pom.xml** file as a project. You can configure the project so that the **Build** command, which appears when you 
    right-click a project in the **Projects** pane, executes the `clean generate-sources` command. To do so, perform the following 
    steps:

1. Right-click the project in the **Projects** pane and select **Properties**.
2. Select the **Build** category in the left pane, and then select the **Build project** action in the right pane.
3. Change **Execute Goals** to `clean generate-sources`.
4. *(Optional)* Repeat steps 2 and 3 for the **Clean and Build project** and **Build with Dependencies** actions.

### Quick Links

The files that are most likely to be of interest to you are as follows:

* [src/resources/wadl/images-2.0.wadl](src/resources/wadl/images-2.0.wadl) - images API operations wadl
* [src/resources/wadl/images-schemas-2.0.wadl](src/resources/wadl/images-schemas-2.0.wadl) - images schema API operations wadl
* [src/docbkx/ci-devguide.xml](src/docbkx/ci-devguide.xml) - main source file for Developer's Guide
* [src/dockbkx/ci-gettingstarted.xml](src/dockbkx/ci-gettingstarted.xml) - main source file for Getting Started Guide
* [src/docbkx/ci-releasenotes.xml](src/docbkx/ci-releasenotes.xml) - main source file for Release Notes
* [src/docbkx/chapters](src/docbkx/chapters) - supplemental chapters and sections for the guides
    Note: Be aware that some chapters and sections are shared by both Guides, so make sure the change that you propose works for both.

If you want to make changes to the example files referenced in the WADL file, you can find the example files at  
    [src/common/samples](src/common/samples).

The status codes, parameter lists, and other shared info referenced by the WADL files are at 
    [src/common/common.ent](src/common/common.ent).
