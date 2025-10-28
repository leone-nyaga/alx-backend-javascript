# ALX BACKEND JAVASCRIPT

## Node modules error

+ After ```npm install``` we get a huge ```node_modules```.
+ Its a huge file and may cause an error during push

```bash
create mode 100644 0x00-ES6_basic/node_modules/yargs/yargs.js
 create mode 100644 0x00-ES6_basic/package-lock.json
 create mode 100644 0x00-ES6_basic/package.json
Enumerating objects: 19851, done.
Counting objects: 100% (19851/19851), done.
Delta compression using up to 4 threads
Compressing objects: 100% (18909/18909), done.
Writing objects: 100% (19849/19849), 15.93 MiB | 5.54 MiB/s, done.
Total 19849 (delta 4809), reused 0 (delta 0)
error: RPC failed; curl 56 GnuTLS recv error (-54): Error in the pull function.
fatal: the remote end hung up unexpectedly
fatal: the remote end hung up unexpectedly
Everything up-to-date
leone-nyaga@DESKTOP-MFAESEK:~/alx-backend-javascript/0x00-ES6_basic$ git add . ; git commit -m "ES6 basic" ; git push
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
Enumerating objects: 19851, done.
Counting objects: 100% (19851/19851), done.
Delta compression using up to 4 threads
Compressing objects: 100% (14097/14097), done.
Writing objects: 100% (19849/19849), 15.93 MiB | 94.86 MiB/s, done.
Total 19849 (delta 4812), reused 19849 (delta 4812)
^C
leone-nyaga@DESKTOP-MFAESEK:~/alx-backend-javascript/0x00-ES6_basic$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
leone-nyaga@DESKTOP-MFAESEK:~/alx-backend-javascript/0x00-ES6_basic$
```

## To solve the issue

```bash
# 1. Remove node_modules from tracking
git rm -r --cached node_modules

# 2. Add your .gitignore (if not already)
echo "node_modules/" >> .gitignore
git add .gitignore

# 3. Amend the previous commit to remove node_modules from it
git commit --amend -m "Clean commit: remove node_modules"

# 4. Force push to overwrite the last (bad) commit on GitHub
git push origin master --force
```
