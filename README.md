# Prerequisites

* nodejs
* npm
* ruby

## node

1.  Grab the latest 64-bit .exe LTS version from [here](https://nodejs.org/en/download/).  For some reasone the MSI Windows Installer does not work for us.
2.  Make a new folder on your `d:` drive called `nodejs` (`d:\nodejs\`)
3.  Copy the `node.exe` you downloaded into this folder.
4.  Add the following to your environment variables. `Edit environment varibles for your account.` -> Edit the `path`. -> Paste this `D:\nodejs\;` at then end of it.

## npm

I'm not 100% if NPM is installed/available when you add node.  Check to see if it's there by typing `npm -v`  If not we might have to walk through this one as I configured mine a while ago and the steps have changed.

## ruby 

1.  Download the latest version of [ruby for windows](http://rubyinstaller.org/downloads/).  Go with the version that's recommended on the right side.  Get the 32-bit version.  
2.  Create a folder on the `d:` drive called `ruby`.
3.  Extract the downloaded files into this folder.
4.  Add the following to your path.  `d:\ruby\bin;`

# Working with the ns-assets folder
Create a folder on your D: drive where you can work with the files.
On my desktop I created one like this `d:\users\winne\node`.

1. Open up git bash
2. `CD` into newly created folder.
3. Clone the repo.

```bash
git clone git@gitlab.galaxy.local:onlinequoting/ns-assets.git
```

Switch into that folder

```bash
cd ns-assets
```

Install bower packages by running `bower install`

Install packages specified in *package.json* by running `npm install`

Once packages have been installed see if you can build it by running the `gulp` command in the `ns-assets` folder.

Once you're able to build you can set up livereload and monitor the files in realtime by running `gulp watch`

# Building and moving the assets for development (THOR, Arthur3)

To build the assets you simply run `gulp`.  When doing this it will build the files for DEV purposes leaving them unminified and not concatenated.

To move the files to just run `gulp move`.  By default this moves them to `THOR`.  

By default the commands `gulp` and `gulp move` command are meant for development.

To move them to `Arthur3` run it like this `gulp move --server=Arthur3`.

# Building and moving the assets for test (Arthur2)

When moving test it's a good idea to have the files like you'd want them in production so for this we'll build them like thiso `gulp --production`.

To move un minified files to Arthur2 run `gulp move --server=Arthur2`
To move minified files to Arthur2 run `gulp move --production --server=Arthur2`

Two tasks in one command `gulp --production && gulp move --production --server=Arthur2`.

# Building and moving the assets for production (Arthur)

If you just built the files for production using `gulp --production` you won't need to do this again.

To move them to the production machine run `gulp move --production --server=Arthur`

# Combining the two

To build the files and move them in one shot run the command below

`gulp --production && gulp move --production --server=Arthur2`





