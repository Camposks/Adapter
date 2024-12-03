# Padrão Adapter

O **padrão Adapter** é um padrão de design estrutural que permite que classes com interfaces incompatíveis trabalhem juntas. Ele atua como um intermediário entre os sistemas, adaptando a interface de uma classe para outra.

## Estrutura do Padrão

- **Target**: A interface esperada pelo cliente.
- **Adapter**: Converte a interface do **Adaptee** para a interface do **Target**.
- **Adaptee**: A classe que precisa ser adaptada.

## Exemplos de Uso

O **padrão Adapter** pode ser utilizado quando:
- Precisamos integrar sistemas com interfaces incompatíveis.
- Temos bibliotecas antigas ou legadas e queremos utilizá-las em um novo projeto sem modificá-las.

## Pontos fortes e fracos do padrão Adapter

## Pontos fortes:
- Facilita a integração de sistemas com interfaces diferentes.
- Permite que classes existentes sejam utilizadas sem modificações.
- Promove flexibilidade e manutenibilidade no design do sistema.

## Pontos fracos:
- Pode aumentar a complexidade do código, especialmente em sistemas grandes com muitos adaptadores.
- Dificuldades de manutenção podem surgir se houver um número excessivo de adaptadores para classes diferentes.

## Link do vídeo de apresentação:
    https://youtu.be/OmJGdILv5_s