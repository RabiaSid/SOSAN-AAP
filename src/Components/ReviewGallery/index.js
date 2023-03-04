import React from 'react'
import {View, Text, Dimensions, StyleSheet, Image} from "react-native"
import { PharmacieCard4, PharmacieCard7, PharmacieCard3, AvatarPerson3 } from '../../Assets/images';
import baseColors from '../../Constant/color'
import { AntDesign } from '@expo/vector-icons';



const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function ReviewGallery() {
  return (
    <View style={styles.View}>
        <View style={styles.Top}>
        <View style={{width:deviceWidth/2-20}}>
        <Text style={{ fontWeight:'bold',}}>Gallery</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:deviceWidth/2 ,}}>
        <Text style={{ fontWeight:'bold'}}>Review</Text>
        <View style={{flexDirection:'row'}}>
        <AntDesign name="star" size={17} style={{color:baseColors.sucessTextColor}}/>
        <Text style={{color:baseColors.secondaryTextColor, fontWeight:'bold', fontSize:12}}>5.00 (18 Reviews)</Text>
        </View>
        </View>
        </View>
        <View style={styles.Center}>
            <View style={styles.GalleryImageColumn}>
                <View style={{elevation:6,}}>
                    <Image source={PharmacieCard4} resizeMode={'contain'} style={{height:120, width:150, borderRadius:2}}/>
                </View>
                <View style={{elevation:6, top:-40}}>
                    <Image source={PharmacieCard7} resizeMode={'contain'} style={{height:110, width:155, borderRadius:2}}/>
                </View>
                <View style={{elevation:4, top:-70}}>
                    <Image source={PharmacieCard3} resizeMode={'cover'} style={{height:170, width:160, borderRadius:5}}/>
                </View> 
            </View>
            <View style={styles.GalleryColumn}>
                <View style={styles.BottomReview}>
                    <View style={styles.ReviewCard}>
                        <Image source={AvatarPerson3} style={{width:45, height:45, borderRadius:50}}/>
                        <View style={{flexDirection:'column', paddingLeft:10}}>
                    <Text style={{ fontWeight:'bold'}}>John</Text>
                    <View style={{flexDirection:'row',}}>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',width:deviceWidth/2-20, }}>
                    <Text style={{color:baseColors.secondaryTextColor, fontWeight:'bold'}}>5 star !!</Text>
                    </View>
                </View >
                <View style={styles.BottomReview}>
                    <View style={styles.ReviewCard}>
                        <Image source={AvatarPerson3} style={{width:45, height:45, borderRadius:50}}/>
                        <View style={{flexDirection:'column', paddingLeft:10}}>
                    <Text style={{ fontWeight:'bold'}}>Jack</Text>
                    <View style={{flexDirection:'row',}}>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.secondaryTextColor}}/>
                    </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',width:deviceWidth/2-20, }}>
                    <Text style={{color:baseColors.secondaryTextColor, fontWeight:'bold'}}>4 star !!</Text>
                    </View>
                </View >
                <View style={styles.Bottom}>
                    <View style={styles.ReviewCard}>
                        <Image source={AvatarPerson3} style={{width:45, height:45, borderRadius:50}}/>
                        <View style={{flexDirection:'column', paddingLeft:10}}>
                    <Text style={{ fontWeight:'bold'}}>Christian</Text>
                    <View style={{flexDirection:'row',}}>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.sucessTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.secondaryTextColor}}/>
                    <AntDesign name="star" size={15} style={{color:baseColors.secondaryTextColor}}/>
                    </View>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',width:deviceWidth/2-20, }}>
                    <Text style={{color:baseColors.secondaryTextColor, fontWeight:'bold'}}>3 star !!</Text>
                    </View>
                </View >
                <Text style={{textAlign:'center' , fontWeight:'400', color:baseColors.primaryTextColor}}>See More</Text>
            </View>

        </View>


        
    </View>
  )
}

const styles = StyleSheet.create({
    View:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
    },
    Top:{
        flexDirection:'row',
        width:deviceWidth/1-10, 
        justifyContent:'center',
    },
    Center:{
        flexDirection:'row',
        width:deviceWidth/1, 
        height:deviceHeight/1.7,
        justifyContent:'space-around',
        
        
    },
    GalleryImageColumn:{
        width:deviceWidth/2.1,
        height:deviceHeight/1.7,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10

    },
    GalleryColumn:{
        width:deviceWidth/2-20,
        height:deviceHeight/1.7,
        flexDirection:'column',
        paddingTop:20,
    },
    BottomReview:{
        flexDirection:'column',
        height:deviceHeight/7.5,
        justifyContent:'space-evenly',
        borderBottomColor:baseColors.LightSecondaryColor,
        borderBottomWidth:2,
        alignItems:'center',
    },
    Bottom:{
        flexDirection:'column',
        height:deviceHeight/7.5,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    ReviewCard:{
        flexDirection:'row',
        width:deviceWidth/2-10,
        justifyContent:'flex-start',
        alignItems:'center',
    }
})

export default ReviewGallery