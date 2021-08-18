import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { YAxis, XAxis, Grid, BarChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import { ButtonPrimaryStyle, styles } from './StatisticsStyles';
import colors from '../../constants/colors';

const height = Dimensions.get('window').height;
const fill = colors.primary;
const contentInset = { top: 20, bottom: 20 };

interface tDatosY {
  [key: string]: number[];
}
interface tDatosX {
  [key: string]: string[];
}
interface Pressed {
  [key: string]: any;
}
export const Statistics = () => {
  const [muestro, setMuestro] = useState<string>('Nothing');
  const handleButton = (elec: string) => {
    setMuestro(elec);
    const buttons: Pressed = {
      Diario: { ...ButtonPrimaryStyle },
      Mensual: { ...ButtonPrimaryStyle },
      Semanal: { ...ButtonPrimaryStyle },
    };
    buttons[elec].button = {
      flex: 1,
      height: 0.05 * height,
      alignItems: 'center',
      margin: 10,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: colors.secondary,
      padding: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.25,
      shadowRadius: 26,
      elevation: 14,
    };
    buttons[elec].text = {
      color: colors.white,
      paddingLeft: 5,
      paddingRight: 5,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '700',
    };
    setPress(buttons);
  };

  const [datosX, setDatosX] = useState<tDatosX>({
    Diario: [],
    Semanal: [],
    Mensual: [],
  });
  const [datosY, setDatosY] = useState<tDatosY>({
    Diario: [],
    Semanal: [],
    Mensual: [],
  });

  const [comp, setComp] = useState<any>(<Text>Nothing</Text>);

  const [press, setPress] = useState<Pressed>({
    Diario: { ...ButtonPrimaryStyle },
    Mensual: { ...ButtonPrimaryStyle },
    Semanal: { ...ButtonPrimaryStyle },
  });
  useEffect(() => {
    // ACA SE CARGA EL GRAFICO DENTRO DE COMP
    if (muestro !== 'Nothing') {
      setComp(
        <View>
          <View style={styles.ejeyconbar}>
            <YAxis
              style={styles.ejey}
              data={datosY[muestro]}
              svg={{
                fill: 'grey',
                fontSize: 15,
              }}
              numberOfTicks={5}
              formatLabel={(value: number) => `$${value}`}
              contentInset={contentInset}
            />
            <BarChart
              style={styles.bar}
              data={datosY[muestro]}
              svg={{ fill }}
              contentInset={{ top: 30, bottom: 20 }}
            >
              <Grid />
            </BarChart>
          </View>
          <XAxis
            style={styles.ejex}
            data={datosY[muestro]}
            formatLabel={(value: number, index: number) =>
              datosX[muestro][index]
            }
            scale={scale.scaleBand}
            contentInset={{ left: 15, right: 0 }}
            svg={{ fontSize: 15, fill: 'black' }}
          />
        </View>,
      );
    }
  }, [muestro, datosX, datosY]);
  useEffect(() => {
    // CARGO LOS DATOS DESDE LA API Y PROCESO PARA GUARDAR EN DATOSX Y DATOSY.
    // PROVISORIAMENTE SE INVENTAN ESTOS DATOS
    setDatosY({
      ...datosY,
      Diario: [13, 23, 10, 25, 1, 13, 17],
      Mensual: [20, 10, 11, 7, 10, 24],
      Semanal: [12, 29, 28, 7, 29, 9, 22],
    });
    // setDatosX({...datosX,
    // Diario:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    // Mensual:['ENE','FEB','MAR','ABR','MAY','JUN'],
    // Semanal:['10/12','17/12','24/12','29/12','30/12','5/12','12/11','10/12','17/12','24/12','29/12','30/12']})

    getX();
    handleButton('Diario');
  }, []);

  const getX = () => {
    const MENSUAL = [
      'ENE',
      'FEB',
      'MAR',
      'ABR',
      'MAY',
      'JUN',
      'JUL',
      'AGO',
      'SEP',
      'OCT',
      'NOV',
      'DIC',
    ];
    const diario: string[] = [];
    const mensual: string[] = [];
    const semanal: string[] = [];
    const d = new Date();
    // ----Esto es para sacar la fecha del último lunes con hora 00
    let dlun = d.getDay() - 1;
    if (dlun < 0) dlun = 6;
    const t2 = new Date(d.getTime() - dlun * 24 * 3600 * 1000);
    const t3 = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate());
    //------------------------------------------------------------
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 7; i++) {
      const d1 = new Date(d.getTime() - i * 24 * 3600 * 1000);
      diario.unshift(`${d1.getDate()}/${d1.getMonth() + 1}`);
      if (i < 6) mensual.unshift(MENSUAL[d.getMonth() - i]);
      if (i < 7) {
        const sem = new Date(t3.getTime() - 7 * 3600 * 24 * 1000 * i);
        semanal.unshift(`${sem.getDate()}/${sem.getMonth() + 1}`);
      }
    }
    setDatosX({
      ...datosX,
      Diario: diario,
      Semanal: semanal,
      Mensual: mensual,
    });
  };
  return (
    <View style={styles.containerall}>
      <View style={styles.container}>
        <Text style={styles.text}>Evolución de tu balance</Text>
        {comp}
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={press.Diario.button}
          onPress={() => handleButton('Diario')}
        >
          <Text style={press.Diario.text}>Diario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={press.Semanal.button}
          onPress={() => handleButton('Semanal')}
        >
          <Text style={press.Semanal.text}>Semanal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={press.Mensual.button}
          onPress={() => handleButton('Mensual')}
        >
          <Text style={press.Mensual.text}>Mensual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
