import { StyleSheet, Text, View } from "react-native";
import Image from "next/image";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import { Container } from "../Components/Container";
import { TextInput } from "react-native";

export default function App(props) {
  return (
    <ScrollView style={{ backgroundColor: "#e3e3e3", direction: "ltr" }}>
      <View style={styles.global}>
        <View style={styles.header}>
          <View style={styles.section1}>
            <View style={styles.logo}>
              <Image
                style={{ marginLeft: 50 }}
                source={{ uri: "/images/Logo.png", width: 45, height: 45 }}
              />
              <Image
                style={{}}
                source={{ uri: "/images/search.svg", width: 24, height: 24 }}
              />
            </View>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 250,
                backgroundColor: "#d6d6d6",
              }}
            >
              <TextInput
                style={{
                  height: 55,
                  direction: "rtl",
                  borderWidth: 0.5,
                  borderColor: "#c7f4ff",
                  padding: 15,
                  // width: "30%",
                  flexGrow: 1,
                  // marginLeft: 20,
                }}
                placeholder="جست و جو محصول یا برند ..."
              />
              {/* <Image
                style={{ marginLeft: 70 }}
                source={{ uri: "/images/search.svg", width: 24, height: 24 }}
              /> */}
            </View>
            <View style={styles.leftIcons}>
              <Image
                style={{ marginLeft: 15 }}
                source={{ uri: "/images/user.svg", width: 20, height: 20 }}
              />
              <Image
                style={{ marginLeft: 15 }}
                source={{
                  uri: "/images/shopping-cart.svg",
                  width: 20,
                  height: 20,
                }}
              />
              <Image
                style={{ marginLeft: 15 }}
                source={{
                  uri: "/images/trending-up.svg",
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <View style={styles.section2}>
            <View
              style={{
                paddingRight: 30,
                flexDirection: "row-reverse",
              }}
            >
              <Image
                source={{
                  uri: "/images/Home.svg",
                  width: 14,
                  height: 15,
                }}
              />
              <Text style={{ fontSize: 14, marginRight: 10 }}>
                {" "}
                فروشگاه با مادر{" "}
              </Text>
            </View>
            <View style={{ paddingRight: 15, flexDirection: "row-reverse" }}>
              <Image
                source={{
                  uri: "/images/Categories.svg",
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ fontSize: 14, marginRight: 10 }}> دسته بندی </Text>
            </View>
            <View style={{ paddingRight: 15, flexDirection: "row-reverse" }}>
              <Image
                source={{
                  uri: "/images/Ticket.svg",
                  width: 14,
                  height: 15,
                }}
              />
              <Text style={{ fontSize: 14, marginRight: 10 }}>
                {" "}
                باشگاه مشتریان{" "}
              </Text>
            </View>
            <View style={{ paddingRight: 15, flexDirection: "row-reverse" }}>
              <Image
                source={{ uri: "/images/Discount.svg", width: 14, height: 15 }}
              />
              <Text style={{ fontSize: 14, marginRight: 10 }}>
                {" "}
                تخفیفات شگفت انگیز{" "}
              </Text>
            </View>
            <View></View>
            <View></View>
            <View></View>
          </View>
          <View style={styles.border}></View>
          <View style={styles.section3}>
            <View style={styles.rightSide}>
              <Text style={{ marginLeft: 30 }}>مزایای باشگاه مشتریان</Text>
              <Text style={{ marginLeft: 20 }}>تخفیفت شهر تفریحی مادر</Text>
            </View>
            <View style={styles.leftSide}>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={{ marginLeft: 10, color: "#c2c2c2" }}>
                  امتیاز کل
                </Text>
                <Text style={{ marginLeft: 10 }}>0</Text>
                <Image
                  style={{ marginLeft: 5 }}
                  source={{
                    uri: "/images/diamond.svg",
                    width: 14,
                    height: 15,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={{ marginLeft: 10, color: "#c2c2c2" }}>
                  امتیاز باشگاه مشتریان
                </Text>
                <Text style={{ marginLeft: 10 }}>0</Text>
                <Image
                  style={{ marginLeft: 5 }}
                  source={{
                    uri: "/images/diamond-yellow.svg",
                    width: 14,
                    height: 15,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={{ marginLeft: 10, color: "#c2c2c2" }}>
                  موجودی شما
                </Text>
                <Text style={{ marginLeft: 10 }}>0</Text>
              </View>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={{ marginLeft: 10, color: "#c2c2c2" }}>جوایز</Text>

                <Image
                  style={{ marginLeft: 5 }}
                  source={{
                    uri: "/images/present.svg",
                    width: 14,
                    height: 15,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.border2}></View>
        </View>
        <Container style={styles.body}>
          <View style={styles.sec1}>
            <View style={styles.rightPic}>
              <Image
                style={{ borderRadius: 5 }}
                source={{ uri: "/images/Reward.jpg", width: 800, height: 530 }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 15,
                  left: 50,
                  fontSize: 45,
                  color: "#42b9ff",
                  backgroundColor: "#fff8db",
                  borderRadius: 15,
                  height: 65,
                  width: 250,
                }}
              >
                هدایا و جوایز
              </Text>
            </View>
            <View style={styles.leftPic}>
              <Image
                style={{ borderRadius: 5 }}
                source={{ uri: "/images/ToGo.jpg", width: 393, height: 260 }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 5,
                  right: 25,
                  fontSize: 27,
                  color: "#d10000",
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 85,
                  width: 65,
                }}
              >
                ارسال رایگان
              </Text>
              <Image
                style={{ borderRadius: 5, marginTop: 10 }}
                source={{ uri: "/images/kebab.jpg", width: 393, height: 260 }}
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: 140,
                  left: 30,
                  fontSize: 40,
                  color: "#de2865",
                  backgroundColor: "#d9d9d9",
                  borderRadius: 25,
                  height: 60,
                  width: 160,
                }}
              >
                غذای گرم
              </Text>
            </View>
          </View>
        </Container>
        <View style={styles.midBody}>
          <View style={styles.hotSuggest}>
            <Image
              source={{
                uri: "/images/hotSuggest.png",
                width: 160,
                height: 250,
              }}
            />
          </View>
          <View style={styles.hotBox}>
            <View
              style={{
                width: 210,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/mana.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>ماکارونی مانا</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                ماکارونی 500 گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                79,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                width: 210,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/doogh.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>دوغ گاز دار کاله</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>دوغ یک لیتری</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                104,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                width: 210,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/milk.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>شیر پر چرب کاله</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>شیر یک لیتری</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                152,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                width: 210,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/panir.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>پنیر خامه ای صباح</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>پنیر 400 گرمی</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                111,600 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                width: 210,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/rice.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>برنج ایرانی آذوقه</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                برنج 10 کیلو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                2,870,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
        {/* best sell */}
        <Container
          style={{
            height: 360,
            backgroundColor: "white",
            borderRadius: 15,
            padding: 20,
            marginTop: 15,
            // flexDirection: "row-reverse",
          }}
        >
          {/* best sell text holder */}
          <View>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <Image
                source={{
                  uri: "/images/shopping-bag.svg",
                  width: 24,
                  height: 24,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#383838",
                  marginRight: 10,
                }}
              >
                پر فروش ترین ها
              </Text>
            </View>
          </View>
          {/* best sell products holder */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/oil.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 14 }}>روغن مایع پخت و پز</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                روغن 1.8 کیلو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                580,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/brown-suger.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>شکر قهوه ای</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 1 کلیو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                167,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/chicken.png",
                  width: 145,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 14 }}>سینه مرغ بدون پوست</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 1.8 کلیو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                870,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/shampoo.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>شامپو کلیر آقایان</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>200 میلی لیتر</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                180,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/onion.png",
                  width: 155,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>پیاز سفید </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 2 کیلو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                90,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/fish.png",
                  width: 142,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>تن ماهی تحفه</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>تن ماهی</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                287,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
          </View>
        </Container>
        {/* most popular */}
        <Container
          style={{
            height: 360,
            backgroundColor: "white",
            borderRadius: 15,
            padding: 20,
            marginTop: 15,
            // flexDirection: "row-reverse",
          }}
        >
          {/* most popular text holder */}
          <View>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <Image
                source={{
                  uri: "/images/tag.svg",
                  width: 24,
                  height: 24,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#383838",
                  marginRight: 10,
                }}
              >
                محبوب ترین ها
              </Text>
            </View>
          </View>
          {/* most popular products holder */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/oil.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 14 }}>روغن مایع پخت و پز</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                روغن 1.8 کیلو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                580,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/brown-suger.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>شکر قهوه ای</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 1 کلیو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                167,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/chicken.png",
                  width: 145,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 14 }}>سینه مرغ بدون پوست</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 1.8 کلیو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                870,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/shampoo.png",
                  width: 110,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>شامپو کلیر آقایان</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>200 میلی لیتر</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                180,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/onion.png",
                  width: 155,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>پیاز سفید </Text>
              <Text style={{ color: "gray", marginTop: 5 }}>
                بسته 2 کیلو گرمی
              </Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                90,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c2c2c2",
                width: 165,
                height: 250,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                source={{
                  uri: "/images/fish.png",
                  width: 142,
                  height: 160,
                }}
              />
              <Text style={{ fontSize: 16 }}>تن ماهی تحفه</Text>
              <Text style={{ color: "gray", marginTop: 5 }}>تن ماهی</Text>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                287,000 ریال
              </Text>
              <Text
                style={{
                  backgroundColor: "#41a3c4",
                  width: 33,
                  height: 60,
                  fontSize: 43,
                  fontWeight: "bold",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 9,
                }}
              >
                +
              </Text>
            </View>
          </View>
        </Container>
        {/* follow us */}
        <View
          style={{
            backgroundColor: "#23305c",
            width: "100%",
            height: 88,
            marginTop: 20,
          }}
        >
          <Container style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                padding: 25,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                ما را در اینستاگرام دنبال کنید:
              </Text>
              <Image
                style={{ marginRight: 15 }}
                source={{
                  uri: "/images/instagram.svg",
                  width: 35,
                  height: 35,
                  // color: "white",
                  // stroke: "white",
                }}
              />
            </View>
          </Container>
          {/* footer */}
          <View style={styles.footer}>
            {/* right */}
            <View style={styles.rFooter}>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={{
                    uri: "/images/message-circle.svg",
                    width: 45,
                    height: 45,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  پشتیبانی در ساعات کاری
                </Text>
                <Text style={{ marginBottom: 10, fontSize: 16 }}>
                  بامادر همه روزه از ساعت 8 صبح تا 11:30 شب در کنار شماست
                </Text>
                <Text style={{ fontSize: 16 }}>شماره تماس: 42544444</Text>
              </View>
            </View>
            {/* left one */}
            <View style={styles.lFooter}>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={{
                    uri: "/images/map.svg",
                    width: 45,
                    height: 45,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  آدرس
                </Text>
                <Text style={{ marginBottom: 10, fontSize: 16 }}>
                  دزفول، بلوار پیام آوران، تقاطع آفرینش، شهر تفریحی مادر
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  global: {
    direction: "rtl",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 1,
    backgroundColor: "#e3e3e3",
  },
  header: {
    width: "100%",
    height: 150,
    marginLeft: 13,
    backgroundColor: "#f7f7f7",
    maxWidth: "50",
  },
  section1: {
    flexDirection: "row",
    width: "100%",
    // marginTop: 10,
    padding: 5,
    justifyContent: "space-between",
    maxWidth: "50",
  },
  leftIcons: {
    flexDirection: "row",
    width: "22%",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "40",
    marginLeft: 5,
  },
  logo: {
    flexGrow: 1,
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 90,
    maxWidth: "40",
  },
  section2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100",
    marginRight: 280,
    marginTop: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    marginTop: 10,
  },
  section3: {
    flexDirection: "row",
    // marginRight: 280,
    width: "auto",
    justifyContent: "space-around",
    marginTop: 10,
  },
  rightSide: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "30%",
    marginRight: 33,
    // marginLeft: 80,
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "60%",
    marginLeft: 15,
  },
  border2: {
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginTop: 10,
    width: "100%",
  },
  sec1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  leftPic: {
    marginRight: 20,
    // justifyContent: "center",
  },
  midBody: {
    width: "100%",

    marginLeft: "auto",
    marginRight: "auto",
    height: 290,
    backgroundColor: "#23305c",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "20%",
  },
  hotBox: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
    marginLeft: 90,
  },
  hotSuggest: {
    marginTop: 15,
    justifyContent: "flex-start",
    width: "20%",
    padding: 10,
    // marginLeft: 10,
  },
  footer: {
    backgroundColor: "white",
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    paddingRight: 100,
    paddingLeft: 200,
  },
  rFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  lFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
