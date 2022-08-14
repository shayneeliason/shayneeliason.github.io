message="commit from $USER@$(hostname -s) on $(date)"
GIT=`which git`
${GIT} add *
${GIT} commit -m "$message"

gitPush=$(${GIT} push)

echo "$gitPush"
