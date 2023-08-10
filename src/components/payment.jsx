import React, { useEffect, useState } from 'react';
import { getQR } from '../API/zbdapi';
import QRCode from "qrcode"; // Importa la librería qrcode
import "./style.css";

function Payment() {
  const [bolt, setBolt] = useState(" ");
  const [qrCodeData, setQRCodeData] = useState(""); // Estado para almacenar el SVG del código QR

  useEffect(() => {
    async function getData() {
      const data = await getQR();
      console.log(data);
      setBolt(data.data.invoice.request);
    }
    getData();
  }, []);

  useEffect(() => {
    // Genera el código QR al cargar los datos
    QRCode.toString(bolt, {
      errorCorrectionLevel: 'H',
      type: 'svg'
    }, function (err, data) {
      if (err) throw err;
      setQRCodeData(data); // Almacena el SVG del código QR en el estado
    });
  }, [bolt]);

  return (
    <div>
      {/* Muestra el SVG del código QR */}
      <div dangerouslySetInnerHTML={{ __html: qrCodeData }} className='qr'></div>
      <div className='card bg-dark text-white carta mt-2'>
        <div className='card-body'>
        <p>{bolt}</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;