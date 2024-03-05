import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';

const TabScreen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          오늘 올라온 질문
        </Text>
        <Text style={styles.text1}>
          매일 자정에 업로드 됩니다
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Call')}>
          <Text style={styles.buttonText}>
            <Text style={styles.text0}>Q</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
          </Text>
          <View style={styles.line} />
          <Text style={styles.text4}>
            좋아요 <Text>30</Text> 댓글 <Text>30</Text> 
          </Text>
        </TouchableOpacity>

        <Text style={styles.text2}>
          지난 질문들
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Call')}>
          <Text style={styles.buttonText}>
            <Text style={styles.text0}>Q</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
          </Text>
          <View style={styles.line} />
          <Text style={styles.text4}>
            좋아요 <Text>30</Text> 댓글 <Text>30</Text> 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Call')}>
          <Text style={styles.buttonText}>
            <Text style={styles.text0}>Q</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
          </Text>
          <View style={styles.line} />
          <Text style={styles.text4}>
            좋아요 <Text>30</Text> 댓글 <Text>30</Text> 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Call')}>
          <Text style={styles.buttonText}>
            <Text style={styles.text0}>Q</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
          </Text>
          <View style={styles.line} />
          <Text style={styles.text4}>
            좋아요 <Text>30</Text> 댓글 <Text>30</Text> 
          </Text>
        </TouchableOpacity>
        {/* 나머지 버튼들도 동일하게 수정 */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text0: {
    color: '#5C8374',
    fontSize: 22
  },
  text1: {
    marginTop: 5,
    fontSize: 10,
    color: 'gray'
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  text3: {
    fontSize: 15,
    fontWeight: '500'
  },
  text4: {
    fontSize: 10,
    color: '#5C8374',
    marginTop: 7
  },
  button: {
    backgroundColor: 'white',
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 2,
      height: 2
    },
    paddingVertical: 27,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  line: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#5C8374',
    marginTop: 10,
  },
});

export default TabScreen1;
