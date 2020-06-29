interface car {
  display(): string;
}

const esteem = {
  owner: "rasu",
  make: 2016,
  display(): string {
    return `model : ${this.make}`;
  },
};
const boost = {
  level: 200,
  display(): string {
    return `sugar level is ${this.level}`;
  },
};

const printDetails = (v: car) => {
  console.log(v.display());
};

printDetails(esteem);
printDetails(boost);
