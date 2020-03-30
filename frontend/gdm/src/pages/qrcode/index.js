import React, { Component } from 'react';
//npm install --save react-qr-reader
import QrReader from 'react-qr-reader';


import './styleQrCode.css';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

class QrCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
          delay: 300,
          result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);

      }

  
    handleScan = data => {
      if (data) {
        this.setState({
          result: data
        })
        alert('O QR Code foi lido!');
      }
    }
    handleError = err => {
      console.error(err)
    }
    render() {
      return (
        <div className="bodyQr">
          <div className="navBar">
            <Link to="/painel">
                <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
            </Link>  
            <h2>Leitor de QrCode</h2>
          </div>  
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            facingMode="enviroment"
            style={{ height:'100%' }}
          />
          <Link to= {{
                        pathname: "/maquina",
                        state: [this.state.result.id]
                      }} className="link"> 
          <button>Ir para Máquina</button>
          </Link>
        </div>
      )
    }
  }

export default QrCode;