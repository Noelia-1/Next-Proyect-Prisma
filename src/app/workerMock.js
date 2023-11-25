// workerMock.js
const workerMock = {
    postMessage: jest.fn(),
    onmessage: jest.fn(),
    // Agrega otras funciones o propiedades que puedas necesitar del Worker
  };
  
  module.exports = jest.fn(() => workerMock);
  