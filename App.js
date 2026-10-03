import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';
import DadosInformados from './src/DadosInformados';
 
function App() {
  let initial_sexos = [
    { id: 1, nome: 'Masculino' },
    { id: 2, nome: 'Feminino' },
    { id: 3, nome: 'Prefiro não informar' },
  ]
 
  let initial_escolaridades = [
    { id: 1, nome: 'Ensino Fundamental' },
    { id: 2, nome: 'Ensino Médio' },
    { id: 3, nome: 'Ensino Superior' },
    { id: 4, nome: 'Pós-graduação' },
  ]
 
  // Estados dos campos do formulário
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState(0)
  const [escolaridade, setEscolaridade] = useState(0)
  const [limite, setLimite] = useState(200)
  const [brasileiro, setBrasileiro] = useState(false)
 
  const [sexos, setSexos] = useState(initial_sexos)
  const [escolaridades, setEscolaridades] = useState(initial_escolaridades)
 
  // Estados dos dados exibidos após clicar em Confirmar
  const [confirmado, setConfirmado] = useState(false)
  const [nomeInformado, setNomeInformado] = useState('')
  const [idadeInformada, setIdadeInformada] = useState('')
  const [sexoInformado, setSexoInformado] = useState('')
  const [escolaridadeInformada, setEscolaridadeInformada] = useState('')
  const [limiteInformado, setLimiteInformado] = useState(0)
  const [brasileiroInformado, setBrasileiroInformado] = useState(false)
 
  let sexosItem = sexos.map((valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
 
  let escolaridadesItem = escolaridades.map((valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
 
  function confirmar() {
    if (nome === '' || idade === '') {
      alert('Preencha o nome e a idade!')
      return;
    }
 
    setNomeInformado(nome)
    setIdadeInformada(idade)
    setSexoInformado(sexos[sexo].nome)
    setEscolaridadeInformada(escolaridades[escolaridade].nome)
    setLimiteInformado(limite)
    setBrasileiroInformado(brasileiro)
    setConfirmado(true)
  }
 
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Abertura de Conta</Text>
 
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
        />
 
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          onChangeText={setIdade}
        />
 
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          {sexosItem}
        </Picker>
 
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
        >
          {escolaridadesItem}
        </Picker>
 
        <Text style={styles.label}>Limite: R$ {limite.toFixed(0)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={5000}
          step={50}
          value={limite}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          minimumTrackTintColor='blue'
          maximumTrackTintColor='gray'
          thumbTintColor='blue'
        />
 
        <View style={styles.linha}>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
            thumbColor='blue'
          />
        </View>
 
        <Pressable style={styles.botao} onPress={confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>
 
        <DadosInformados
          confirmado={confirmado}
          nome={nomeInformado}
          idade={idadeInformada}
          sexo={sexoInformado}
          escolaridade={escolaridadeInformada}
          limite={limiteInformado}
          brasileiro={brasileiroInformado}
        />
      </ScrollView>
    </View>
  );
}
 
export default App;