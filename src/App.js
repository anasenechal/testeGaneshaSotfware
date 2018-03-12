import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {file: '', resposta: ''};
    this.callToGaneshaAPI = this.callToGaneshaAPI.bind(this);
  }

  callToGaneshaAPI(){
    let url = "http://wpp.ganeshasoftware.com.br/api/enviar-midia.php";
    let formData = new FormData();
      
    formData.append('login-usuario', 'ganesha');
    formData.append('login-senha', 'estagio2018');
    formData.append('numero', '32984951041');
    formData.append('mensagem', new Date()+'Enviada via código React');
    formData.append('anexo', this.state.file);

    fetch(url, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(function(response) {
      console.log(response);
      return response;
    })
    .catch(e => console.log("Erro"))
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="App">
        <p>Olá, este é o teste de Ana Carolina Le Senechal </p>
        <p>Escolha uma imagem para ser enviada: </p>
        <div className="previewComponent">
          <form>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
          </form>
        </div>
        <p>
          <button onClick={this.callToGaneshaAPI.bind(this)}>
            Clique para chamar a API da Ganesha Software
          </button>
        </p>
      </div>
    );
  }
}

export default App;
