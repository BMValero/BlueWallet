import { createStackNavigator } from 'react-navigation';

import transactions from './screen/transactions';
import wallets from './screen/wallets';
import send from './screen/send';
import settings from './screen/settings';
import receive from './screen/receive';

/** @type {AppStorage} */
let BlueApp = require('./BlueApp');

const Tabs = createStackNavigator(
  {
    Wallets: {
      screen: wallets,
      path: 'wallets',
      navigationOptions: {
        title: 'Wallets',
      },
    },
    Transactions: {
      screen: transactions,
      path: 'trans',
    },
    Send: {
      screen: send,
      path: 'cart',
    },
    Receive: {
      screen: receive,
      path: 'receive',
    },
    Settings: {
      screen: settings,
      path: 'settings',
    },
  },
  {
    headerMode: 'none',
  },
);

export default Tabs;
