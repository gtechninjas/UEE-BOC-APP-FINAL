import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ReminderScreen from '../screens/ReminderScreen';
import ThirdPartyBOCAccountScreen from '../screens/ThirdPartyBOCAccountScreen';
import ThirdPartyTransferMenuScreen from '../screens/ThirdPartyTransferMenuScreen';
import ThirdPartyTransferScreen from '../screens/ThirdPartyTransferScreen';
import OtherBankAccCreditMenuScreen from '../screens/OtherBankAccCreditMenuScreen';
import OtherBankAccountScreen from '../screens/OtherBankAccountScreen';
import OtherBankCreditCardScreen from '../screens/OtherBankCreditCardScreen';
import BudgetCalculatorScreen from '../screens/BudgetCalculator';
import AddexpenseScreen from '../screens/AddExpense';
import PayBillsScreen from '../screens/PayBills';
import AddPayBillsScreen from '../screens/AddPayBills';
//alert
import AlertHomeScreen from '../screens/AlertHomeScreen';
import AlertLinksScreen from '../screens/AlertLinksScreen';
import AlertSettingsScreen from '../screens/AlertSettingsScreen';
import ManageTaskScreen from '../screens/ManageTaskScreen';
import AlertsScreen from '../screens/AlertsScreen';
import TasksScreen from '../screens/TasksScreen';
import UnSubAlertScreen from '../screens/UnSubAlertScreen';
import UnSubTaskScreen from '../screens/UnSubTaskScreen';
import CustomerAlertScreen from '../screens/CustomerAlertScreen';
import AccountAlertScreen from '../screens/AccountAlertScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

HomeStack.path = '';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  // tabBarLabel: 'Links',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
  header : null,
};

LoginStack.path = '';

const BudgetCalculatorStack = createStackNavigator(
  {
    BudgetCalculator: BudgetCalculatorScreen,
  },
  config
);

BudgetCalculatorStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

BudgetCalculatorStack.path = '';

const AddPayBillsStack = createStackNavigator(
  {
    AddPayBills: AddPayBillsScreen,
  },
  config
);

AddPayBillsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

AddPayBillsStack.path = '';

const AddExpenseStack = createStackNavigator(
  {
    AddExpense: AddexpenseScreen,
  },
  config
);

AddExpenseStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

AddExpenseStack.path = '';

const PayBillsStack = createStackNavigator(
  {
    PayBills: PayBillsScreen,
  },
  config
);

PayBillsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

PayBillsStack.path = '';


const ContactUsStack = createStackNavigator(
  {
    ContactUs: ContactUsScreen,
  },
  config
);

ContactUsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ContactUsStack.path = '';

const ForgotPasswordStack = createStackNavigator(
  {
    ForgotPassword: ForgotPasswordScreen,
  },
  config
);

ForgotPasswordStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ForgotPasswordStack.path = '';

const DashboardStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  config
);

DashboardStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

DashboardStack.path = '';

const ReminderStack = createStackNavigator(
  {
    Reminder: ReminderScreen,
  },
  config
);

ReminderStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ReminderStack.path = '';


const ThirdPartyBOCAccountStack = createStackNavigator(
  {
    ThirdPartyBOCAccount: ThirdPartyBOCAccountScreen,
  },
  config
);

ThirdPartyBOCAccountStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyBOCAccountStack.path = '';

const ThirdPartyTransferMenuStack = createStackNavigator(
  {
    ThirdPartyTransferMenu: ThirdPartyTransferMenuScreen,
  },
  config
);

ThirdPartyTransferMenuStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyTransferMenuStack.path = '';

const OtherBankAccCreditMenuStack = createStackNavigator(
  {
    OtherBankAccCreditMenu: OtherBankAccCreditMenuScreen,
  },
  config
);

OtherBankAccCreditMenuStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankAccCreditMenuStack.path = '';

const ThirdPartyTransferStack = createStackNavigator(
  {
    ThirdPartyTransfer: ThirdPartyTransferScreen,
  },
  config
);

ThirdPartyTransferStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyTransferStack.path = '';

const OtherBankAccountStack = createStackNavigator(
  {
    OtherBankAccount: OtherBankAccountScreen,
  },
  config
);

OtherBankAccountStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankAccountStack.path = '';

const OtherBankCreditCardStack = createStackNavigator(
  {
    OtherBankCreditCard: OtherBankCreditCardScreen,
  },
  config
);

OtherBankCreditCardStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankCreditCardStack.path = '';

//alert content

const AlertHomeStack = createStackNavigator(
  {
    AlertHome: AlertHomeScreen,
  },
  config
);

AlertHomeStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header: null,
};

AlertHomeStack.path = '';

const AlertLinksStack = createStackNavigator(
  {
    Links: AlertLinksScreen,
  },
  config
);

AlertLinksStack.navigationOptions = {
  // tabBarLabel: 'Links',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
  header: null,
};

AlertLinksStack.path = '';

const AlertSettingsStack = createStackNavigator(
  {
    Settings: AlertSettingsScreen,
  },
  config
);

AlertSettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header: null,
};

AlertSettingsStack.path = '';

const ManageTaskStack = createStackNavigator(
   {
     Task: ManageTaskScreen,
   },
   config
 );

ManageTaskStack.navigationOptions = {
   header: null,
 };

ManageTaskStack.path = '';

const AlertsStack = createStackNavigator(
  {
    Alerts: AlertsScreen,
  },
  config
);

AlertsStack.navigationOptions = {
  header: null,
};

AlertsStack.path = '';

const TasksStack = createStackNavigator(
  {
    Tasks: TasksScreen,
  },
  config
);

TasksStack.navigationOptions = {
  header: null,
};

TasksStack.path = '';

const UnStack = createStackNavigator(
  {
    Un: UnSubAlertScreen,
  },
  config
);

UnStack.navigationOptions = {
  header: null,
};

UnStack.path = '';

const UnTaskStack = createStackNavigator(
  {
    UnTasks: UnSubTaskScreen,
  },
  config
);

UnTaskStack.navigationOptions = {
  header: null,
};

UnTaskStack.path = '';

const CustomerStack = createStackNavigator(
  {
    customer: CustomerAlertScreen,
  },
  config
);

CustomerStack.navigationOptions = {
  header: null,
};

CustomerStack.path = '';

const AccountStack = createStackNavigator(
  {
    account: AccountAlertScreen,
  },
  config
);

AccountStack.navigationOptions = {
  header: null,
};

AccountStack.path = '';

const tabNavigator = createStackNavigator({
  HomeStack,
  LoginStack,
  ContactUsStack,
  ForgotPasswordStack,
  DashboardStack,
  ReminderStack,
  ThirdPartyTransferStack,
  ThirdPartyTransferMenuStack,
  ThirdPartyBOCAccountStack,
  OtherBankCreditCardStack,
  OtherBankAccountStack,
  OtherBankAccCreditMenuStack,
  BudgetCalculatorStack,
  AddExpenseStack,
  PayBillsStack,
  AddPayBillsStack,
  AlertHomeStack,
  AlertLinksStack,
  AlertSettingsStack,
  ManageTaskStack,
  AlertsStack,
  TasksStack,
  UnStack,
  UnTaskStack,
  CustomerStack,
  AccountStack,
});

tabNavigator.path = '';

const AppContainer = createAppContainer(tabNavigator);

export default AppContainer;
