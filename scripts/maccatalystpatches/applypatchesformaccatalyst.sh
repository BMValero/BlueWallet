echo "Removing existing release notes"
rm release-notes.txt release-notes.json
echo "Applying patch for package.json"
sed -i '' '/react-native-tor/d' ./package.json
sed -i '' '/rn-ldk/d' ./package.json
rm -fr node_modules
echo "Re-installing node_modules"
npm i
echo "Applying patch for LDK Podfile"
sed -i '' 's/LDKFramework.xcframework/LDKFramework-maccatalyst.xcframework/g' ./node_modules/rn-ldk/rn-ldk.podspec
echo "Deleting torrific.js and lightning-ldk-wallet.ts content"
cp scripts/maccatalystpatches/torrific.js blue_modules/torrific.js
cp scripts/maccatalystpatches/lightning-ldk-wallet.ts class/wallets/lightning-ldk-wallet.ts
echo "Updating Podfile"
cd ios && pod update && cd ..
echo ""
echo "NOTE: react-native-tor and rn-dlk are not currently compatible with Mac Catalyst.