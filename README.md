# labyrinthe

Nous pouvons trouver ce pseudo-code sur le doc
Petit jeu d'algo sur les labyrinthes en JS.
Pseudo-code:
Immergée dans le labyrinthe, je dois le parcourir pour trouver le point G. 
Je dois faire une action à la fois (avancer ou tourner). Je commence tourné vers le bas (devant).
Le jeu commence. 

Pseudocode

Début
let S → Start;
let G → Goal;
let win → false;
let numberOfSteps → 0;
let case

Je tourne vers le bas

Tant que win → false
Tant que la voie de devant est libre ET win → false
J’avance 1 pas
Je pose 1 grain de riz dans la voie
numberOfSteps = numberOfSteps + 1;
Si j’arrive à la case G Alors
win → true;
FinSi
Si la voie devant moi a un grain de riz Alors
Si il y a une voie à côté sans grain de riz Alors
je tourne vers la voie sans grain de riz
FinTantque
Si la voie de droite, la voie de gauche et la voie de devant ne sont pas libres ET win → false Alors
je fais demi-tour
FinSi
Tant que la voie de droite et la voie de gauche ne sont pas libres ET win → false
J’avance 1 pas
Je pose 1 grain de riz dans la voie
numberOfSteps = numberOfSteps + 1;
Si j’arrive à la case G Alors
win → true;
FinSi
FinTantQue
Si la voie de droite est libre ET win → false Alors
Je tourne vers la droite
Sinon
je tourne vers la gauche
FinSi
FinTantQue
Imprimer numberOfSteps
Fin
