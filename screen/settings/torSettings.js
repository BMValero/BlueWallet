import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import navigationStyle from '../../components/navigationStyle';
import { BlueCard, BlueListItem, BlueLoading, BlueSpacing20, BlueText, SafeBlueArea } from '../../BlueComponents';
import loc from '../../loc';
import { BlueStorageContext } from '../../blue_modules/storage-context';
import alert from '../../components/Alert';
import { isTorCapable } from '../../blue_modules/environment';
import Button from '../../components/Button';

const torrific = isTorCapable ? require('../../blue_modules/torrific') : require('../../scripts/maccatalystpatches/torrific.js');

/*
  TorSettings is not displayed in Settings menu if isTorCapable is false. No need to provide code protection.
*/
const TorSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [daemonStatus, setDaemonStatus] = useState('');
  const { isTorDisabled, setIsTorDisabled } = useContext(BlueStorageContext);

  const updateStatus = async () => {
    const status = await torrific.getDaemonStatus();
    setDaemonStatus(status);
  };

  const startIfNotStarted = async () => {
    await torrific.startIfNotStarted();
  };

  const stopIfRunning = async () => {
    await torrific.stopIfRunning();
  };

  const testSocket = async () => {
    try {
      setIsLoading(true);
      await torrific.testSocket();
      alert(loc._.ok);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const testHttp = async () => {
    try {
      setIsLoading(true);
      await torrific.testHttp();
      alert(loc._.ok);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateStatus, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isTorDisabled) {
      stopIfRunning();
    }
  }, [isTorDisabled]);

  if (isLoading) {
    return (
      <View>
        <BlueLoading />
      </View>
    );
  }

  return (
    <SafeBlueArea>
      <BlueListItem
        hideChevron
        title={loc._.disabled}
        Component={View}
        switch={{ onValueChange: setIsTorDisabled, value: isTorDisabled }}
      />
      {!isTorDisabled && (
        <>
          <BlueCard>
            <BlueText>Daemon Status: {daemonStatus}</BlueText>
          </BlueCard>
          <BlueCard>
            <Button title={loc.send.dynamic_start} onPress={startIfNotStarted} />
            <BlueSpacing20 />
            <Button title={loc.send.dynamic_stop} onPress={stopIfRunning} />
            <BlueSpacing20 />
            <Button title="Test Socket" onPress={testSocket} />
            <BlueSpacing20 />
            <Button title="Test HTTP" onPress={testHttp} />
          </BlueCard>
        </>
      )}
    </SafeBlueArea>
  );
};

TorSettings.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.settings.tor_settings }));

export default TorSettings;
