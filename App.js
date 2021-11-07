import React, {Component} from "react"
import { View, Text } from "react-native"
import AddEntry from "./components/AddEntry"
import { getMetricMetaInfo } from "./utils/helpers"

export default class App extends Component {
  componentDidMount() {
    console.log('f u')
  }
  render(){
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AddEntry/>
      </View >
    )
  }
}