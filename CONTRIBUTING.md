# Contributing to PV Bible Church

We would love for you to contribute to the PV Bible Church Website and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

## Found an Issue?

If you find a bug in the source code, you can help us by
submitting an issue to our [GitHub Repository](https://github.com/adriancarriger/pv-site). Even better, you can
submit a Pull Request with a fix.

## Want a Feature?

You can *request* a new feature by submitting an issue to our [GitHub
Repository](https://github.com/adriancarriger/pv-site). If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* **Small Features** can be crafted and directly submitted as a Pull Request.

* For a **Major Feature**, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,and help you to craft the change so that it is successfully accepted into the project. Major features are given 1-2 weeks of review before being going live, so please give your input quickly.

* Even if you do not write code, your comments, ideas, and suggestions in the [issues](https://github.com/adriancarriger/pv-site/issues) are very valuable!

* Want to be notified of every code change? Just click the Watch button towards to the upper right side of this [Github repo](https://github.com/adriancarriger/pv-site).

## Initial Setup

1) Create a fork of pv-site

2) CD into your clone and install dependencies

```shell
git clone
npm install
npm run build
npm test
```

3) Make your changes in a new git branch:

```shell
git checkout -b my-fix-branch master
```

## Submission Guidelines

### Submitting an Issue

Help us to maximize the effort we can spend improving the product by not reporting duplicate issues.
Search the archives before you submit.

Providing the following information will increase the chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Motivation for or Use Case** - explain what are you trying to do and why the current behavior is a bug for you
* **Browsers and Operating System** - is this a problem with all browsers?
* **Reproduce the Error** - provide an unambiguous set of steps
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

You can file new issues by providing the above information [here](https://github.com/adriancarriger/pv-site/issues/new).

### Submitting a Pull Request (PR)

#### Before you submit

* Ensure proposed changes or problem have already been clearly defined and discussed in the issue tracker. We don't want you to burn time on code that isn't a good fit for the project.
* Search [GitHub](https://github.com/adriancarriger/pv-site/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.

#### How to submit

* Create your patch, **including appropriate test cases**.
* Commit your changes using a descriptive commit message.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `pv-site:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!
