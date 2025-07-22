# Read Me
### get .bib of your papers from zotera My Publications
### save that .bib file somewhere accessible and then run this command on it to create a publication folder
* academic import myreferences.bib content/publications/ --compact
* This will simply create the folders with the md files for the publication
* Then run hugo server -D
* Check the local version of the website
### Then simple git add and push
* you might need to make sure that the hugo.yaml file is still valid for github actions you can find it in .github/workflows folder
* if it doesn't work you'll see the deploy fail in the actions/workflow page on github
* update that with the required corrections 