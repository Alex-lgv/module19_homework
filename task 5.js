class ElectricalAppliance {
  constructor() {
    this.color = "white";
    this.quality = "good";
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  plugOut() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
  devicePower() {
    return this.isPlugged ? this.power : 0;
  }
}

class LampProperties extends ElectricalAppliance {
  constructor(name, power) {
    super();
    this.name = name;
    this.power = power;
    this.height = 30;
    this.weight = 500;
    this.price = 1255;
    this.isPlugged = false;
    this.lampInfo = function () {
      console.log(`This is ${name}`);
    };
  }
}

class PcProperties extends ElectricalAppliance {
  constructor(name, power) {
    super();
    this.name = name;
    this.power = power;
    this.ram = 8;
    this.graphicsCard = "nvidia";
    this.price = 56800;
    this.isPlugged = false;
    this.pcInfo = function () {
      console.group(`PC info:`);
      console.log(`Ram: 8 gb`);
      console.log(`Graphics card: nvidia`);
      console.log(`CPU: intel`);
      console.groupEnd();
    };
  }
}

class TvProperties extends ElectricalAppliance {
  constructor(name, power) {
    super();
    this.name = name;
    this.power = power;
    this.screen = "4K";
    this.additionalFunctions = "smartTV";
    this.price = 26999;
    this.isPlugged = false;
    this.startScreen = function (user) {
      console.log(`Welcome home dear ${user}!`);
    };
  }
}

const lamp = new LampProperties("camelion KD-355", 50);

const pc = new PcProperties("dell", 1500);

const tv = new TvProperties("samsung", 1000);

function energyConsumption() {
  console.log(lamp.devicePower() + pc.devicePower() + tv.devicePower());
}

// Пример включения приборов в розетку:
// lamp.plugIn()
// pc.plugIn()
// tv.plugIn()

// Расчет потребляемой мощность осуществляется через функцию energyConsumption
// Вызываем функцию: energyConsumption()
// Результат: 2550

// Попробуем выключить один из приборов:
// pc.plugOut()
// Вызываем функцию: energyConsumption()
// Результат: 1050
