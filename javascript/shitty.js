let a = 0
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const world = [];
const hello = [];
                    a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;
hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
hello.push(abc[a]); a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
hello.push(abc[a]);
       
                    a++;          a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
world.push(abc[a]);  a--;        a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
world.push(abc[a]);   a++;      a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
world.push(abc[a]);

console.log(hello.join("") + " " + world.join("")+"!");