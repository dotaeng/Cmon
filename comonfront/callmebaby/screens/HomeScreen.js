import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'; // 패키지 변경
import Header from './Header';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 페이지 인덱스 상태

  // 페이지 인덱스를 변경하는 함수
  const changeIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header
        title={
          <View style={styles.headerTitleContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </View>
        }
        icon="bell"
      />

      <ScrollView style={styles.scrollView}>
        <View style={styles.bannerContainer}>
        <Swiper
            autoplay={true}// 사용자가 수동으로 슬라이드를 넘길 수 있도록 함
            index={activeIndex} // 현재 활성화된 슬라이드의 인덱스
            style={styles.wrapper}
            showsPagination={false} // 페이지 표시기 비활성화
            onIndexChanged={(index) => changeIndex(index)} // 페이지 변경 시 호출되는 콜백
          >
            <View style={styles.slide}>
              <Image
                source={require('../assets/main.png')} // 광고 이미지 경로
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/main.png')} // 광고 이미지 경로
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/main.png')} // 광고 이미지 경로
                style={styles.image}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>
            오늘의 질문
          </Text>
          <View style={styles.questionTextContainer}>
            <Text style={styles.text1}>
              다양한 생각들을 함께 나눠요
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Call')}>
              <Text style={styles.buttonText}>
                전체보기 <FontAwesome name="chevron-right" size={12} color="gray" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal style={styles.carousel}>
          <TouchableOpacity style={styles.carouselItem}>
            <Text style={styles.text0}>Question</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
            <View style={styles.line} />
            <Text style={styles.text4}>
            <FontAwesome name="users" size={20} color="white" />  7
            </Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.carouselItem}>
            <Text style={styles.text0}>Question</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
            <View style={styles.line} />
            <Text style={styles.text4}>
            <FontAwesome name="users" size={20} color="white" />  7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.carouselItem}>
            <Text style={styles.text0}>Question</Text>
            <Text style={styles.text3}>
              수강신청 때 미처 신청 못 한 전공 강의가 있다.
              과사무실에 어떤 식으로 문의할 것인가?
            </Text>
            <View style={styles.line} />
            <Text style={styles.text4}>
            <FontAwesome name="users" size={20} color="white" />  7
            </Text>
          </TouchableOpacity>
          {/* 다른 캐러셀 아이템들 추가*/}
        </ScrollView>
        <View style={styles.pageIndicatorContainer}>
          {[...Array(3)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.pageIndicator,
                activeIndex === index ? styles.activePageIndicator : null, // 활성화된 페이지에만 색상 적용
              ]}
            />
          ))}
        </View>
        <Text style={styles.text}>
            다음 알람까지
          </Text>
          <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Call')}>
          <Text style={styles.buttonText}>
            <Text style={styles.text6}>
              <Text style={styles.text7}>6</Text>시간 
              <Text style={styles.text7}>28</Text>분 
              <Text style={styles.text7}>1</Text>초 남았습니다.</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollView: {
    marginHorizontal: 10,
  },
  bannerContainer: {
    width: '100%',
    height: 100
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    width: '110%', // 이미지 너비를 광고 배너와 같게 설정
    height: '100%', // 이미지 높이를 광고 배너와 같게 설정
    resizeMode: 'cover', // 이미지 크기 조정
  },
  logo: {
    width: 100, // 로고 이미지의 너비
    height: 30, // 로고 이미지의 높이
    resizeMode: 'cover' // 이미지 크기 조정
  },
  headerTitleContainer: {
    flexDirection: 'row', // 로고 이미지를 가로로 정렬
    alignItems: 'center', // 로고 이미지를 수직 중앙에 정렬
    marginBottom: -15, // 로고를 위로 이동
  },
  text: {
    fontSize: 25,
    fontWeight:'bold',
    fontFamily: 'NotoSansKR',

  },
  text0: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#93b1a6',
    marginTop: 10
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray'
  },
  text3: {
    fontSize: 14,
    marginBottom: 10,
    marginTop:15,
    color:'white',
    textAlign: 'center', // 수평 가운데 정렬
    alignItems: 'center'
  },
  text4: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'right'
  },
  text5: {
    fontSize: 20,
    color: 'white',
    marginLeft:10,
    marginTop: 10,
    textAlign: 'right'
  },
  text6: {
    fontSize: 23,
    fontWeight:'500',
    textAlign: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
  },
  text7: {
    fontSize: 23,
    fontWeight:'500',
    textAlign: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
  },
  button: {
    position: 'absolute',
    right: 0,
  },
  buttonText: {
    color: 'gray', // 버튼 글자색상 추가
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10
  },
  questionContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  questionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  carousel: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  carouselItem: {
    backgroundColor: '#5c8374',
    width: 250,
    height:250,
    padding: 10,
    marginLeft:10,
    marginRight: 10,
    borderRadius:20
  },
  line: {
    height: 1,
    backgroundColor: '#93b1a6',
    marginTop: 10,
    marginBottom: 10,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  pageIndicator: {
    backgroundColor: 'lightgray',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activePageIndicator: {
    backgroundColor: 'gray', // 활성화된 페이지의 색상
  },
  button1: {
    backgroundColor: 'white',
    elevation: 7,
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
  }
});

export default HomeScreen;
