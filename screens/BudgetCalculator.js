import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Text,TouchableOpacity, TextInput } from "react-native";
import MaterialButtonViolet1 from "../symbols/MaterialButtonViolet1";
import MaterialButtonViolet3 from "../symbols/MaterialButtonViolet3";
import DialogInput from 'react-native-dialog-input';
import { } from 'react-navigation';
import PieChart from 'react-native-pie-chart';


export default class BudgetCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDialogVisible: false
    }
  }
  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }

  render() {
    const {navigate} = this.props.navigation;
    const chart_wh = 250
    const series = [123,789]
    const sliceColor = ['#F44336','#4CAF50']
    return (
      
      <View style={styles.root}>
        <View style={styles.rect} />
        <Image
          source={require("../assets/images/1200px-Bank_of_Ceylon.svg.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Text style={styles.text2}>BUDGET CALCULATOR</Text>
        <View style={styles.piChart}>
        <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style = {{borderColor : "rgba(75,192,192,1)" }}
          />
        <View style={styles.expenserect} />
        <Text style={styles.expensetextInput}>Expenses: 200</Text>
        <View style={styles.incomerect2} />
        <Text style={styles.incometext2}>Income: 800</Text>
        <View style={styles.summaryrect3} />
        <Text style={styles.summarytext3}>Summary: 600</Text>
          </View> 
        <View style={styles.AddIncomeBtn}>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Add Income"}
            message={"Enter the income amount(Rs)"}
            hintInput ={"0.00"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
       </DialogInput>
        <TouchableOpacity onPress={()=>{this.showDialog(true)}} style={{padding:10}} style={[styles.incomeroot,this.props.style]}>
          <Text style={styles.incomecaption}>ADD INCOME</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.AddExpenseBtn}>
            <TouchableOpacity style={[styles.expenseroot,this.props.style]} onPress = { () => navigate('AddExpense')}>
            <Text style={styles.expensecaption}>ADD EXPENSE</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SummaryBtn}>
            <TouchableOpacity style={[styles.finalresultroot,this.props.style]}>
            <Text style={styles.finalresultcaption}>FINAL RESULT</Text>
            </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/savings-512.png")}
          resizeMode={"contain"}
          style={styles.AddIncomeIcon}
        />
        <Image
          source={require("../assets/images/add_expense.png")}
          resizeMode={"contain"}
          style={styles.addExpenseIcon}
        />
        <Image
          source={require("../assets/images/summary1.png")}
          resizeMode={"contain"}
          style={styles.summaryIcon}
        />
        <StatusBar style={styles.statusBar} />
      </View>
    );
  }
}
BudgetCalculator.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    top: 0,
    left: 0.13,
    width: 375,
    height: 72.64,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  image: {
    top: 15.42,
    left: 87.63,
    width: 200,
    height: 41.81,
    position: "absolute"
  },
  rect2: {
    top: 670.53,
    left: 0,
    width: 375.26,
    height: 78.44,
    backgroundColor: "rgba(250,164,51,1)",
    position: "absolute"
  },
  rect3: {
    top: 71.03,
    left: 0,
    width: 376.06,
    height: 71.02,
    backgroundColor: "rgba(228,221,134,1)",
    position: "absolute"
  },
  Mainheader: {
    top: 30.47,
    left: 0,
    width: 375,
    height: 83,
    position: "absolute"
  },
  BudgetCalculatorHeader: {
    top: 113.47,
    left: 0,
    width: 375,
    height: 83,
    position: "absolute"
  },
  BOCLogo: {
    top: 25.46,
    left: 135.34,
    width: 104.33,
    height: 93.01,
    position: "absolute"
  },
  AddIncomeBtn: {
    top: 560.00,
    left: 18.16,
    width: 100,
    height: 117.11,
    position: "absolute",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 4
  },
  AddExpenseBtn: {
    top: 560.00,
    left: 137.5,
    width: 100,
    height: 119.19,
    position: "absolute",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 4
  },
  text2: {
    top: 96.54,
    left: 90.29,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  SummaryBtn: {
    top: 560.00,
    left: 256.84,
    width: 100,
    height: 117.11,
    position: "absolute",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 4
  },
  AddIncomeIcon: {
    top: 560.00,
    left: 36.54,
    width: 62.73,
    height: 49.21,
    position: "absolute"
  },
  addExpenseIcon: {
    top: 560.00,
    left: 147.54,
    width: 80.41,
    height: 63.77,
    position: "absolute"
  },
  bcaption: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  },
  summaryIcon: {
    top: 560.00,
    left: 264.54,
    width: 80.41,
    height: 63.77,
    position: "absolute"
  }, 
  expenseroot: {
    flex: 1,
    backgroundColor: "rgba(250,164,51,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  expensecaption: {
    color: "rgba(0,0,0,1)",
    paddingTop: 50,
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    textAlign: "center"
  },
  incomeroot: {
    flex: 1,
    backgroundColor: "rgba(250,164,51,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  incomecaption: {
    color: "rgba(0,0,0,1)",
    paddingTop: 50,
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    textAlign: "center"
  },
  finalresultroot: {
    flex: 1,
    backgroundColor: "rgba(250,164,51,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  finalresultcaption: {
    color: "rgba(0,0,0,1)",
    paddingTop: 50,
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200",
    textAlign: "center"
  },
  piChart:{
    flex: 1,
    paddingTop: 230,
    alignItems: 'center'
  },
  expenserect: {
    top: 530,
    left: 15.71,
    width: 11.06,
    height: 12.13,
    backgroundColor: "rgba(244,67,54,1)",
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 1
  },
  expensetextInput: {
    top: 530,
    left: 34.77,
    color: "#121212",
    position: "absolute"
  },
  incomerect2: {
    top: 530,
    left: 133.54,
    width: 11.06,
    height: 12.13,
    backgroundColor: "rgba(76,175,80,1)",
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 1
  },
  incometext2: {
    top: 530,
    left: 156.01,
    color: "#121212",
    position: "absolute"
  },
  summaryrect3: {
    top: 530,
    left: 247.08,
    width: 11.06,
    height: 12.13,
    backgroundColor: "rgba(139,87,42,1)",
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 1
  },
  summarytext3: {
    top: 530,
    left: 265.89,
    color: "#121212",
    position: "absolute"
  },
  statusBar: {}
});
