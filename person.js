module.exports = {

  list: () => {
    const names = [ "Adam", "Abe", "Maria", "Rose", "Mario", "Luigi" ];
    const surnames = [ "Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe" ];
    const people = [];
    const rnd = length => Math.floor(Math.random() * length);

    for (let i = 0; i < 10; i++) {
      people.push({
        id: i,
        name: names[rnd(names.length)] + " " + surnames[rnd(surnames.length)],
        disclosableInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
          "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
          "onsequat."
      });
    }
    
    return people;
  }

}
