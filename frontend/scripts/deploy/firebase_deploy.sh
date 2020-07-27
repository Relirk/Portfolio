echo
echo "$(tput setaf 6)Exiting the scripts directory$(tput sgr0)"
echo
cd ../..

echo
echo "$(tput setaf 6)Starting React build$(tput sgr0)"
echo
yarn build

echo
echo "$(tput setaf 6)Starting Firebase deploy$(tput sgr0)"
echo
firebase deploy

echo
echo "$(tput setaf 6)Launch Firebase url https://portifoil-bcd7d.web.app/$(tput sgr0)"
echo
sleep 3s
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac
echo "You are using a ${machine} machine"
if [ ${machine} = "Linux" ]; then
    xdg-open https://portifoil-bcd7d.web.app/
else
    open -n -a "Google Chrome" --args "--new-window" "https://portifoil-bcd7d.web.app/"
fi