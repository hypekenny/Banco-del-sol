import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { YAxis, XAxis, Grid, BarChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/Types';
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
interface transactionType {
  sender_email: string;
  receiver_email: string;
  type: string;
  value: number;
  date: Date;
}

interface balanceType {
  amount: number;
  history: Array<transactionType>;
}
const EJEMPLO: balanceType = {
  amount: 50,
  history: [
    {
      sender_email: 'pepe@mail.com',
      receiver_email: 'yo@mail.com',
      type: 'algo',
      value: 15,
      date: new Date(2021, 7, 18),
    },
    {
      sender_email: 'pepe@mail.com',
      receiver_email: 'yo@mail.com',
      type: 'algo',
      value: -35,
      date: new Date(2021, 6, 31).toString(),
    },
    {
      sender_email: 'pepe@mail.com',
      receiver_email: 'yo@mail.com',
      type: 'algo',
      value: -25,
      date: new Date(2021, 5, 30).toString(),
    },
  ],
};
export const Statistics = () => {
  const userAccount: balanceType = useSelector(
    (state: RootState) => state.account.balance,
  );
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
    // setDatosY({
    //   ...datosY,
    //   Diario: [13, 23, 10, 25, 1, 13, 17],
    //   Mensual: [20, 10, 11, 7, 10, 24],
    //   Semanal: [12, 29, 28, 7, 29, 9, 22],
    // });
    // setDatosX({...datosX,
    // Diario:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    // Mensual:['ENE','FEB','MAR','ABR','MAY','JUN'],
    // Semanal:['10/12','17/12','24/12','29/12','30/12','5/12','12/11','10/12','17/12','24/12','29/12','30/12']})

    getX();
    getY(userAccount);
    // getY(EJEMPLO);
    handleButton('Diario');
  }, []);
  const getY = (userAccountF: balanceType) => {
    let moves: transactionType[] = [];
    let diarioBalance = [];
    let semBalance = [];
    let mesBalance = [];
    let timeMove;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diarioMoves = [0, 0, 0, 0, 0, 0];
    const semMoves = [0, 0, 0, 0, 0, 0];
    const mesMoves = [0, 0, 0, 0, 0];

    // ----Esto es para sacar la fecha del último lunes con hora 00
    let dlun = now.getDay() - 1;
    if (dlun < 0) dlun = 6;
    const t2 = new Date(now.getTime() - dlun * 24 * 3600 * 1000);
    const ultLunes = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate());

    // Esto es para sacar la fecha del primer dia de hace 6 meses con hora 00
    let mesZero = now.getMonth() - 5;
    let AniomesZero = now.getFullYear();
    if (mesZero < 0) {
      mesZero = 12 + mesZero;
      AniomesZero -= 1;
    }
    const comienzoMes = new Date(AniomesZero, mesZero, 1);
    const arrFechasMeses = [new Date(AniomesZero, mesZero, 1)];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 6; i++) {
      let mesArr = arrFechasMeses[arrFechasMeses.length - 1].getMonth() + i;
      let AnArr = arrFechasMeses[arrFechasMeses.length - 1].getFullYear();
      if (mesArr > 11) {
        mesArr = 0;
        AnArr += 1;
      }
      arrFechasMeses.unshift(new Date(AnArr, mesArr, 1));
    }
    arrFechasMeses.reverse();

    if (userAccountF !== undefined) {
      moves = userAccountF.history.filter(
        el => Date.parse(el.date.toString()) >= comienzoMes.getTime(),
      );
      diarioBalance = [userAccountF.amount];
      semBalance = [userAccountF.amount];
      mesBalance = [userAccountF.amount];
    } else {
      moves = [];
      diarioBalance = [0];
      semBalance = [0];
      mesBalance = [0];
    }
    while (moves.length > 0) {
      const el = moves.pop();
      if (el !== undefined) {
        if (el.date instanceof Date) timeMove = el.date.getTime();
        else timeMove = Date.parse(el.date);
        // Obtengo los movimientos diarios
        const difDiario: number = timeMove - today.getTime();
        if (difDiario >= 0 && difDiario < 24 * 3600 * 1000) {
          diarioMoves[5] += el.value;
        } else if (difDiario >= -24 * 3600 * 1000 && difDiario < 0) {
          diarioMoves[4] += el.value;
        } else if (
          difDiario >= -2 * 24 * 3600 * 1000 &&
          difDiario < -24 * 3600 * 1000
        ) {
          diarioMoves[3] += el.value;
        } else if (
          difDiario >= -3 * 24 * 3600 * 1000 &&
          difDiario < -2 * 24 * 3600 * 1000
        ) {
          diarioMoves[2] += el.value;
        } else if (
          difDiario >= -4 * 24 * 3600 * 1000 &&
          difDiario < -3 * 24 * 3600 * 1000
        ) {
          diarioMoves[1] += el.value;
        } else if (
          difDiario >= -5 * 24 * 3600 * 1000 &&
          difDiario < -4 * 24 * 3600 * 1000
        ) {
          diarioMoves[0] += el.value;
        }

        // Obtengo los movimientos semanales
        const difSem: number = timeMove - ultLunes.getTime();
        if (difSem >= 0 && difSem < 7 * 24 * 3600 * 1000) {
          semMoves[5] += el.value;
        } else if (difSem >= -7 * 24 * 3600 * 1000 && difSem < 0) {
          semMoves[4] += el.value;
        } else if (
          difSem >= -2 * 7 * 24 * 3600 * 1000 &&
          difSem < -7 * 24 * 3600 * 1000
        ) {
          semMoves[3] += el.value;
        } else if (
          difSem >= -3 * 7 * 24 * 3600 * 1000 &&
          difSem < -2 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[2] += el.value;
        } else if (
          difSem >= -4 * 7 * 24 * 3600 * 1000 &&
          difSem < -3 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[1] += el.value;
        } else if (
          difSem >= -5 * 7 * 24 * 3600 * 1000 &&
          difSem < -4 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[0] += el.value;
        }

        // Obtengo los movimientos mensuales
        if (timeMove - arrFechasMeses[5].getTime() >= 0) {
          mesMoves[4] += el.value;
        } else if (
          timeMove - arrFechasMeses[4].getTime() >= 0 &&
          timeMove - arrFechasMeses[5].getTime() < 0
        ) {
          mesMoves[3] += el.value;
        } else if (
          timeMove - arrFechasMeses[3].getTime() >= 0 &&
          timeMove - arrFechasMeses[4].getTime() < 0
        ) {
          mesMoves[2] += el.value;
        } else if (
          timeMove - arrFechasMeses[2].getTime() >= 0 &&
          timeMove - arrFechasMeses[3].getTime() < 0
        ) {
          mesMoves[1] += el.value;
        } else if (
          timeMove - arrFechasMeses[1].getTime() >= 0 &&
          timeMove - arrFechasMeses[2].getTime() < 0
        ) {
          mesMoves[0] += el.value;
        }
      }
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 5; i >= 0; i--) {
      diarioBalance.push(
        -diarioMoves[i] + diarioBalance[diarioBalance.length - 1],
      );
      semBalance.push(-semMoves[i] + semBalance[semBalance.length - 1]);
      if (i < 5)
        mesBalance.push(-mesMoves[i] + mesBalance[mesBalance.length - 1]);
    }

    diarioBalance.reverse();
    semBalance.reverse();
    mesBalance.reverse();
    setDatosY({
      ...datosY,
      Diario: diarioBalance,
      Mensual: mesBalance,
      Semanal: semBalance,
    });
  };
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
