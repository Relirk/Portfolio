echo
echo "$(tput setaf 6)Starting setup cordova$(tput sgr0)"
echo
. ./setup_cordova.sh

echo
echo "$(tput setaf 6)Starting cordova build - Android$(tput sgr0)"
echo
cordova build android --release -- --keystore='../android.keystore' --storePassword=android --alias=mykey

echo
echo "$(tput setaf 6)Trying to start the application$(tput sgr0)"
echo
cordova run android
