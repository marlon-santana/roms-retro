const fs = require('fs');
const path = require('path');

// Diretório onde estão as imagens (substitua pelo seu caminho)
const diretorio = './'; // Pasta atual, mas pode ser qualquer caminho

// Lê os arquivos do diretório
fs.readdir(diretorio, (err, arquivos) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }

  // Filtra apenas os arquivos com extensão .png (case-insensitive)
  const nomesPng = arquivos.filter(arquivo => 
    arquivo.toLowerCase().endsWith('.png')
  );

  // Exibe o resultado
  console.log(nomesPng);
});