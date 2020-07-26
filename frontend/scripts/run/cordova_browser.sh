echo
echo "$(tput setaf 6)Starting setup cordova"
echo
. ./setup_cordova.sh

echo
echo "$(tput setaf 6)Starting cordova build - Browser$(tput sgr0)"
echo
cordova build browser --verbose

echo
echo "$(tput setaf 6)Trying to start build on port 8000$(tput sgr0)"
echo
cordova run browser
