import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const radius= width/2;
const scaley= 0.3*width/height;
export const styles = StyleSheet.create({
   
  ellipse: {
    transform: [{ translateX: width/2 -radius},{ scaleY: scaley},{ translateY: (0.4*height-0.5*width)*1/(scaley)}],
   backgroundColor: 'white',
    width: radius*2,
    height: radius*2,
    borderRadius:radius,
    
  },
  
  containerT: {
    width: width,
    height: height,
  },
  containerButton:{
    transform: [{ translateY: 0.05*height}],
    alignSelf: 'center',
  },
  image: {
    width: 294,
    height: 171,
    transform: [{ translateY: -0.65*height},{ translateX: 0.2*width}],
  },
 
});
