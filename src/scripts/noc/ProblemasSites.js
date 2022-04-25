import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class ProblemasSites extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextProb = this.getTextProb.bind(this);
        this.state = {
            contato1: '',
            mcontato: '',
            contato2: '',
            horario: '',
            descricao: '',
            instabilidade: '',
            site: '',
            aparelho: '',
        };
    }

    getTextProb() {
        return `PROBLEMAS PARA ACESSAR SITE

Descreva detalhadamente a reclamação/solicitação do cliente.
R: ${this.state.descricao}
        
- Existe alguma instabilidade no fornecimento ocorrendo?
R: ${this.state.instabilidade}
        
- Qual site exato não consegue acessar?
R: ${this.state.site}
        
- Testou em outro aparelho ou Rede 3G/Dados móveis?
 R: ${this.state.aparelho}
        
- Qual melhor horário ou período para receber o retorno do time de Suporte?
R: ${this.state.horario}
        
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
        
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}`;
    }

    handleChange9() {
        this.setState({ contato1: '' });
        this.setState({ mcontato: '' });
        this.setState({ contato2: '' });
        this.setState({ horario: '' });
        this.setState({ descricao: '' });
        this.setState({ instabilidade: '' });
        this.setState({ aparelho: '' });
        this.setState({ site: '' });
        this.setState({ alertou: '' });
    }

    render() {
        return (
             <div style={{ fontSize: 18, margin:'10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>PROBLEMAS PARA ACESSAR SITE</b></label></div>
                <br />
                <label>
                    <b>
                        Descreva detalhadamente  a reclamação/solicitação do cliente.
                    </b>
                    <br />
                    <textarea rows="3" cols="80" type="text" name="descricao" value={this.state.descricao} onChange={(e) => this.setState({ descricao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Existe alguma instabilidade no fornecimento ocorrendo?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="instabilidade" value={this.state.instabilidade} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Qual site exato não consegue acessar?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="site" value={this.state.site} onChange={(e) => this.setState({ site: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Testou em outro aparelho ou Rede 3G/Dados móveis?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="aparelho" value={this.state.aparelho} onChange={(e) => this.setState({ aparelho: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Qual melhor horário ou período para receber o retorno do time de Suporte?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={this.state.horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} /> Manhã</div>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='horario' name='horario' value='Tarde'
          checked={this.state.horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} /> Tarde</div>
         <div style={{ display: 'inline-block' }}>
        <input type='radio' id='horario' name='horario' value='Ambos'
          checked={this.state.horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} /> Ambos</div>
                <br />
                <label>
                    <b>
                        Contato Principal:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="contato1" value={this.state.contato1} onChange={(e) => this.setState({ contato1: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Contato 2:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="contato2" value={this.state.contato2} onChange={(e) => this.setState({ contato2: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Meio de contato:
                    </b>
                </label>
                <br />
                  <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
                    checked={this.state.mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> WHATSAPP</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO'
                    checked={this.state.mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> LIGAÇÃO</div>
                 <div style={{ display: 'inline-block' }}>
                <input type='radio' id='mcontato' name='mcontato' value='AMBOS'
                    checked={this.state.mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> AMBOS</div>
                <br />
                <label>
                    <b>
                        - Alertou o cliente, que é necessário atender o retorno do time de Suporte?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='alertou' name='alertou' value='Sim'
                        checked={this.state.alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='alertou' name='alertou' value='Nao'
                        checked={this.state.alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Não</div>
                <br />
                 <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextProb}>
                         COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div >
        );
    }
}
export default ProblemasSites;