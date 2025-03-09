import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`, // dark blue
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};

const pieData = [
  { name: 'Seoul', population: 21500000, color: 'rgba(128, 0, 0, 1)', legendFontColor: '#000000', legendFontSize: 15 }, // dark red
  { name: 'Toronto', population: 2800000, color: '#006400', legendFontColor: '#000000', legendFontSize: 15 }, // dark green
  { name: 'Beijing', population: 527612, color: '#2F4F4F', legendFontColor: '#000000', legendFontSize: 15 }, // dark slate gray
  { name: 'New York', population: 8538000, color: '#8B4513', legendFontColor: '#000000', legendFontSize: 15 }, // saddle brown
  { name: 'Moscow', population: 11920000, color: '#4B0082', legendFontColor: '#000000', legendFontSize: 15 } // indigo
];

const progressData = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const contributionData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

const stackedBarData = {
  labels: ["Test1", "Test2"],
  legend: ["L1", "L2", "L3"],
  data: [
    [60, 60, 60],
    [30, 30, 60]
  ],
  barColors: ["#00008B", "#8B0000", "#006400"] // dark blue, dark red, dark green
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listingContainer}>
        <View style={styles.chartsSection}>
          <Text style={styles.chartTitle}>Line Chart</Text>
          <LineChart
            data={lineData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <Text style={styles.chartTitle}>Bar Chart</Text>
          <BarChart
            data={lineData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <Text style={styles.chartTitle}>Pie Chart</Text>
          <PieChart
            data={pieData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <Text style={styles.chartTitle}>Progress Chart</Text>
          <ProgressChart
            data={progressData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <Text style={styles.chartTitle}>Contribution Graph</Text>
          <ContributionGraph
            values={contributionData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <Text style={styles.chartTitle}>Stacked Bar Chart</Text>
          <StackedBarChart
            data={stackedBarData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
  },
  titileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    width: '100%',
  },
  box: {
    borderBottomColor: "#000",
    width: '100%',
    height: "20%",
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  subBox: {
    backgroundColor: "#000",
    width: '50%',
    height: "30%",
    borderRadius: 5,
  },
  scrollView: {
    flex: 1,
  },
  listingContainer: {
    padding: 0,
    flex: 1,
  },
  chartsSection: {
    marginTop: 20,
  },
  chartContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  chartPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
