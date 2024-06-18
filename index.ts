class OperacaoMatematica {
  constructor(
    private operando1: number,
    private operando2: number,
    private operacao: string
  ) {}

  public getOperando1(): number {
    return this.operando1;
  }

  public getOperando2(): number {
    return this.operando2;
  }

  public setOperando1(newOperando: number) {
    this.operando1 = newOperando;
  }

  public setOperando2(newOperando: number) {
    this.operando2 = newOperando;
  }

  protected calcular(): number {
    return 0;
  }

  public mostrarResultado() {
    console.log(
      `O resultado de ${this.operando1} ${this.operacao} ${
        this.operando2
      } é: ${this.calcular()}`
    );
  }
}

const operacaoMatematica = new OperacaoMatematica(5, 7, "+");

class Adicao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "+");
  }
  protected calcular(): number {
    return this.getOperando1() + this.getOperando2();
  }
}

const adicao = new Adicao(1, 1);

adicao.mostrarResultado();

class Subtracao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "-");
  }
  protected calcular(): number {
    return this.getOperando1() - this.getOperando2();
  }
}

const subtracao = new Subtracao(1, 1);

subtracao.mostrarResultado();

class Multiplicacao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "*");
  }
  protected calcular(): number {
    return this.getOperando1() * this.getOperando2();
  }
}

const multiplicacao = new Multiplicacao(1, 1);
multiplicacao.mostrarResultado();

class Divisao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "/");
  }
  protected calcular(): number {
    return this.getOperando1() / this.getOperando2();
  }
}

const divisao = new Divisao(1, 1);
divisao.mostrarResultado();
