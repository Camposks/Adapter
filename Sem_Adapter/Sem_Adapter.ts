// Impressora Laser com um método específico
class Impressora_Laser {
  imprimirDocumentoLaser(paginas: number): string {
    return `Imprimindo ${paginas} páginas na Impressora a Laser.`;
  }
}

// Impressora Jato de Tinta com um método diferente
class Impressora_JatoTinta {
  imprimirDocumentoJatoTinta(paginas: number): string {
    return `Imprimindo ${paginas} páginas na Impressora Jato de Tinta.`;
  }
}

// Sistema de Impressão que precisa utilizar ambas as impressoras
class Sistema_Impressao {
  // Para lidar com ambas as impressoras diretamente, fazemos verificações manuais.
  imprimir(impressora: any, paginas: number): void {
    if (impressora instanceof Impressora_Laser) {
      console.log(impressora.imprimirDocumentoLaser(paginas)); // Lida diretamente com a ImpressoraLaser
    } else if (impressora instanceof Impressora_JatoTinta) {
      console.log(impressora.imprimirDocumentoJatoTinta(paginas)); // Lida diretamente com a ImpressoraJatoTinta
    } else {
      console.log("Impressora desconhecida");
    }
  }
}

// Utilização
const impressora_Laser = new Impressora_Laser();
const impressora_JatoTinta = new Impressora_JatoTinta();
const sistema_Impressao = new Sistema_Impressao();

// Usando a ImpressoraLaser
sistema_Impressao.imprimir(impressora_Laser, 10);  // Funciona com a ImpressoraLaser

// Usando a ImpressoraJatoTinta
sistema_Impressao.imprimir(impressora_JatoTinta, 5);  // Funciona com a ImpressoraJatoTinta
