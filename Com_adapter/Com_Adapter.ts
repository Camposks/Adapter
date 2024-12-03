// Interface comum que o Sistema de Impressão espera (Target)
interface Impressora {
    imprimir(paginas: number): string;
  }
  
  // Impressora Laser com uma interface incompatível
  class ImpressoraLaser {
    imprimirDocumentoLaser(paginas: number): string {
      return `Imprimindo ${paginas} páginas na Impressora a Laser.`;
    }
  }
  
  // Impressora Jato de Tinta com uma interface diferente
  class ImpressoraJatoTinta {
    imprimirDocumentoJatoTinta(paginas: number): string {
      return `Imprimindo ${paginas} páginas na Impressora Jato de Tinta.`;
    }
  }
  
  // Adapter para a ImpressoraLaser
  class ImpressoraLaserAdapter implements Impressora {
    private impressoraLaser: ImpressoraLaser;
  
    constructor(impressoraLaser: ImpressoraLaser) {
      this.impressoraLaser = impressoraLaser;
    }
  
    // Adapta a interface de ImpressoraLaser para a interface padrão
    imprimir(paginas: number): string {
      return this.impressoraLaser.imprimirDocumentoLaser(paginas);
    }
  }
  
  // Adapter para a ImpressoraJatoTinta
  class ImpressoraJatoTintaAdapter implements Impressora {
    private impressoraJatoTinta: ImpressoraJatoTinta;
  
    constructor(impressoraJatoTinta: ImpressoraJatoTinta) {
      this.impressoraJatoTinta = impressoraJatoTinta;
    }
  
    // Adapta a interface de ImpressoraJatoTinta para a interface padrão
    imprimir(paginas: number): string {
      return this.impressoraJatoTinta.imprimirDocumentoJatoTinta(paginas);
    }
  }
  
  // Sistema de Impressão que pode usar qualquer impressora (graças ao Adapter)
  class SistemaDeImpressao {
    imprimir(impressora: Impressora, paginas: number): void {
      console.log(impressora.imprimir(paginas));
    }
  }
  
  // Utilização com Adapter
  const impressoraLaser = new ImpressoraLaser();
  const impressoraJatoTinta = new ImpressoraJatoTinta();
  const sistemaDeImpressao = new SistemaDeImpressao();
  
  // Usando o Adapter para a ImpressoraLaser
  const impressoraLaserAdaptada = new ImpressoraLaserAdapter(impressoraLaser);
  sistemaDeImpressao.imprimir(impressoraLaserAdaptada, 10);  // Funciona com a ImpressoraLaser adaptada
  
  // Usando o Adapter para a ImpressoraJatoTinta
  const impressoraJatoTintaAdaptada = new ImpressoraJatoTintaAdapter(impressoraJatoTinta);
  sistemaDeImpressao.imprimir(impressoraJatoTintaAdaptada, 10);  // Funciona com a ImpressoraJatoTinta adaptada
  