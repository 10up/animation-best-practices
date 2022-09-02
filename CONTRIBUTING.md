# Contributing and Maintaining

First, thank you for taking the time to contribute!

The following is a set of guidelines for contributors as well as information and instructions around our maintenance process. The two are closely tied together in terms of how we all work together and set expectations, so while you may not need to know everything in here to submit an issue or pull request, it's best to keep them in the same document.

## Ways to contribute

Contributing isn't just writing code - it's anything that improves the project. All contributions are managed right here on GitHub. Here are some ways you can help:

### Reporting bugs

If you're running into an issue, please take a look through [existing issues](https://github.com/10up/animation-best-practices/issues) and [open a new one](https://github.com/10up/animation-best-practices/issues/new) if needed.  If you're able, include steps to reproduce, environment information, and screenshots/screencasts as relevant.

### Suggesting enhancements

New features and enhancements are also managed via [issues](https://github.com/10up/animation-best-practices/issues).

### Pull requests

Pull requests represent a proposed solution to a specified problem.  They should always reference an issue that describes the problem and contains discussion about the problem itself.  Discussion on pull requests should be limited to the pull request itself, i.e. code review.

For more on how 10up writes and manages code, check out our [10up Engineering Best Practices](https://10up.github.io/Engineering-Best-Practices/).

## Workflow

The `develop` branch is the development branch which means it contains the next version to be released. `trunk` contains the latest released version.  Always work on the `develop` branch and open up PRs against `develop`.

## Getting set up

### System requirements

- [Node.js](https://nodejs.org/) >= 16.0.0. 

## Get the project running
1. Clone the project `git@github.com:10up/animation-best-practices.git` somewhere.
1. `cd` into the cloned repository
1. Run `npm install`
1. Run `npm start` to watch for changes and build.


## Specific Contributions

### Documentation

This site is built on [Docusaurus](https://docusaurus.io/) and thus, the main way we edit or add additional documents is through it and the use of Markdown (.md) files. See [Markdown Features](https://docusaurus.io/docs/markdown-features) to see what you are able to do with Docusaurus' version of Markdown.

Note, avoid using advanced features like [MDX](https://mdxjs.com/) in the documentation even though it is supported by Docusaurus.

### Examples

If you want to contribute an example, there are some extra things that need to be kept in mind while doing so. We do all these things to:

- Maintain parity between examples 
- Keep examples easily understood
- Make examples easy to port to other systems
- Keep things as open and as independent of a specific platform, framework, or library

Before creating a new example, be sure to read the guidelines for [Controlling Animations](https://github.com/10up/animation-best-practices/guidelines/controlling-animations.md). This is important so that you can make your animation as agnostic as possible so it can be ported between control types and other use cases. Approach making the example with the most common type of control typical for the animation.

#### Coding an example

You should _always_ make a "vanilla" example. That is, an example that only needs CSS and / or "vanilla" JavaScript (using the WAAPI or built-in browser APIs). If you would like to make an example that uses a library or framework (GSAP, React, etc.) you _must_ include a working example without the use of the library or framework (regardless of the vanilla example possibly being technically more difficult or involved) in addition to the example with a library or framework.

Not all projects can or should use a library or framework for various reasons (budget, performance, licensing, etc.). Thus, to keep these examples as portable and understandable as possible, you must include the "vanilla" example.

#### File and folder structure

All example embeds should be placed in the [embed directory](https://github.com/10up/animation-best-practices/static/embeds/) of this repo. All example markdown should be placed in the [examples directory](https://github.com/10up/animation-best-practices/examples/) of this repo. The latter is the page that the majority of users will visit first.

When creating your example, be sure to organize it into an appropriate directory. For example, any example that involves animating a vector or illustration should be in the "illustrations" category folder. Typically, the folder structure for an embed would look something like: `embeds/{category}/{sub-category}/{name}/index-{type}.html` where the `type` could be something like CSS, WAAPI, React, GSAP, etc.

Referrence examples as a guide on what your directory structure should look like. If there is concern or question of where an example should go in the file structure, be sure to flag it in the relevant issue or pull request so it can be reviewed and discussed.

#### Use of embeds

The examples are created to use `iframe` in the Markdown to display. Do _not_ include the code of the example directly in the Markdown file itself (via MDX or other means). This is done purposefully for several reasons:

- So that the examples are "sandboxed" and not mixed with other elements that may not be required
- Maintain simplicity in the repo (less dependencies) and the example itself
- Keeps Markdown cleaner (no MDX means we can move this easily later)
- Maintain visual consistency
- Allows engineers who are less familiar in working with different animations an easy way to examine and potentially recreate or port an animation to a project

The [sample embed](https://github.com/10up/animation-best-practices/static/embeds/_sample) should be the starting point for all examples. Do _not_ modify it. You're free to add additional libraries to your example (if required) from [cdnjs](https://cdnjs.com/) or as a direct dependency (within the example's folder).

You can add the iframe to the Markdown file for the example by using something like:

```html
<iframe src="/embeds/{path-to-example}/example.html">
```

