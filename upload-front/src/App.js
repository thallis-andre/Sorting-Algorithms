import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from './services/Request';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeFile = this.changeFile.bind(this);
    this.submit = this.submit.bind(this);
    this.request = new Request();
  }

  state = {
    file: '',
    targetFile: '',
    message: '',
    showImage: false,
    reader: '',
  };

  changeFile = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.setState({ file: event.target.value, targetFile: event.target.files[0], reader: reader, message: '' });
    this.setState({ dados: [] });
    this.setState({ sortInfos: {} });
    this.setState({ button: false });
    this.setState({ buttonUpload: true });
  };

  submit = () => {
    this.request
      .uploadFile(this.state.targetFile)
      .then((response) => {
        this.setState({ button: true });
        this.setState({ buttonUpload: false });

        // this.reponseJson(response.json())
      })
      .catch((error) => {
        this.setState({ button: false });
        this.setState({ buttonUpload: true });

        // this.reponseJson(error.json())
      });
  };

  quickSort = () => {
    this.setState({ loader: true });
    this.setState({ dados: [] });

    this.request
      .quickSort()
      .then((response) => {
        this.reponseJson(response.json());
      })
      .catch((error) => {
        this.reponseJson(error);
      });
  };

  mergeSort = () => {
    this.setState({ loader: true });
    this.setState({ dados: [] });

    this.request
      .mergeSort()
      .then((response) => {
        this.reponseJson(response.json());
      })
      .catch((error) => {
        this.reponseJson(error);
      });
  };

  insertionSort = () => {
    this.setState({ loader: true });
    this.setState({ dados: [] });

    this.request
      .insertionSort()
      .then((response) => {
        this.reponseJson(response.json());
      })
      .catch((error) => {
        this.reponseJson(error);
      });
  };

  selectionSort = () => {
    this.setState({ loader: true });
    this.setState({ dados: [] });

    this.request
      .selectionSort()
      .then((response) => {
        this.reponseJson(response.json());
      })
      .catch((error) => {
        this.reponseJson(error);
      });
  };

  reponseJson = (response) => {
    response.then((result) => {
      this.setState({ message: result.message });
      if (result.error) {
        this.setState({ dados: [] });
        this.setState({ sortInfos: {} });
      } else {
        console.log(result)
        this.setState({ dados: result.dados });
        this.setState({ sortInfos: result.sortInfos });
      }
      this.setState({ loader: false });
    });
  };

  imageShow = () => {
    return (
      <div>
        <img src={this.state.reader.result} style={{ width: 400 }} alt="Imagem" />
      </div>
    );
  };

  buttonUploadShow = () => {
    return (
      <div>
        <button type="submit" onClick={this.submit}>
          Enviar arquivo
        </button>
      </div>
    );
  };

  loaderShow = () => {
    if (this.state.loader) {
      return (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    } else {
      return null;
    }
  };
  buttonShow = () => {
    if (this.state.file.indexOf('.csv') > -1 && this.state.button) {
      return (
        <div className="space-around mb-50">
          <button onClick={this.quickSort}>Quicksort</button>
          <button onClick={this.mergeSort}>Merge sort</button>
          <button onClick={this.insertionSort}>Insertion sort</button>
          <button onClick={this.selectionSort}>Selection sort</button>
        </div>
      );
    } else {
      return null;
    }
  };
  tableShow = () => {
    if (this.state.dados.length > 0) {
      return (
        <div>
          <div className="space-around">
            <p>Tempo: {this.state.sortInfos.tempo}</p>
            <p>Trocas: {this.state.sortInfos.trocas}</p>
            <p>Comparações: {this.state.sortInfos.comparacoes}</p>
          </div>
          <table id="customers">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>Sexo</th>
                <th>Cpf</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dados.map((numList, i) => (
                <tr key={i}>
                  {numList.map((num, j) => (
                    <td key={j}>{num}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem vindo!</h2>
        </div>
        <p className="App-intro">
          <input type="file" name="file" value={this.state.file} onChange={this.changeFile} />
        </p>
        {this.state.buttonUpload && this.buttonUploadShow()}
        <h1>{this.state.message}</h1>
        {this.state.loader && this.loaderShow()}
        {this.state.file && this.buttonShow()}
        {this.state.dados && this.tableShow()}
      </div>
    );
  }
}

export default App;
