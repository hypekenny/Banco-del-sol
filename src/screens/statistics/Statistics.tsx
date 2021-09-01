import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import { YAxis, Grid, BarChart } from 'react-native-svg-charts';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { Props, RootState, transactionType } from '../../types/Types';
import { ButtonPrimaryStyle, styles } from './StatisticsStyles';
import colors from '../../constants/colors';
import { StylesCon } from '../../constants/Styles';
import { NavBar } from '../homeTab/navBar';
import { stylesAbout } from '../login/AboutStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const fill = colors.primary;
const contentInset = { top: 50, bottom: 20, left: -35 };

interface tDatosY {
  [key: string]: number[];
}
interface tDatosX {
  [key: string]: string[];
}
interface Pressed {
  [key: string]: any;
}
interface balanceType {
  amount: number;
  history: Array<transactionType>;
}
const EJEMPLO: balanceType = {
  amount: 500000,
  history: [
    {
      senderEmail: 'pepe@mail.com',
      receiverEmail: 'yo@mail.com',
      type: 'algo',
      value: 15,
      date: new Date(2021, 7, 18),
    },
    {
      senderEmail: 'pepe@mail.com',
      receiverEmail: 'yo@mail.com',
      type: 'algo',
      value: -35,
      date: new Date(2021, 6, 31).toString(),
    },
    {
      senderEmail: 'pepe@mail.com',
      receiverEmail: 'yo@mail.com',
      type: 'algo',
      value: -25,
      date: new Date(2021, 5, 30).toString(),
    },
  ],
};
export const Statistics = ({ navigation }: Props) => {
  const userAccount: balanceType = useSelector(
    (state: RootState) => state.account.balance,
  );
  const userMail: string = useSelector((state: RootState) => state.user.email);
  const [muestro, setMuestro] = useState<string>('Nothing');
  const [muestroDecorator, setMuestroDecorator] = useState<number>(-1);
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
    setPress({ ...buttons });
    handleButtonDate(0);
  };
  const handleButtonDate = (elec: number) => {
    setMuestroDecorator(elec);
    const buttonsD: Pressed = {
      EjeX: [
        { ...styles },
        { ...styles },
        { ...styles },
        { ...styles },
        { ...styles },
        { ...styles },
        { ...styles },
      ],
    };
    buttonsD.EjeX[elec].buttonejex = {
      flex: 1,
      height: 0.04 * height,
      alignItems: 'center',
      margin: 1.5,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: colors.secondary,
      padding: 2,
      paddingTop: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 14,
    };
    setPress2({ ...buttonsD });
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

  const [press2, setPress2] = useState<Pressed>({
    EjeX: [
      { ...styles },
      { ...styles },
      { ...styles },
      { ...styles },
      { ...styles },
      { ...styles },
      { ...styles },
    ],
  });
  useEffect(() => {
    const wt = 60;
    const Tooltip = ({ x, y }) => (
      <G x={x(muestroDecorator) - wt / 2 + 0.05 * width} key="tooltip">
        <G y={0}>
          <Rect
            height={40}
            width={wt}
            stroke="grey"
            fill="white"
            ry={10}
            rx={10}
          />
          <SvgText
            x={wt / 2}
            dy={20}
            fontSize="15"
            fontWeight="bold"
            alignmentBaseline="middle"
            textAnchor="middle"
            stroke="rgb(0, 0, 0)"
          >
            {`$${Intl.NumberFormat('de-DE').format(
              datosY[muestro][muestroDecorator],
            )}`}
          </SvgText>
        </G>
        <G x={wt / 2}>
          <Line
            y1={0 + 40}
            y2={y(datosY[muestro][muestroDecorator])}
            stroke="grey"
            strokeWidth={2}
          />
          <Circle
            cy={y(datosY[muestro][muestroDecorator])}
            r={4}
            stroke={colors.primary}
            strokeWidth={2}
            fill="white"
          />
        </G>
      </G>
    );
    // ACA SE CARGA EL GRAFICO DENTRO DE COMP
    if (muestro !== 'Nothing') {
      setComp(
        <View>
          <View style={styles.ejeyconbar}>
            <YAxis
              style={styles.ejey}
              data={datosY[muestro]}
              svg={{
                fill: 'white',
                fontSize: 25,
              }}
              numberOfTicks={5}
              formatLabel={(value: number) => `$${value}`}
              contentInset={contentInset}
            />
            <BarChart
              style={styles.bar}
              data={datosY[muestro]}
              svg={{ fill }}
              contentInset={{ top: 50, bottom: 20, left: 15, right: 15 }}
            >
              <Grid />
              <Tooltip />
            </BarChart>
          </View>
          <View style={styles.ejexbtn}>
            {datosX[muestro].map((element, index) => {
              return (
                <TouchableOpacity
                  key={`D${index.toString()}`}
                  style={press2.EjeX[index].buttonejex}
                  onPress={() => {
                    handleButtonDate(index);
                  }}
                >
                  <Text style={styles.textejex}>{element}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>,
      );
    }
  }, [muestro, muestroDecorator, datosX, datosY]);
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
    getY({ ...userAccount });
    // getY(EJEMPLO);
    handleButton('Diario');
    handleButtonDate(0);
  }, [userAccount.amount, userAccount.history]);
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
      let signo = 1;
      const el = moves.pop();
      if (el !== undefined) {
        if (el.date instanceof Date) timeMove = el.date.getTime();
        else timeMove = Date.parse(el.date);
        // Obtengo los movimientos diarios
        if (el.type === 'Transfer' && el.senderEmail === userMail) {
          signo = -1;
        }
        const difDiario: number = timeMove - today.getTime();
        if (difDiario >= 0 && difDiario < 24 * 3600 * 1000) {
          diarioMoves[5] += signo * el.value;
        } else if (difDiario >= -24 * 3600 * 1000 && difDiario < 0) {
          diarioMoves[4] += signo * el.value;
        } else if (
          difDiario >= -2 * 24 * 3600 * 1000 &&
          difDiario < -24 * 3600 * 1000
        ) {
          diarioMoves[3] += signo * el.value;
        } else if (
          difDiario >= -3 * 24 * 3600 * 1000 &&
          difDiario < -2 * 24 * 3600 * 1000
        ) {
          diarioMoves[2] += signo * el.value;
        } else if (
          difDiario >= -4 * 24 * 3600 * 1000 &&
          difDiario < -3 * 24 * 3600 * 1000
        ) {
          diarioMoves[1] += signo * el.value;
        } else if (
          difDiario >= -5 * 24 * 3600 * 1000 &&
          difDiario < -4 * 24 * 3600 * 1000
        ) {
          diarioMoves[0] += signo * el.value;
        }

        // Obtengo los movimientos semanales
        const difSem: number = timeMove - ultLunes.getTime();
        if (difSem >= 0 && difSem < 7 * 24 * 3600 * 1000) {
          semMoves[5] += signo * el.value;
        } else if (difSem >= -7 * 24 * 3600 * 1000 && difSem < 0) {
          semMoves[4] += signo * el.value;
        } else if (
          difSem >= -2 * 7 * 24 * 3600 * 1000 &&
          difSem < -7 * 24 * 3600 * 1000
        ) {
          semMoves[3] += signo * el.value;
        } else if (
          difSem >= -3 * 7 * 24 * 3600 * 1000 &&
          difSem < -2 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[2] += signo * el.value;
        } else if (
          difSem >= -4 * 7 * 24 * 3600 * 1000 &&
          difSem < -3 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[1] += signo * el.value;
        } else if (
          difSem >= -5 * 7 * 24 * 3600 * 1000 &&
          difSem < -4 * 7 * 24 * 3600 * 1000
        ) {
          semMoves[0] += signo * el.value;
        }

        // Obtengo los movimientos mensuales
        if (timeMove - arrFechasMeses[5].getTime() >= 0) {
          mesMoves[4] += signo * el.value;
        } else if (
          timeMove - arrFechasMeses[4].getTime() >= 0 &&
          timeMove - arrFechasMeses[5].getTime() < 0
        ) {
          mesMoves[3] += signo * el.value;
        } else if (
          timeMove - arrFechasMeses[3].getTime() >= 0 &&
          timeMove - arrFechasMeses[4].getTime() < 0
        ) {
          mesMoves[2] += signo * el.value;
        } else if (
          timeMove - arrFechasMeses[2].getTime() >= 0 &&
          timeMove - arrFechasMeses[3].getTime() < 0
        ) {
          mesMoves[1] += signo * el.value;
        } else if (
          timeMove - arrFechasMeses[1].getTime() >= 0 &&
          timeMove - arrFechasMeses[2].getTime() < 0
        ) {
          mesMoves[0] += signo * el.value;
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
    <View style={StylesCon.phone}>
      <img
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880917630180028436/Banco-del-Sol-Background_Web.png"
        alt=""
      />
      <View style={stylesAbout.about}>
        <TouchableOpacity style={stylesAbout.btnAbout}>
          <Text style={stylesAbout.btnText}>Sobre Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesAbout.btnAbout}>
          <Text style={stylesAbout.btnText}>Administrador</Text>
        </TouchableOpacity>

        <View style={{ width: '100%', alignItems: 'center', bottom: 0 }}>
          <Image
            style={stylesAbout.tinyLogo}
            source={{
              uri: 'https://media.discordapp.net/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png',
            }}
          />
        </View>
      </View>
      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
          marginLeft: '1%',
          marginRight: '1%',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.containerall}>
        <View>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={StylesCon.textTitle}>Estadísticas</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.push('HomeTab');
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={StylesCon.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Evolución de tu balance</Text>
          {comp}
        </View>
        <View style={styles.container2}>
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
        <NavBar navigation={navigation} />
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
