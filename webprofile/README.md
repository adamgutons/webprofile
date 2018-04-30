# webprofile

## 

This is how I managed to get these files to GitHub...it is essential that I log this process.  During my work with Eric, I often find myself wading through rivers of git (and other useful) code, with great success!  Only to find that I need to repeat these processes and are without any documentation.   Great civilizations were built on passing written record!

1.) Enter Git bash and access the local project directory
> cd Desktop/WebProfil_NEW/

2.) Initialize the local project directory as a .git repositry
> "git init"

3.) Stage all of the files from the local project directory for their first commit to the local repository
> "git add ."
>> To unstage a file, use "git reset HEAD [YOUR-FILE]".

4.) Commit the staged files to the local repository
> ' git commit -m "First commit" '
>> Prepares the tracked changes to be pushed, to remove the commit and modify files use "git reset --soft HEAD~1"
  
5.) Add the URL for the remote repository where your local repostory will be pushed
> "git remote add origin [remote repository URL]"
>> "git remote -v" will verify the new remote URL
  
6.) Push the files/changes from local repository to GitHub remote repo specified as the origin
> "git push origin master"

I needed to log this struggle...creating a branch and pushing it to Git

1.) git checkout -b [branch_name]  
> This creates a new branch

2.) git remote add origin [repository_url]
> creates a remote destination for the push of local directory

3.) git push origin [branch_name]
> pushes the local repository branch to the remote origin
