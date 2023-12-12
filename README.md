# labyrinthe
Petit jeu d'algo sur les labyrinthes en JS.
Pseudo-code:
Immergée dans le labyrinthe, je dois le parcourir pour trouver le point G. 
Je dois faire une action à la fois (avancer ou tourner). Je commence tourné vers le bas (devant).
Le jeu commence. 

Pseudocode


let S = Start;
let G = Goal;
let win = false;
Début
Je tourne vers le bas
Tant que win = false
    Tant que la voie de devant est libre
        J’avance 1 pas
        Si j’arrive à la case G Alors
            win = true;
        FinSi
    FinTantque
    
Si la voie de droite est libre Alors
    Je tourne vers la droite
       Sinon Si la voie de gauche est libre Alors
            Je tourne vers la gauche
            Sinon je fais demi-tour
        FinSi
J’avance 1 pas
    Si j’arrive à la case G Alors
        win = true;
    FinSi

			Tant que la voie de droite OU la voie de gauche ne sont pas libres
J’avance 1 pas
Si j’arrive à la case G Alors
win = true;
FinSi
Si la voie de droite est libre Alors
Je tourne vers la droite
Sinon Si la voie de gauche est libre Alors
Je tourne vers la gauche
Sinon je fais demi-tour
FinSi
J’avance 1 pas
Fin Tant que
FinTantQue
Fin
