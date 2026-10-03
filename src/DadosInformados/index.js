import { View, Text } from 'react-native';
import { styles } from './styles';
 
function DadosInformados(props) {
  return (
    <View style={styles.area}>
      <Text style={styles.subtitulo}>Dados informados:</Text>
      <Text style={styles.dados}>Nome: {props.confirmado ? props.nome : ''}</Text>
      <Text style={styles.dados}>Idade: {props.confirmado ? props.idade : ''}</Text>
      <Text style={styles.dados}>Sexo: {props.confirmado ? props.sexo : ''}</Text>
      <Text style={styles.dados}>Escolaridade: {props.confirmado ? props.escolaridade : ''}</Text>
      <Text style={styles.dados}>Limite: {props.confirmado ? 'R$ ' + props.limite.toFixed(2) : ''}</Text>
      <Text style={styles.dados}>Brasileiro: {props.confirmado ? (props.brasileiro ? 'Sim' : 'Não') : ''}</Text>
    </View>
  );
}
 
export default DadosInformados;