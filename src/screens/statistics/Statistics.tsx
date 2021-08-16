import React , { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { LineChart,YAxis, XAxis, Grid, BarChart } from 'react-native-svg-charts'
import { ButtonPrimaryStyle } from './StatisticsStyles';
import colors from '../../constants/colors';
const fill = 'rgb(134, 65, 244)'
const contentInset = { top: 20, bottom: 20 }


interface tDatosY {
    [key: string]: number[];
}
interface tDatosX {
 [key: string]: string[];
}
export const Statistics= () =>{
    const [muestro, setMuestro]= useState <string>('Nothing')
    const handleButton= (elec:string)=>{setMuestro(elec)}

    const [datosX, setDatosX]= useState <tDatosX>({Diario:[],Semanal:[],Mensual:[]})
    const [datosY, setDatosY]= useState <tDatosY>({Diario:[],Semanal:[],Mensual:[]})

    const [comp, setComp]= useState <any>(<Text>Nothing</Text>)
    useEffect(()=>{
      //ACA SE CARGA EL GRAFICO DENTRO DE COMP
      if (muestro!== 'Nothing') 
      {
          setComp(<View>
          <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                  style={{ width: 20 }}
                    data={datosY[muestro]}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value:number) => `$${value}`}
                    contentInset={contentInset}
                />
                <BarChart 
                  style={{ width:500, marginLeft: 20 }} 
                  data={datosY[muestro]} 
                  svg={{ fill }} 
                  contentInset={{ top: 30, bottom: 30 }}>
                  <Grid />
                </BarChart>
                </View>
                <XAxis
                    style={{ marginHorizontal: 20, width:500 }}
                    data={datosY[muestro]}
                    formatLabel={(value:number, index:number) => datosX[muestro][index]}
                    contentInset={{ left: 35, right: 0 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>)
      }

    },[muestro,datosX,datosY])
    useEffect(()=>{
      //CARGO LOS DATOS DESDE LA API Y PROCESO PARA GUARDAR EN DATOSX Y DATOSY. 
      //PROVISORIAMENTE SE INVENTAN ESTOS DATOS
      setDatosY({...datosY,
        Diario:[13, 23, 10, 25, 1, 13, 17, 17, 24, 21, 23, 29, 8, 1, 5, 22, 18, 27, 21, 21, 3, 18, 7, 30, 14, 7, 19, 3, 20, 9],
        Mensual: [20, 10, 11, 7, 10, 24],
        Semanal:[12, 29, 28, 7, 29, 9, 22, 14, 14, 15, 1, 13]})
      // setDatosX({...datosX,
      // Diario:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
      // Mensual:['ENE','FEB','MAR','ABR','MAY','JUN'],
      // Semanal:['10/12','17/12','24/12','29/12','30/12','5/12','12/11','10/12','17/12','24/12','29/12','30/12']})
       
      getX()
      setMuestro('Diario')


    },[])

    const getX = ()=>{
      const MENSUAL=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC']
      var diario: string[] =[]
      var mensual: string[] =[]
      var semanal: string[] =[]
      var d= new Date()
      //----Esto es para sacar la fecha del último lunes con hora 00
      var dlun=d.getDay()-1
      if(dlun<0) dlun=6
      var t2= new Date (d.getTime()-dlun*24*3600*1000)
      var t3= new Date(t2.getFullYear(),t2.getMonth(),t2.getDate())
      //------------------------------------------------------------
      for (var i=0;i<30;i++)
      {
        var d1=new Date (d.getTime()-i*24*3600*1000)
        diario.unshift(d1.getDate()+'/'+(d1.getMonth()+1))
        if (i<6) mensual.unshift(MENSUAL[d.getMonth()-i])
        if (i<12)
        {
            var sem=new Date(t3.getTime()-7*3600*24*1000*(i))
            semanal.unshift(sem.getDate()+'/'+(sem.getMonth()+1))
        }
      }
      setDatosX({...datosX,Diario:diario,Semanal:semanal,Mensual:mensual})
    }
    return (
      <View >
          <View style={{ flex:1, flexDirection: 'row' }}>
            <TouchableOpacity
                style={{...ButtonPrimaryStyle.button,flex:1}}
                onPress={() => handleButton('Diario')}
            >
                <Text style={ButtonPrimaryStyle.text}>Diario</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{...ButtonPrimaryStyle.button,flex:1}}
                onPress={() => handleButton('Semanal')}
            >
                <Text style={ButtonPrimaryStyle.text}>Semanal</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{...ButtonPrimaryStyle.button,flex:1}}
                onPress={() => handleButton('Mensual')}
            >
                <Text style={ButtonPrimaryStyle.text}>Mensual</Text>
            </TouchableOpacity>
          </View>



        {comp}
      </View>
    );
  }
 
  