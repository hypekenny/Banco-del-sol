import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Props } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import {styles} from './AboutStyles';
import colors from '../../constants/colors';

export const About = ({ navigation }: Props) => {
 
  
  return (
    <View>
      <View>
        <Text>¿Quiénes somos?</Text>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Marcos Albarado</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Nicolás Cardone</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Ezequiel De Cunto</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Santiago Ferro</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Rodrigo López</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Kevin Ordoñez</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Sebastián Torres</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={ButtonSecondaryStyle.text}>Santiago Veiga</Text>
        <TouchableOpacity
          onPress={() => }
          style={ButtonPrimaryStyle.button}
        >          
        </TouchableOpacity>
      </View>

    
    </View>
  );
};
