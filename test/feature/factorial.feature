#language:pt

  Funcionalidade: Computar fatorial
    Eu como um aluno de BDD
    Desejo implementar testes computando um fatorial
    Para absorver melhor o conhecimento

    Cenario: Calcular o fatorial de 0
      Dado que eu tenho o valor 0
      Quando computo o fatorial
      Entao devo receber o resultado 1

    Esquema do Cenario: Calcular diversos fatorias
      Dado que eu tenho o <valor>
      Quando computo os fatoriais
      Entao entao devo receber o <resultado>

      Exemplos:
      |  valor  |  resultado  |
      |   1     |      1      |
      |   5     |     120     |
      |   7     |     5040    |